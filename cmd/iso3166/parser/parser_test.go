package parser_test

import (
	"os"
	"sort"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/cmd/iso3166/parser"
	"github.com/giant-stone/iso3166/iso/iso3166"
)

func TestParseCodes(t *testing.T) {
	// fetch from https://zh.wikipedia.org/wiki/ISO_3166-1
	dat, err := os.ReadFile("../../../testdata/wikipedia.org/zh-cn.ISO_3166-1.220917.html")
	require.NoError(t, err)
	rs, err := parser.ParseIso3166(dat)
	require.NoError(t, err)

	for _, want := range []*iso3166.Region{
		{
			Name:            "China",
			ShortName:       "China",
			NameInNative:    "",
			Alpha2code:      "CN",
			Alpha3code:      "CHN",
			NumericCode:     "156",
			Independent:     true,
			Capital:         "",
			CapitalInNative: "",
			Languages:       nil,
			NameInChinese:   "中国",
		},

		{
			Name:            "Hong Kong",
			ShortName:       "Hong Kong",
			NameInNative:    "",
			Alpha2code:      "HK",
			Alpha3code:      "HKG",
			NumericCode:     "344",
			Independent:     false,
			Capital:         "",
			CapitalInNative: "",
			Languages:       nil,
			NameInChinese:   "香港",
		},

		{
			Name:            "Singapore",
			ShortName:       "Singapore",
			NameInNative:    "",
			Alpha2code:      "SG",
			Alpha3code:      "SGP",
			NumericCode:     "702",
			Independent:     true,
			Capital:         "",
			CapitalInNative: "",
			Languages:       nil,
			NameInChinese:   "新加坡",
		},

		{
			Name:            "United States",
			ShortName:       "United States of America",
			NameInNative:    "",
			Alpha2code:      "US",
			Alpha3code:      "USA",
			NumericCode:     "840",
			Independent:     true,
			Capital:         "",
			CapitalInNative: "",
			Languages:       nil,
			NameInChinese:   "美国",
		},

		{
			Name:            "South Korea",
			ShortName:       "Korea (Republic of)",
			NameInNative:    "",
			Alpha2code:      "KR",
			Alpha3code:      "KOR",
			NumericCode:     "410",
			Independent:     true,
			Capital:         "",
			CapitalInNative: "",
			Languages:       nil,
			NameInChinese:   "韩国",
		},
	} {
		got := rs[want.Name]
		require.Equal(t, want, got, want.Name)
	}
}

func TestParseNativeAndLangs(t *testing.T) {
	dat, err := os.ReadFile("../../../testdata/wikipedia.org/List_of_countries_and_dependencies_and_their_capitals_in_native_languages.220917.html")
	require.NoError(t, err)
	rs, err := parser.ParseNativeAndLangs(dat)
	require.NoError(t, err)

	for _, want := range []*iso3166.Region{
		{
			Name:            "China",
			NameInNative:    "",
			Capital:         "Beijing",
			CapitalInNative: "",
			Languages:       []string{"Mandarin Chinese"},
		},

		{
			Name:            "Hong Kong",
			NameInNative:    "",
			Capital:         "Hong Kong",
			CapitalInNative: "",
			Languages:       []string{"English", "Cantonese"},
		},

		{
			Name:            "Singapore",
			NameInNative:    "",
			Capital:         "Singapore",
			CapitalInNative: "",
			Languages: []string{
				"Malay",
				"English",
				"Mandarin Chinese",
				"Tamil",
			},
		},
	} {
		got := rs[want.Name]
		if want.Languages != nil {
			sort.Strings(want.Languages)
		}
		require.Equal(t, want, got, want.Name)
	}
}

func TestMergeRegions(t *testing.T) {
	dat, err := os.ReadFile("../../../testdata/wikipedia.org/zh-cn.ISO_3166-1.220917.html")
	require.NoError(t, err)
	a, err := parser.ParseIso3166(dat)
	require.NoError(t, err)

	dat, err = os.ReadFile("../../../testdata/wikipedia.org/List_of_countries_and_dependencies_and_their_capitals_in_native_languages.220917.html")
	require.NoError(t, err)
	b, err := parser.ParseNativeAndLangs(dat)
	require.NoError(t, err)

	parser.MergeRegions(a, b)

	for _, want := range []*iso3166.Region{
		{
			Name:            "China",
			ShortName:       "China",
			NameInNative:    "",
			Alpha2code:      "CN",
			Alpha3code:      "CHN",
			NumericCode:     "156",
			Independent:     true,
			Capital:         "Beijing",
			CapitalInNative: "",
			Languages:       []string{"Mandarin Chinese"},
			NameInChinese:   "中国",
		},

		{
			Name:            "Hong Kong",
			ShortName:       "Hong Kong",
			NameInNative:    "",
			Alpha2code:      "HK",
			Alpha3code:      "HKG",
			NumericCode:     "344",
			Independent:     false,
			Capital:         "Hong Kong",
			CapitalInNative: "",
			Languages:       []string{"English", "Cantonese"},
			NameInChinese:   "香港",
		},

		{
			Name:            "United States",
			ShortName:       "United States of America",
			NameInNative:    "",
			Alpha2code:      "US",
			Alpha3code:      "USA",
			NumericCode:     "840",
			Independent:     true,
			Capital:         "Washington, D.C.",
			CapitalInNative: "",
			Languages: []string{"English",
				"Spanish",
				"Cajun French",
				"Indigenous",
				"Hawaiian",
			},
			NameInChinese: "美国",
		},
	} {
		got := a[want.Name]
		sort.Strings(want.Languages)
		sort.Strings(got.Languages)
		require.Equal(t, want, got, want.Name)
	}
}
