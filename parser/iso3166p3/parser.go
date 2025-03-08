package iso3166p3

import (
	"bytes"
	"fmt"
	"strings"

	"github.com/antchfx/htmlquery"

	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/parser"
	"github.com/giant-stone/iso3166/parser/iso3166p1"
)

type Parser struct {
	Table iso.ITable
}

// ParseWikipediaHtml implements IParser.
// Parse page content https://zh.wikipedia.org/zh-cn/ISO_3166-3
func (i *Parser) ParseWikipediaHtml(body []byte) (t iso.ITable, err error) {

	// Some former codes has been deleted from ISO-3166-1 but reuse in latest, it is possible cause conflict.
	// we define a blacklist skip add it into final big MAP.
	skipAlpha2Codes := map[string]struct{}{
		// 'Gilbert Islands'  GE 1974–1979 => 'Georgia' GE
		"GE": {},

		// 'British Antarctic Territory' BQ 1974–1979 => 'Bonaire, Sint Eustatius and Saba' BQ
		"BQ": {},

		// 'Sikkim' SK 1974–1975 => 'Slovakia' SK
		"SK": {},

		// 'Byelorussian SSR' BY 1974–1992 => 'Belarus' BY
		"BY": {},

		// 'French Afars and Issas' AI 1974–1977 => 'Anguilla' AI
		"AI": {},

		// https://en.wikipedia.org/wiki/ISO_3166-2:AN
		"AN": {},
	}

	emptyAvoidConflictAlpha2Codes := map[string]struct{}{
		// https://en.wikipedia.org/wiki/ISO_3166-2:CS
		"CS": {},
	}

	alpha4CodeToCommonNameMap := map[string]string{
		"SUHH": "Soviet Union",
	}

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
			return nil, fmt.Errorf("unexpected structure")
		}
		simplifiedChinese := strings.TrimSpace(htmlquery.InnerText(nodeName))
		simplifiedChinese = strings.Split(simplifiedChinese, "[")[0]

		shortName := iso3166p1.ParseShortName(strings.TrimSpace(htmlquery.InnerText(nodesTd[1])))

		cell := htmlquery.InnerText(nodesTd[2])
		codes, ok := ParseFormerCode(strings.TrimSpace(cell))
		if !ok {
			continue
		}
		alpha2Code := strings.TrimSpace(codes[0])
		alpha3code := strings.TrimSpace(codes[1])
		numericCode := strings.TrimSpace(codes[2])

		periodOfValidity := strings.TrimSpace(htmlquery.InnerText(nodesTd[3]))
		periodOfValidity = strings.TrimSpace(strings.Split(periodOfValidity, "[")[0])

		alpha4code := strings.TrimSpace(htmlquery.InnerText(nodesTh[0]))
		alpha4code = strings.TrimSpace(strings.Split(alpha4code, "[")[0])

		entity := iso.NewEntity()
		entity.SetShortName(shortName)
		entity.SetAlpha2Code(alpha2Code)
		entity.SetAlpha3Code(alpha3code)
		entity.SetAlpha4Code(alpha4code)
		entity.SetNumericCode(numericCode)
		entity.SetPeriodOfValidity(periodOfValidity)

		entity.SetCommonName(alpha4CodeToCommonNameMap[alpha4code])
		entity.SetRegionInCN(simplifiedChinese)

		_, isBlack := skipAlpha2Codes[alpha2Code]
		if isBlack {
			continue
		}

		if _, ok := emptyAvoidConflictAlpha2Codes[alpha2Code]; ok {
			entity.SetAlpha2Code("")
		}

		if _, dup := m[alpha4code]; !dup {
			m[alpha4code] = entity
		}

		if _, dup := m[alpha2Code]; alpha2Code != "" && !dup {
			m[alpha2Code] = entity
		}
	}

	return i.Table.Load(m), nil
}

// GetTable implements IReaderWriter.
func (i *Parser) GetTable() iso.ITable {
	return i.Table
}

func New() parser.IParser {
	return &Parser{Table: iso.NewTable(STANDARD_ISO_3166_PART_3).SetGroupBy(iso.GroupByIso3166CodeOrVariantName)}
}

// Parse alpha2, alpha3 and alpha4 codes from a string.
// E.g. "CS, SCG, 891" => []string{"CS", "SCG", "891"}
func ParseFormerCode(s string) (rs []string, ok bool) {
	formerCodes := strings.Split(s, "[")[0]
	splits := strings.Split(formerCodes, "，")
	return splits, len(splits) == 3
}
