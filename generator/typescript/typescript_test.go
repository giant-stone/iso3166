package typescript

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
)

func TestGenerator_BytesIso3166_AliasIsArray(t *testing.T) {
	g := &Generator{
		Table: iso.NewTable("").SetGroupBy(iso.GroupByIso3166CodeOrVariantName).Load(
			map[string]iso.IEntity{
				"CN": &iso.Entity{
					Alpha2Code:               "CN",
					CommonName:               "China",
					CommonNameInAlphaNumeric: "China",
					Alias:                    []string{},
				},
				"CZ": &iso.Entity{
					Alpha2Code:               "CZ",
					CommonName:               "Czechia",
					CommonNameInAlphaNumeric: "Czechia",
					Alias:                    []string{"Czech Republic"},
				},
			},
		),
	}

	got, err := g.Bytes(true)
	require.NoError(t, err)

	body := string(got)
	require.Contains(t, body, "alias: string[];")
	require.Contains(t, body, "alias: [],")
	require.Contains(t, body, `alias: ["Czech Republic"],`)
	require.NotContains(t, body, `alias: "[]",`)
	require.NotContains(t, body, `alias: "["Czech Republic"]",`)
}
