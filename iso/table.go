package iso

import (
	"encoding/json"
	"fmt"
	"os"
	"sort"
)

type MergeAction int

func (m MergeAction) String() string {
	return fmt.Sprintf("%d", m)
}

const (
	MergeActionUnspecified MergeAction = 0
	MergeActionAuto        MergeAction = 0

	MergeActionSkip  MergeAction = 1 // Skip merge the item if it is duplicated.
	MergeActionMerge MergeAction = 2 // Merge the item of src into dest if it is duplicated.

	MergeActionOnlyOverwriteBy4217 MergeAction = 3 // Overwrite the dest item with src ISO 4217 if it is duplicated.

	MergeActionOnlyOverwriteCapitalsAndLangs MergeAction = 4
)

type ITable interface {
	GetStandard() string
	SetStandard(s string) ITable

	Put(value IEntity) (codeIsDuplicated, shortNameIsDuplicated, commonNameIsDuplicated bool)
	Del(value IEntity)

	GetByAlpha2Code(s string) IEntity
	GetByAlpha3Code(s string) IEntity
	GetByAlpha4Code(s string) IEntity

	GetByCode(s string) IEntity
	GetByVariantName(s string) IEntity

	Load(rs map[string]IEntity) ITable
	LoadFromJson(name string) error

	List() []IEntity
	Map() map[string]IEntity

	Merge(value map[string]IEntity, action MergeAction) ITable
	MergeTable(t ITable, action MergeAction) ITable
	MergeFromJson(name string, action MergeAction) ITable
}

type Table struct {
	Std string

	MapKeyIsCode map[string]IEntity

	MapKeyIsVariantName map[string]IEntity
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
	if code := value.Code(); code != "" {
		_, codeIsDuplicated = i.MapKeyIsCode[code]

		AutoFillCommonNamesFromShortName(value)

		i.MapKeyIsCode[code] = value
	}

	if shortName := value.GetShortName(); shortName != "" {
		_, shortNameIsDuplicated = i.MapKeyIsVariantName[shortName]

		AutoFillCommonNamesFromShortName(value)

		i.MapKeyIsVariantName[shortName] = value
	}

	if commonName := value.GetCommonName(); commonName != "" {
		_, commonNameIsDuplicated = i.MapKeyIsVariantName[commonName]

		i.MapKeyIsVariantName[commonName] = value
	}

	return codeIsDuplicated, shortNameIsDuplicated, commonNameIsDuplicated
}

// Del implements ITable.
func (i *Table) Del(value IEntity) {
	if code := value.Code(); code != "" {
		delete(i.MapKeyIsCode, value.Code())
	}

	if shortName := value.GetShortName(); shortName != "" {
		delete(i.MapKeyIsVariantName, shortName)
	}

	if commonName := value.GetCommonName(); commonName != "" {
		delete(i.MapKeyIsVariantName, commonName)
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
	for _, v := range i.MapKeyIsCode {
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

	for _, v := range i.MapKeyIsVariantName {
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

	sort.Sort(SortByCommonName(rs))
	return rs
}

// Map implements ITable.
func (i *Table) Map() map[string]IEntity {
	uniq := map[string]struct{}{}

	rs := make(map[string]IEntity, 0)
	for _, v := range i.MapKeyIsCode {
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

	for _, v := range i.MapKeyIsVariantName {
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

	return rs
}

// Merge implements ITable.
func (i *Table) Merge(srcItems map[string]IEntity, action MergeAction) ITable {
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
			destItem, dup = i.MapKeyIsCode[code]
		} else {
			destItem, dup = i.MapKeyIsVariantName[shortName]
			if !dup {
				destItem, dup = i.MapKeyIsVariantName[commonName]
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

				i.Put(destItem)

			} else if action == MergeActionOnlyOverwriteBy4217 {

				destItem.SetAlphabeticCode(srcItem.GetAlphabeticCode())
				destItem.SetNumericCode4217(srcItem.GetNumericCode4217())
				destItem.SetMinorUnit(srcItem.GetMinorUnit())
				destItem.SetCurrency(srcItem.GetCurrency())
				destItem.SetCurrencyInCN(srcItem.GetCurrencyInCN())

			} else if action == MergeActionOnlyOverwriteCapitalsAndLangs {

				destItem.SetRegionInNative(srcItem.GetRegionInNative())
				destItem.SetCapital(srcItem.GetCapital())
				destItem.SetCapitalInNative(srcItem.GetCapitalInNative())
				destItem.SetLanguages(srcItem.GetLanguages())

			}

		} else if action != MergeActionOnlyOverwriteBy4217 {
			destItem := srcItem.Clone()

			i.Put(destItem)
		}
	}
	return i
}

// GetByAlpha2Code implements ITable.
func (i *Table) GetByAlpha2Code(s string) IEntity {
	return i.MapKeyIsCode[s]
}

// GetByAlpha3Code implements ITable.
func (i *Table) GetByAlpha3Code(s string) IEntity {
	panic("unimplemented")
}

// GetByAlpha4Code implements ITable.
func (i *Table) GetByAlpha4Code(s string) IEntity {
	panic("unimplemented")
}

// GetByCode implements ITable.
func (i *Table) GetByCode(s string) IEntity {
	return i.MapKeyIsCode[s]
}

// GetByVariantName implements ITable.
func (i *Table) GetByVariantName(s string) IEntity {
	return i.MapKeyIsVariantName[s]
}

func NewTable(std string) ITable {
	return &Table{
		Std:                 std,
		MapKeyIsCode:        make(map[string]IEntity),
		MapKeyIsVariantName: make(map[string]IEntity),
	}
}

type SortByCommonName []IEntity

func (items SortByCommonName) Len() int      { return len(items) }
func (items SortByCommonName) Swap(i, j int) { items[i], items[j] = items[j], items[i] }
func (items SortByCommonName) Less(i, j int) bool {
	return items[i].GetCommonName() < items[j].GetCommonName()
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
