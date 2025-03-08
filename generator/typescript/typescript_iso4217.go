package typescript

import (
	"bytes"
	"fmt"
	"html/template"
	"io"
	"strings"

	"github.com/giant-stone/go/gslice"
)

const fileTemplateIso4217 = `export interface IEntity {
  alphabetic_code: string;
  numeric_code_4217: string;
  minor_unit: number;
  currency: string;
  entities: string[];

  currency_in_cn: string;
  currency_in_native: string;
}

{{.Currencies}}

export {
  {{.CurrencyNames}}
};

export const Currencies = [
  {{.CurrencyNames}}
] as IEntity[];

export const CurrencyFromAlphabeticCode = {
{{.CurrencyFromAlphabeticCode}}
} as {
  [key: string]: IEntity;
};

`

const lineTemplateIso4217 = `const {{.AlphabeticCode}} = {
  alphabetic_code: "{{.AlphabeticCode}}",
  numeric_code_4217: "{{.NumericCode4217}}",
  minor_unit: {{.MinorUnit}},
  currency: "{{.Currency}}",

  entities: {{.Entities}},

  currency_in_cn: "{{.CurrencyInCN}}",
  currency_in_native: "{{.CurrencyInNative}}",
} as IEntity;

`

// Bytes implements generator.IGenerator.
func (g *Generator) bytesIso4217(fmtPretty bool) (rs []byte, err error) {
	tmpl, err := template.New("").Parse(lineTemplateIso4217)
	if err != nil {
		return nil, err
	}

	uniq := map[string]struct{}{}
	CurrencyNames := map[string]struct{}{}
	listEntityFromAlphabeticCode := make([]string, 0)

	rw := bytes.NewBuffer([]byte(``))

	listEntity := g.Table.List()
	for _, v := range listEntity {
		alphabeticCode := v.GetAlphabeticCode()
		if alphabeticCode == "" {
			continue
		}

		if _, dup := uniq[alphabeticCode]; dup {
			continue
		}
		uniq[alphabeticCode] = struct{}{}

		listEntityFromAlphabeticCode = append(listEntityFromAlphabeticCode, fmt.Sprintf(`		"%s": %s,`, alphabeticCode, alphabeticCode))

		CurrencyNames[alphabeticCode] = struct{}{}

		err = tmpl.Execute(rw, map[string]interface{}{
			"AlphabeticCode":  v.GetAlphabeticCode(),
			"NumericCode4217": v.GetNumericCode4217(),
			"MinorUnit":       v.GetMinorUnit(),
			"Currency":        v.GetCurrency(),

			"Entities": template.HTML(serializeSliceStringForTsCode(v.GetEntities())),

			"CurrencyInCN":     v.GetCurrencyInCN(),
			"CurrencyInNative": v.GetCurrencyInNative(),
		})
		if err != nil {
			return nil, err
		}
	}

	dat, err := io.ReadAll(rw)
	if err != nil {
		return nil, err
	}

	tmpl, err = template.New(``).Parse(fileTemplateIso4217)
	if err != nil {
		return nil, err
	}

	rw = bytes.NewBuffer([]byte(``))

	err = tmpl.Execute(rw, map[string]interface{}{
		"CurrencyNames": strings.Join(gslice.UniqMapToSlice(CurrencyNames), ",\n  "),

		"Currencies":                 template.HTML(string(dat)),
		"CurrencyFromAlphabeticCode": template.HTML(strings.Join(listEntityFromAlphabeticCode, "\n")),
	})
	if err != nil {
		return nil, err
	}

	dat, err = io.ReadAll(rw)
	if err != nil {
		return nil, err
	}

	return dat, nil
}
