// country, region, dependent territory or special areas of geographical interest name info.
// ref:
//
//	https://en.wikipedia.org/wiki/ISO_3166
package region

import (
	"strings"

	iso_data "github.com/giant-stone/iso3166/gen/go"
	"github.com/giant-stone/iso3166/iso"
)

var (
	NameAlias = map[string]string{
		"USA": "United States",

		"HongKongSARChina": "Hong Kong",
		"MacaoSARChina":    "Macao",
	}
)

func NewFromCommonNameInAlphaNumeric(s string) (rs iso.IEntity) {
	if alias, ok := NameAlias[s]; ok {
		s = alias
	}

	s = strings.ReplaceAll(s, " ", "")

	rs, ok := iso_data.FromCommonNameInAlphaNumeric[s]
	if ok {
		return rs
	}
	return nil
}

var (
	ChineseNameAlias = map[string]string{
		"大陆": "中国大陆",
		"中国": "中国大陆",
		"香港": "中国香港",
		"澳门": "中国澳门",
		"台湾": "中国台湾",
	}
)

func NewFromRegionInCN(s string) (rs iso.IEntity) {
	if alias, ok := ChineseNameAlias[s]; ok {
		s = alias
	}

	rs, ok := iso_data.FromRegionInCN[s]
	if ok {
		return rs
	}
	return nil
}

func NewFromCode(s string) (rs iso.IEntity) {
	s = strings.ToUpper(s)
	rs, ok := iso_data.FromCode[s]
	if ok {
		return rs
	}
	return nil
}
