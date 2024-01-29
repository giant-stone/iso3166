package iso

import (
	"reflect"
	"sort"
	"testing"
)

func TestStringSliceToCodeDataMap(t *testing.T) {
	type args struct {
		items []string
	}
	tests := []struct {
		name   string
		args   args
		wantRs map[string]string
	}{
		// TODO: Add test cases.
		{
			name: "auto unique",
			args: args{
				items: []string{"FOO|US", "FOO|US", "BAR|HK"},
			},
			wantRs: map[string]string{
				"US": "FOO",
				"HK": "BAR",
			},
		},

		{
			name: "empty",
			args: args{
				items: []string{},
			},
			wantRs: map[string]string{},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if gotRs := StringSliceToCodeDataMap(tt.args.items); !reflect.DeepEqual(gotRs, tt.wantRs) {
				t.Errorf("StringSliceToCodeDataMap() = %v, want %v", gotRs, tt.wantRs)
			}
		})
	}
}

func TestCodeDataMapToStringSlice(t *testing.T) {
	type args struct {
		m map[string]string
	}
	tests := []struct {
		name   string
		args   args
		wantRs []string
	}{
		// TODO: Add test cases.

		{
			name: "",
			args: args{
				m: map[string]string{
					"US": "FOO",
					"HK": "BAR",
				},
			},
			wantRs: []string{"FOO|US", "BAR|HK"},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			sort.Strings(tt.wantRs)
			if gotRs := CodeDataMapToStringSlice(tt.args.m); !reflect.DeepEqual(gotRs, tt.wantRs) {
				t.Errorf("CodeDataMapToStringSlice() = %v, want %v", gotRs, tt.wantRs)
			}
		})
	}
}

func TestMergeStringSliceToCodeDataMap(t *testing.T) {
	type args struct {
		olds []string
		news []string
	}
	tests := []struct {
		name   string
		args   args
		wantRs map[string]string
	}{
		// TODO: Add test cases.
		{
			name: "auto remove invalid",
			args: args{
				olds: []string{
					"Summer Palace|IT",
					"Summer Palace|US",
					"Une jeunesse chinoise|FR",
					"天安門、恋人たち|JP",
					"頤和園|HK",
					"頤和園|TW",
					"颐和园|CN",

					// invalids
					"HK|頤和園",
					"TW|頤和園",
					"CN|颐和园",
				},
				news: []string{
					"Summer Palace|IT",
					"Summer Palace|US",
					"Une jeunesse chinoise|FR",
					"天安門、恋人たち|JP",
					"頤和園|HK",
					"頤和園|TW",
					"颐和园|CN",
					"颐和园|_",
				},
			},
			wantRs: map[string]string{
				"IT": "Summer Palace",
				"US": "Summer Palace",
				"FR": "Une jeunesse chinoise",
				"JP": "天安門、恋人たち",
				"HK": "頤和園",
				"TW": "頤和園",
				"CN": "颐和园",
				"_":  "颐和园",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if gotRs := MergeStringSliceToCodeDataMap(tt.args.olds, tt.args.news, false); !reflect.DeepEqual(gotRs, tt.wantRs) {
				t.Errorf("MergeStringSliceToCodeDataMap() = %v, want %v", gotRs, tt.wantRs)
			}
		})
	}
}
