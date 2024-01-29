package iso

import (
	"fmt"
	"sort"
	"strings"

	"github.com/giant-stone/iso3166/iso/iso3166data"
)

const (
	// 本地化数据分隔符，如 `data|regionCode`
	DefaultSeparatorL10n = "|"
)

const (
	ReservedRegionCodeUnderline = "_"
)

// convert string of slice to region code data mapping
// ["FOO|US", "BAR|HK"] => {"US":"FOO","HK":"BAR"}
func StringSliceToCodeDataMap(items []string) (rs map[string]string) {
	rs = make(map[string]string)
	for _, item := range items {
		splits := strings.Split(item, DefaultSeparatorL10n)
		if len(splits) != 2 {
			continue
		}

		rs[splits[1]] = splits[0]
	}
	return rs
}

func CodeDataMapToStringSlice(m map[string]string) (rs []string) {
	rs = make([]string, 0)
	for code, data := range m {
		rs = append(rs, ComposeRegionItem(data, code))
	}

	sort.Strings(rs)
	return rs
}

func MergeStringSliceToCodeDataMap(olds, news []string, keepEmpty bool) (rs map[string]string) {
	rs = StringSliceToCodeDataMap(olds)

	for _, item := range news {
		data, code, err := DepartRegionItem(item)
		if err != nil {
			continue
		}

		rs[code] = data
	}

	RemoveInvalidData(rs, keepEmpty)

	return rs
}

func RemoveInvalidData(rs map[string]string, keepEmpty bool) {
	for code, data := range rs {
		if _, ok := iso3166data.FromCode[code]; !ok && code != ReservedRegionCodeUnderline {
			delete(rs, code)
		} else if data == "" && !keepEmpty {
			delete(rs, code)
		}
	}
}

func ComposeRegionItem(data, code string) string {
	return fmt.Sprintf("%s%s%s", data, DefaultSeparatorL10n, code)
}

func DepartRegionItem(s string) (data, code string, err error) {
	splits := strings.Split(s, DefaultSeparatorL10n)
	if len(splits) != 2 {
		return "", "", fmt.Errorf("want string in format `data|code`, got unknown -%s-", s)
	}
	data, code = splits[0], splits[1]
	return data, code, nil
}
