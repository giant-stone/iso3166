package lang_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso_helper/lang"
)

func TestLangNewFromName(t *testing.T) {
	for _, item := range []struct {
		s    string
		want *lang.ExtInfo
	}{

		{
			s: "Mandarin",
			want: &lang.ExtInfo{
				Name:       "Mandarin",
				NativeName: "汉语普通话",
				Code:       "cmn",
			},
		},

		{
			s: "Cantonese",
			want: &lang.ExtInfo{
				Name:       "Cantonese",
				NativeName: "粵語",
				Code:       "yue",
			},
		},

		{
			s: "Chinese",
			want: &lang.ExtInfo{
				Name:       "Simplified Chinese",
				NativeName: "简体中文",
				Code:       "zh-Hans",
			},
		},

		{
			s: "Simplified Chinese",
			want: &lang.ExtInfo{
				Name:       "Simplified Chinese",
				NativeName: "简体中文",
				Code:       "zh-Hans",
			},
		},

		{
			s: "Traditional Chinese",
			want: &lang.ExtInfo{
				Name:       "Traditional Chinese",
				NativeName: "正體中文",
				Code:       "zh-Hant",
			},
		},

		{
			s: "English",
			want: &lang.ExtInfo{
				Name:       "English",
				NativeName: "English",
				Code:       "en",
			},
		},
	} {
		got := lang.NewFromName(item.s)
		require.Equal(t, item.want, got, item.s)
	}
}

func TestLangNewFromCode(t *testing.T) {
	for _, item := range []struct {
		s    string
		want *lang.ExtInfo
	}{

		{
			s: "cmn",
			want: &lang.ExtInfo{
				Name:       "Mandarin",
				NativeName: "汉语普通话",
				Code:       "cmn",
			},
		},

		{
			s: "yue",
			want: &lang.ExtInfo{
				Name:       "Cantonese",
				NativeName: "粵語",
				Code:       "yue",
			},
		},

		{
			s: "zh",
			want: &lang.ExtInfo{
				Name:       "Simplified Chinese",
				NativeName: "简体中文",
				Code:       "zh-Hans",
			},
		},

		{
			s: "zh-Hans",
			want: &lang.ExtInfo{
				Name:       "Simplified Chinese",
				NativeName: "简体中文",
				Code:       "zh-Hans",
			},
		},

		{
			s: "zh-Hans",
			want: &lang.ExtInfo{
				Name:       "Simplified Chinese",
				NativeName: "简体中文",
				Code:       "zh-Hans",
			},
		},

		{
			s: "zh-Hant",
			want: &lang.ExtInfo{
				Name:       "Traditional Chinese",
				NativeName: "正體中文",
				Code:       "zh-Hant",
			},
		},

		{
			s: "en",
			want: &lang.ExtInfo{
				Name:       "English",
				NativeName: "English",
				Code:       "en",
			},
		},
	} {
		got := lang.NewFromCode(item.s)
		require.Equal(t, item.want, got, item.s)
	}
}

func TestLangNewFromNativeName(t *testing.T) {
	for _, item := range []struct {
		s    string
		want *lang.ExtInfo
	}{

		{
			s: "汉语普通话",
			want: &lang.ExtInfo{
				Name:       "Mandarin",
				NativeName: "汉语普通话",
				Code:       "cmn",
			},
		},

		{
			s: "粵語",
			want: &lang.ExtInfo{
				Name:       "Cantonese",
				NativeName: "粵語",
				Code:       "yue",
			},
		},

		{
			s: "中文",
			want: &lang.ExtInfo{
				Name:       "Simplified Chinese",
				NativeName: "简体中文",
				Code:       "zh-Hans",
			},
		},

		{
			s: "简体中文",
			want: &lang.ExtInfo{
				Name:       "Simplified Chinese",
				NativeName: "简体中文",
				Code:       "zh-Hans",
			},
		},

		{
			s: "正體中文",
			want: &lang.ExtInfo{
				Name:       "Traditional Chinese",
				NativeName: "正體中文",
				Code:       "zh-Hant",
			},
		},

		{
			s: "English",
			want: &lang.ExtInfo{
				Name:       "English",
				NativeName: "English",
				Code:       "en",
			},
		},
	} {
		got := lang.NewFromNativeName(item.s)
		require.Equal(t, item.want, got, item.s)
	}
}
