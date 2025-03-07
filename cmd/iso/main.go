package main

import (
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"os"
	"path"
	"strings"
	"time"

	"github.com/giant-stone/go/ghttp"
	"github.com/giant-stone/go/glogging"
	"github.com/giant-stone/go/gslice"
	"github.com/giant-stone/go/gutil"

	"github.com/giant-stone/iso3166/generator"
	generator_golang "github.com/giant-stone/iso3166/generator/golang"
	generator_json "github.com/giant-stone/iso3166/generator/json"
	generator_typescript "github.com/giant-stone/iso3166/generator/typescript"
	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/parser"
	parser_iso3166p1 "github.com/giant-stone/iso3166/parser/iso3166p1"
	parser_iso3166p3 "github.com/giant-stone/iso3166/parser/iso3166p3"
	parser_iso4217 "github.com/giant-stone/iso3166/parser/iso4217"
)

const (
	timeoutHttp = time.Second * time.Duration(20)
)

var (
	logLevel string

	pathPatch string
	genStds   string
	genLangs  string

	syncSource bool
	fmtPretty  bool
	override   bool
)

const (
	STANDARD_3166_EXTENDED = "iso3166extended"

	STANDARD_4217_EXTENDED = "iso4217extended"
)

const (
	LANG_JSON = "json"
	LANG_GO   = "go"
	LANG_TS   = "ts"
)

var stdsSupported = map[string]struct{}{
	parser_iso3166p1.STANDARD_ISO_3166_PART_1: {},
	parser_iso3166p3.STANDARD_ISO_3166_PART_3: {},
	parser_iso4217.STANDARD_ISO_4217:          {},
}

var (
	mapStdToFetchUrl = map[string]string{
		parser_iso3166p1.STANDARD_ISO_3166_PART_1: parser_iso3166p1.URL_WIKIPEDIA_PAGE,
		parser_iso3166p3.STANDARD_ISO_3166_PART_3: parser_iso3166p3.URL_WIKIPEDIA_PAGE,
		parser_iso4217.STANDARD_ISO_4217:          parser_iso4217.URL_WIKIPEDIA_PAGE,
	}

	mapStdToParser = map[string]parser.IParser{
		parser_iso3166p1.STANDARD_ISO_3166_PART_1: parser_iso3166p1.New(),
		parser_iso3166p3.STANDARD_ISO_3166_PART_3: parser_iso3166p3.New(),
		parser_iso4217.STANDARD_ISO_4217:          parser_iso4217.New(),
	}
)

var (
	defaultMapLangToSaveTo = map[string]string{
		LANG_JSON: "gen/json",
		LANG_GO:   "gen/go",
		LANG_TS:   "gen/ts",
	}
)

var (
	defaultMapStdToSourceDataPath = map[string]string{
		parser_iso3166p1.STANDARD_ISO_3166_PART_1: "source/wikipedia/ISO_3166-1.html",
		parser_iso3166p3.STANDARD_ISO_3166_PART_3: "source/wikipedia/ISO_3166-3.html",
		parser_iso4217.STANDARD_ISO_4217:          "source/wikipedia/ISO_4217.html",
	}
)

type FuncNewGenerator func(t iso.ITable) generator.IGenerator

