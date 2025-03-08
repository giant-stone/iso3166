package iso

// Representation of a ISO 3166 record.
// E.g. https://www.iso.org/obp/ui/#iso:code:3166:US.
// See also https://www.iso.org/glossary-for-iso-3166.html
type ICountryCode interface {
	GetAlpha2Code() string
	SetAlpha2Code(v string)

	GetShortName() string
	SetShortName(v string)

	GetShortNameLowerCase() string
	SetShortNameLowerCase(v string)

	GetFullName() string
	SetFullName(v string)

	GetAlpha3Code() string
	SetAlpha3Code(v string)

	GetNumericCode() string
	SetNumericCode(v string)

	GetRemarks() []string

	GetIndependent() bool
	SetIndependent(v bool)

	GetTerritoryName() string
	GetStatus() string

	GetAlpha4Code() string
	SetAlpha4Code(v string)

	Code() string
}

// FOLLOWING FIELDS ARE NOT PART OF ISO3166.
type IIso3166Extended interface {
	GetPeriodOfValidity() string // E.g. "1974–1992"
	SetPeriodOfValidity(v string)

	// A list alias and them are not fit ShortName/CommonName/Native/RegionInCN.
	GetAlias() []string // E.g. "USA" "US" for "United States".
	SetAlias(v []string)

	// The common name in [a-zA-Z0-9 ], transform it from short name and sanitized.
	// E.g. "South Korea" for "the Republic of Korea".
	GetCommonName() string
	SetCommonName(v string)

	GetCommonNameInAlphaNumeric() string // E.g. "UnitedStates" for "United States", "AlandIslands" for "Åland Islands"
	SetCommonNameInAlphaNumeric(v string)

	GetCallingCode() string // ref: https://en.wikipedia.org/wiki/List_of_telephone_country_codes
	SetCallingCode(v string)

	// The capital name in English.
	GetCapital() string // E.g. "Washington, D.C."
	SetCapital(v string)

	GetCapitalInNative() string // E.g. "Washington, D.C."
	SetCapitalInNative(v string)

	// Official or native language(s) (alphabet/script).
	// https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_and_their_capitals_in_native_languages
	GetLanguages() []string // E.g. ["English","Spanish","Cajun French","Indigenous","Hawaiian"]
	SetLanguages(v []string)

	GetRegionInCN() string // This field is not a part of official ISO 3166. E.g. "美国"
	SetRegionInCN(v string)

	GetRegionInNative() string // E.g. "United States", "Åland Islands", "香港"
	SetRegionInNative(v string)
}
