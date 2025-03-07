package iso3166p1

import (
	"os"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
)

func TestParser_ParseWikipediaHtml(t *testing.T) {
	type args struct {
		filepath string
	}
	tests := []struct {
		name    string
		args    args
		wantT   iso.ITable
		wantErr bool
	}{
		{
			name: "",
			args: args{filepath: "../..//test_data/zh.wikipedia.org/zh-cn/ISO_3166-1.250305.html"},
			wantT: iso.NewTable("").SetGroupBy(iso.GroupByIso3166CodeOrVariantName).Load(
				map[string]iso.IEntity{
					"CN": &iso.Entity{Alpha2Code: "CN", Alpha3Code: "CHN", Independent: true, NumericCode: "156", ShortName: "China", CommonName: "China", CommonNameInAlphaNumeric: "China", RegionInCN: "中国"},
					"JP": &iso.Entity{Alpha2Code: "JP", Alpha3Code: "JPN", Independent: true, NumericCode: "392", ShortName: "Japan", CommonName: "Japan", CommonNameInAlphaNumeric: "Japan", RegionInCN: "日本"},
					"KR": &iso.Entity{Alpha2Code: "KR", Alpha3Code: "KOR", Independent: true, NumericCode: "410", ShortName: "Korea (Republic of)", CommonName: "Korea Republic Of", CommonNameInAlphaNumeric: "KoreaRepublicOf", RegionInCN: "韩国"},

					"NZ": &iso.Entity{Alpha2Code: "NZ", Alpha3Code: "NZL", Independent: true, NumericCode: "554", ShortName: "New Zealand", CommonName: "New Zealand", CommonNameInAlphaNumeric: "NewZealand", RegionInCN: "新西兰"},

					"CZ": &iso.Entity{Alpha2Code: "CZ", Alpha3Code: "CZE", Independent: true, NumericCode: "203", ShortName: "Czechia", CommonName: "Czechia", CommonNameInAlphaNumeric: "Czechia", RegionInCN: "捷克"},
				}),
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			data, err := os.ReadFile(tt.args.filepath)
			require.NoError(t, err)

			i := New()
			gotRs, err := i.ParseWikipediaHtml(data)
			if (err != nil) != tt.wantErr {
				t.Errorf("ReaderWriter.ParseWikipediaHtml() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			m := gotRs.Map()
			require.LessOrEqual(t, TOTAL_ENTITY, len(m))

			for code, wantEntity := range tt.wantT.Map() {
				if gotEntity, ok := m[code]; ok {
					require.Equal(t, wantEntity, gotEntity, "code=%s", code)
				} else {
					t.Errorf("entity code %s not found in want", code)
				}
			}
		})
	}
}

func TestParseShortName(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name   string
		args   args
		wantRs string
	}{
		{
			name:   "brackets",
			args:   args{s: "Bonaire, Sint Eustatius and Saba[d]"},
			wantRs: "Bonaire, Sint Eustatius and Saba",
		},

		{
			name:   "parentheses",
			args:   args{s: "Cocos (Keeling) Islands"},
			wantRs: "Cocos (Keeling) Islands",
		},

		{
			name:   "comma",
			args:   args{s: "Congo, Democratic Republic of the"},
			wantRs: "Congo, Democratic Republic of the",
		},

		{
			name:   "dot",
			args:   args{s: "Virgin Islands (U.S.)"},
			wantRs: "Virgin Islands (U.S.)",
		},

		{
			name:   "various accented version of u",
			args:   args{s: "Türkiye"},
			wantRs: "Türkiye",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if gotRs := ParseShortName(tt.args.s); gotRs != tt.wantRs {
				t.Errorf("ParseShortName() = -%v-, want -%v-", gotRs, tt.wantRs)
			}
		})
	}
}
