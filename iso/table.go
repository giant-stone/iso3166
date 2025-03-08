package iso

import (
	"encoding/json"
	"fmt"
	"os"
	"sort"
)

type GroupBy string

const (
	GroupByIso3166CodeOrVariantName GroupBy = "GroupByIso3166CodeOrVariantName"
	GroupByIso4217AlphabeticCode    GroupBy = "GroupByIso4217AlphabeticCode"
)

type MergeAction int

func (m MergeAction) String() string {
	return fmt.Sprintf("%d", m)
}

const (
	MergeActionUnspecified MergeAction = 0

	MergeActionSkip MergeAction = 1 // Skip the merge if it is duplicate.

	// This options only work with GroupByIso3166CodeOrVariantName.
	MergeActionMerge           MergeAction = 2 // Merge src into dest if it is duplicate.
	MergeActionFillWithIso4217 MergeAction = 3 // Fill the dest ISO 4217 related fields with src's if it is duplicate.

	// This option only works with GroupByIso4217AlphabeticCode.
	MergeActionFillWithIso3166 MergeAction = 4 // Fill the dest ISO 3166 related fields with src's if it is duplicate.

	MergeActionOnlyOverwriteCapitalsAndLangs MergeAction = 10
)

type ITable interface {
	GetGroupBy() GroupBy
	SetGroupBy(v GroupBy) ITable

	GetStandard() string
	SetStandard(s string) ITable

	Put(value IEntity) (codeIsDuplicated, shortNameIsDuplicated, commonNameIsDuplicated bool)
	Del(value IEntity)

	Load(rs map[string]IEntity) ITable
	LoadFromJson(name string) error

	List() []IEntity
	Map() map[string]IEntity

	Merge(value map[string]IEntity, action MergeAction) ITable
	MergeTable(t ITable, action MergeAction) ITable
	MergeFromJson(name string, action MergeAction) ITable

	// For ISO 3166
	GetByAlpha2Code(s string) IEntity
	GetByAlpha3Code(s string) IEntity
	GetByAlpha4Code(s string) IEntity

	GetByCode(s string) IEntity
	GetByVariantName(s string) IEntity

	// For ISO 4217
	GetByAlphabeticCode(s string) IEntity
}

type Table struct {
	GroupBy GroupBy

	Std string

	MapKeyIsIso3166Code        map[string]IEntity
	MapKeyIsIso3166VariantName map[string]IEntity

	MapKeyIsIso4217AlphabeticCode map[string]IEntity
}

// GetByAlphabeticCode implements ITable.
func (i *Table) GetByAlphabeticCode(s string) IEntity {
	return i.MapKeyIsIso4217AlphabeticCode[s]
}

// GetGroupBy implements ITable.
func (i *Table) GetGroupBy() GroupBy {
	return i.GroupBy
}

// SetGroupBy implements ITable.
func (i *Table) SetGroupBy(v GroupBy) ITable {
	i.GroupBy = v
	return i
}

// MergeTable implements ITable.
func (i *Table) MergeTable(t ITable, action MergeAction) ITable {
	i.Merge(t.Map(), action)
	return i
}

// GetStandard implements ITable.
func (i *Table) GetStandard() string {
	return i.Std
}

// SetStandard implements ITable.
func (i *Table) SetStandard(s string) ITable {
	i.Std = s
	return i
}

// MergeFromJson implements ITable.
func (i *Table) MergeFromJson(name string, action MergeAction) ITable {
	data, err := os.ReadFile(name)
	if err != nil {
		panic(err)
	}

	rs := make([]*Entity, 0)
	err = json.Unmarshal(data, &rs)
	if err != nil {
		panic(err)
	}

	for _, v := range rs {
		t := map[string]IEntity{}
		t[v.Code()] = v
		i.Merge(t, action)
	}

	return i
}

