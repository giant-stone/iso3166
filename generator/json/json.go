package generator_json

import (
	"encoding/json"
	"errors"
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
func (g *Generator) Bytes(fmtPretty bool) ([]byte, error) {
	uniq := map[string]struct{}{}
	listEntity := make([]iso.IEntity, 0)

	for _, v := range g.Table.List() {
		uniqKey := v.Code()
		if _, dup := uniq[uniqKey]; dup {
			continue
		}

		uniq[uniqKey] = struct{}{}
		listEntity = append(listEntity, v)
	}

	if fmtPretty {
		return json.MarshalIndent(listEntity, "", "  ")
	} else {
		return json.Marshal(listEntity)
	}
}
