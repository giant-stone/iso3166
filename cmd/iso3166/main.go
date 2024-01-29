package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"html/template"
	"io"
	"os"
	"path"
	"path/filepath"
	"sort"
	"strings"
	"time"
	"unicode"

	"github.com/antchfx/htmlquery"
	"github.com/giant-stone/go/ghttp"
	"github.com/giant-stone/go/glogging"
	"github.com/giant-stone/go/gslice"
	"github.com/giant-stone/go/gutil"

	"github.com/giant-stone/iso3166/iso/iso3166"
)

const (
	timeoutHttp = time.Second * time.Duration(30)
)

var (
	logLevel string

	pathRegionDataJson string
	pathPatch          string

	gen      string
	genParts string

	pathGoPkg string
	pathTsPkg string
)

func main() {
	flag.StringVar(&gen, "gen", "json,go,ts", "generate ISO3166-1 data in json/go/ts")

	flag.StringVar(&genParts, "parts", "1,3", "generate which part of ISO 3166-1 data, default is 1 and 3")

	flag.StringVar(&pathRegionDataJson, "pathJson", "iso3166.json", "file path write ISO 3166 data in JSON")
	flag.StringVar(&pathGoPkg, "pathGo", "iso/iso3166data", "file path Go package")
	flag.StringVar(&pathTsPkg, "pathTs", "gen/iso3166data", "file path TypeScript package")

	flag.StringVar(&logLevel, "l", "debug", "loglevel one of debug,info,warn,error")
	flag.Parse()

	glogging.Init([]string{"stderr"}, glogging.Loglevel(logLevel))

	var err error

	var genJson, genGo, genTs bool
	for _, v := range strings.Split(gen, ",") {
		if v == "json" {
			genJson = true
		} else if v == "go" {
			genGo = true
		} else if v == "ts" {
			genTs = true
		}
	}

	var genPart1, genPart3 bool
	for _, v := range strings.Split(genParts, ",") {
		if v == "1" {
			genPart1 = true
		} else if v == "3" {
			genPart3 = true
		}
	}

	mapRegions := map[string]*iso3166.Region{}

	if genJson {
		var mapRegionsPatch map[string]*iso3166.Region

		parent := filepath.Dir(pathRegionDataJson)
		filename := filepath.Base(pathRegionDataJson)
		ext := filepath.Ext(filename)
		bareFilename := strings.TrimSuffix(filename, ext)
		pathPatch = path.Join(parent, bareFilename+".patch.json")

		if _, err := os.Stat(pathPatch); err != nil {
			if !errors.Is(err, os.ErrNotExist) {
				gutil.ExitOnErr(err)
			}
		} else {
			mapRegionsPatch, err = loadRegionsFromPath(pathPatch)
			gutil.ExitOnErr(err)
		}

		if genPart1 {
			page, err := crawlWikipediaIso3166_1()
			gutil.ExitOnErr(err)

			mapRegionsPart1, err := ParseIso3166_1(page)
			gutil.ExitOnErr(err)
			mapRegions = mapRegionsPart1

			glogging.Sugared.Infof("ISO 3166-1 %d regions", len(mapRegionsPart1))
		}

		if genPart3 {
			page, err := crawlWikipediaIso3166_3()
			gutil.ExitOnErr(err)

			mapRegionsPart3, err := ParseIso3166_3(page)
			gutil.ExitOnErr(err)

			glogging.Sugared.Infof("ISO 3166-3 %d regions", len(mapRegionsPart3))

			mapRegions = mergeMapRegionsByCode(mapRegions, mapRegionsPart3, false)
		}

		patchRegionData(mapRegions, mapRegionsPatch)
		AutoFillName(mapRegions)

		glogging.Sugared.Infof("ISO 3166 merged %d regions", len(mapRegions))

		err = generateJsonFile(pathRegionDataJson, mapRegions)
		gutil.ExitOnErr(err)
	} else {
		mapRegions, err = loadRegionsFromPath(pathRegionDataJson)
		gutil.ExitOnErr(err)
	}

	if genGo {
		err = generateGoPackage(pathGoPkg, mapRegions)
		gutil.ExitOnErr(err)
	}

	if genTs {
		err = generateTsPackage(pathTsPkg, mapRegions)
		gutil.ExitOnErr(err)
	}
}

