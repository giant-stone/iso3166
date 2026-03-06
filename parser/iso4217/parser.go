package iso4217

import (
	"bytes"
	"fmt"
	"regexp"
	"strings"

	"github.com/antchfx/htmlquery"
	"github.com/giant-stone/go/gslice"
	"github.com/giant-stone/go/gstrconv"
	"golang.org/x/net/html"

	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/parser"
	"github.com/giant-stone/iso3166/util_html"
)

const URL_WIKIPEDIA_PAGE = "https://en.wikipedia.org/wiki/ISO_4217"

type Parser struct {
	Table iso.ITable
}

// ParseWikipediaHtml implements IParser.
// Parse page content https://en.wikipedia.org/wiki/ISO_4217
func (i *Parser) ParseWikipediaHtml(body []byte) (t iso.ITable, err error) {

	domRoot, err := htmlquery.Parse(bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}

	const xpathTableMain = `//table[contains(@class,"wikitable")]`
	nodeTableMain := htmlquery.FindOne(domRoot, xpathTableMain)
	if nodeTableMain == nil {
		return nil, fmt.Errorf(`table[@class="wikitable"] not found`)
	}

	m := make(map[string]iso.IEntity)
	groupBy := i.Table.GetGroupBy()
	parseMainTableRows(nodeTableMain, groupBy, m)

	const xpathTableActiveAbbreviations = `//table[contains(@class,"wikitable")][caption[contains(normalize-space(.), "Active abbreviations resembling ISO")]]`
	nodeTableActiveAbbreviation := htmlquery.FindOne(domRoot, xpathTableActiveAbbreviations)
	if nodeTableActiveAbbreviation == nil {
		return i.Table.Load(m), nil
	}

	parseActiveAbbreviationRows(nodeTableActiveAbbreviation, groupBy, m)

	return i.Table.Load(m), nil
}

func parseMainTableRows(nodeTable *html.Node, groupBy iso.GroupBy, out map[string]iso.IEntity) {
	skipCodes := map[string]struct{}{
		// Special drawing rights
		"XDR": {},
	}

	for _, nodeTr := range htmlquery.Find(nodeTable, `.//tr`) {
		nodesTd := htmlquery.Find(nodeTr, `./td`)
		if len(nodesTd) != 5 {
			continue
		}

		code := normalizeTableCode(htmlquery.InnerText(nodesTd[0]))
		num := strings.TrimSpace(htmlquery.InnerText(nodesTd[1]))
		decimalSeparator := strings.TrimSpace(htmlquery.InnerText(nodesTd[2]))
		currency := ExtractInnerTextFromHtml(nodesTd[3]) // E.g. "Hong Kong dollar"
		locationMap := ExtractEntityMapFromHtml(nodesTd[4])

		if code == "" || currency == "" {
			continue
		}

		if _, ok := skipCodes[code]; ok {
			continue
		}

		if strings.HasPrefix(code, "X") {
			// https://en.wikipedia.org/wiki/ISO_4217#X_currencies_(funds,_precious_metals,_supranationals,_other)
			continue
		}

		if strings.Contains(currency, "(") {
			// Skip some unexpected values, E.g. "United States dollar (next day) (funds code)".
			continue
		}

		mergeCurrencyEntity(out, groupBy, code, num, decimalSeparator, currency, locationMap)
	}
}

func parseActiveAbbreviationRows(nodeTable *html.Node, groupBy iso.GroupBy, out map[string]iso.IEntity) {
	for _, nodeTr := range htmlquery.Find(nodeTable, `.//tr`) {
		nodesTd := htmlquery.Find(nodeTr, `./td`)
		if len(nodesTd) < 5 {
			continue
		}

		code := normalizeTableCode(htmlquery.InnerText(nodesTd[0]))
		if code != "CNH" {
			continue
		}

		num := strings.TrimSpace(htmlquery.InnerText(nodesTd[1]))
		if num == "—" {
			num = ""
		}

		decimalSeparator := strings.TrimSpace(htmlquery.InnerText(nodesTd[2]))
		currency := strings.TrimSpace(htmlquery.InnerText(nodesTd[3]))
		locationMap := ExtractEntityMapFromHtml(nodesTd[4])
		if currency == "" {
			continue
		}

		mergeCurrencyEntity(out, groupBy, code, num, decimalSeparator, currency, locationMap)
	}
}

