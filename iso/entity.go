package iso

import (
	"encoding/json"
	"fmt"
	"regexp"
	"strings"
	"unicode"

	"github.com/giant-stone/go/glogging"
)

type IEntity interface {
	ICountryCode
	IIso3166Extended

	ICurrencyCode
	IIso4217Extended

	Clone() IEntity
	String() string
}

type Entity struct {
	//
	// ISO 3166 official fields
	//
	Alpha2Code string

	ShortName          string
	ShortNameLowerCase string
	FullName           string
	Alpha3Code         string

	NumericCode string

	Remarks     []string
	Independent bool

	Status string

	Alpha4Code string

	//
	// ISO 3166 extended fields
	//
	PeriodOfValidity string // E.g. "1974–1992"

	// A list alias and them are not fit ShortName/CommonName/Native/RegionInCN.
	Alias []string // E.g. "USA" "US" for "United States".

	// The common name (a.k.a. display name) must consist of characters in [a-zA-Z0=9 ]. It should be transformed from the shortName and sanitized.
	// E.g. "South Korea" for "the Republic of Korea".
	CommonName string

	CommonNameInAlphaNumeric string // E.g. "UnitedStates" for "United States", "AlandIslands" for "Åland Islands"

	CallingCode string // ref: https://en.wikipedia.org/wiki/List_of_telephone_country_codes

	// The capital name in English.
	Capital string // E.g. "Washington, D.C."

	CapitalInNative string // E.g. "Washington, D.C."

	// Official or native language(s) (alphabet/script).
	// https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_and_their_capitals_in_native_languages
	Languages []string // E.g. ["English","Spanish","Cajun French","Indigenous","Hawaiian"]

	// The commonName in Simplified Chinese, we use the term *region* instead of *commonName* for clearer meaning.
	RegionInCN string // This field is not a part of official ISO 3166. E.g. "美国"

	// The commonName in region native language,
	RegionInNative string // E.g. "United States", "Åland Islands", "香港"

	//
	// ISO 4217 official fields
	AlphabeticCode  string
	NumericCode4217 string
	MinorUnit       int
	Currency        string

	Entities []string

	//
	// ISO 4217 extended fields
	//

	// The currency (entity) in Simplified Chinese.
	CurrencyInCN     string
	CurrencyInNative string
}

// GetCurrencyInNative implements IEntity.
func (it *Entity) GetCurrencyInNative() string {
	return it.CurrencyInNative
}

// SetCurrencyInNative implements IEntity.
func (it *Entity) SetCurrencyInNative(v string) {
	it.CurrencyInNative = v
}

// GetEntities implements IEntity.
func (it *Entity) GetEntities() []string {
	return it.Entities
}

// SetEntities implements IEntity.
func (it *Entity) SetEntities(v []string) {
	it.Entities = v
}

// Clone implements IEntity.
func (it *Entity) Clone() IEntity {
	data, _ := json.Marshal(it)
	var entity Entity
	json.Unmarshal(data, &entity)
	return &entity
}

// String implements IEntity.
func (it *Entity) String() string {
	return fmt.Sprintf("<Entity Alpha2Code=%s Alpha3Code=%s Alpha4Code=%s CommonName=%s AlphabeticCode=%s >",
		it.Alpha2Code,
		it.Alpha3Code,
		it.Alpha4Code,
		it.CommonName,
		it.AlphabeticCode,
	)
}

// GetTerritoryName implements IEntity.
func (it *Entity) GetTerritoryName() string {
	panic("unimplemented")
}

// Code implements IEntity.
// Return alpha code by priority, user assigned one is the high priority, then 2 > 3 > 4.
func (it *Entity) Code() (code string) {
	alpha2Code := it.GetAlpha2Code()
	alpha3Code := it.GetAlpha3Code()
	alpha4Code := it.GetAlpha4Code()

	if alpha2Code != "" {
		return alpha2Code
	} else if alpha3Code != "" {
		return alpha3Code
	} else if alpha4Code != "" {
		return alpha4Code
	}

	return code
}

// SetAlphabeticCode implements IEntity.
func (i *Entity) SetAlphabeticCode(v string) {
	i.AlphabeticCode = v
}

// SetCurrency implements IEntity.
func (i *Entity) SetCurrency(v string) {
	i.Currency = v
}

// SetMinorUnit implements IEntity.
func (i *Entity) SetMinorUnit(v int) {
	i.MinorUnit = v
}

// SetNumericCode4217 implements IEntity.
func (i *Entity) SetNumericCode4217(v string) {
	i.NumericCode4217 = v
}