const fileTemplateTs = `export interface IIsoRegion {
  alpha2code: string;
  alpha3code: string;
  alpha4code: string;
  independent?: boolean;

  // common name, transform it from short name a-zA-Z0-9, use "South Korea" for "the Republic of Korea"
  name: string;
  numeric_code: string;
  period_of_validity: string;

  // short name (using title case) in ISO 3166
  short_name: string;

  //
  // non-ISO 3166-1 fields
  // https://en.wikipedia.org/wiki/List_of_country_calling_codes
  calling_code: string;

  // other fields
  disabled?: boolean;

  name_in_chinese: string;
  name_in_native: string;
}

{{.Regions}}

export {
  {{.RegionNames}}
};

const Regions = [
  {{.RegionNames}}
] as IIsoRegion[];

export { Regions };

const RegionsByCode = {
{{.RegionsFromCode}}
} as {
  [key: string]: IIsoRegion;
};

export { RegionsByCode };

const RegionsByName = {
{{.RegionsFromName}}
} as {
  [key: string]: IIsoRegion;
};

export { RegionsByName };

const ReservedRegionCodeUnderline = "_";

export { ReservedRegionCodeUnderline };

// return alpha code by priority,
// user assigned one is the high priority, then 4 > 3 > 2.
function GetAlphaCode(region: IIsoRegion): string {
  let code = "";
  if (region.alpha4code !== "") {
    code = region.alpha4code!;
  } else if (region.alpha2code !== "" && (region.alpha3code === "" || region.alpha3code![0] != "X")) {
    code = region.alpha2code!;
  } else if (region.alpha3code !== "") {
    code = region.alpha3code!;
  }
  return code;
}

export { GetAlphaCode };

function stripAlphaCode(s:string) :string {
  const splits = s.split("+")
  // splits[0] is alphaCode, we have to strip it from callingCode
  // "CA+1-xxx..." => "1-xxx..."
  // "CN+86-13800138000" => "86-13800138000"    
  return splits[splits.length-1];
}
  
export { stripAlphaCode };
`

const lineTemplateTs = `const {{.NameNoSpace}} = {
  alpha2code: "{{.Alpha2code}}",
  alpha3code: "{{.Alpha3code}}",
  alpha4code: "{{.Alpha4code}}",
  calling_code: "{{.CallingCode}}",
  independent: {{.Independent}},
  name: "{{.Name}}",

  numeric_code: "{{.NumericCode}}",
  period_of_validity: "{{.PeriodOfValidity}}",
  short_name: "{{.ShortName}}",

  name_in_native: "{{.NameInNative}}",
  name_in_chinese: "{{.NameInChinese}}",
} as IIsoRegion;

`

