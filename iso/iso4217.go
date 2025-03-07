package iso

// ref: https://en.wikipedia.org/wiki/ISO_4217
type ICurrencyCode interface {
	GetAlphabeticCode() string
	SetAlphabeticCode(v string)

	GetNumericCode4217() string
	SetNumericCode4217(v string)

	GetMinorUnit() int
	SetMinorUnit(v int)

	GetCurrency() string
	SetCurrency(v string)
}

type IIso4217Extended interface {
	GetCurrencyInCN() string
	SetCurrencyInCN(v string)
}