// SetCurrencyInCN implements IEntity.
func (i *Entity) SetCurrencyInCN(v string) {
	i.CurrencyInCN = v
}

func (i *Entity) SetPeriodOfValidity(v string) {
	i.PeriodOfValidity = v
}

func NewEntity() IEntity {
	return &Entity{}
}

// SetAlias implements IIsoEntity.
func (i *Entity) SetAlias(v []string) {
	i.Alias = v
}

// SetAlpha2Code implements IIsoEntity.
func (i *Entity) SetAlpha2Code(v string) {
	i.Alpha2Code = v
}

// SetAlpha3Code implements IIsoEntity.
func (i *Entity) SetAlpha3Code(v string) {
	i.Alpha3Code = v
}

// SetAlpha4Code implements IIsoEntity.
func (i *Entity) SetAlpha4Code(v string) {
	i.Alpha4Code = v
}

// SetCallingCode implements IIsoEntity.
func (i *Entity) SetCallingCode(v string) {
	i.CallingCode = v
}

// SetCapital implements IIsoEntity.
func (i *Entity) SetCapital(v string) {
	i.Capital = v
}

// SetCapitalInNative implements IIsoEntity.
func (i *Entity) SetCapitalInNative(v string) {
	i.CapitalInNative = v
}

// SetCommonName implements IIsoEntity.
func (i *Entity) SetCommonName(v string) {
	i.CommonName = v
}

// SetCommonNameInAlphaNumeric implements IIsoEntity.
func (i *Entity) SetCommonNameInAlphaNumeric(v string) {
	i.CommonNameInAlphaNumeric = v
}

// SetFullName implements IIsoEntity.
func (i *Entity) SetFullName(v string) {
	i.FullName = v
}

// SetIndependent implements IIsoEntity.
func (i *Entity) SetIndependent(v bool) {
	i.Independent = v
}

// SetLanguages implements IIsoEntity.
func (i *Entity) SetLanguages(v []string) {
	i.Languages = v
}

// SetRegionInNative implements IIsoEntity.
func (i *Entity) SetRegionInNative(v string) {
	i.RegionInNative = v
}

// SetNumericCode implements IIsoEntity.
func (i *Entity) SetNumericCode(v string) {
	i.NumericCode = v
}

// SetShortName implements IIsoEntity.
func (i *Entity) SetShortName(v string) {
	i.ShortName = v
}

// SetShortNameLowerCase implements IIsoEntity.
func (i *Entity) SetShortNameLowerCase(v string) {
	i.ShortNameLowerCase = v
}

// SetRegionInCN implements IIsoEntity.
func (i *Entity) SetRegionInCN(v string) {
	i.RegionInCN = v
}

// GetAlias implements IIsoEntity.
func (i *Entity) GetAlias() []string {
	return i.Alias
}

// GetAlpha2Code implements IIsoEntity.
func (i *Entity) GetAlpha2Code() string {
	return i.Alpha2Code
}

// GetAlpha3Code implements IIsoEntity.
func (i *Entity) GetAlpha3Code() string {
	return i.Alpha3Code
}

// GetAlpha4Code implements IIsoEntity.
func (i *Entity) GetAlpha4Code() string {
	return i.Alpha4Code
}

// GetAlphabeticCode implements IIsoEntity.
func (i *Entity) GetAlphabeticCode() string {
	return i.AlphabeticCode
}

// GetCallingCode implements IIsoEntity.
func (i *Entity) GetCallingCode() string {
	return i.CallingCode
}

// GetCapital implements IIsoEntity.
func (i *Entity) GetCapital() string {
	return i.Capital
}

// GetCapitalInNative implements IIsoEntity.
func (i *Entity) GetCapitalInNative() string {
	return i.CapitalInNative
}

// GetCurrencyInCN implements IIsoEntity.
func (i *Entity) GetCurrencyInCN() string {
	return i.CurrencyInCN
}

// GetCommonName implements IIsoEntity.
func (i *Entity) GetCommonName() string {
	return i.CommonName
}

// GetCommonNameInAlphaNumeric implements IIsoEntity.
func (i *Entity) GetCommonNameInAlphaNumeric() string {
	return i.CommonNameInAlphaNumeric
}

// GetCurrency implements IIsoEntity.
func (i *Entity) GetCurrency() string {
	return i.Currency
}

// GetFullName implements IIsoEntity.
func (i *Entity) GetFullName() string {
	return i.FullName
}

