package iso_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
)

func TestTable_MergeActionMerge(t *testing.T) {
	type fields struct {
		MapEntities map[string]iso.IEntity
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
				MapEntities: map[string]iso.IEntity{
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
				MapEntities: map[string]iso.IEntity{
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
			myTable := iso.NewTable("").SetGroupBy(iso.GroupByIso3166CodeOrVariantName).Load(tt.fields.MapEntities)
			myTable.Merge(tt.args.srcItems, tt.args.action)

			gotEntityMap := myTable.Map()
			require.Equal(t, len(tt.wantEntities), len(gotEntityMap))

			for key, wantEntity := range tt.wantEntities {
				gotEntity := gotEntityMap[wantEntity.GetAlpha2Code()]
				require.Equal(t, wantEntity, gotEntity, "key=%d", key)
			}
		})
	}
}

func TestTable_MergeActionFillWithIso4217(t *testing.T) {
	type fields struct {
		destItems map[string]iso.IEntity
	}
	type args struct {
		srcItems map[string]iso.IEntity
		action   iso.MergeAction
		groupBy  iso.GroupBy
	}
	tests := []struct {
		name   string
		fields fields
		args   args

		wantEntities map[string]iso.IEntity
		wantTotal    int
	}{
		{
			name: "test action iso.MergeActionFillWithIso4217",
			// ISO 3166 part 1
			fields: fields{
				destItems: map[string]iso.IEntity{
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
				action:  iso.MergeActionFillWithIso4217,
				groupBy: iso.GroupByIso3166CodeOrVariantName,
			},

			wantEntities: map[string]iso.IEntity{
				"CN": &iso.Entity{
					// iso3166 fields
					Alpha2Code: "CN", Alpha3Code: "CHN", Independent: true, NumericCode: "156", ShortName: "China", CommonName: "China", CommonNameInAlphaNumeric: "China", RegionInCN: "中国",

					// 4217 fields
					AlphabeticCode: "CNY", NumericCode4217: "156", Currency: "Renminbi", MinorUnit: 2,
				},

				"CW": &iso.Entity{
					Alpha2Code: "CW", Alpha3Code: "CUW", Independent: true, NumericCode: "531", ShortName: "Curaçao", CommonName: "Curacao", CommonNameInAlphaNumeric: "Curacao", RegionInCN: "库拉索",

					AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2,
				},
			},

			wantTotal: 2,
		},

		{
			name: "test action iso.MergeActionFillWithIso3166",
			// ISO 4217
			fields: fields{
				destItems: map[string]iso.IEntity{
					"ANG": &iso.Entity{
						AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2,
						Entities: []string{"CW", "SX"},
					},

					"HKD": &iso.Entity{
						AlphabeticCode: "HKD", NumericCode4217: "344", Currency: "Hong Kong dollar", MinorUnit: 2,
						Entities: []string{"Hong Kong"},
					},
				},
			},

			// ISO 3166 part 1
			args: args{
				srcItems: map[string]iso.IEntity{
					// use alpha-2 code as key
					"HK": &iso.Entity{
						Alpha2Code: "HK", Alpha3Code: "HKG", Independent: false, NumericCode: "344", ShortName: "Hong Kong", CommonName: "Hong Kong", CommonNameInAlphaNumeric: "HongKong", RegionInCN: "香港",
					},
				},
				action:  iso.MergeActionFillWithIso3166,
				groupBy: iso.GroupByIso4217AlphabeticCode,
			},

			wantEntities: map[string]iso.IEntity{
				"ANG": &iso.Entity{
					// 4217 fields
					AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2,

					// They are no changes since they already are ISO 3166 alpha-2 codes.
					Entities: []string{"CW", "SX"},
				},

				"HKD": &iso.Entity{
					// 4217 fields
					AlphabeticCode: "HKD", NumericCode4217: "344", Currency: "Hong Kong dollar", MinorUnit: 2,

					// The common name "Hong Kong" should be replace with alpha-2 code "HK".
					Entities: []string{"HK"},
				},
			},

			wantTotal: 2,
		},
	}
	for idx, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			myTable := iso.NewTable("").SetGroupBy(tt.args.groupBy).Load(tt.fields.destItems)
			myTable.Merge(tt.args.srcItems, tt.args.action)

			gotEntityMap := myTable.Map()
			require.Equal(t, tt.wantTotal, len(gotEntityMap), "idx=%d", idx)

			for key, wantEntity := range tt.wantEntities {
				var gotEntity iso.IEntity
				if tt.args.groupBy == iso.GroupByIso3166CodeOrVariantName {
					gotEntity = gotEntityMap[wantEntity.GetAlpha2Code()]
				} else if tt.args.groupBy == iso.GroupByIso4217AlphabeticCode {
					gotEntity = gotEntityMap[wantEntity.GetAlphabeticCode()]
				}
				require.Equal(t, wantEntity, gotEntity, "idx=%d key=%s", idx, key)
			}
		})
	}
}
