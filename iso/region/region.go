// country, region, dependent territory or special areas of geographical interest name info.
// ref:
//
//	https://en.wikipedia.org/wiki/ISO_3166
package region

import (
	"strings"

	"github.com/giant-stone/iso3166/iso/iso3166"
	"github.com/giant-stone/iso3166/iso/iso3166data"
)

var (
	NameAlias = map[string]string{
		"USA": "United States",

		"HongKongSARChina": "Hong Kong",
		"MacaoSARChina":    "Macao",
	}
)

func NewFromName(s string) (rs *iso3166.Region) {
	if alias, ok := NameAlias[s]; ok {
		s = alias
	}

	s = strings.ToLower(strings.ReplaceAll(s, " ", ""))

	rs, ok := iso3166data.FromName[s]
	if ok {
		return rs
	}
	return nil
}

var (
	ChineseNameAlias = map[string]string{
		"中国": "中国大陆",
		"香港": "中国香港",
		"澳门": "中国澳门",
		"台湾": "中国台湾",
	}
)

func NewFromChineseName(s string) (rs *iso3166.Region) {
	if alias, ok := ChineseNameAlias[s]; ok {
		s = alias
	}

	rs, ok := iso3166data.FromNameInChinese[s]
	if ok {
		return rs
	}
	return nil
}

func NewFromCode(s string) (rs *iso3166.Region) {
	s = strings.ToUpper(s)
	rs, ok := iso3166data.FromCode[s]
	if ok {
		return rs
	}
	return nil
}
