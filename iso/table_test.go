package iso_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
)

func TestTable_Merge(t *testing.T) {
	type fields struct {
		MapKeyIsAlpha2Code map[string]iso.IEntity
	}
	type args struct {
		srcItems map[string]iso.IEntity
		action   iso.MergeAction
	}
	tests := []struct {
		name   string
		fields fields
		args   args

		wantEntities map[string]iso.IEntity
	}{
		{
			name: "override the CommonName field value",
			fields: fields{
				MapKeyIsAlpha2Code: map[string]iso.IEntity{
					"CN": &iso.Entity{Alpha2Code: "CN", CommonName: "China"},
					"JP": &iso.Entity{Alpha2Code: "JP", CommonName: "Japan"},
					"KR": &iso.Entity{Alpha2Code: "KR", CommonName: "Korea (Republic of)"},
				},
			},
			args: args{
				srcItems: map[string]iso.IEntity{
					"KR": &iso.Entity{Alpha2Code: "KR", CommonName: "South Korea"},
				},
				action: iso.MergeActionMerge,
			},

			wantEntities: map[string]iso.IEntity{
				"CN": &iso.Entity{Alpha2Code: "CN", CommonName: "China", CommonNameInAlphaNumeric: "China"},
				"JP": &iso.Entity{Alpha2Code: "JP", CommonName: "Japan", CommonNameInAlphaNumeric: "Japan"},
				"KR": &iso.Entity{Alpha2Code: "KR", CommonName: "South Korea", CommonNameInAlphaNumeric: "SouthKorea"},
			},
		},

		{
			name: "auto deduplicate",
			fields: fields{
				MapKeyIsAlpha2Code: map[string]iso.IEntity{
					"CN": &iso.Entity{Alpha2Code: "CN", CommonName: "China"},
					"JP": &iso.Entity{Alpha2Code: "JP", CommonName: "Japan"},
					"KR": &iso.Entity{Alpha2Code: "KR", CommonName: "South Korea"},
				},
			},
			args: args{
				srcItems: map[string]iso.IEntity{
					"South Korea": &iso.Entity{Alpha2Code: "", CommonName: "South Korea"},
				},
				action: iso.MergeActionMerge,
			},

			wantEntities: map[string]iso.IEntity{
				"CN": &iso.Entity{Alpha2Code: "CN", CommonName: "China", CommonNameInAlphaNumeric: "China"},
				"JP": &iso.Entity{Alpha2Code: "JP", CommonName: "Japan", CommonNameInAlphaNumeric: "Japan"},
				"KR": &iso.Entity{Alpha2Code: "KR", CommonName: "South Korea", CommonNameInAlphaNumeric: "SouthKorea"},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			i := iso.NewTable("").Load(tt.fields.MapKeyIsAlpha2Code)
			i.Merge(tt.args.srcItems, tt.args.action)

			gotEntityMap := i.Map()
			require.Equal(t, len(tt.wantEntities), len(gotEntityMap))

			for key, wantEntity := range tt.wantEntities {
				gotEntity := gotEntityMap[wantEntity.GetAlpha2Code()]
				require.Equal(t, wantEntity, gotEntity, "key=%d", key)
			}
		})
	}
}

func TestTable_Merge3166And4217(t *testing.T) {
	type fields struct {
		MapKeyIsAlpha2Code map[string]iso.IEntity
	}
	type args struct {
		srcItems map[string]iso.IEntity
		action   iso.MergeAction
	}
	tests := []struct {
		name   string
		fields fields
		args   args

		wantEntities map[string]iso.IEntity
	}{
		{
			name: "Merge ISO 3166 with ISO 4217",
			// ISO 3166 part 1
			fields: fields{
				MapKeyIsAlpha2Code: map[string]iso.IEntity{
					"CN": &iso.Entity{
						Alpha2Code: "CN", Alpha3Code: "CHN", Independent: true, NumericCode: "156", ShortName: "China", CommonName: "China", CommonNameInAlphaNumeric: "China", RegionInCN: "中国",
					},

					"CW": &iso.Entity{
						Alpha2Code: "CW", Alpha3Code: "CUW", Independent: true, NumericCode: "531", ShortName: "Curaçao", CommonName: "Curacao", CommonNameInAlphaNumeric: "Curacao", RegionInCN: "库拉索",
					},
				},
			},

			// ISO 4217
			args: args{
				srcItems: map[string]iso.IEntity{
					// use Short Name as key
					"China": &iso.Entity{
						Alpha2Code: "", ShortName: "China", AlphabeticCode: "CNY", NumericCode4217: "156", Currency: "Renminbi", MinorUnit: 2,
					},

					// use alpha-2 code as key
					"CW": &iso.Entity{
						Alpha2Code: "CW", ShortName: "Curaçao", AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2,
					},
				},
				action: iso.MergeActionOnlyOverwriteBy4217,
			},

			wantEntities: map[string]iso.IEntity{
				"CN": &iso.Entity{
					// iso3166 field
					Alpha2Code: "CN", Alpha3Code: "CHN", Independent: true, NumericCode: "156", ShortName: "China", CommonName: "China", CommonNameInAlphaNumeric: "China", RegionInCN: "中国",

					// 4217 field
					AlphabeticCode: "CNY", NumericCode4217: "156", Currency: "Renminbi", MinorUnit: 2,
				},

				"CW": &iso.Entity{
					// iso3166 field
					Alpha2Code: "CW", Alpha3Code: "CUW", Independent: true, NumericCode: "531", ShortName: "Curaçao", CommonName: "Curacao", CommonNameInAlphaNumeric: "Curacao", RegionInCN: "库拉索",

					// 4217 field
					AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2,
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			i := iso.NewTable("").Load(tt.fields.MapKeyIsAlpha2Code)
			i.Merge(tt.args.srcItems, tt.args.action)

			gotEntityMap := i.Map()
			require.Len(t, gotEntityMap, 2)
			require.Equal(t, 2, len(gotEntityMap))

			for key, wantEntity := range tt.wantEntities {
				gotEntity := gotEntityMap[wantEntity.GetAlpha2Code()]
				require.Equal(t, wantEntity, gotEntity, "key=%s", key)
			}
		})
	}
}
