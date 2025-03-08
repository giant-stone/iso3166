package currency

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/require"

	iso_data "github.com/giant-stone/iso3166/gen/go"
	"github.com/giant-stone/iso3166/iso"
	"github.com/giant-stone/iso3166/parser/iso4217"
)

func TestNewFromAlphabeticCode(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name string
		args args
		want iso.IEntity
	}{
		{
			name: "CNY",
			args: args{s: "CNY"},
			want: &iso.Entity{
				AlphabeticCode: "CNY", NumericCode4217: "156", Currency: "Renminbi", MinorUnit: 2, Entities: []string{"CN"},

				CurrencyInCN:     "人民币",
				CurrencyInNative: "人民币",
			},
		},

		{
			name: "HKD",
			args: args{s: "HKD"},
			want: &iso.Entity{
				AlphabeticCode: "HKD", NumericCode4217: "344", Currency: "Hong Kong dollar", MinorUnit: 2, Entities: []string{"HK"},

				CurrencyInCN:     "港元",
				CurrencyInNative: "港幣",
			},
		},

		{
			name: "ANG",
			args: args{s: "ANG"},
			want: &iso.Entity{
				AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2, Entities: []string{"CW", "SX"},

				CurrencyInCN:     "",
				CurrencyInNative: "",
			},
		},

		{
			name: "CHF",
			args: args{s: "CHF"},
			want: &iso.Entity{
				AlphabeticCode: "CHF", NumericCode4217: "756", Currency: "Swiss franc", MinorUnit: 2, Entities: []string{"LI", "CH"},

				CurrencyInCN:     "瑞士法郎",
				CurrencyInNative: "Swiss franc",
			},
		},

		{
			name: "GBP",
			args: args{s: "GBP"},
			want: &iso.Entity{
				AlphabeticCode: "GBP", NumericCode4217: "826", Currency: "Pound sterling", MinorUnit: 2, Entities: []string{"GB", "GG", "IM", "JE", "SH"},

				CurrencyInCN:     "英镑",
				CurrencyInNative: "Pound sterling",
			},
		},

		{
			name: "USD",
			args: args{s: "USD"},
			want: &iso.Entity{
				AlphabeticCode: "USD", NumericCode4217: "840", Currency: "United States dollar", MinorUnit: 2, Entities: []string{
					"AS", "EC", "FM", "GU", "IO", "MH", "MP", "PA", "PR", "PW",
					"SV", "TC", "UM", "US", "VG",
				},

				CurrencyInCN:     "美元",
				CurrencyInNative: "United States dollar",
			},
		},

		{
			name: "EUR",
			args: args{s: "EUR"},
			want: &iso.Entity{
				AlphabeticCode: "EUR", NumericCode4217: "978", Currency: "Euro", MinorUnit: 2,
				Entities: []string{
					"AD", "AT", "AX", "BE", "BL", "CY", "DE", "EE", "ES", "EU",
					"FI", "FR", "GF", "GP", "GR", "HR", "IE", "IT", "LT", "LU",
					"LV", "MC", "ME", "MF", "MQ", "MT", "NL", "PM", "PT", "RE",
					"SI", "SK", "SM", "TF", "VA", "XK", "YT",
				},

				CurrencyInCN:     "欧元",
				CurrencyInNative: "Euro",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := NewFromAlphabeticCode(tt.args.s)
			require.NotNil(t, got)

			sort.Strings(tt.want.GetEntities())
			sort.Strings(got.GetEntities())

			require.Equal(t, tt.want, got, tt.name)

		})
	}
}

func TestTotalCurrency(t *testing.T) {
	want := iso4217.TOTAL_ENTITY
	require.LessOrEqual(t, want, len(iso_data.FromAlphabeticCode), "FromAlphabeticCode")
}