// LoadFromJson implements ITable.
func (i *Table) LoadFromJson(name string) (err error) {
	data, err := os.ReadFile(name)
	if err != nil {
		return err
	}

	rs := make([]*Entity, 0)
	err = json.Unmarshal(data, &rs)
	if err != nil {
		return err
	}

	for _, v := range rs {
		i.Put(v)
	}

	return nil
}

// Put implements ITable.
func (i *Table) Put(value IEntity) (codeIsDuplicated, shortNameIsDuplicated, commonNameIsDuplicated bool) {
	if i.GroupBy == GroupByIso3166CodeOrVariantName {
		if code := value.Code(); code != "" {
			_, codeIsDuplicated = i.MapKeyIsIso3166Code[code]

			AutoFillCommonNamesFromShortName(value)

			i.MapKeyIsIso3166Code[code] = value
		}

		if shortName := value.GetShortName(); shortName != "" {
			_, shortNameIsDuplicated = i.MapKeyIsIso3166VariantName[shortName]

			AutoFillCommonNamesFromShortName(value)

			i.MapKeyIsIso3166VariantName[shortName] = value
		}

		if commonName := value.GetCommonName(); commonName != "" {
			_, commonNameIsDuplicated = i.MapKeyIsIso3166VariantName[commonName]

			i.MapKeyIsIso3166VariantName[commonName] = value
		}
	} else if i.GroupBy == GroupByIso4217AlphabeticCode {
		if code := value.GetAlphabeticCode(); code != "" {
			_, codeIsDuplicated = i.MapKeyIsIso4217AlphabeticCode[code]

			i.MapKeyIsIso4217AlphabeticCode[code] = value
		}
	}

	return codeIsDuplicated, shortNameIsDuplicated, commonNameIsDuplicated
}

// Del implements ITable.
func (i *Table) Del(value IEntity) {
	if i.GroupBy == GroupByIso3166CodeOrVariantName {
		if code := value.Code(); code != "" {
			delete(i.MapKeyIsIso3166Code, code)
		}

		if shortName := value.GetShortName(); shortName != "" {
			delete(i.MapKeyIsIso3166VariantName, shortName)
		}

		if commonName := value.GetCommonName(); commonName != "" {
			delete(i.MapKeyIsIso3166VariantName, commonName)
		}

	} else if i.GroupBy == GroupByIso4217AlphabeticCode {
		if code := value.Code(); code != "" {
			delete(i.MapKeyIsIso4217AlphabeticCode, code)
		}
	}

}

// Load implements ITable.
func (i *Table) Load(items map[string]IEntity) ITable {
	for _, v := range items {
		i.Put(v)
	}

	return i
}

// List implements ITable.
func (i *Table) List() []IEntity {
	uniq := map[string]struct{}{}

	rs := make([]IEntity, 0)

	if i.GroupBy == GroupByIso3166CodeOrVariantName {
		for _, v := range i.MapKeyIsIso3166Code {
			code := v.Code()
			if _, dup := uniq[code]; code == "" || dup {
				continue
			}
			uniq[code] = struct{}{}

			if shortName := v.GetShortName(); shortName != "" {
				uniq[shortName] = struct{}{}
			}

			if commonName := v.GetCommonName(); commonName != "" {
				uniq[commonName] = struct{}{}
			}

			rs = append(rs, v)
		}

		for _, v := range i.MapKeyIsIso3166VariantName {
			shortName := v.GetShortName()
			commonName := v.GetCommonName()

			if _, dup := uniq[shortName]; shortName != "" && dup {
				continue
			} else if _, dup := uniq[commonName]; commonName != "" && dup {
				continue
			}

			if shortName != "" {
				uniq[shortName] = struct{}{}
			}

			if commonName != "" {
				uniq[commonName] = struct{}{}
			}

			rs = append(rs, v)
		}

		sort.Sort(SortByNumericCode(rs))

	} else if i.GroupBy == GroupByIso4217AlphabeticCode {
		for _, v := range i.MapKeyIsIso4217AlphabeticCode {
			code := v.GetAlphabeticCode()
			if _, dup := uniq[code]; code == "" || dup {
				continue
			}
			uniq[code] = struct{}{}

			rs = append(rs, v)
		}
	}

	sort.Sort(SortByNumericCode4217(rs))

	return rs
}

