package currency

import (
	"strings"

	iso_data "github.com/giant-stone/iso3166/gen/go"
	"github.com/giant-stone/iso3166/iso"
)

func NewFromAlphabeticCode(s string) iso.IEntity {
	s = strings.ToUpper(s)
	rs, ok := iso_data.FromAlphabeticCode[s]
	if ok {
		return rs
	}
	return nil

}
