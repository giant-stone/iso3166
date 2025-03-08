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

	xpath := `//table[contains(@class,"wikitable")]`
	nodeTable := htmlquery.FindOne(domRoot, xpath)
	if nodeTable == nil {
		return nil, fmt.Errorf(`table[@class="wikitable"] not found`)
	}

	skipCodes := map[string]struct{}{
		// Special drawing rights
		"XDR": {},
	}

	m := make(map[string]iso.IEntity)
	groupBy := i.Table.GetGroupBy()

	for _, nodeTr := range htmlquery.Find(nodeTable, `//tr`) {
		nodesTd := htmlquery.Find(nodeTr, `./td`)

		if len(nodesTd) != 5 {
			continue
		}

		nodeCode := nodesTd[0]
		nodeNum := nodesTd[1]
		nodeDecimalSeparator := nodesTd[2]
		nodeCurrency := nodesTd[3]
		nodeLocationsListed := nodesTd[4]

		code := htmlquery.InnerText(nodeCode)
		num := htmlquery.InnerText(nodeNum)
		decimalSeparator := htmlquery.InnerText(nodeDecimalSeparator)
		currency := ExtractInnerTextFromHtml(nodeCurrency) // E.g. "Hong Kong dollar"
		locationMap := ExtractEntityMapFromHtml(nodeLocationsListed)

		if code == "" || currency == "" {
			// line := htmlquery.InnerText(nodeTr)
			// glogging.Sugared.Warnf("parse code or currency from table tr %q failed", line)
			continue

		} else if _, ok := skipCodes[code]; ok {
			continue
		} else if code[0] == 'X' {
			// https://en.wikipedia.org/wiki/ISO_4217#X_currencies_(funds,_precious_metals,_supranationals,_other)
			continue
		}

		if strings.Contains(currency, "(") {
			// Skip some unexpected values, E.g. "United States dollar (next day) (funds code)".
			continue
		}

		if groupBy == iso.GroupByIso3166CodeOrVariantName {
			for _, entityLocation := range locationMap {
				key := entityLocation.GetAlpha2Code()
				if key == "" {
					key = entityLocation.GetShortName()
				}
				if _, dup := m[key]; key == "" || dup {
					continue
				}

				entity := iso.NewEntity()

				entity.SetAlpha2Code(entityLocation.GetAlpha2Code())
				entity.SetShortName(entityLocation.GetShortName())
				entity.SetAlphabeticCode(code)
				entity.SetNumericCode4217(num)
				entity.SetMinorUnit(gstrconv.Atoi(decimalSeparator))
				entity.SetCurrency(currency)

				m[key] = entity
			}
		} else if groupBy == iso.GroupByIso4217AlphabeticCode {
			key := code

			entity := iso.NewEntity()

			entity.SetAlpha2Code("")
			entity.SetShortName("")
			entity.SetAlphabeticCode(code)
			entity.SetNumericCode4217(num)
			entity.SetMinorUnit(gstrconv.Atoi(decimalSeparator))
			entity.SetCurrency(currency)

			entities := map[string]struct{}{}
			for regionCommonNameOrCode := range locationMap {
				entities[regionCommonNameOrCode] = struct{}{}
			}
			entity.SetEntities(gslice.UniqMapToSlice(entities))

			m[key] = entity
		}
	}

	return i.Table.Load(m), nil
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
	patternRegionNameAndAlpha2Code = `^(?<shortName>[A-ZÅ][a-zA-Zôüéç\(\) ]+) \((?P<alpha2Code>[A-Z]{2}).*\)$`

	// process case `United Arab Emirates`
	patternRegionName = `^(?<shortName>[A-ZÅ][a-z][a-zA-Zôüéç ]+)$`

	// process case `Falkland Islands (pegged to GBP 1:1)`
	patternRegionNameWithParenthesesNote = `^(?<shortName>[A-ZÅ][a-z][a-zA-Zôüéç ]+)\([^A-Z].*\)$`
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
		matched := re.FindAllStringSubmatch(s, -1)
		if len(matched) > 0 {
			if len(matched[0]) > 2 {
				shortName = matched[0][1]
				alpha2Code = matched[0][2]
			} else if len(matched[0]) == 2 {
				shortName = matched[0][1]
			}

			shortName = strings.TrimSpace(shortName)
			alpha2Code = strings.TrimSpace(alpha2Code)

			if shortName != "" {
				return shortName, alpha2Code
			}
		}
	}

	shortName = strings.TrimSpace(shortName)
	alpha2Code = strings.TrimSpace(alpha2Code)

	return shortName, alpha2Code
}

func ExtractInnerTextFromHtml(node *html.Node) string {
	nodeName := htmlquery.FindOne(node, `./a/text()`)
	if nodeName == nil {
		return ""
	}

	return strings.TrimSpace(htmlquery.InnerText(nodeName))
}
