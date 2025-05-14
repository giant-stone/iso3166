package typescript

import (
	"errors"
	"fmt"
	"os"
	"path"

	"github.com/giant-stone/iso3166/generator"
	"github.com/giant-stone/iso3166/iso"
)

func New(t iso.ITable) generator.IGenerator {
	return &Generator{Table: t}
}

type Generator struct {
	Table iso.ITable
}

// WriteTo implements generator.IGenerator.
func (g *Generator) WriteTo(saveTo string, perm os.FileMode, fmtPretty bool) error {
	data, err := g.Bytes(fmtPretty)
	if err != nil {
		return err
	}

	parent := path.Dir(saveTo)
	if _, err := os.Stat(parent); err != nil {
		if errors.Is(err, os.ErrNotExist) {
			os.MkdirAll(parent, perm)
		} else {
			return err
		}
	}

	return os.WriteFile(saveTo, data, perm)
}

// Bytes implements generator.IGenerator.
func (g *Generator) Bytes(fmtPretty bool) (rs []byte, err error) {
	groupBy := g.Table.GetGroupBy()
	if groupBy == iso.GroupByIso3166CodeOrVariantName {
		return g.bytesIso3166(fmtPretty)
	} else if groupBy == iso.GroupByIso4217AlphabeticCode {
		return g.bytesIso4217(fmtPretty)
	}
	return nil, fmt.Errorf("table GroupBy is empty")
}
