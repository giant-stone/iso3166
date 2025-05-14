package iso3166p3

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
		name      string
		args      args
		wantT     iso.ITable
		wantTotal int
		wantErr   bool
	}{
		{
			name: "",

			args: args{filepath: "../..//test_data/zh.wikipedia.org/zh-cn/ISO_3166-3.250305.html"},
			wantT: iso.NewTable("").SetGroupBy(iso.GroupByIso3166CodeOrVariantName).Load(map[string]iso.IEntity{
				"SU": &iso.Entity{
					Alpha2Code:               "SU",
					Alpha3Code:               "SUN",
					Alpha4Code:               "SUHH",
					Independent:              false,
					NumericCode:              "810",
					ShortName:                "USSR (Soviet Union)",
					CommonName:               "Soviet Union",
					CommonNameInAlphaNumeric: "SovietUnion",
					RegionInCN:               "苏联",
					PeriodOfValidity:         "1974–1992",
				},
			}),
			wantTotal: 1,
			wantErr:   false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			data, err := os.ReadFile(tt.args.filepath)
			require.NoError(t, err)

			i := New()
			gotT, err := i.ParseWikipediaHtml(data)
			if (err != nil) != tt.wantErr {
				t.Errorf("ReaderWriter.ParseWikipediaHtml() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			m := gotT.Map()
			require.LessOrEqual(t, tt.wantTotal, len(m))
			require.Equal(t, tt.wantTotal, len(tt.wantT.Map()))

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