func generateTsPackage(pathTsPkg string, mapRegions map[string]*iso3166.Region) error {
	pkgName := filepath.Base(pathTsPkg)
	listRegions := map2slice(mapRegions)
	sort.Sort(ByName(listRegions))

	tmpl, err := template.New("").Parse(lineTemplateTs)
	if err != nil {
		return err
	}

	uniqByNameNoSpaceInLower := map[string]struct{}{}
	uniqAlpha2Code := map[string]struct{}{}
	uniqAlpha3Code := map[string]struct{}{}
	uniqAlpha4Code := map[string]struct{}{}

	regionNames := map[string]struct{}{}
	listRegionsFromCode := make([]string, 0)
	listRegionsFromName := make([]string, 0)
	rw := bytes.NewBuffer([]byte(``))
	for _, v := range listRegions {

		if _, dup := uniqAlpha2Code[v.Alpha2code]; v.Alpha2code != "" && !dup {
			uniqAlpha2Code[v.Alpha2code] = struct{}{}
			listRegionsFromCode = append(listRegionsFromCode, fmt.Sprintf(`		"%s": %s,`, v.Alpha2code, v.NameNoSpace))
		}

		if _, dup := uniqAlpha3Code[v.Alpha3code]; v.Alpha2code == "" && v.Alpha4code == "" && v.Alpha3code != "" && !dup {
			uniqAlpha3Code[v.Alpha3code] = struct{}{}
			listRegionsFromCode = append(listRegionsFromCode, fmt.Sprintf(`		"%s": %s,`, v.Alpha3code, v.NameNoSpace))
		}

		if _, dup := uniqAlpha4Code[v.Alpha4code]; v.Alpha4code != "" && !dup {
			uniqAlpha4Code[v.Alpha4code] = struct{}{}
			listRegionsFromCode = append(listRegionsFromCode, fmt.Sprintf(`		"%s": %s,`, v.Alpha4code, v.NameNoSpace))
		}

		nameNoSpaceInLower := strings.ToLower(v.NameNoSpace)
		if _, dup := uniqByNameNoSpaceInLower[nameNoSpaceInLower]; dup {
			continue
		}
		uniqByNameNoSpaceInLower[nameNoSpaceInLower] = struct{}{}

		listRegionsFromName = append(listRegionsFromName, fmt.Sprintf(`		"%s": %s,`, strings.ToLower(v.NameNoSpace), v.NameNoSpace))

		regionNames[v.NameNoSpace] = struct{}{}

		err = tmpl.Execute(rw, map[string]interface{}{
			"Alpha2code":  v.Alpha2code,
			"Alpha3code":  v.Alpha3code,
			"Alpha4code":  v.Alpha4code,
			"CallingCode": v.CallingCode,

			"ShortName": template.HTML(v.ShortName),

			"Independent": v.Independent,
			"Name":        template.HTML(v.Name),

			"NumericCode":      v.NumericCode,
			"PeriodOfValidity": v.PeriodOfValidity,

			"NameInNative":  v.NameInNative,
			"NameInChinese": v.NameInChinese,
			"NameNoSpace":   v.NameNoSpace,
		})
		if err != nil {
			return err
		}
	}

	dat, err := io.ReadAll(rw)
	if err != nil {
		return err
	}

	tmpl, err = template.New(``).Parse(fileTemplateTs)
	if err != nil {
		return err
	}

	rw = bytes.NewBuffer([]byte(``))

	err = tmpl.Execute(rw, map[string]interface{}{
		"Regions":         template.HTML(string(dat)),
		"RegionNames":     strings.Join(gslice.UniqMapToSlice(regionNames), ",\n  "),
		"RegionsFromCode": template.HTML(strings.Join(listRegionsFromCode, "\n")),
		"RegionsFromName": template.HTML(strings.Join(listRegionsFromName, "\n")),
	})
	if err != nil {
		return err
	}

	dat, err = io.ReadAll(rw)
	if err != nil {
		return err
	}

	if _, err := os.Stat(pathTsPkg); err != nil {
		if errors.Is(err, os.ErrNotExist) {
			os.MkdirAll(pathTsPkg, os.ModePerm)
		} else {
			return err
		}
	}

	saveTo := path.Join(pathTsPkg, pkgName+".ts")
	err = os.WriteFile(saveTo, dat, 0755)
	if err != nil {
		return err
	}

	glogging.Sugared.Infof("%s updated", saveTo)

	return nil
}

func mergeMapRegionsByCode(a map[string]*iso3166.Region, b map[string]*iso3166.Region, duplicateIsOk bool) map[string]*iso3166.Region {
	for code, v := range b {
		if _, dup := a[code]; dup {
			if duplicateIsOk {
				a[code] = v
			} else {
				glogging.Sugared.Fatalf("duplicated code -%s- found, ShortName -%s- ", code, v.ShortName)
			}
		} else {
			a[code] = v
		}
	}
	return a
}

func patchRegionData(mapRegions map[string]*iso3166.Region, patches map[string]*iso3166.Region) {
	for code, dataPatch := range patches {
		if code == "" {
			continue
		}

		if dataMerged, ok := mapRegions[code]; !ok {
			mapRegions[code] = dataPatch
		} else {
			if len(dataPatch.Alias) > 0 {
				dataMerged.Alias = dataPatch.Alias
			}

			if dataPatch.CallingCode != "" {
				dataMerged.CallingCode = dataPatch.CallingCode
			}

			if dataPatch.Independent {
				dataMerged.Independent = dataPatch.Independent
			}

			if len(dataPatch.Languages) > 0 {
				dataMerged.Languages = dataPatch.Languages
			}

			if dataPatch.Name != "" {
				dataMerged.Name = dataPatch.Name
			}

			if dataPatch.NameInNative != "" {
				dataMerged.NameInNative = dataPatch.NameInNative
			}

			if dataPatch.NameInChinese != "" {
				dataMerged.NameInChinese = dataPatch.NameInChinese
			}

			if dataPatch.ShortName != "" {
				dataMerged.ShortName = dataPatch.ShortName
			}

		}
	}
}

