package parser

import "github.com/giant-stone/iso3166/iso"

type IParser interface {
	ParseWikipediaHtml(body []byte) (rs iso.ITable, err error)

	GetTable() iso.ITable
}
