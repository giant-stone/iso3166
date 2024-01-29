package iso3166

// Region is abstract of a country, region, dependent territory or special areas of geographical interest.
//
// data source are
// - https://en.wikipedia.org/wiki/ISO_3166-1
// - https://zh.wikipedia.org/zh-cn/ISO_3166-1
// - https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_and_their_capitals_in_native_languages
// - https://www.iso.org/obp/ui/#iso:code:3166:<alph2code>
type Region struct {
	Alpha2code string // example "US"

	// short name (using title case) in ISO 3166
	ShortName string // "United States of America" "Côte d'Ivoire"

	// short name lower case in ISO 3166
	ShortNameLowerCase string // "United States of America (the)" "Côte d'Ivoire"

	FullName string // "the United States of America" "the Republic of Côte d'Ivoire"

	Alpha3code string // "USA" "CIV"

	// a four-letter code that represents a country name that is no longer in use.
	// The structure depends on the reason why the country name was removed from ISO 3166-1
	// and added to [ISO 3166-3](https://en.wikipedia.org/wiki/ISO_3166-3)
	Alpha4code string // "SUHH" => "Soviet Union"

	NumericCode string // "840"

	Independent bool

	PeriodOfValidity string // "1974–1992"

	//
	// FOLLOWING FIELDS ARE NOT PART OF ISO3166.
	//

	// common name, transform it from short name [a-zA-Z0-9], use "South Korea" for "the Republic of Korea"
	Name string

	NameNoSpace string

	// list alias and them are not fit ShortName/FullName/NameInNative/NameInChinese
	Alias []string

	NameInNative string // "United States"

	// capital in English
	Capital string // "Washington, D.C."

	CapitalInNative string // "Washington, D.C."

	// Official or native language(s) (alphabet/script).
	// https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_and_their_capitals_in_native_languages
	Languages []string // ["English","Spanish","Cajun French","Indigenous","Hawaiian"]

	// name in Simplified Chinese
	NameInChinese string // "美国"

	CallingCode string
}

// return alpha code by priority,
// user assigned one is the high priority, then 4 > 3 > 2.
func (it *Region) Code() (code string) {
	if it.Alpha4code != "" {
		code = it.Alpha4code
	} else if it.Alpha2code != "" && (it.Alpha3code == "" || it.Alpha3code[0] != 'X') {
		code = it.Alpha2code
	} else if it.Alpha3code != "" {
		code = it.Alpha3code
	}
	return code
}

func New() *Region {
	return &Region{
		Alias:     []string{},
		Languages: []string{},
	}
}
