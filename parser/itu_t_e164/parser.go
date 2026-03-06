package itu_t_e164

import (
	"bytes"
	"fmt"
	"regexp"
	"strings"

	"github.com/antchfx/htmlquery"

	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/parser"
)

type Parser struct {
	Table iso.ITable
}

var (
	reCodeMarker = regexp.MustCompile(`\d+(?:\s*\([A-Za-z0-9]+\))?\s*:`)
	reAlpha2Code = regexp.MustCompile(`\b[A-Z]{2}\b`)

	reCodeWithNumericArea = regexp.MustCompile(`^(?P<prefix>\d+)\((?P<area>\d+)\)$`)
	reCodeWithTag         = regexp.MustCompile(`^(?P<prefix>\d+)\([A-Za-z0-9]+\)$`)
)

// ParseWikipediaHtml implements parser.IParser.
// Parse page content https://en.wikipedia.org/wiki/List_of_telephone_country_codes
func (i *Parser) ParseWikipediaHtml(body []byte) (rs iso.ITable, err error) {
	domRoot, err := htmlquery.Parse(bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}

	// Parse the first country code matrix table because it contains direct alpha-2 mappings.
	nodeTable := htmlquery.FindOne(domRoot, `//table[contains(@class,"wikitable")]`)
	if nodeTable == nil {
		return nil, fmt.Errorf(`table[@class="wikitable"] not found`)
	}

	entityMap := map[string]iso.IEntity{}
	for _, nodeTd := range htmlquery.Find(nodeTable, `.//td`) {
		cellText := htmlquery.InnerText(nodeTd)
		for alpha2Code, callingCode := range parseCallingCodeEntriesFromText(cellText) {
			if alpha2Code == "" || callingCode == "" {
				continue
			}

			// Keep the first discovered code for each alpha-2 entry.
			if _, dup := entityMap[alpha2Code]; dup {
				continue
			}

			entity := iso.NewEntity()
			entity.SetAlpha2Code(alpha2Code)
			entity.SetCallingCode(callingCode)
			entityMap[alpha2Code] = entity
		}
	}

	return i.Table.Load(entityMap), nil
}

// GetTable implements parser.IParser.
func (i *Parser) GetTable() iso.ITable {
	return i.Table
}

func New() parser.IParser {
	return &Parser{
		Table: iso.NewTable(STANDARD_ITU_T_E164).SetGroupBy(iso.GroupByIso3166CodeOrVariantName),
	}
}

func parseCallingCodeEntriesFromText(s string) map[string]string {
	rs := map[string]string{}

	s = strings.TrimSpace(s)
	s = strings.ReplaceAll(s, "\u00A0", " ")
	s = strings.ReplaceAll(s, "\n", " ")
	s = strings.ReplaceAll(s, "\t", " ")
	s = strings.ReplaceAll(s, "\r", " ")
	s = strings.Join(strings.Fields(s), " ")

	segments := reCodeMarker.FindAllStringIndex(s, -1)
	for idx, loc := range segments {
		codeRaw := strings.TrimSpace(strings.TrimSuffix(s[loc[0]:loc[1]], ":"))
		callingCode := normalizeCallingCode(codeRaw)
		if callingCode == "" {
			continue
		}

		end := len(s)
		if idx+1 < len(segments) {
			end = segments[idx+1][0]
		}

		tail := s[loc[1]:end]
		uniqAlpha2 := map[string]struct{}{}
		for _, alpha2Code := range reAlpha2Code.FindAllString(tail, -1) {
			if _, dup := uniqAlpha2[alpha2Code]; dup {
				continue
			}
			uniqAlpha2[alpha2Code] = struct{}{}

			if _, dup := rs[alpha2Code]; dup {
				continue
			}
			rs[alpha2Code] = callingCode
		}
	}

	return rs
}

func normalizeCallingCode(s string) string {
	s = strings.TrimSpace(s)
	s = strings.ReplaceAll(s, " ", "")
	if s == "" {
		return ""
	}

	if matched := reCodeWithNumericArea.FindStringSubmatch(s); len(matched) == 3 {
		return fmt.Sprintf("%s-%s", matched[1], matched[2])
	}

	if matched := reCodeWithTag.FindStringSubmatch(s); len(matched) == 2 {
		return matched[1]
	}

	return s
}