// GetIndependent implements IIsoEntity.
func (i *Entity) GetIndependent() bool {
	return i.Independent
}

// GetLanguages implements IIsoEntity.
func (i *Entity) GetLanguages() []string {
	return i.Languages
}

// GetMinorUnit implements IIsoEntity.
func (i *Entity) GetMinorUnit() int {
	return i.MinorUnit
}

// GetRegionInNative implements IIsoEntity.
func (i *Entity) GetRegionInNative() string {
	return i.RegionInNative
}

// GetNumericCode implements IIsoEntity.
func (i *Entity) GetNumericCode() string {
	return i.NumericCode
}

// GetNumericCode4217 implements IIsoEntity.
func (i *Entity) GetNumericCode4217() string {
	return i.NumericCode4217
}

// GetPeriodOfValidity implements IIsoEntity.
func (i *Entity) GetPeriodOfValidity() string {
	return i.PeriodOfValidity
}

// GetRemarks implements IIsoEntity.
func (i *Entity) GetRemarks() []string {
	return i.Remarks
}

// GetShortName implements IIsoEntity.
func (i *Entity) GetShortName() string {
	return i.ShortName
}

// GetShortNameLowerCase implements IIsoEntity.
func (i *Entity) GetShortNameLowerCase() string {
	return i.ShortNameLowerCase
}

// GetRegionInCN implements IIsoEntity.
func (i *Entity) GetRegionInCN() string {
	return i.RegionInCN
}

// GetStatus implements IIsoEntity.
func (i *Entity) GetStatus() string {
	return i.Status
}

var acceptedUnicodeChars = &unicode.RangeTable{
	R16: []unicode.Range16{
		{0x005F, 0x005F, 1}, // the underscore character '_'
	},
}

// ref: https://go.dev/ref/spec#Identifiers
func TransformToGoVariableName(s string, keepSpacesInIt bool) (rs string, ok bool) {
	s = strings.ReplaceAll(s, ",", " ")

	s = strings.ReplaceAll(s, " of", " Of")
	s = strings.ReplaceAll(s, " and ", " And ")
	s = strings.ReplaceAll(s, " the ", " The ")

	s = strings.ReplaceAll(s, "-", "_")
	s = strings.ReplaceAll(s, ".", "")

	s = strings.ReplaceAll(s, "(", "")
	s = strings.ReplaceAll(s, ")", "")

	s = strings.ReplaceAll(s, "  ", " ")

	// Replace all various accented versions of letter.

	// U+00C5, &#197;. LATIN CAPITAL LETTER A WITH RING ABOVE
	s = strings.ReplaceAll(s, "Å", "A") // "Åland Islands", input 'Å' via option-shift-a on macOS

	// U+00F6, &#246; LATIN SMALL LETTER O WITH DIAERESIS
	s = strings.ReplaceAll(s, "ô", "o") // "Côte d'Ivoire", 'ô' option-i-o
	s = strings.ReplaceAll(s, "'", "")

	// U+00FC, &#252; LATIN SMALL LETTER U WITH DIAERESIS
	s = strings.ReplaceAll(s, "ü", "u") // "Türkiye", 'ü' options-u-u

	// U+00E9, &#233; LATIN SMALL LETTER E WITH ACUTE
	s = strings.ReplaceAll(s, "é", "e") // "Saint Barthélemy", 'é' options-e-e

	// U+00E7, &#231; LATIN SMALL LETTER C WITH CEDILLA
	s = strings.ReplaceAll(s, "ç", "c") // "Curaçao", 'ç' options-c

	re := regexp.MustCompile(`\[.+\]`)
	s = re.ReplaceAllString(s, "")

	s = strings.TrimSpace(s)

	for idx, v := range s {
		if idx == 0 {
			if !unicode.In(v, unicode.Letter, acceptedUnicodeChars) {
				glogging.Sugared.Warnf("  idx=%d, 0x%04x %q failed", idx, v, v)
				return "", false
			}
		} else {
			if !unicode.In(v, unicode.Letter, unicode.Digit, acceptedUnicodeChars, unicode.Space) {
				glogging.Sugared.Warnf("  idx=%d, 0x%04x %q failed", idx, v, v)
				return "", false
			}
		}
	}

	s = strings.TrimSpace(s)

	if !keepSpacesInIt {
		s = strings.ReplaceAll(s, " ", "")
	}

	return s, true
}

func IsAlpha2Code(input string) bool {
	if len(input) != 2 {
		return false
	}

	for _, char := range input {
		if !unicode.IsUpper(char) {
			return false
		}
	}
	return true
}
