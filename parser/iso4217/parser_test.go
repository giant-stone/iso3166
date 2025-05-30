package iso4217

import (
	"os"
	"sort"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/tt"
)

func TestParseRegionNameOrCodeFromString(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name           string
		args           args
		wantShortName  string
		wantAlpha2Code string
	}{
		{
			name:           "",
			args:           args{s: "United Arab Emirates"},
			wantShortName:  "United Arab Emirates",
			wantAlpha2Code: "",
		},

		{
			name:           "",
			args:           args{s: "Albania"},
			wantShortName:  "Albania",
			wantAlpha2Code: "",
		},

		{
			name:           "",
			args:           args{s: "Curaçao (CW)"},
			wantShortName:  "Curaçao",
			wantAlpha2Code: "CW",
		},

		{
			name:           "",
			args:           args{s: "Åland Islands (AX)"},
			wantShortName:  "Åland Islands",
			wantAlpha2Code: "AX",
		},

		{
			name:           "",
			args:           args{s: "Saint Barthélemy (BL)"},
			wantShortName:  "Saint Barthélemy",
			wantAlpha2Code: "BL",
		},

		{
			name: "short name and alpha-2 code in normal form",
			args: args{
				s: "Sint Maarten (SX)",
			},
			wantShortName:  "Sint Maarten",
			wantAlpha2Code: "SX",
		},

		{
			name:           "short name and alpha-2 code with parentheses",
			args:           args{s: "Cocos (Keeling) Islands (CC)"},
			wantShortName:  "Cocos (Keeling) Islands",
			wantAlpha2Code: "CC",
		},

		{
			name:           "name and code with note",
			args:           args{s: "Isle of Man (IM, see Manx pound)"},
			wantShortName:  "Isle of Man",
			wantAlpha2Code: "IM",
		},

		{
			name:           "brackets",
			args:           args{s: "Zimbabwe[20]"},
			wantShortName:  "Zimbabwe",
			wantAlpha2Code: "",
		},

		{
			name:           "irregular name and note",
			args:           args{s: "Falkland Islands (pegged to GBP 1:1)"},
			wantShortName:  "Falkland Islands",
			wantAlpha2Code: "",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			gotShortName, gotAlpha2Code := ParseRegionNameOrCodeFromString(tt.args.s)
			if gotShortName != tt.wantShortName {
				t.Errorf("ParseRegionNameOrCodeFromString() gotShortName = %v, want %v", gotShortName, tt.wantShortName)
			}
			if gotAlpha2Code != tt.wantAlpha2Code {
				t.Errorf("ParseRegionNameOrCodeFromString() gotAlpha2Code = %v, want %v", gotAlpha2Code, tt.wantAlpha2Code)
			}
		})
	}
}

func TestParser_ParseWikipediaHtmlAndGroupBy(t *testing.T) {
	tt.Setup(t)

	type args struct {
		filepath string
		groupBy  iso.GroupBy
	}
	tests := []struct {
		name      string
		args      args
		wantT     iso.ITable
		wantTotal int
		wantErr   bool
	}{
		{
			name: "GroupByIso3166CodeOrVariantName",
			args: args{
				filepath: "../../test_data/en.wikipedia.org/wiki/ISO_4217.250305.html",
				groupBy:  iso.GroupByIso3166CodeOrVariantName,
			},
			wantT: iso.NewTable("").SetGroupBy(iso.GroupByIso3166CodeOrVariantName).Load(map[string]iso.IEntity{
				"CW": &iso.Entity{
					Alpha2Code: "CW", ShortName: "Curaçao", AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2,
				},

				"SX": &iso.Entity{Alpha2Code: "SX", ShortName: "Sint Maarten", AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2},

				"Switzerland": &iso.Entity{Alpha2Code: "", ShortName: "Switzerland", AlphabeticCode: "CHE", NumericCode4217: "947", Currency: "WIR", MinorUnit: 2},
				"LI":          &iso.Entity{Alpha2Code: "LI", ShortName: "Liechtenstein", AlphabeticCode: "CHF", NumericCode4217: "756", Currency: "Swiss franc", MinorUnit: 2},

				"China": &iso.Entity{
					Alpha2Code: "", ShortName: "China", AlphabeticCode: "CNY", NumericCode4217: "156", Currency: "Renminbi", MinorUnit: 2,
				},

				"Japan":       &iso.Entity{Alpha2Code: "", ShortName: "Japan", AlphabeticCode: "JPY", NumericCode4217: "392", Currency: "Japanese yen", MinorUnit: 0},
				"South Korea": &iso.Entity{Alpha2Code: "", ShortName: "South Korea", AlphabeticCode: "KRW", NumericCode4217: "410", Currency: "South Korean won", MinorUnit: 0},
			}),
			wantTotal: 7,
			wantErr:   false,
		},

		{
			name: "GroupByIso4217AlphabeticCode",
			args: args{
				filepath: "../../test_data/en.wikipedia.org/wiki/ISO_4217.250305.html",
				groupBy:  iso.GroupByIso4217AlphabeticCode,
			},
			wantT: iso.NewTable("").SetGroupBy(iso.GroupByIso4217AlphabeticCode).Load(map[string]iso.IEntity{
				"ANG": &iso.Entity{
					AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2,
					Entities: []string{"CW", "SX"},
				},

				"CHF": &iso.Entity{
					AlphabeticCode: "CHF", NumericCode4217: "756", Currency: "Swiss franc", MinorUnit: 2,
					Entities: []string{"Switzerland", "LI"},
				},

				"HKD": &iso.Entity{
					AlphabeticCode: "HKD", NumericCode4217: "344", Currency: "Hong Kong dollar", MinorUnit: 2,
					Entities: []string{"Hong Kong"},
				},
			}),
			wantTotal: 3,
			wantErr:   false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			data, err := os.ReadFile(tt.args.filepath)
			require.NoError(t, err)

			i := New()
			i.GetTable().SetGroupBy(tt.args.groupBy)

			gotT, err := i.ParseWikipediaHtml(data)
			if (err != nil) != tt.wantErr {
				t.Errorf("Parser.ParseWikipediaHtml() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			m := gotT.Map()
			require.LessOrEqual(t, tt.wantTotal, len(m))
			require.Equal(t, tt.wantTotal, len(tt.wantT.Map()))

			for code, wantEntity := range tt.wantT.Map() {
				if gotEntity, ok := m[code]; ok {

					entities := gotEntity.GetEntities()
					sort.Strings(entities)
					gotEntity.SetEntities(entities)

					entities = wantEntity.GetEntities()
					sort.Strings(entities)
					wantEntity.SetEntities(entities)

					require.Equal(t, wantEntity, gotEntity, "code=%s", code)
				} else {
					t.Errorf("entity code %s not found in want", code)
				}
			}
		})
	}
}
