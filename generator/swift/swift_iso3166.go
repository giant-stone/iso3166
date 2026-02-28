package swift

import (
	"bytes"
	"fmt"
	"io"
	"sort"
	"strings"
	"text/template"
	"unicode"
	"unicode/utf8"

	"github.com/giant-stone/iso3166/iso"
)

const fileTemplateIso3166 = `// THIS IS AUTO GENERATED, DON'T EDIT FOLLOWING BY MANUAL.
import Foundation

public struct Entity3166: Codable, Equatable, Sendable {
    public let alpha2Code: String
    public let alpha3Code: String
    public let alpha4Code: String
    public let independent: Bool
    public let numericCode: String
    public let shortName: String

    public let periodOfValidity: String

    public let alias: [String]
    public let commonName: String
    public let commonNameInAlphaNumeric: String
    public let callingCode: String
    public let languages: [String]

    public let regionInCN: String
    public let regionInNative: String

    public let alphabeticCode: String
    public let numericCode4217: String
    public let minorUnit: Int
    public let currency: String

    public let currencyInCN: String
    public let currencyInNative: String
}

{{.Entity3166}}

public let FromCode: [String: Entity3166] = [
{{.EntityFromCode}}
]

public let FromRegionInCN: [String: Entity3166] = [
{{.EntityFromRegionInCN}}
]

public let FromCommonNameInAlphaNumeric: [String: Entity3166] = [
{{.EntityFromCommonNameInAlphaNumeric}}
]
`

const lineTemplateIso3166 = `public let {{.Identifier}} = Entity3166(
    alpha2Code: {{.Alpha2Code}},
    alpha3Code: {{.Alpha3Code}},
    alpha4Code: {{.Alpha4Code}},
    independent: {{.Independent}},
    numericCode: {{.NumericCode}},
    shortName: {{.ShortName}},

    periodOfValidity: {{.PeriodOfValidity}},

    alias: {{.Alias}},
    commonName: {{.CommonName}},
    commonNameInAlphaNumeric: {{.CommonNameInAlphaNumeric}},
    callingCode: {{.CallingCode}},
    languages: {{.Languages}},

    regionInCN: {{.RegionInCN}},
    regionInNative: {{.RegionInNative}},

    alphabeticCode: {{.AlphabeticCode}},
    numericCode4217: {{.NumericCode4217}},
    minorUnit: {{.MinorUnit}},
    currency: {{.Currency}},

    currencyInCN: {{.CurrencyInCN}},
    currencyInNative: {{.CurrencyInNative}}
)

`

