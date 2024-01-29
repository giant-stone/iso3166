package region_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso/iso3166"
	"github.com/giant-stone/iso3166/iso/region"
)

func TestNewFromName(t *testing.T) {
	for idx, item := range []struct {
		s    string
		want *iso3166.Region
	}{
		{
			s: "China",
			want: &iso3166.Region{
				Name:          "China",
				NameInChinese: "中国大陆",
				Alpha2code:    "CN",
			},
		},

		{
			s: "Hong Kong",
			want: &iso3166.Region{
				Name:          "Hong Kong",
				NameInChinese: "中国香港",
				Alpha2code:    "HK",
			},
		},

		{
			s: "HongKong",
			want: &iso3166.Region{
				Name:          "Hong Kong",
				NameInChinese: "中国香港",
				Alpha2code:    "HK",
			},
		},

		{
			s: "Taiwan",
			want: &iso3166.Region{
				Name:          "Taiwan",
				NameInChinese: "中国台湾",
				Alpha2code:    "TW",
			},
		},

		{
			s: "United States",
			want: &iso3166.Region{
				Name:          "United States",
				NameInChinese: "美国",
				Alpha2code:    "US",
			},
		},

		{
			s: "UnitedStates",
			want: &iso3166.Region{
				Name:          "United States",
				NameInChinese: "美国",
				Alpha2code:    "US",
			},
		},
	} {
		got := region.NewFromName(item.s)
		require.NotNil(t, got, "idx=%d -%s-", idx, item.s)

		require.Equal(t, item.want.Name, got.Name, item.s+" Name")
		require.Equal(t, item.want.NameInChinese, got.NameInChinese, item.s+" NameInChinese")
		require.Equal(t, item.want.Alpha2code, got.Alpha2code, item.s+" Alpha2code")
	}
}

func TestNewFromChineseName(t *testing.T) {
	for _, item := range []struct {
		s    string
		want *iso3166.Region
	}{
		{
			s: "中国",
			want: &iso3166.Region{
				Name:          "China",
				NameInChinese: "中国大陆",
				Alpha2code:    "CN",
				Alpha3code:    "CHN",
			},
		},

		{
			s: "台湾",
			want: &iso3166.Region{
				Name:          "Taiwan",
				NameInChinese: "中国台湾",
				Alpha2code:    "TW",
				Alpha3code:    "TWN",
			},
		},

		{
			s: "中国大陆",
			want: &iso3166.Region{
				Name:          "China",
				NameInChinese: "中国大陆",
				Alpha2code:    "CN",
				Alpha3code:    "CHN",
			},
		},

		{
			s: "中国香港",
			want: &iso3166.Region{
				Name:          "Hong Kong",
				NameInChinese: "中国香港",
				Alpha2code:    "HK",
				Alpha3code:    "HKG",
			},
		},

		{
			s: "中国台湾",
			want: &iso3166.Region{
				Name:          "Taiwan",
				NameInChinese: "中国台湾",
				Alpha2code:    "TW",
				Alpha3code:    "TWN",
			},
		},

		{
			s: "朝鲜",
			want: &iso3166.Region{
				Name:          "Korea",
				NameInChinese: "朝鲜",
				Alpha3code:    "XKO",
			},
		},

		{
			s: "北韩",
			want: &iso3166.Region{
				Name:          "North Korea",
				NameInChinese: "北韩",
				Alpha2code:    "KP",
				Alpha3code:    "PRK",
			},
		},

		{
			s: "南韩",
			want: &iso3166.Region{
				Name:          "South Korea",
				NameInChinese: "南韩",
				Alpha2code:    "KR",
				Alpha3code:    "KOR",
			},
		},

		{
			s: "科索沃",
			want: &iso3166.Region{
				Name:          "Kosovo",
				NameInChinese: "科索沃",
				Alpha2code:    "XK",
				Alpha3code:    "XKV",
			},
		},

		{
			s: "苏联",
			want: &iso3166.Region{
				Name:          "Soviet Union",
				NameInChinese: "苏联",
				Alpha2code:    "SU",
				Alpha3code:    "SUN",
				Alpha4code:    "SUHH",
			},
		},
	} {
		// TODO: compare all fields
		got := region.NewFromChineseName(item.s)
		require.NotNil(t, got, item.s)

		require.Equal(t, item.want.Name, got.Name, item.s+" Name")
		require.Equal(t, item.want.NameInChinese, got.NameInChinese, item.s+" NameInChinese")
		require.Equal(t, item.want.Alpha2code, got.Alpha2code, item.s+" Alpha2code")
		require.Equal(t, item.want.Alpha3code, got.Alpha3code, item.s+" Alpha3code")
		require.Equal(t, item.want.Alpha4code, got.Alpha4code, item.s+" Alpha4code")
	}
}

func TestNewFromCode(t *testing.T) {
	for _, item := range []struct {
		s    string
		want *iso3166.Region
	}{
		{
			s: "CN",
			want: &iso3166.Region{
				Name:          "China",
				NameInChinese: "中国大陆",
				Alpha2code:    "CN",
			},
		},

		{
			s: "TW",
			want: &iso3166.Region{
				Name:          "Taiwan",
				NameInChinese: "中国台湾",
				Alpha2code:    "TW",
			},
		},
	} {
		// TODO: compare all fields
		got := region.NewFromCode(item.s)
		require.NotNil(t, got, item.s)

		require.Equal(t, item.want.Name, got.Name, item.s+" Name")
		require.Equal(t, item.want.NameInChinese, got.NameInChinese, item.s+" NameInChinese")
		require.Equal(t, item.want.Alpha2code, got.Alpha2code, item.s+" Alpha2code")
	}
}
