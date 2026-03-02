package itu_t_e164

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
)

func TestNormalizeCallingCode(t *testing.T) {
	tests := []struct {
		name string
		s    string
		want string
	}{
		{
			name: "plain code",
			s:    "420",
			want: "420",
		},
		{
			name: "nanp area code",
			s:    "1 (340)",
			want: "1-340",
		},
		{
			name: "tag suffix",
			s:    "1 (NPA)",
			want: "1",
		},
		{
			name: "empty",
			s:    "",
			want: "",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := normalizeCallingCode(tt.s)
			require.Equal(t, tt.want, got)
		})
	}
}

func TestParseCallingCodeEntriesFromText(t *testing.T) {
	tests := []struct {
		name string
		s    string
		want map[string]string
	}{
		{
			name: "multiple countries in one code segment",
			s:    "44: GB, GG, IM, JE",
			want: map[string]string{
				"GB": "44",
				"GG": "44",
				"IM": "44",
				"JE": "44",
			},
		},
		{
			name: "nanp and specific territories",
			s:    "1 (NPA): US and CA 1 (340): VI 1 (345): KY",
			want: map[string]string{
				"US": "1",
				"CA": "1",
				"VI": "1-340",
				"KY": "1-345",
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := parseCallingCodeEntriesFromText(tt.s)
			require.Equal(t, tt.want, got)
		})
	}
}

func TestParser_ParseWikipediaHtml(t *testing.T) {
	data := []byte(`
<html>
  <body>
    <table class="wikitable">
      <tbody>
        <tr>
          <td>1 (NPA): US and CA</td>
          <td>1 (340): VI<br/>1 (345): KY</td>
          <td>420: CZ</td>
          <td>852: HK</td>
          <td>86: CN</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`)

	p := New()
	p.GetTable().SetGroupBy(iso.GroupByIso3166CodeOrVariantName)

	gotT, err := p.ParseWikipediaHtml(data)
	require.NoError(t, err)

	gotM := gotT.Map()
	require.Equal(t, 7, len(gotM))

	for alpha2Code, callingCode := range map[string]string{
		"US": "1",
		"CA": "1",
		"VI": "1-340",
		"KY": "1-345",
		"CZ": "420",
		"HK": "852",
		"CN": "86",
	} {
		entity := gotM[alpha2Code]
		require.NotNil(t, entity, alpha2Code)
		require.Equal(t, alpha2Code, entity.GetAlpha2Code())
		require.Equal(t, callingCode, entity.GetCallingCode())
	}
}
