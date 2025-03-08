package iso

import (
	"testing"

	"github.com/giant-stone/iso3166/tt"
)

func TestTransformToGoVariableName(t *testing.T) {
	tt.Setup(t)

	type args struct {
		s string
	}
	tests := []struct {
		name   string
		args   args
		wantRs string
		wantOk bool
	}{
		{
			name:   "LATIN CAPITAL LETTER A WITH RING ABOVE",
			args:   args{s: "Åland Islands"},
			wantRs: "Aland Islands",
			wantOk: true,
		},

		{
			name:   "space",
			args:   args{s: "American Samoa"},
			wantRs: "American Samoa",
			wantOk: true,
		},

		{
			name:   "and",
			args:   args{s: "Antigua and Barbuda"},
			wantRs: "Antigua And Barbuda",
			wantOk: true,
		},

		{
			name:   "comma",
			args:   args{s: "Bolivia, Plurinational State of"},
			wantRs: "Bolivia Plurinational State Of",
			wantOk: true,
		},

		{
			name:   "brackets",
			args:   args{s: " Bonaire, Sint Eustatius and Saba[d]	"},
			wantRs: "Bonaire Sint Eustatius And Saba",
			wantOk: true,
		},

		{
			name:   "parentheses",
			args:   args{s: "Cocos (Keeling) Islands"},
			wantRs: "Cocos Keeling Islands",
			wantOk: true,
		},

		{
			name:   "LATIN SMALL LETTER O WITH DIAERESIS",
			args:   args{s: "Côte d'Ivoire"},
			wantRs: "Cote dIvoire",
			wantOk: true,
		},

		{
			name:   "LATIN SMALL LETTER E WITH ACUTE",
			args:   args{s: "Saint Barthélemy"},
			wantRs: "Saint Barthelemy",
			wantOk: true,
		},

		{
			name:   "LATIN SMALL LETTER C WITH CEDILLA",
			args:   args{s: "Curaçao"},
			wantRs: "Curacao",
			wantOk: true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			gotRs, gotOk := TransformToGoVariableName(tt.args.s, true)
			if gotRs != tt.wantRs {
				t.Errorf("TransformToGoVariableName() gotRs = -%v-, want -%v-", gotRs, tt.wantRs)
			}
			if gotOk != tt.wantOk {
				t.Errorf("TransformToGoVariableName() gotOk = %v, want %v", gotOk, tt.wantOk)
			}
		})
	}
}

func TestEntity_Code(t *testing.T) {
	type fields struct {
		Alpha2Code string
		Alpha3Code string
		Alpha4Code string
		CommonName string
	}
	tests := []struct {
		name     string
		fields   fields
		wantCode string
	}{
		{
			name: "alpha-2 code is higher than alpha-3",
			fields: fields{
				Alpha2Code: "XK",
				Alpha3Code: "XKV",
				Alpha4Code: "",
				CommonName: "Kosovo",
			},
			wantCode: "XK",
		},

		{
			name: "alpha-2 code is higher than alpha-3 & alpha-4",
			fields: fields{
				Alpha2Code: "SU",
				Alpha3Code: "SUN",
				Alpha4Code: "SUHH",
				CommonName: "Soviet Union",
			},
			wantCode: "SU",
		},

		{
			name: "alpha-3 code is higher than alpha-4",
			fields: fields{
				Alpha2Code: "XK",
				Alpha3Code: "XKV",
				Alpha4Code: "",
				CommonName: "Kosovo",
			},
			wantCode: "XK",
		},

		{
			name: "only alpha-2",
			fields: fields{
				Alpha2Code: "HK",
				Alpha3Code: "",
				Alpha4Code: "",
				CommonName: "Hong Kong",
			},
			wantCode: "HK",
		},

		{
			name: "only alpha-3",
			fields: fields{
				Alpha2Code: "",
				Alpha3Code: "XWG",
				Alpha4Code: "",
				CommonName: "West Germany",
			},
			wantCode: "XWG",
		},

		{
			name: "only alpha-4",
			fields: fields{
				Alpha2Code: "",
				Alpha3Code: "",
				Alpha4Code: "FQHH",
				CommonName: "French Southern and Antarctic Territories",
			},
			wantCode: "FQHH",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			it := &Entity{
				Alpha2Code: tt.fields.Alpha2Code,
				Alpha3Code: tt.fields.Alpha3Code,
				Alpha4Code: tt.fields.Alpha4Code,
				CommonName: tt.fields.CommonName,
			}
			if gotCode := it.Code(); gotCode != tt.wantCode {
				t.Errorf("Entity.Code() = %v, want %v", gotCode, tt.wantCode)
			}
		})
	}
}
