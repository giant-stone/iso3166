package currency

import (
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
		// TODO: Add test cases.
		{
			name: "HKD",
			args: args{s: "HKD"},
			want: &iso.Entity{
				AlphabeticCode: "HKD", NumericCode4217: "344", Currency: "Hong Kong dollar", MinorUnit: 2, Entities: []string{"HK"},
			},
		},

		{
			name: "ANG",
			args: args{s: "ANG"},
			want: &iso.Entity{
				AlphabeticCode: "ANG", NumericCode4217: "532", Currency: "Netherlands Antillean guilder", MinorUnit: 2, Entities: []string{"CW", "SX"},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := NewFromAlphabeticCode(tt.args.s)
			require.NotNil(t, got)

			require.Equal(t, tt.want.GetAlphabeticCode(), got.GetAlphabeticCode(), "GetAlphabeticCode")
			require.Equal(t, tt.want.GetNumericCode4217(), got.GetNumericCode4217(), "GetNumericCode4217")
			require.Equal(t, tt.want.GetCurrency(), got.GetCurrency(), "GetCurrency")
			require.Equal(t, tt.want.GetMinorUnit(), got.GetMinorUnit(), "GetMinorUnit")
			require.Equal(t, tt.want.GetEntities(), got.GetEntities(), "GetEntities")

		})
	}
}

func TestTotalCurrency(t *testing.T) {
	want := iso4217.TOTAL_ENTITY
	require.LessOrEqual(t, want, len(iso_data.FromAlphabeticCode), "FromAlphabeticCode")
}
