package golang

import (
	"bytes"
	"fmt"
	"go/format"
	"html/template"
	"io"
	"strings"
)

const fileTemplateIso4217 = `// THIS IS AUTO GENERATED, DON'T EDIT FOLLOWING BY MANUAL.
package {{.PkgName}}

import "github.com/giant-stone/iso3166/iso"

var (
{{.Entities4217}}
)

var (
	FromAlphabeticCode = map[string]iso.IEntity{
{{.EntityMapKeyIsAlphabeticCode}}
	}
)
`

const lineTemplateIso4217 = `	{{.AlphabeticCode}} = &iso.Entity{
		AlphabeticCode: "{{.AlphabeticCode}}",
		NumericCode4217: "{{.NumericCode4217}}",
		MinorUnit: {{.MinorUnit}},
		Currency: "{{.Currency}}",
		Entities: []string{ {{.Entities}} },
		
		CurrencyInCN: "{{.CurrencyInCN}}",
	}

`

func (g *Generator) bytesIso4217(fmtPretty bool) (rs []byte, err error) {
	tmpl, err := template.New("").Parse(lineTemplateIso4217)
	if err != nil {
		return nil, err
	}

	uniq := map[string]struct{}{}
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

		err = tmpl.Execute(rw, map[string]interface{}{
			"AlphabeticCode":  v.GetAlphabeticCode(),
			"NumericCode4217": v.GetNumericCode4217(),
			"MinorUnit":       v.GetMinorUnit(),
			"Currency":        v.GetCurrency(),

			"Entities": template.HTML(serializeSliceStringForGoCode(v.GetEntities())),

			"CurrencyInCN": v.GetCurrencyInCN(),
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
		"PkgName": GO_PACKAGE_NAME,

		"Entities4217": template.HTML(string(dat)),

		"EntityMapKeyIsAlphabeticCode": template.HTML(strings.Join(listEntityFromAlphabeticCode, "\n")),
	})
	if err != nil {
		return nil, err
	}

	dat, err = io.ReadAll(rw)
	if err != nil {
		return nil, err
	}

	if fmtPretty {
		dat, err = format.Source([]byte(dat))
		if err != nil {
			return nil, err
		}
	}

	return dat, nil
}