// Map implements ITable.
func (i *Table) Map() map[string]IEntity {
	uniq := map[string]struct{}{}

	rs := make(map[string]IEntity, 0)

	if i.GroupBy == GroupByIso3166CodeOrVariantName {
		for _, v := range i.MapKeyIsIso3166Code {
			code := v.Code()
			if _, dup := uniq[code]; code == "" || dup {
				continue
			}
			uniq[code] = struct{}{}

			if shortName := v.GetShortName(); shortName != "" {
				uniq[shortName] = struct{}{}
			}

			if commonName := v.GetCommonName(); commonName != "" {
				uniq[commonName] = struct{}{}
			}

			rs[code] = v
		}

		for _, v := range i.MapKeyIsIso3166VariantName {
			shortName := v.GetShortName()
			commonName := v.GetCommonName()

			if _, dup := uniq[shortName]; shortName != "" && dup {
				continue
			} else if _, dup := uniq[commonName]; commonName != "" && dup {
				continue
			}

			if shortName != "" {
				uniq[shortName] = struct{}{}
				rs[shortName] = v
			}

			if commonName != "" {
				uniq[commonName] = struct{}{}
				rs[commonName] = v
			}
		}
	} else if i.GroupBy == GroupByIso4217AlphabeticCode {
		for _, v := range i.MapKeyIsIso4217AlphabeticCode {
			code := v.GetAlphabeticCode()
			if _, dup := uniq[code]; code == "" || dup {
				continue
			}
			uniq[code] = struct{}{}
			rs[code] = v
		}
	}

	return rs
}

// Merge implements ITable.
func (i *Table) Merge(srcItems map[string]IEntity, action MergeAction) ITable {
	if i.GroupBy == GroupByIso3166CodeOrVariantName {
		i.mergeGroupByIso3166CodeOrVariantName(srcItems, action)
	} else if i.GroupBy == GroupByIso4217AlphabeticCode {
		i.mergeGroupByIso4217AlphabeticCode(srcItems, action)
	}

	return i
}

func (i *Table) mergeGroupByIso4217AlphabeticCode(srcItems map[string]IEntity, action MergeAction) ITable {
	t := NewTable("").SetGroupBy(GroupByIso3166CodeOrVariantName).Load(srcItems)

	for _, destItem := range i.MapKeyIsIso4217AlphabeticCode {
		alpha2codesUseThisCurrency := []string{}
		uniq := map[string]struct{}{}

		entitiesUseThisCurrency := destItem.GetEntities()

		for _, commonNameOrCode := range entitiesUseThisCurrency {
			if _, dup := uniq[commonNameOrCode]; !dup {

				var entity IEntity

				if IsAlpha2Code(commonNameOrCode) {
					uniq[commonNameOrCode] = struct{}{}
					alpha2codesUseThisCurrency = append(alpha2codesUseThisCurrency, commonNameOrCode)

					entity = t.GetByAlpha2Code(commonNameOrCode)

				} else {
					entity = t.GetByVariantName(commonNameOrCode)

					if entity := t.GetByVariantName(commonNameOrCode); entity != nil {
						if code := entity.GetAlpha2Code(); code != "" {
							uniq[commonNameOrCode] = struct{}{}
							alpha2codesUseThisCurrency = append(alpha2codesUseThisCurrency, code)
						}
					}
				}

				if entity != nil {
					if currencyInCN := entity.GetCurrencyInCN(); currencyInCN != "" && destItem.GetCurrencyInCN() == "" {
						destItem.SetCurrencyInCN(currencyInCN)
					}

					if currencyInNative := entity.GetCurrencyInNative(); currencyInNative != "" && destItem.GetCurrencyInNative() == "" {
						destItem.SetCurrencyInNative(currencyInNative)
					}
				}
			}
		}

		destItem.SetEntities(alpha2codesUseThisCurrency)
	}

	return i
}