func mergeCurrencyEntity(
	out map[string]iso.IEntity,
	groupBy iso.GroupBy,
	code string,
	num string,
	decimalSeparator string,
	currency string,
	locationMap map[string]iso.IEntity,
) {
	minorUnit := gstrconv.Atoi(decimalSeparator)

	if groupBy == iso.GroupByIso3166CodeOrVariantName {
		for _, entityLocation := range locationMap {
			key := entityLocation.GetAlpha2Code()
			if key == "" {
				key = entityLocation.GetShortName()
			}
			if _, dup := out[key]; key == "" || dup {
				continue
			}

			entity := iso.NewEntity()
			entity.SetAlpha2Code(entityLocation.GetAlpha2Code())
			entity.SetShortName(entityLocation.GetShortName())
			entity.SetAlphabeticCode(code)
			entity.SetNumericCode4217(num)
			entity.SetMinorUnit(minorUnit)
			entity.SetCurrency(currency)

			out[key] = entity
		}
		return
	}

	if groupBy == iso.GroupByIso4217AlphabeticCode {
		entity := iso.NewEntity()
		entity.SetAlphabeticCode(code)
		entity.SetNumericCode4217(num)
		entity.SetMinorUnit(minorUnit)
		entity.SetCurrency(currency)

		entities := map[string]struct{}{}
		for regionCommonNameOrCode := range locationMap {
			entities[regionCommonNameOrCode] = struct{}{}
		}
		entity.SetEntities(gslice.UniqMapToSlice(entities))

		out[code] = entity
	}
}

func normalizeTableCode(s string) string {
	code := strings.TrimSpace(s)
	return strings.TrimSpace(strings.Split(code, "[")[0])
}

// GetTable implements IReaderWriter.
func (i *Parser) GetTable() iso.ITable {
	return i.Table
}

func New() parser.IParser {
	return &Parser{Table: iso.NewTable(STANDARD_ISO_4217)}
}

func ExtractEntityMapFromHtml(node *html.Node) (rs map[string]iso.IEntity) {
	rs = make(map[string]iso.IEntity)

	cellValue := htmlquery.InnerText(node)
	cellValue = strings.TrimSpace(cellValue)
	cellValue = util_html.RemoveHTMLTags(cellValue)

	for _, location := range strings.Split(cellValue, `,  `) {
		location = strings.TrimSpace(location)
		if location == "" {
			continue
		}

		shortName, regionCode := ParseRegionNameOrCodeFromString(location)

		entity := iso.NewEntity()

		if shortName != "" && regionCode != "" {
			entity.SetShortName(shortName)
			entity.SetAlpha2Code(regionCode)
			rs[regionCode] = entity
		} else if shortName != "" {
			entity.SetShortName(shortName)
			rs[shortName] = entity
		}

	}

	return rs
}

const (
	// process case `Cocos (Keeling) Islands (CC)`
	patternRegionNameAndAlpha2Code = `^(?P<shortName>[A-ZÅ][a-zA-Zôüéç\(\) ]+) \((?P<alpha2Code>[A-Z]{2}).*\)$`

	// process case `United Arab Emirates`
	patternRegionName = `^(?P<shortName>[A-ZÅ][a-z][a-zA-Zôüéç ]+)$`

	// process case `Falkland Islands (pegged to GBP 1:1)`
	patternRegionNameWithParenthesesNote = `^(?P<shortName>[A-ZÅ][a-z][a-zA-Zôüéç ]+)\([^A-Z].*\)$`
)

var (
	reRegionNameAndAlpha2Code = regexp.MustCompile(patternRegionNameAndAlpha2Code)

	reRegionName = regexp.MustCompile(patternRegionName)

	reRegionNameWithParenthesesNote = regexp.MustCompile(patternRegionNameWithParenthesesNote)
)

// Parse the ISO 3166 region name and alpha-2 code from a string.
// E.g.
//
//	"Falkland Islands" "" from "Falkland Islands (pegged to GBP 1:1)"
//	"Vatican City" "VA" from "Vatican City (VA)[c]"
func ParseRegionNameOrCodeFromString(s string) (shortName, alpha2Code string) {
	s = strings.Split(s, "[")[0]

	for _, re := range []*regexp.Regexp{
		reRegionNameAndAlpha2Code,
		reRegionName,
		reRegionNameWithParenthesesNote,
	} {
		matched := re.FindStringSubmatch(s)
		if len(matched) > 0 {
			names := re.SubexpNames()
			for i, name := range names {
				if i > 0 && i < len(matched) {
					switch name {
					case "shortName":
						shortName = strings.TrimSpace(matched[i])
					case "alpha2Code":
						alpha2Code = strings.TrimSpace(matched[i])
					}
				}
			}

			if shortName != "" {
				return shortName, alpha2Code
			}
		}
	}

	return "", ""
}

func ExtractInnerTextFromHtml(node *html.Node) string {
	nodeName := htmlquery.FindOne(node, `./a/text()`)
	if nodeName == nil {
		return ""
	}

	return strings.TrimSpace(htmlquery.InnerText(nodeName))
}
