package golang

import (
	"bytes"
	"fmt"
	"go/format"
	"html/template"
	"io"
	"strings"
)

const fileTemplateIso3166 = `// THIS IS AUTO GENERATED, DON'T EDIT FOLLOWING BY MANUAL.
package {{.PkgName}}

import "github.com/giant-stone/iso3166/iso"

var (
{{.Entity3166}}
)

var (
	FromCode = map[string]iso.IEntity{
{{.EntityFromCode}}
	}
)

var (
	FromRegionInCN = map[string]iso.IEntity{
{{.EntityFromRegionInCN}}
	}
)

var (
	FromCommonNameInAlphaNumeric  = map[string]iso.IEntity{
{{.EntityFromCommonNameInAlphaNumeric}}
	}
)
`

const lineTemplateIso3166 = `	{{.CommonNameInAlphaNumeric}} = &iso.Entity{
		Alpha2Code: "{{.Alpha2Code}}",
		Alpha3Code: "{{.Alpha3code}}",
		Alpha4Code: "{{.Alpha4code}}",
		Independent: {{.Independent}},
		NumericCode: "{{.NumericCode}}",
		ShortName: "{{.ShortName}}",

		PeriodOfValidity: "{{.PeriodOfValidity}}",

		Alias: []string{ {{.Alias}} },
		CommonName: "{{.CommonName}}",
		CommonNameInAlphaNumeric: "{{.CommonNameInAlphaNumeric}}",
		CallingCode: "{{.CallingCode}}",
		Languages: []string{ {{.Languages}} },

		RegionInCN: "{{.RegionInCN}}",
		RegionInNative: "{{.RegionInNative}}",

		AlphabeticCode: "{{.AlphabeticCode}}",
		NumericCode4217: "{{.NumericCode4217}}",
		MinorUnit: {{.MinorUnit}},
		Currency: "{{.Currency}}",
		
		CurrencyInCN: "{{.CurrencyInCN}}",
	}

`

func (g *Generator) bytesIso3166(fmtPretty bool) (rs []byte, err error) {
	tmpl, err := template.New("").Parse(lineTemplateIso3166)
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
	for _, v := range listEntity {
		commonNameInAlphaNumeric := v.GetCommonNameInAlphaNumeric()
		alpha2Code := v.GetAlpha2Code()
		alpha3Code := v.GetAlpha3Code()
		alpha4Code := v.GetAlpha4Code()
		regionInCN := v.GetRegionInCN()

		if commonNameInAlphaNumeric == "" {
			continue
		}

		if _, dup := uniqAlpha2Code[alpha2Code]; alpha2Code != "" && !dup {
			uniqAlpha2Code[alpha2Code] = struct{}{}
			listEntityFromCode = append(listEntityFromCode, fmt.Sprintf(`		"%s": %s,`, alpha2Code, commonNameInAlphaNumeric))
		}

		if _, dup := uniqAlpha3Code[alpha3Code]; alpha2Code == "" && alpha4Code == "" && alpha3Code != "" && !dup {
			uniqAlpha3Code[alpha4Code] = struct{}{}
			listEntityFromCode = append(listEntityFromCode, fmt.Sprintf(`		"%s": %s,`, alpha3Code, commonNameInAlphaNumeric))
		}

		if _, dup := uniqAlpha4Code[alpha4Code]; alpha4Code != "" && !dup {
			uniqAlpha4Code[alpha4Code] = struct{}{}
			listEntityFromCode = append(listEntityFromCode, fmt.Sprintf(`		"%s": %s,`, alpha4Code, commonNameInAlphaNumeric))
		}

		if _, dup := uniqRegionInCN[regionInCN]; regionInCN != "" && !dup {
			uniqRegionInCN[regionInCN] = struct{}{}
			listEntityFromRegionInCN = append(listEntityFromRegionInCN, fmt.Sprintf(`		"%s": %s,`, regionInCN, commonNameInAlphaNumeric))
		}

		if _, dup := uniqRegionInCommonName[commonNameInAlphaNumeric]; !dup {
			uniqRegionInCommonName[commonNameInAlphaNumeric] = struct{}{}
			listEntityFromCommonNameInAlphaNumeric = append(listEntityFromCommonNameInAlphaNumeric, fmt.Sprintf(`		"%s": %s,`, commonNameInAlphaNumeric, commonNameInAlphaNumeric))
		}

		uniqKey := v.Code()
		if _, dup := uniq[uniqKey]; dup {
			continue
		}
		uniq[uniqKey] = struct{}{}

		err = tmpl.Execute(rw, map[string]interface{}{
			"Alpha2Code":  alpha2Code,
			"ShortName":   template.HTML(v.GetShortName()),
			"Alpha3code":  alpha3Code,
			"Alpha4code":  alpha4Code,
			"NumericCode": v.GetNumericCode(),
			"Independent": v.GetIndependent(),

			"PeriodOfValidity": v.GetPeriodOfValidity(),

			"Alias":                    template.HTML(serializeSliceStringForGoCode(v.GetAlias())),
			"CommonName":               template.HTML(v.GetCommonName()),
			"CommonNameInAlphaNumeric": commonNameInAlphaNumeric,
			"CallingCode":              v.GetCallingCode(),
			"Languages":                template.HTML(serializeSliceStringForGoCode(v.GetLanguages())),

			"RegionInCN":     regionInCN,
			"RegionInNative": v.GetRegionInNative(),

			"AlphabeticCode":  v.GetAlphabeticCode(),
			"NumericCode4217": v.GetNumericCode4217(),
			"MinorUnit":       v.GetMinorUnit(),
			"Currency":        v.GetCurrency(),

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

	tmpl, err = template.New(``).Parse(fileTemplateIso3166)
	if err != nil {
		return nil, err
	}

	rw = bytes.NewBuffer([]byte(``))

	err = tmpl.Execute(rw, map[string]interface{}{
		"PkgName": GO_PACKAGE_NAME,

		"Entity3166": template.HTML(string(dat)),

		"EntityFromCode":                     template.HTML(strings.Join(listEntityFromCode, "\n")),
		"EntityFromRegionInCN":               template.HTML(strings.Join(listEntityFromRegionInCN, "\n")),
		"EntityFromCommonNameInAlphaNumeric": template.HTML(strings.Join(listEntityFromCommonNameInAlphaNumeric, "\n")),
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

func serializeSliceStringForGoCode(items []string) string {
	rs := make([]string, 0)
	for _, item := range items {
		rs = append(rs, fmt.Sprintf("%+q", item))
	}
	return strings.Join(rs, ",")
}