const fileTemplate = `// THIS FILE GENERATE FROM cmd/iso3166/main.go, DON'T EDIT FOLLOWING BY MANUAL.
package {{.PkgName}}

import "github.com/giant-stone/iso3166/iso/iso3166"

var (
{{.Regions}}
)

var (
	FromCode = map[string]*iso3166.Region{
{{.RegionsFromCode}}
	}
)

var (
	FromNameInChinese = map[string]*iso3166.Region{
{{.RegionsFromNameInChinese}}
	}
)

var (
	FromName = map[string]*iso3166.Region{
{{.RegionsFromName}}
	}
)
`

const lineTemplate = `	{{.NameNoSpace}} = &iso3166.Region{
		Alpha2code: "{{.Alpha2code}}",
		ShortName: "{{.ShortName}}",
		Alpha3code: "{{.Alpha3code}}",
		NumericCode: "{{.NumericCode}}",
		Independent: {{.Independent}},
		Alpha4code: "{{.Alpha4code}}",
		PeriodOfValidity: "{{.PeriodOfValidity}}",

		CallingCode: "{{.CallingCode}}",

		NameInChinese: "{{.NameInChinese}}",
		Name: "{{.Name}}",
		NameNoSpace: "{{.NameNoSpace}}",
		Languages: []string{ {{.Languages}} },
		Alias: []string{ {{.Alias}} },
	}

`

func generateGoPackage(pathGoPkg string, mapRegions map[string]*iso3166.Region) (err error) {
	pkgName := filepath.Base(pathGoPkg)
	listRegions := map2slice(mapRegions)
	sort.Sort(ByName(listRegions))

	tmpl, err := template.New("").Parse(lineTemplate)
	if err != nil {
		return err
	}

	uniqByNameNoSpaceInLower := map[string]struct{}{}
	uniqNameInChinese := map[string]struct{}{}
	uniqAlpha2Code := map[string]struct{}{}
	uniqAlpha3Code := map[string]struct{}{}
	uniqAlpha4Code := map[string]struct{}{}

	listRegionsFromCode := make([]string, 0)
	listRegionsFromNameInChinese := make([]string, 0)
	listRegionsFromName := make([]string, 0)
	rw := bytes.NewBuffer([]byte(``))
	for _, v := range listRegions {
		if _, dup := uniqAlpha2Code[v.Alpha2code]; v.Alpha2code != "" && !dup {
			uniqAlpha2Code[v.Alpha2code] = struct{}{}
			listRegionsFromCode = append(listRegionsFromCode, fmt.Sprintf(`		"%s": %s,`, v.Alpha2code, v.NameNoSpace))
		}

		if _, dup := uniqAlpha3Code[v.Alpha3code]; v.Alpha2code == "" && v.Alpha4code == "" && v.Alpha3code != "" && !dup {
			uniqAlpha3Code[v.Alpha4code] = struct{}{}
			listRegionsFromCode = append(listRegionsFromCode, fmt.Sprintf(`		"%s": %s,`, v.Alpha3code, v.NameNoSpace))
		}

		if _, dup := uniqAlpha4Code[v.Alpha4code]; v.Alpha4code != "" && !dup {
			uniqAlpha4Code[v.Alpha4code] = struct{}{}
			listRegionsFromCode = append(listRegionsFromCode, fmt.Sprintf(`		"%s": %s,`, v.Alpha4code, v.NameNoSpace))
		}

		if _, dup := uniqNameInChinese[v.NameInChinese]; !dup {
			uniqNameInChinese[v.NameInChinese] = struct{}{}
			listRegionsFromNameInChinese = append(listRegionsFromNameInChinese, fmt.Sprintf(`		"%s": %s,`, v.NameInChinese, v.NameNoSpace))
		}

		nameNoSpaceInLower := strings.ToLower(v.NameNoSpace)
		if _, dup := uniqByNameNoSpaceInLower[nameNoSpaceInLower]; dup {
			continue
		}
		uniqByNameNoSpaceInLower[nameNoSpaceInLower] = struct{}{}

		listRegionsFromName = append(listRegionsFromName, fmt.Sprintf(`		"%s": %s,`, strings.ToLower(v.NameNoSpace), v.NameNoSpace))

		err = tmpl.Execute(rw, map[string]interface{}{
			"NameNoSpace": v.NameNoSpace,

			"Alpha2code":       v.Alpha2code,
			"ShortName":        template.HTML(v.ShortName),
			"Alpha3code":       v.Alpha3code,
			"NumericCode":      v.NumericCode,
			"Independent":      v.Independent,
			"Alpha4code":       v.Alpha4code,
			"PeriodOfValidity": v.PeriodOfValidity,

			"CallingCode": v.CallingCode,

			"NameInChinese": v.NameInChinese,
			"Name":          template.HTML(v.Name),
			"Languages":     template.HTML(serializeSliceString(v.Languages)),
			"Alias":         template.HTML(serializeSliceString(v.Alias)),
		})
		if err != nil {
			return err
		}
	}

	dat, err := io.ReadAll(rw)
	if err != nil {
		return err
	}

	tmpl, err = template.New(``).Parse(fileTemplate)
	if err != nil {
		return err
	}

	rw = bytes.NewBuffer([]byte(``))

	err = tmpl.Execute(rw, map[string]interface{}{
		"PkgName":                  pkgName,
		"Regions":                  template.HTML(string(dat)),
		"RegionsFromCode":          template.HTML(strings.Join(listRegionsFromCode, "\n")),
		"RegionsFromNameInChinese": template.HTML(strings.Join(listRegionsFromNameInChinese, "\n")),
		"RegionsFromName":          template.HTML(strings.Join(listRegionsFromName, "\n")),
	})
	if err != nil {
		return err
	}

	dat, err = io.ReadAll(rw)
	if err != nil {
		return err
	}

	if _, err := os.Stat(pathGoPkg); err != nil {
		if errors.Is(err, os.ErrNotExist) {
			os.MkdirAll(pathGoPkg, os.ModePerm)
		} else {
			return err
		}
	}

	saveTo := path.Join(pathGoPkg, pkgName+".go")
	err = os.WriteFile(saveTo, dat, 0755)
	if err != nil {
		return err
	}

	glogging.Sugared.Infof("%s updated", saveTo)

	return nil
}