func (i *Table) mergeGroupByIso3166CodeOrVariantName(srcItems map[string]IEntity, action MergeAction) ITable {
	for _, srcItem := range srcItems {
		code := srcItem.Code()
		shortName := srcItem.GetShortName()
		commonName := srcItem.GetCommonName()

		if code == "" && shortName == "" && commonName == "" {
			continue
		}

		var destItem IEntity
		var dup bool

		if IsAlpha2Code(code) {
			destItem, dup = i.MapKeyIsIso3166Code[code]
		} else {
			destItem, dup = i.MapKeyIsIso3166VariantName[shortName]
			if !dup {
				destItem, dup = i.MapKeyIsIso3166VariantName[commonName]
			}
		}

		if dup {
			if action == MergeActionSkip {
				continue

			} else if action == MergeActionMerge {
				//
				// ISO 3166 no official fields
				//

				i.Del(destItem)

				if srcItem.GetShortName() != "" {
					destItem.SetShortName(srcItem.GetShortName())
				}

				if srcItem.GetAlpha3Code() != "" {
					destItem.SetAlpha3Code(srcItem.GetAlpha3Code())
				}

				if srcItem.GetAlpha4Code() != "" {
					destItem.SetAlpha4Code(srcItem.GetAlpha4Code())
				}

				if srcItem.GetNumericCode() != "" {
					destItem.SetNumericCode(srcItem.GetNumericCode())
				}

				if srcItem.GetIndependent() {
					destItem.SetIndependent(srcItem.GetIndependent())
				}

				if srcItem.GetPeriodOfValidity() != "" {
					destItem.SetPeriodOfValidity(srcItem.GetPeriodOfValidity())
				}

				//
				// ISO 3166 no official fields
				//

				if len(srcItem.GetAlias()) > 0 {
					destItem.SetAlias(srcItem.GetAlias())
				}

				if srcItem.GetCommonName() != "" {
					destItem.SetCommonName(srcItem.GetCommonName())
				}

				if srcItem.GetCommonNameInAlphaNumeric() != "" {
					destItem.SetCommonNameInAlphaNumeric(srcItem.GetCommonNameInAlphaNumeric())
				}

				if srcItem.GetCallingCode() != "" {
					destItem.SetCallingCode(srcItem.GetCallingCode())
				}

				if len(srcItem.GetLanguages()) > 0 {
					destItem.SetLanguages(srcItem.GetLanguages())
				}

				if srcItem.GetRegionInNative() != "" {
					destItem.SetRegionInNative(srcItem.GetRegionInNative())
				}

				if srcItem.GetRegionInCN() != "" {
					destItem.SetRegionInCN(srcItem.GetRegionInCN())
				}

				//
				// ISO 4217 fields
				//

				if srcItem.GetAlphabeticCode() != "" {
					destItem.SetAlphabeticCode(srcItem.GetAlphabeticCode())
				}

				if srcItem.GetNumericCode4217() != "" {
					destItem.SetNumericCode4217(srcItem.GetNumericCode4217())
				}

				if srcItem.GetMinorUnit() > 0 {
					destItem.SetMinorUnit(srcItem.GetMinorUnit())
				}

				if srcItem.GetCurrency() != "" {
					destItem.SetCurrency(srcItem.GetCurrency())
				}

				if srcItem.GetCurrencyInCN() != "" {
					destItem.SetCurrencyInCN(srcItem.GetCurrencyInCN())
				}

				currencyInNative := srcItem.GetCurrencyInNative()
				if currencyInNative != "" {
					destItem.SetCurrencyInNative(currencyInNative)
				}

				i.Put(destItem)

			} else if action == MergeActionFillWithIso4217 {

				destItem.SetAlphabeticCode(srcItem.GetAlphabeticCode())
				destItem.SetNumericCode4217(srcItem.GetNumericCode4217())
				destItem.SetMinorUnit(srcItem.GetMinorUnit())
				destItem.SetCurrency(srcItem.GetCurrency())

				currencyInCN := srcItem.GetCurrencyInCN()
				if currencyInCN != "" {
					destItem.SetCurrencyInCN(srcItem.GetCurrencyInCN())
				}

				currencyInNative := srcItem.GetCurrencyInNative()
				if currencyInNative != "" {
					destItem.SetCurrencyInNative(currencyInNative)
				}

			} else if action == MergeActionOnlyOverwriteCapitalsAndLangs {

				destItem.SetRegionInNative(srcItem.GetRegionInNative())
				destItem.SetCapital(srcItem.GetCapital())
				destItem.SetCapitalInNative(srcItem.GetCapitalInNative())
				destItem.SetLanguages(srcItem.GetLanguages())

			}

		} else if action != MergeActionFillWithIso4217 {
			destItem := srcItem.Clone()

			i.Put(destItem)
		}
	}
	return i
}

