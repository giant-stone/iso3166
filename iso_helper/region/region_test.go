package region_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	iso_data "github.com/giant-stone/iso3166/gen/go"
	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/iso_helper/region"
)

func TestNewFromCommonNameInAlphaNumeric(t *testing.T) {
	for idx, item := range []struct {
		s    string
		want iso.IEntity
	}{
		{
			s: "China",
			want: &iso.Entity{
				CommonName: "China",
				RegionInCN: "中国大陆",
				Alpha2Code: "CN",
			},
		},

		{
			s: "Hong Kong",
			want: &iso.Entity{
				CommonName: "Hong Kong",
				RegionInCN: "中国香港",
				Alpha2Code: "HK",
			},
		},

		{
			s: "HongKong",
			want: &iso.Entity{
				CommonName: "Hong Kong",
				RegionInCN: "中国香港",
				Alpha2Code: "HK",
			},
		},

		{
			s: "Taiwan",
			want: &iso.Entity{
				CommonName: "Taiwan",
				RegionInCN: "中国台湾",
				Alpha2Code: "TW",
			},
		},

		{
			s: "United States",
			want: &iso.Entity{
				CommonName: "United States",
				RegionInCN: "美国",
				Alpha2Code: "US",
			},
		},

		{
			s: "UnitedStates",
			want: &iso.Entity{
				CommonName: "United States",
				RegionInCN: "美国",
				Alpha2Code: "US",
			},
		},
	} {
		got := region.NewFromCommonNameInAlphaNumeric(item.s)
		require.NotNil(t, got, "idx=%d -%s-", idx, item.s)

		require.Equal(t, item.want.GetCommonName(), got.GetCommonName(), item.s+" Name")
		require.Equal(t, item.want.GetRegionInCN(), got.GetRegionInCN(), item.s+" RegionInCN")
		require.Equal(t, item.want.GetAlpha2Code(), got.GetAlpha2Code(), item.s+" Alpha2Code")
	}
}

func TestNewFromChineseName(t *testing.T) {
	for _, item := range []struct {
		s    string
		want iso.IEntity
	}{
		{
			s: "中国",
			want: &iso.Entity{
				CommonName: "China",
				RegionInCN: "中国大陆",
				Alpha2Code: "CN",
				Alpha3Code: "CHN",
			},
		},

		{
			s: "大陆",
			want: &iso.Entity{
				CommonName: "China",
				RegionInCN: "中国大陆",
				Alpha2Code: "CN",
				Alpha3Code: "CHN",
			},
		},

		{
			s: "台湾",
			want: &iso.Entity{
				CommonName: "Taiwan",
				RegionInCN: "中国台湾",
				Alpha2Code: "TW",
				Alpha3Code: "TWN",
			},
		},

		{
			s: "中国大陆",
			want: &iso.Entity{
				CommonName: "China",
				RegionInCN: "中国大陆",
				Alpha2Code: "CN",
				Alpha3Code: "CHN",
			},
		},

		{
			s: "中国香港",
			want: &iso.Entity{
				CommonName: "Hong Kong",
				RegionInCN: "中国香港",
				Alpha2Code: "HK",
				Alpha3Code: "HKG",
			},
		},

		{
			s: "中国台湾",
			want: &iso.Entity{
				CommonName: "Taiwan",
				RegionInCN: "中国台湾",
				Alpha2Code: "TW",
				Alpha3Code: "TWN",
			},
		},

		{
			s: "北韩",
			want: &iso.Entity{
				CommonName: "North Korea",
				RegionInCN: "北韩",
				Alpha2Code: "KP",
				Alpha3Code: "PRK",
			},
		},

		{
			s: "南韩",
			want: &iso.Entity{
				CommonName: "South Korea",
				RegionInCN: "南韩",
				Alpha2Code: "KR",
				Alpha3Code: "KOR",
			},
		},

		{
			s: "科索沃",
			want: &iso.Entity{
				CommonName: "Kosovo",
				RegionInCN: "科索沃",
				Alpha2Code: "XK",
				Alpha3Code: "XKX",
			},
		},

		{
			s: "苏联",
			want: &iso.Entity{
				CommonName: "Soviet Union",
				RegionInCN: "苏联",
				Alpha2Code: "SU",
				Alpha3Code: "SUN",
				Alpha4Code: "SUHH",
			},
		},
	} {
		// TODO: compare all fields
		got := region.NewFromRegionInCN(item.s)
		require.NotNil(t, got, item.s)

		require.Equal(t, item.want.GetCommonName(), got.GetCommonName(), item.s+" Name")
		require.Equal(t, item.want.GetRegionInCN(), got.GetRegionInCN(), item.s+" RegionInCN")
		require.Equal(t, item.want.GetAlpha2Code(), got.GetAlpha2Code(), item.s+" Alpha2Code")
		require.Equal(t, item.want.GetAlpha3Code(), got.GetAlpha3Code(), item.s+" Alpha3code")
		require.Equal(t, item.want.GetAlpha4Code(), got.GetAlpha4Code(), item.s+" Alpha4code")
	}
}

func TestNewFromCode(t *testing.T) {
	for _, item := range []struct {
		s    string
		want iso.IEntity
	}{
		{
			s: "CN",
			want: &iso.Entity{
				CommonName: "China",
				RegionInCN: "中国大陆",
				Alpha2Code: "CN",
			},
		},

		{
			s: "TW",
			want: &iso.Entity{
				CommonName: "Taiwan",
				RegionInCN: "中国台湾",
				Alpha2Code: "TW",
			},
		},
	} {
		// TODO: compare all fields
		got := region.NewFromCode(item.s)
		require.NotNil(t, got, item.s)

		require.Equal(t, item.want.GetCommonName(), got.GetCommonName(), item.s+" Name")
		require.Equal(t, item.want.GetRegionInCN(), got.GetRegionInCN(), item.s+" RegionInCN")
		require.Equal(t, item.want.GetAlpha2Code(), got.GetAlpha2Code(), item.s+" Alpha2Code")
	}
}

func TestTotalRegions(t *testing.T) {
	want := 193
	require.LessOrEqual(t, want, len(iso_data.FromCode), "FromCode")
	require.LessOrEqual(t, want, len(iso_data.FromCommonNameInAlphaNumeric), "FromCommonNameInAlphaNumeric")
	require.LessOrEqual(t, want, len(iso_data.FromRegionInCN), "FromRegionInCN")
}
