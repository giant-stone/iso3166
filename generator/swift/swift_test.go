package swift

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
)

func TestGenerator_BytesIso3166(t *testing.T) {
	g := &Generator{
		Table: iso.NewTable("").SetGroupBy(iso.GroupByIso3166CodeOrVariantName).Load(
			map[string]iso.IEntity{
				"CN": &iso.Entity{Alpha2Code: "CN", CommonName: "China", CommonNameInAlphaNumeric: "China"},
				"JP": &iso.Entity{Alpha2Code: "JP", CommonName: "Japan", CommonNameInAlphaNumeric: "Japan"},
				"KR": &iso.Entity{Alpha2Code: "KR", CommonName: "South Korea", CommonNameInAlphaNumeric: "SouthKorea"},
			},
		),
	}

	got, err := g.Bytes(true)
	require.NoError(t, err)

	body := string(got)
	require.Contains(t, body, "public struct Entity3166")
	require.Contains(t, body, "public let China = Entity3166(")
	require.Contains(t, body, "public let FromCode: [String: Entity3166] = [")
	require.Contains(t, body, "\"CN\": China,")
	require.Contains(t, body, "public let FromCommonNameInAlphaNumeric: [String: Entity3166] = [")
}

func TestGenerator_BytesIso4217(t *testing.T) {
	g := &Generator{
		Table: iso.NewTable("").SetGroupBy(iso.GroupByIso4217AlphabeticCode).Load(
			map[string]iso.IEntity{
				"HKD": &iso.Entity{AlphabeticCode: "HKD", NumericCode4217: "344", Currency: "Hong Kong dollar", MinorUnit: 2},
				"CNY": &iso.Entity{AlphabeticCode: "CNY", NumericCode4217: "156", Currency: "Renminbi", MinorUnit: 2},
			},
		),
	}

	got, err := g.Bytes(true)
	require.NoError(t, err)

	body := string(got)
	require.Contains(t, body, "public struct Entity4217")
	require.Contains(t, body, "public let HKD = Entity4217(")
	require.Contains(t, body, "public let FromAlphabeticCode: [String: Entity4217] = [")
	require.Contains(t, body, "\"HKD\": HKD,")
}
