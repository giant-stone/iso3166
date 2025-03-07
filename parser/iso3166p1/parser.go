package iso3166p1

import (
	"bytes"
	"fmt"
	"os"
	"strings"

	"github.com/antchfx/htmlquery"

	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/parser"
	"github.com/giant-stone/iso3166/util_html"
)

type Parser struct {
	Table iso.ITable
}

// GetTable implements IReaderWriter.
func (i *Parser) GetTable() iso.ITable {
	return i.Table
}

// ParseWikipediaHtml implements IReaderWriter.
// Parse page content https://zh.wikipedia.org/zh-cn/ISO_3166-1
func (i *Parser) ParseWikipediaHtml(body []byte) (rs iso.ITable, err error) {

	var (
		HardCodedMapNameInChinese = map[string]string{
			// "CZ": "捷克共和國",
		}
	)

	var (
		HardCodedMapCode2CommonName = map[string]string{
			// "US": "United States",
		}
	)

	domRoot, err := htmlquery.Parse(bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}

	xpath := `//table[contains(@class,"wikitable")]`
	nodeTable := htmlquery.FindOne(domRoot, xpath)
	if nodeTable == nil {
		return nil, fmt.Errorf(`table[@class="wikitable"] not found`)
	}

	m := make(map[string]iso.IEntity)

	for _, nodeTr := range htmlquery.Find(nodeTable, `//tr`) {
		nodesTd := htmlquery.Find(nodeTr, `./td`)
		if len(nodesTd) != 7 {
			continue
		}

		shortName := ParseShortName(htmlquery.InnerText(nodesTd[0]))
		alpha2code := strings.TrimSpace(htmlquery.InnerText(nodesTd[1]))
		alpha3code := strings.TrimSpace(htmlquery.InnerText(nodesTd[2]))
		numericCode := strings.TrimSpace(htmlquery.InnerText(nodesTd[3]))
		// link2iso3166_2 := strings.TrimSpace(htmlquery.InnerText(nodesTd[4]))
		possibleSimplifiedChinese := strings.TrimSpace(util_html.RemoveHTMLTags(htmlquery.InnerText(nodesTd[5])))
		possibleSimplifiedChinese = strings.Split(possibleSimplifiedChinese, "[")[0] // `Zimbabwe[20]` => `Zimbabwe`

		var independent bool
		independentI := strings.TrimSpace(htmlquery.InnerText(nodesTd[6]))
		if independentI == "是" {
			independent = true
		}

		simplifiedChinese := possibleSimplifiedChinese
		if _nameInChinese, ok := HardCodedMapNameInChinese[simplifiedChinese]; ok {
			simplifiedChinese = _nameInChinese
		}

		entity := iso.NewEntity()
		entity.SetShortName(shortName)
		entity.SetAlpha2Code(alpha2code)
		entity.SetAlpha3Code(alpha3code)
		entity.SetNumericCode(numericCode)
		entity.SetIndependent(independent)

		if alpha2code != "" {
			entity.SetCommonName(HardCodedMapCode2CommonName[alpha2code])
		}

		entity.SetRegionInCN(simplifiedChinese)

		if _, dup := m[alpha2code]; dup {
			continue
		}

		m[alpha2code] = entity
	}

	return i.Table.Load(m), nil
}

// Add implements IReaderWriter.
func (i *Parser) Add(value iso.IEntity) (duplicated bool) {
	panic("unimplemented")
}

// Del implements IReaderWriter.
func (i *Parser) Del(value iso.IEntity) (ok bool) {
	panic("unimplemented")
}

// List implements IReaderWriter.
func (i *Parser) List() []iso.IEntity {
	panic("unimplemented")
}

// Marshal implements IReaderWriter.
func (i *Parser) Marshal() (rs []byte, err error) {
	panic("unimplemented")
}

// Merge implements IReaderWriter.
func (i *Parser) Merge(value map[string]iso.IEntity, action iso.MergeAction) {
	panic("unimplemented")
}

// ReadFile implements IReaderWriter.
func (i *Parser) ReadFile(path string) (rs map[string]iso.IEntity, err error) {
	panic("unimplemented")
}

// WriteFile implements IReaderWriter.
func (i *Parser) WriteFile(path string, perm os.FileMode) (err error) {
	panic("unimplemented")
}

func New() parser.IParser {
	return &Parser{Table: iso.NewTable(STANDARD_ISO_3166_PART_1).SetGroupBy(iso.GroupByIso3166CodeOrVariantName)}
}

// Parse short name from a string, remove any brackets(references).
func ParseShortName(s string) (rs string) {
	s = strings.TrimSpace(s)

	// process case "USSR （Soviet Union）" => "USSR (Soviet Union)"
	s = strings.ReplaceAll(s, "（", "(")
	s = strings.ReplaceAll(s, "）", ")")

	// process case "Curacao !Curaçao"
	splits := strings.Split(s, "!")
	if len(splits) > 1 {
		s = splits[1]
	}

	s = strings.Split(s, "[")[0]
	return s
}
