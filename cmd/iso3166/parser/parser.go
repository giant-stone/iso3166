package parser

import (
	"bytes"
	"sort"
	"strings"

	"github.com/antchfx/htmlquery"
	"github.com/giant-stone/go/glogging"
	"github.com/giant-stone/go/gslice"
	"github.com/giant-stone/iso3166/iso/iso3166"
)

var (
	HardCodedMapCountrytCommonName = map[string]string{
		// country short name list in https://zh.wikipedia.org/zh-cn/ISO_3166-1

		// "Bolivia (Plurinational State of)": "Bolivia",

		"Cocos (Keeling) Islands": "Cocos Keeling Islands",

		"Korea (Democratic People's Republic of)": "North Korea",
		"Korea (Republic of)":                     "South Korea",

		"Lao People's Democratic Republic": "Lao",

		// "Falkland Islands (Malvinas)": "Falkland Islands",

		"United States of America":                             "United States",
		"United Kingdom of Great Britain and Northern Ireland": "United Kingdom",

		"Virgin Islands (British)": "Virgin Islands British",
		"Virgin Islands (U.S.)":    "Virgin Islands US",

		"Russian Federation": "Russia",

		"Taiwan, Province of China": "Taiwan",
	}
)

var (
	HardCodedMapNameInChinese = map[string]string{
		"中国台湾省": "台湾",
	}
)

func ParseNativeAndLangs(body []byte) (rs map[string]*iso3166.Region, err error) {
	domRoot, err := htmlquery.Parse(bytes.NewBuffer(body))
	if err != nil {
		return
	}

	rs = make(map[string]*iso3166.Region)

	xpath := `//table[contains(@class,"wikitable")]`
	for _, nodeTable := range htmlquery.Find(domRoot, xpath) {
		for _, nodeTr := range htmlquery.Find(nodeTable, `//tr`) {
			nodesTd := htmlquery.Find(nodeTr, `./td`)
			if len(nodesTd) != 5 {
				continue
			}

			countryExonym := ParseTextFromNodeText(htmlquery.InnerText(nodesTd[0]))
			capitalExonym := ParseTextFromNodeText(htmlquery.InnerText(nodesTd[1]))

			commonName := countryExonym
			if _commonName, ok := HardCodedMapCountrytCommonName[commonName]; ok {
				commonName = _commonName
			}

			// skip parse following cells too complex to parse
			// nodeCountryEndonym := nodesTd[2]
			var countryEndonym string
			// nodeCapitalEndonym := nodesTd[3]
			var capitalEndonym string

			langs := map[string]struct{}{}
			nodeLangs := nodesTd[4]

			for _, nodeLang := range htmlquery.Find(nodeLangs, `./a/text()`) {
				lang := strings.TrimSpace(nodeLang.Data)
				if lang == "" {
					continue
				}

				if strings.Contains(lang, "characters") || strings.Contains(lang, "script") || strings.Contains(lang, "alphabet") {
					continue
				}

				langs[lang] = struct{}{}
			}

			languages := gslice.UniqMapToSlice(langs)
			sort.Strings(languages)

			rs[commonName] = &iso3166.Region{
				Name:            commonName,
				NameInNative:    countryEndonym,
				Capital:         capitalExonym,
				CapitalInNative: capitalEndonym,
				Languages:       languages,
			}

		}
	}
	return rs, nil
}

// parse https://zh.wikipedia.org/wiki/ISO_3166-1
func ParseIso3166(body []byte) (rs map[string]*iso3166.Region, err error) {
	domRoot, err := htmlquery.Parse(bytes.NewBuffer(body))
	if err != nil {
		return
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

		shortNameOrigin := strings.TrimSpace(htmlquery.InnerText(nodeName))
		shortName := ParseTextFromNodeText(shortNameOrigin)

		alpha2code := strings.TrimSpace(htmlquery.InnerText(nodesTd[1]))
		alpha3code := strings.TrimSpace(htmlquery.InnerText(nodesTd[2]))
		numericCode := strings.TrimSpace(htmlquery.InnerText(nodesTd[3]))
		// link2iso3166_2 := strings.TrimSpace(htmlquery.InnerText(nodesTd[4]))
		simplifiedChineseName := strings.TrimSpace(htmlquery.InnerText(nodesTd[5]))

		var independent bool
		independentI := strings.TrimSpace(htmlquery.InnerText(nodesTd[6]))
		if independentI == "是" {
			independent = true
		}

		commonName := shortName
		if _commonName, ok := HardCodedMapCountrytCommonName[shortNameOrigin]; ok {
			commonName = _commonName
		}

		nameInChinese := simplifiedChineseName
		if _nameInChinese, ok := HardCodedMapNameInChinese[nameInChinese]; ok {
			nameInChinese = _nameInChinese
		}

		rs[commonName] = &iso3166.Region{
			Name:          commonName,
			ShortName:     shortNameOrigin,
			Alpha2code:    alpha2code,
			Alpha3code:    alpha3code,
			NumericCode:   numericCode,
			Independent:   independent,
			NameInChinese: nameInChinese,
		}
	}

	return
}

func ParseTextFromNodeText(s string) (rs string) {
	s = strings.TrimSpace(s)
	rs = s
	for _, chr := range []string{
		"[", // wikipedia quote char, case "Taiwan, Province of China[note 1]"
		"(", //  case "Bolivia (Plurinational State of)" postposition
		// keep ",", // case "Taiwan, Province of China"
	} {
		before, _, ok := strings.Cut(rs, chr)
		if ok {
			rs = strings.TrimSpace(before)
		}
	}

	// case `Zhōnghuá Mínguó or Táiwān\n中華民國 or 臺灣/台灣` => `台灣`
	for _, chr := range []string{" or ", "/"} {
		_, after, ok := strings.Cut(rs, chr)
		if ok {
			rs = strings.TrimSpace(after)
		}
	}

	return
}

// merge b items into a if key of b item found in a
func MergeRegions(a map[string]*iso3166.Region, b map[string]*iso3166.Region) {
	for name, regionA := range a {
		if regionB, ok := b[name]; ok {
			regionA.NameInNative = regionB.NameInNative
			regionA.Capital = regionB.Capital
			regionA.CapitalInNative = regionB.CapitalInNative
			regionA.Languages = regionB.Languages
		}
	}
}
