package swift

import (
	"bytes"
	"fmt"
	"io"
	"sort"
	"strings"
	"text/template"

	"github.com/giant-stone/iso3166/iso"
)

const fileTemplateIso4217 = `// THIS IS AUTO GENERATED, DON'T EDIT FOLLOWING BY MANUAL.
import Foundation

public struct Entity4217: Codable, Equatable, Sendable {
    public let alphabeticCode: String
    public let numericCode4217: String
    public let minorUnit: Int
    public let currency: String
    public let entities: [String]

    public let currencyInCN: String
    public let currencyInNative: String
}

{{.Entities4217}}

public let FromAlphabeticCode: [String: Entity4217] = [
{{.EntityMapKeyIsAlphabeticCode}}
]
`

const lineTemplateIso4217 = `public let {{.Identifier}} = Entity4217(
    alphabeticCode: {{.AlphabeticCode}},
    numericCode4217: {{.NumericCode4217}},
    minorUnit: {{.MinorUnit}},
    currency: {{.Currency}},
    entities: {{.Entities}},

    currencyInCN: {{.CurrencyInCN}},
    currencyInNative: {{.CurrencyInNative}}
)

`

func (g *Generator) bytesIso4217(fmtPretty bool) ([]byte, error) {
	temp, err := template.New("").Parse(lineTemplateIso4217)
	if err != nil {
		return nil, err
	}

	uniq := map[string]struct{}{}
	listEntityFromAlphabeticCode := make([]string, 0)
	rw := bytes.NewBuffer([]byte(``))

	listEntity := g.Table.List()
	// Make sure it is sorted.
	sort.Sort(iso.SortByIso4217Fields(listEntity))

	for _, v := range listEntity {
		alphabeticCode := v.GetAlphabeticCode()
		if alphabeticCode == "" {
			continue
		}

		if _, dup := uniq[alphabeticCode]; dup {
			continue
		}
		uniq[alphabeticCode] = struct{}{}

		identifier := transformToSwiftIdentifier(alphabeticCode)
		listEntityFromAlphabeticCode = append(listEntityFromAlphabeticCode, fmt.Sprintf("    %s: %s,", quoteSwiftString(alphabeticCode), identifier))

		err = temp.Execute(rw, map[string]interface{}{
			"Identifier":       identifier,
			"AlphabeticCode":   quoteSwiftString(alphabeticCode),
			"NumericCode4217":  quoteSwiftString(v.GetNumericCode4217()),
			"MinorUnit":        v.GetMinorUnit(),
			"Currency":         quoteSwiftString(v.GetCurrency()),
			"Entities":         serializeSliceStringForSwiftCode(v.GetEntities()),
			"CurrencyInCN":     quoteSwiftString(v.GetCurrencyInCN()),
			"CurrencyInNative": quoteSwiftString(v.GetCurrencyInNative()),
		})
		if err != nil {
			return nil, err
		}
	}

	dat, err := io.ReadAll(rw)
	if err != nil {
		return nil, err
	}

	temp, err = template.New(``).Parse(fileTemplateIso4217)
	if err != nil {
		return nil, err
	}

	rw = bytes.NewBuffer([]byte(``))
	err = temp.Execute(rw, map[string]interface{}{
		"Entities4217":                 string(dat),
		"EntityMapKeyIsAlphabeticCode": strings.Join(listEntityFromAlphabeticCode, "\n"),
	})
	if err != nil {
		return nil, err
	}

	return io.ReadAll(rw)
}
