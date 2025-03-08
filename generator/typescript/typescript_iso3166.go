package typescript

import (
	"bytes"
	"fmt"
	"html/template"
	"io"
	"sort"
	"strings"

	"github.com/giant-stone/go/gslice"
	"github.com/giant-stone/iso3166/iso"
)

const fileTemplateIso3166 = `export interface IEntity {
  alpha2Code: string;
  short_name: string;
  alpha3code: string;
  alpha4code: string;
  numeric_code: string;
  independent?: boolean;
  period_of_validity: string;

  //
  // non-ISO 3166-1 fields
  //

  common_name: string;
  calling_code: string; // ref: https://en.wikipedia.org/wiki/List_of_country_calling_codes

  disabled?: boolean;

  region_in_cn: string;
  region_in_native: string;

  //
  // ISO 4217: https://en.wikipedia.org/wiki/ISO_4217
  //
  alphabetic_code: string;
  numeric_code_4217: string;
  minor_unit: number; // ref: https://en.wikipedia.org/wiki/decimal_separator
  currency: string;

  currency_in_cn: string; // This field is not a part of official ISO 4217. E.g. "瑞士法郎" for CHF.
  currency_in_native: string;
}

{{.Regions}}

export {
  {{.RegionCommonNames}}
};

export const Regions = [
  {{.RegionCommonNames}}
] as IEntity[];

export const RegionsByCode = {
{{.RegionsFromCode}}
} as {
  [key: string]: IEntity;
};

export const RegionsFromCommonNameInAlphaNumeric = {
{{.RegionsFromCommonNameInAlphaNumeric}}
} as {
  [key: string]: IEntity;
};

const ReservedRegionCodeUnderline = "_";

export { ReservedRegionCodeUnderline };

// Return alpha code by priority, user assigned one is the high priority, then 2 > 3 > 4.
export function GetCode(region: IEntity): string {
  let code = "";
  if (region.alpha2Code !== "") {
    code = region.alpha2Code!;
  } else if (region.alpha3code !== "") {
    code = region.alpha3code!;
  } else if (region.alpha4code !== "") {
    code = region.alpha4code!;
  }
  return code;
}

export function stripAlphaCode(s:string) :string {
  const splits = s.split("+")
  // splits[0] is alphaCode, we have to strip it from callingCode
  // "CA+1-xxx..." => "1-xxx..."
  // "CN+86-13800138000" => "86-13800138000"    
  return splits[splits.length-1];
}

`

const lineTemplateIso3166 = `const {{.CommonNameInAlphaNumeric}} = {
  alpha2Code: "{{.Alpha2Code}}",
  alpha3code: "{{.Alpha3code}}",
  alpha4code: "{{.Alpha4code}}",
  independent: {{.Independent}},
  numeric_code: "{{.NumericCode}}",
  short_name: "{{.ShortName}}",

  period_of_validity: "{{.PeriodOfValidity}}",

  alias: "{{.Alias}}",
  common_name: "{{.CommonName}}",
  calling_code: "{{.CallingCode}}",

  languages: "{{.Languages}}",

  region_in_cn: "{{.RegionInCN}}",
  region_in_native: "{{.RegionInNative}}",

  alphabetic_code: "{{.AlphabeticCode}}",
  numeric_code_4217: "{{.NumericCode4217}}",
  minor_unit: {{.MinorUnit}},
  currency: "{{.Currency}}",

  currency_in_cn: "{{.CurrencyInCN}}",
  currency_in_native: "{{.CurrencyInNative}}",
} as IEntity;

`

// Bytes implements generator.IGenerator.
func (g *Generator) bytesIso3166(fmtPretty bool) ([]byte, error) {
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

	regionCommonNames := map[string]struct{}{}
	listEntityFromCode := make([]string, 0)
	listEntityFromRegionInCN := make([]string, 0)
	listEntityFromCommonNameInAlphaNumeric := make([]string, 0)
	rw := bytes.NewBuffer([]byte(``))

	listRegions := g.Table.List()
	// Make sure it is sorted.
	sort.Sort(iso.SortByIso3166Fields(listRegions))

	for _, v := range listRegions {
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

		regionCommonNames[commonNameInAlphaNumeric] = struct{}{}

		err = tmpl.Execute(rw, map[string]interface{}{
			"Alpha2Code":  alpha2Code,
			"ShortName":   template.HTML(v.GetShortName()),
			"Alpha3code":  alpha3Code,
			"Alpha4code":  alpha4Code,
			"NumericCode": v.GetNumericCode(),
			"Independent": v.GetIndependent(),

			"PeriodOfValidity": v.GetPeriodOfValidity(),

			"Alias":                    template.HTML(serializeSliceStringForTsCode(v.GetAlias())),
			"CommonName":               template.HTML(v.GetCommonName()),
			"CommonNameInAlphaNumeric": commonNameInAlphaNumeric,
			"CallingCode":              v.GetCallingCode(),
			"Languages":                template.HTML(serializeSliceStringForTsCode(v.GetLanguages())),

			"RegionInCN":     regionInCN,
			"RegionInNative": v.GetRegionInNative(),

			"AlphabeticCode":  v.GetAlphabeticCode(),
			"NumericCode4217": v.GetNumericCode4217(),
			"MinorUnit":       v.GetMinorUnit(),
			"Currency":        v.GetCurrency(),

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

	tmpl, err = template.New(``).Parse(fileTemplateIso3166)
	if err != nil {
		return nil, err
	}

	rw = bytes.NewBuffer([]byte(``))

	err = tmpl.Execute(rw, map[string]interface{}{
		"RegionCommonNames": strings.Join(gslice.UniqMapToSlice(regionCommonNames), ",\n  "),

		"Regions":                             template.HTML(string(dat)),
		"RegionsFromCode":                     template.HTML(strings.Join(listEntityFromCode, "\n")),
		"RegionsFromSimplifiedChinese":        template.HTML(strings.Join(listEntityFromRegionInCN, "\n")),
		"RegionsFromCommonNameInAlphaNumeric": template.HTML(strings.Join(listEntityFromCommonNameInAlphaNumeric, "\n")),
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

func serializeSliceStringForTsCode(items []string) (rs string) {
	chunks := make([]string, 0)
	for _, v := range items {
		chunks = append(chunks, fmt.Sprintf("%+q", v))
	}

	return fmt.Sprintf(`[%s]`, strings.Join(chunks, ","))
}