// GetByAlpha2Code implements ITable.
func (i *Table) GetByAlpha2Code(s string) IEntity {
	return i.MapKeyIsIso3166Code[s]
}

// GetByAlpha3Code implements ITable.
func (i *Table) GetByAlpha3Code(s string) IEntity {
	return i.MapKeyIsIso3166Code[s]
}

// GetByAlpha4Code implements ITable.
func (i *Table) GetByAlpha4Code(s string) IEntity {
	return i.MapKeyIsIso3166Code[s]
}

// GetByCode implements ITable.
func (i *Table) GetByCode(s string) IEntity {
	return i.MapKeyIsIso3166Code[s]
}

// GetByVariantName implements ITable.
func (i *Table) GetByVariantName(s string) IEntity {
	return i.MapKeyIsIso3166VariantName[s]
}

func NewTable(std string) ITable {
	return &Table{
		Std:                           std,
		MapKeyIsIso3166Code:           make(map[string]IEntity),
		MapKeyIsIso3166VariantName:    make(map[string]IEntity),
		MapKeyIsIso4217AlphabeticCode: make(map[string]IEntity),
	}
}

type SortByCommonName []IEntity

func (items SortByCommonName) Len() int      { return len(items) }
func (items SortByCommonName) Swap(i, j int) { items[i], items[j] = items[j], items[i] }
func (items SortByCommonName) Less(i, j int) bool {
	return items[i].GetCommonName() < items[j].GetCommonName()
}

type SortByNumericCode []IEntity

func (items SortByNumericCode) Len() int      { return len(items) }
func (items SortByNumericCode) Swap(i, j int) { items[i], items[j] = items[j], items[i] }
func (items SortByNumericCode) Less(i, j int) bool {
	return items[i].GetNumericCode() < items[j].GetNumericCode()
}

type SortByNumericCode4217 []IEntity

func (items SortByNumericCode4217) Len() int      { return len(items) }
func (items SortByNumericCode4217) Swap(i, j int) { items[i], items[j] = items[j], items[i] }
func (items SortByNumericCode4217) Less(i, j int) bool {
	return items[i].GetNumericCode4217() < items[j].GetNumericCode4217()
}

func AutoFillCommonNamesFromShortName(entity IEntity) {
	if entity.GetCommonName() == "" {
		value, ok := TransformToGoVariableName(entity.GetShortName(), true)
		if ok && value != "" {
			entity.SetCommonName(value)
		}
	}

	commonName := entity.GetCommonName()
	value, ok := TransformToGoVariableName(commonName, false)
	if ok && value != "" {
		entity.SetCommonNameInAlphaNumeric(value)
	}
}