func serializeSliceString(items []string) string {
	rs := make([]string, 0)
	for _, item := range items {
		rs = append(rs, fmt.Sprintf("%+q", item))
	}
	return strings.Join(rs, ",")
}

func loadRegionsFromPath(filePath string) (m map[string]*iso3166.Region, err error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	listRegion := []*iso3166.Region{}
	err = json.Unmarshal(data, &listRegion)
	if err != nil {
		return nil, err
	}

	m = list2map(listRegion)
	glogging.Sugared.Debugf("load %s, %d regions", filePath, len(m))
	return m, nil
}

func list2map(listRegion []*iso3166.Region) map[string]*iso3166.Region {
	rs := make(map[string]*iso3166.Region, 0)
	for _, region := range listRegion {
		if region.Name == "" && region.Alpha2code == "" && region.Alpha3code == "" && region.Alpha4code == "" {
			continue
		}

		rs[region.Code()] = region
	}
	return rs
}

type ByName []*iso3166.Region

func (items ByName) Len() int           { return len(items) }
func (items ByName) Swap(i, j int)      { items[i], items[j] = items[j], items[i] }
func (items ByName) Less(i, j int) bool { return items[i].Name < items[j].Name }

func generateJsonFile(saveTo string, mapRegions map[string]*iso3166.Region) (err error) {
	listRegion := map2slice(mapRegions)
	sort.Sort(ByName(listRegion))

	data, err := json.MarshalIndent(listRegion, "", "  ")
	if err != nil {
		return err
	}

	err = os.WriteFile(saveTo, data, 0755)
	if err != nil {
		return err
	}

	glogging.Sugared.Infof("%s updated", saveTo)
	return nil
}

func map2slice(m map[string]*iso3166.Region) []*iso3166.Region {
	rs := make([]*iso3166.Region, 0)
	for _, v := range m {
		rs = append(rs, v)
	}
	return rs
}

func crawlWikipediaIso3166_3() (body []byte, err error) {
	return fetchData("https://zh.wikipedia.org/zh-cn/ISO_3166-3")
}

func crawlWikipediaIso3166_1() (body []byte, err error) {
	return fetchData("https://zh.wikipedia.org/zh-cn/ISO_3166-1")
}

