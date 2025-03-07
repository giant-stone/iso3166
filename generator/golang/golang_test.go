package golang

import (
	"go/ast"
	"go/parser"
	"go/token"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/giant-stone/iso3166/iso"
)

func TestGenerator_Bytes(t *testing.T) {
	type fields struct {
		Table iso.ITable
	}
	type args struct {
		fmtPretty bool
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		want    []byte
		wantErr bool

		wantGlobalVars map[string]struct{}
	}{
		// TODO: Add test cases.
		{
			name: "",
			fields: fields{Table: iso.NewTable("").Load(
				map[string]iso.IEntity{
					"CN": &iso.Entity{Alpha2Code: "CN", CommonName: "China"},
					"JP": &iso.Entity{Alpha2Code: "JP", CommonName: "Japan"},
					"KR": &iso.Entity{Alpha2Code: "KR", CommonName: "South Korea"},
				},
			)},
			args: args{
				fmtPretty: true,
			},
			want:    []byte{},
			wantErr: false,

			wantGlobalVars: map[string]struct{}{
				"China":      {},
				"Japan":      {},
				"SouthKorea": {},

				"FromCode":                     {},
				"FromCommonNameInAlphaNumeric": {},
				"FromRegionInCN":               {},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			g := &Generator{
				Table: tt.fields.Table,
			}
			got, err := g.Bytes(tt.args.fmtPretty)
			if (err != nil) != tt.wantErr {
				t.Errorf("Generator.Bytes() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			gotGlobalVars, err := AnalyzeGlobalVars(string(got))
			require.NoError(t, err)

			require.Equal(t, tt.wantGlobalVars, gotGlobalVars)

		})
	}
}

func AnalyzeGlobalVars(src string) (rs map[string]struct{}, err error) {
	rs = make(map[string]struct{})

	// Create a new file set
	fileSet := token.NewFileSet()

	// Parse the source code
	node, err := parser.ParseFile(fileSet, "", src, parser.AllErrors)
	if err != nil {
		return nil, err
	}

	// Traverse the AST to find global variables and functions

	ast.Inspect(node, func(n ast.Node) bool {
		// Find global variable declarations
		if genDecl, ok := n.(*ast.GenDecl); ok && genDecl.Tok == token.VAR {
			for _, spec := range genDecl.Specs {
				if valueSpec, ok := spec.(*ast.ValueSpec); ok {
					for _, name := range valueSpec.Names {
						rs[name.Name] = struct{}{}
					}
				}
			}
		}
		return true
	})

	return rs, nil
}