func main() {
	chunks := []string{}
	for lang, saveTo := range defaultMapLangToSaveTo {
		chunks = append(chunks, strings.Join([]string{lang, saveTo}, ":"))
	}

	flag.BoolVar(&syncSource, "sync", false, "Synchronize the source data file from the Wikipedia website.")
	flag.BoolVar(&fmtPretty, "fmt", false, "Format the generated file in pretty.")
	flag.BoolVar(&override, "o", false, "Override file if it already exists.")

	flag.StringVar(&genLangs, "langs", strings.Join(chunks, ","), "Generate ISO standards in JSON/Go/TypeScript, format in `<langA>:<path/to/data/file/A>,<langB>:<path/to/data/file/B>` .")
	flag.StringVar(&genStds, "stds", strings.Join(gslice.UniqMapToSlice(stdsSupported), ","), "Generate which ISO standards")
	flag.StringVar(&pathPatch, "patch", "patch.json", "The full path to the patch JSON file.")

	flag.StringVar(&logLevel, "l", "debug", "The logging level, its value is one of {debug,info,warn,error}.")
	flag.Parse()

	glogging.Init([]string{"stderr"}, glogging.Loglevel(logLevel))

	if syncSource {
		doSyncSource()
		os.Exit(0)
	}

	mapLangToSaveTo := map[string]string{}
	for _, v := range strings.Split(genLangs, ",") {
		v = strings.TrimSpace(v)
		splits := strings.Split(v, ":")
		if len(splits) != 2 {
			glogging.Sugared.Fatal("expected instruct in format <langA>:<path/to/data/file/A>")
		}

		lang := splits[0]
		saveTo := splits[1]
		mapLangToSaveTo[lang] = saveTo
	}

	doGenStds := map[string]struct{}{}
	for _, v := range strings.Split(genStds, ",") {
		if _, ok := stdsSupported[v]; ok {
			doGenStds[v] = struct{}{}
		}
	}

	if len(doGenStds) > 0 && len(mapLangToSaveTo) > 0 {
		genIso3166Extended(doGenStds, mapLangToSaveTo, override)
	}

	if _, ok := doGenStds[parser_iso4217.STANDARD_ISO_4217]; ok {
		genIso4217Extended(mapLangToSaveTo, pathPatch, override)
	}
}

func genIso3166Extended(doGenStds map[string]struct{}, mapLangToSaveTo map[string]string, override bool) {
	tableMerge := iso.NewTable(STANDARD_3166_EXTENDED).SetGroupBy(iso.GroupByIso3166CodeOrVariantName)

	for _, std := range []string{
		// Keep following in order.
		parser_iso3166p1.STANDARD_ISO_3166_PART_1,
		parser_iso3166p3.STANDARD_ISO_3166_PART_3,
		parser_iso4217.STANDARD_ISO_4217,
	} {
		if _, ok := doGenStds[std]; ok {
			sourceFilePath := defaultMapStdToSourceDataPath[std]
			body, err := os.ReadFile(sourceFilePath)
			gutil.ExitOnErr(err)

			p := mapStdToParser[std]
			p.GetTable().SetGroupBy(iso.GroupByIso3166CodeOrVariantName)
			t, err := p.ParseWikipediaHtml(body)
			gutil.ExitOnErr(err)

			var action iso.MergeAction
			if std != parser_iso4217.STANDARD_ISO_4217 {
				action = iso.MergeActionMerge
			} else {
				action = iso.MergeActionFillWithIso4217
			}
			tableMerge.MergeTable(t, action)

			m := t.Map()
			glogging.Sugared.Infof("Merged ISO standard %s %d entities with action %d.", std, len(m), action)
		}
	}

	if pathPatch != "" {
		tableMerge.MergeFromJson(pathPatch, iso.MergeActionMerge)
	}

	mapLangToGenerator := map[string]FuncNewGenerator{
		LANG_JSON: generator_json.New,
		LANG_GO:   generator_golang.New,
		LANG_TS:   generator_typescript.New,
	}

	mapLangToFilenameTemplate := map[string]string{
		LANG_JSON: "%s.json",
		LANG_GO:   "%s.go",
		LANG_TS:   "%s.ts",
	}

	for lang := range mapLangToSaveTo {
		saveTo := mapLangToSaveTo[lang]
		funcNewGenerator := mapLangToGenerator[lang]
		filenameTemplate := mapLangToFilenameTemplate[lang]
		g := funcNewGenerator(tableMerge)

		fullPath := path.Join(saveTo, fmt.Sprintf(filenameTemplate, tableMerge.GetStandard()))

		shouldWriteIt := false
		if _, err := os.Stat(fullPath); err != nil {
			if errors.Is(err, os.ErrNotExist) {
				shouldWriteIt = true
			}
		} else if override {
			shouldWriteIt = true
		}

		if shouldWriteIt {
			err := g.WriteTo(fullPath, 0755, fmtPretty)
			if err != nil {
				glogging.Sugared.Fatalf("WriteTo %v, %s", err, fullPath)
			}

			glogging.Sugared.Infof("Created or updated %s .", fullPath)
		} else {
			glogging.Sugared.Infof("Skip write file for %s already exists.", fullPath)
		}
	}
}