func fetchData(fullUrl string) (body []byte, err error) {
	gh := ghttp.New().
		SetTimeout(timeoutHttp).
		SetRequestMethod("GET").
		SetUri(fullUrl).
		SetProxy(os.Getenv("HTTPS_PROXY")).
		SetRandomUserAgent(true)

	rsCrawl, err := gh.Do(gh.GenerateRequest())
	if err != nil {
		return nil, err
	}

	return ghttp.ReadBody(rsCrawl)
}

// parse https://zh.wikipedia.org/zh-cn/ISO_3166-3
func ParseIso3166_3(body []byte) (rs map[string]*iso3166.Region, err error) {
	// Some former codes has been deleted from ISO-3166-1 but reuse in latest, it is possible cause conflict.
	// we define a blacklist skip add it into final big MAP.
	alpha2codeBlacklist := map[string]struct{}{
		// 'Gilbert Islands'  GE 1974–1979 => Georgia GE
		"GE": {},

		// 'British Antarctic Territory' BQ 1974–1979 => 'Bonaire, Sint Eustatius and Saba' BQ
		"BQ": {},

		// 'Sikkim' SK 1974–1975 => Slovakia SK
		"SK": {},

		// 'Byelorussian SSR' BY 1974–1992 => Belarus BY
		"BY": {},

		// 'French Afars and Issas' AI 1974–1977 => Anguilla AI
		"AI": {},
	}

	domRoot, err := htmlquery.Parse(bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}

	xpath := `//table[contains(@class,"wikitable")]`
	nodeTable := htmlquery.FindOne(domRoot, xpath)
	if nodeTable == nil {
		glogging.Sugared.Fatal("table not found")
	}

	rs = make(map[string]*iso3166.Region)

	for _, nodeTr := range htmlquery.Find(nodeTable, `//tr`) {
		nodesTd := htmlquery.Find(nodeTr, `./td`)
		if len(nodesTd) != 5 {
			continue
		}

		nodesTh := htmlquery.Find(nodeTr, `./th`)
		if len(nodesTh) != 1 {
			continue
		}

		nodeNameRich := nodesTd[0]
		nodeName := htmlquery.FindOne(nodeNameRich, `./a/text()`)
		if nodeName == nil {
			glogging.Sugared.Fatalf("unexpected structure")
		}
		simplifiedChineseName := strings.TrimSpace(htmlquery.InnerText(nodeName))

		// shortNameInTitleCase
		formerCountryName := strings.TrimSpace(htmlquery.InnerText(nodesTd[1]))
		formerCountryName = strings.Split(formerCountryName, "[")[0]
		formerCountryName = strings.TrimSpace(strings.Split(formerCountryName, "（")[0])

		formerCodes := strings.TrimSpace(htmlquery.InnerText(nodesTd[2]))

		periodOfValidity := strings.TrimSpace(htmlquery.InnerText(nodesTd[3]))
		periodOfValidity = strings.TrimSpace(strings.Split(periodOfValidity, "[")[0])

		alpha4code := strings.TrimSpace(htmlquery.InnerText(nodesTh[0]))
		alpha4code = strings.TrimSpace(strings.Split(alpha4code, "[")[0])

		formerCodes = strings.Split(formerCodes, "[")[0]
		splits := strings.Split(formerCodes, "，")
		if len(splits) != 3 {
			glogging.Sugared.Warnf("parse formerCodes -%s- failed", formerCodes)
			continue
		}
		alpha2code := strings.TrimSpace(splits[0])
		alpha3code := strings.TrimSpace(splits[1])
		numericCode := strings.TrimSpace(splits[2])

		region := iso3166.New()
		region.ShortName = formerCountryName
		region.Alpha2code = alpha2code
		region.Alpha3code = alpha3code
		region.Alpha4code = alpha4code
		region.NumericCode = numericCode
		region.NameInChinese = simplifiedChineseName
		region.PeriodOfValidity = periodOfValidity

		region.NameNoSpace = strings.ReplaceAll(region.Name, " ", "")

		if _, dup := rs[region.Alpha4code]; dup {
			glogging.Sugared.Warnf("duplicated Alpha4code %s found, formerCountryName -%s- ", region.Alpha4code, formerCountryName)
		} else {
			rs[region.Alpha4code] = region
		}

		_, isBlack := alpha2codeBlacklist[region.Alpha2code]
		if isBlack {
			glogging.Sugared.Warnf("skip for Alpha2code %s in black list, formerCountryName -%s- ", region.Alpha2code, formerCountryName)
			continue
		}

		if _, dup := rs[region.Alpha2code]; dup {
			glogging.Sugared.Warnf("duplicated Alpha2code %s found, formerCountryName -%s- ", region.Alpha2code, formerCountryName)
		} else {
			rs[region.Alpha2code] = region
		}

	}

	return rs, nil
}