func (g *Generator) bytesIso3166(fmtPretty bool) ([]byte, error) {
	temp, err := template.New("").Parse(lineTemplateIso3166)
	if err != nil {
		return nil, err
	}

	uniq := map[string]struct{}{}
	uniqRegionInCN := map[string]struct{}{}
	uniqAlpha2Code := map[string]struct{}{}
	uniqAlpha3Code := map[string]struct{}{}
	uniqAlpha4Code := map[string]struct{}{}
	uniqRegionInCommonName := map[string]struct{}{}

	listEntityFromCode := make([]string, 0)
	listEntityFromRegionInCN := make([]string, 0)
	listEntityFromCommonNameInAlphaNumeric := make([]string, 0)
	rw := bytes.NewBuffer([]byte(``))

	listEntity := g.Table.List()
	// Make sure it is sorted.
	sort.Sort(iso.SortByIso3166Fields(listEntity))

	for _, v := range listEntity {
		commonNameInAlphaNumeric := v.GetCommonNameInAlphaNumeric()
		alpha2Code := v.GetAlpha2Code()
		alpha3Code := v.GetAlpha3Code()
		alpha4Code := v.GetAlpha4Code()
		regionInCN := v.GetRegionInCN()

		if commonNameInAlphaNumeric == "" {
			continue
		}

		identifier := transformToSwiftIdentifier(commonNameInAlphaNumeric)

		if _, dup := uniqAlpha2Code[alpha2Code]; alpha2Code != "" && !dup {
			uniqAlpha2Code[alpha2Code] = struct{}{}
			listEntityFromCode = append(listEntityFromCode, fmt.Sprintf("    %s: %s,", quoteSwiftString(alpha2Code), identifier))
		}

		if _, dup := uniqAlpha3Code[alpha3Code]; alpha2Code == "" && alpha4Code == "" && alpha3Code != "" && !dup {
			uniqAlpha3Code[alpha3Code] = struct{}{}
			listEntityFromCode = append(listEntityFromCode, fmt.Sprintf("    %s: %s,", quoteSwiftString(alpha3Code), identifier))
		}

		if _, dup := uniqAlpha4Code[alpha4Code]; alpha4Code != "" && !dup {
			uniqAlpha4Code[alpha4Code] = struct{}{}
			listEntityFromCode = append(listEntityFromCode, fmt.Sprintf("    %s: %s,", quoteSwiftString(alpha4Code), identifier))
		}

		if _, dup := uniqRegionInCN[regionInCN]; regionInCN != "" && !dup {
			uniqRegionInCN[regionInCN] = struct{}{}
			listEntityFromRegionInCN = append(listEntityFromRegionInCN, fmt.Sprintf("    %s: %s,", quoteSwiftString(regionInCN), identifier))
		}

		if _, dup := uniqRegionInCommonName[commonNameInAlphaNumeric]; !dup {
			uniqRegionInCommonName[commonNameInAlphaNumeric] = struct{}{}
			listEntityFromCommonNameInAlphaNumeric = append(listEntityFromCommonNameInAlphaNumeric, fmt.Sprintf("    %s: %s,", quoteSwiftString(commonNameInAlphaNumeric), identifier))
		}

		uniqKey := v.Code()
		if _, dup := uniq[uniqKey]; dup {
			continue
		}
		uniq[uniqKey] = struct{}{}

		err = temp.Execute(rw, map[string]interface{}{
			"Identifier":               identifier,
			"Alpha2Code":               quoteSwiftString(alpha2Code),
			"Alpha3Code":               quoteSwiftString(alpha3Code),
			"Alpha4Code":               quoteSwiftString(alpha4Code),
			"NumericCode":              quoteSwiftString(v.GetNumericCode()),
			"Independent":              v.GetIndependent(),
			"ShortName":                quoteSwiftString(v.GetShortName()),
			"PeriodOfValidity":         quoteSwiftString(v.GetPeriodOfValidity()),
			"Alias":                    serializeSliceStringForSwiftCode(v.GetAlias()),
			"CommonName":               quoteSwiftString(v.GetCommonName()),
			"CommonNameInAlphaNumeric": quoteSwiftString(commonNameInAlphaNumeric),
			"CallingCode":              quoteSwiftString(v.GetCallingCode()),
			"Languages":                serializeSliceStringForSwiftCode(v.GetLanguages()),
			"RegionInCN":               quoteSwiftString(regionInCN),
			"RegionInNative":           quoteSwiftString(v.GetRegionInNative()),
			"AlphabeticCode":           quoteSwiftString(v.GetAlphabeticCode()),
			"NumericCode4217":          quoteSwiftString(v.GetNumericCode4217()),
			"MinorUnit":                v.GetMinorUnit(),
			"Currency":                 quoteSwiftString(v.GetCurrency()),
			"CurrencyInCN":             quoteSwiftString(v.GetCurrencyInCN()),
			"CurrencyInNative":         quoteSwiftString(v.GetCurrencyInNative()),
		})
		if err != nil {
			return nil, err
		}
	}

	dat, err := io.ReadAll(rw)
	if err != nil {
		return nil, err
	}

	temp, err = template.New(``).Parse(fileTemplateIso3166)
	if err != nil {
		return nil, err
	}

	rw = bytes.NewBuffer([]byte(``))

	err = temp.Execute(rw, map[string]interface{}{
		"Entity3166":                         string(dat),
		"EntityFromCode":                     strings.Join(listEntityFromCode, "\n"),
		"EntityFromRegionInCN":               strings.Join(listEntityFromRegionInCN, "\n"),
		"EntityFromCommonNameInAlphaNumeric": strings.Join(listEntityFromCommonNameInAlphaNumeric, "\n"),
	})
	if err != nil {
		return nil, err
	}

	return io.ReadAll(rw)
}

func serializeSliceStringForSwiftCode(items []string) string {
	chunks := make([]string, 0, len(items))
	for _, item := range items {
		chunks = append(chunks, quoteSwiftString(item))
	}
	return "[" + strings.Join(chunks, ", ") + "]"
}

func quoteSwiftString(s string) string {
	var b strings.Builder
	b.WriteByte('"')

	for _, r := range s {
		switch r {
		case '\\':
			b.WriteString(`\\`)
		case '"':
			b.WriteString(`\"`)
		case '\n':
			b.WriteString(`\n`)
		case '\r':
			b.WriteString(`\r`)
		case '\t':
			b.WriteString(`\t`)
		default:
			if r < 0x20 {
				b.WriteString(fmt.Sprintf(`\u{%X}`, r))
			} else {
				b.WriteRune(r)
			}
		}
	}

	b.WriteByte('"')
	return b.String()
}

func transformToSwiftIdentifier(s string) string {
	var b strings.Builder
	for _, r := range s {
		if unicode.IsLetter(r) || unicode.IsDigit(r) || r == '_' {
			b.WriteRune(r)
		}
	}

	rs := b.String()
	if rs == "" {
		return "_"
	}

	if r, _ := utf8.DecodeRuneInString(rs); unicode.IsDigit(r) {
		return "_" + rs
	}

	return rs
}
