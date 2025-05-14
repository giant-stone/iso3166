package util_html

import (
	"testing"
)

func TestRemoveHTMLTags(t *testing.T) {
	type args struct {
		input string
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		// TODO: Add test cases.
		{
			name: "",
			args: args{input: `<img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/23px-Flag_of_Zimbabwe.svg.png" decoding="async" width="23" height="12" class="mw-file-element" data-file-width="1200" data-file-height="600">  Zimbabwe[20]`},
			want: "  Zimbabwe[20]",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := RemoveHTMLTags(tt.args.input); got != tt.want {
				t.Errorf("RemoveHTMLTags() = %v, want %v", got, tt.want)
			}
		})
	}
}