// parse https://zh.wikipedia.org/zh-cn/ISO_3166-1
func ParseIso3166_1(body []byte) (rs map[string]*iso3166.Region, err error) {
	domRoot, err := htmlquery.Parse(bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}

	xpath := `//table[contains(@class,"wikitable")]`
	nodeTable := htmlquery.FindOne(domRoot, xpath)
	if nodeTable == nil {
		glogging.Sugared.Fatal("table not found")
	}

	rs = make(map[string]*iso3166.Region)

	for _, nodeTr := range htmlquery.Find(nodeTable, `//tr`) {
		nodesTd := htmlquery.Find(nodeTr, `./td`)
		if len(nodesTd) != 7 {
			continue
		}

		nodeName := nodesTd[0]
		if nodeName.FirstChild != nil {
			nodeName = nodeName.FirstChild
		}

		shortNameInTitleCase := strings.TrimSpace(htmlquery.InnerText(nodeName))

		alpha2code := strings.TrimSpace(htmlquery.InnerText(nodesTd[1]))
		alpha3code := strings.TrimSpace(htmlquery.InnerText(nodesTd[2]))
		numericCode := strings.TrimSpace(htmlquery.InnerText(nodesTd[3]))
		simplifiedChineseName := strings.TrimSpace(htmlquery.InnerText(nodesTd[5]))

		var independent bool
		independentI := strings.TrimSpace(htmlquery.InnerText(nodesTd[6]))
		if independentI == "是" {
			independent = true
		}

		region := iso3166.New()
		region.ShortName = shortNameInTitleCase
		region.Alpha2code = alpha2code
		region.Alpha3code = alpha3code
		region.NumericCode = numericCode
		region.Independent = independent
		region.NameInChinese = simplifiedChineseName

		if _, dup := rs[region.Alpha2code]; dup {
			glogging.Sugared.Fatal("duplicated alpha2code %s found", region.Alpha2code)
		}

		rs[region.Alpha2code] = region
	}

	return rs, nil
}

var Underscore = &unicode.RangeTable{
	R16: []unicode.Range16{
		{0x005F, 0x005F, 1},
	},
}

func AutoFillName(mapRegions map[string]*iso3166.Region) {
	for _, region := range mapRegions {

		if region.Name == "" {
			value, ok := transformToGoVariableName(region.ShortName)
			if ok {
				region.Name = value
			} else {
				glogging.Sugared.Warnf("transform shortName -%s- to name for Go identifier failed, code %s", region.ShortName, region.Code())
				continue
			}
		}

		region.NameNoSpace = strings.ReplaceAll(region.Name, " ", "")
	}
}

// of/and/the => title case
// "(" => ""
// ")" => ""
// "'" => ""
// "-" => "_"
// https://go.dev/ref/spec#Identifiers
func transformToGoVariableName(s string) (rs string, ok bool) {
	// s = strings.Split(s, ",")[0]
	s = strings.ReplaceAll(s, ",", " ")

	s = strings.ReplaceAll(s, " of", " Of")
	s = strings.ReplaceAll(s, " and ", " And ")
	s = strings.ReplaceAll(s, " the ", " The ")

	s = strings.ReplaceAll(s, "-", "_")
	s = strings.ReplaceAll(s, ".", "")

	s = strings.ReplaceAll(s, "(", "")
	s = strings.ReplaceAll(s, ")", "")

	s = strings.ReplaceAll(s, "  ", " ")

	for idx, v := range s {
		if idx == 0 {
			if !unicode.In(v, unicode.Letter, Underscore) {
				glogging.Sugared.Warnf("  idx=%d, 0x%04x %q failed", idx, v, v)
				return "", false
			}
		} else {
			if !unicode.In(v, unicode.Letter, unicode.Digit, Underscore, unicode.Space) {
				glogging.Sugared.Warnf("  idx=%d, 0x%04x %q failed", idx, v, v)
				return "", false
			}
		}
	}

	s = strings.TrimSpace(s)

	return s, true
}