func genIso4217Extended(mapLangToSaveTo map[string]string, pathPatch string, override bool) {
	tableMerge := iso.NewTable(STANDARD_3166_EXTENDED).SetGroupBy(iso.GroupByIso3166CodeOrVariantName)

	sourceFilePathIso3166P1 := defaultMapStdToSourceDataPath[parser_iso3166p1.STANDARD_ISO_3166_PART_1]
	bodyIso3166P1, err := os.ReadFile(sourceFilePathIso3166P1)
	gutil.ExitOnErr(err)

	parserIso3166P1 := mapStdToParser[parser_iso3166p1.STANDARD_ISO_3166_PART_1]
	tableIso3166P1, err := parserIso3166P1.ParseWikipediaHtml(bodyIso3166P1)
	gutil.ExitOnErr(err)

	tableMerge.MergeTable(tableIso3166P1, iso.MergeActionMerge)

	if pathPatch != "" {
		tableMerge.MergeFromJson(pathPatch, iso.MergeActionMerge)
	}

	sourceFilePathIso4217 := defaultMapStdToSourceDataPath[parser_iso4217.STANDARD_ISO_4217]
	bodyIso4217, err := os.ReadFile(sourceFilePathIso4217)
	gutil.ExitOnErr(err)

	parser4217 := parser_iso4217.New()
	parser4217.GetTable().SetGroupBy(iso.GroupByIso4217AlphabeticCode)
	tableIso4217, err := parser4217.ParseWikipediaHtml(bodyIso4217)
	gutil.ExitOnErr(err)

	tableIso4217.MergeTable(tableMerge, iso.MergeActionFillWithIso4217)

	mapLangToGenerator := map[string]FuncNewGenerator{
		LANG_JSON: generator_json.New,
		LANG_GO:   generator_golang.New,
		LANG_TS:   generator_typescript.New,
	}

	mapLangToFilenameTemplate := map[string]string{
		LANG_JSON: "%s.json",
		LANG_GO:   "%s.go",
		LANG_TS:   "%s.ts",
	}

	for lang := range mapLangToSaveTo {
		saveTo := mapLangToSaveTo[lang]
		funcNewGenerator := mapLangToGenerator[lang]
		filenameTemplate := mapLangToFilenameTemplate[lang]
		g := funcNewGenerator(tableIso4217)

		fullPath := path.Join(saveTo, fmt.Sprintf(filenameTemplate, tableIso4217.GetStandard()))

		shouldWriteIt := false
		if _, err := os.Stat(fullPath); err != nil {
			if errors.Is(err, os.ErrNotExist) {
				shouldWriteIt = true
			}
		} else if override {
			shouldWriteIt = true
		}

		if shouldWriteIt {
			err = g.WriteTo(fullPath, 0755, fmtPretty)
			if err != nil {
				glogging.Sugared.Fatalf("WriteTo %v, %s", err, fullPath)
			}
			glogging.Sugared.Infof("Created or updated %s .", fullPath)
		} else {
			glogging.Sugared.Infof("Skip write file for %s already exists.", fullPath)
		}
	}
}

func SaveJson(name string, m any) {
	data, _ := json.Marshal(m)
	os.WriteFile(name, data, 0755)
}

func doSyncSource() {
	for std, fullUrl := range mapStdToFetchUrl {
		data, err := fetchData(fullUrl)
		if err != nil {
			glogging.Sugared.Fatalf("fetchData %v, %s", err, fullUrl)
		}

		saveTo := defaultMapStdToSourceDataPath[std]
		parent := path.Dir(saveTo)

		if _, err := os.Stat(saveTo); err != nil {
			if errors.Is(err, os.ErrNotExist) {
				os.MkdirAll(parent, 0755)
			}
		}

		os.WriteFile(saveTo, data, 0755)
		glogging.Sugared.Infof("Created or updated %s .", saveTo)
	}
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
