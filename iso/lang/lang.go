// 书面、音频、字母等语言信息
// ref:
//   https://en.wikipedia.org/wiki/ISO_639
//   https://en.wikipedia.org/wiki/ISO_639_macrolanguage
//   https://en.wikipedia.org/wiki/IETF_language_tag
//   https://www.rfc-editor.org/rfc/rfc4646
package lang

import (
	iso6391 "github.com/emvi/iso-639-1"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

type ExtInfo struct {
	// 英文简短名. 例: Mandarin
	Name string

	// 本地化语言值。例：汉语普通话
	NativeName string

	// ISO code(例：cmn) 或 IETF language tag(zh-cn zh-Hant) 值，优先级为哪个有更确切定义则优先使用哪一个。
	//   例1：Cantonese	粤语，ISO-639-1 定义为 zh，639-2 为 chi/zho，639-3 type individual 为 yue，
	//     IETF language tag 只能笼统用 zh-Hant 代替，则应该用更精准的 yue 定义。
	//   例2：Simplified Chinese 简体中文，ISO-639 无精准定义，只能用最相近的 zh/zho 代替；IETF language tag 为 zh-hans，则应用更精准的 zh-hans 定义。
	Code string
}

const (
	Mandarin           = "Mandarin"
	MandarinCode       = "cmn"
	MandarinNativeName = "汉语普通话"
)

var (
	MandarinInfo = &ExtInfo{
		Name:       Mandarin,
		NativeName: MandarinNativeName,
		Code:       MandarinCode,
	}
)

const (
	Cantonese           = "Cantonese"
	CantoneseCode       = "yue"
	CantoneseNativeName = "粵語"
)

var (
	CantoneseInfo = &ExtInfo{
		Name:       Cantonese,
		NativeName: CantoneseNativeName,
		Code:       CantoneseCode,
	}
)

const (
	SimplifiedChinese           = "Simplified Chinese"
	SimplifiedChineseCode       = "zh-Hans"
	SimplifiedChineseNativeName = "简体中文"
)

var (
	SimplifiedChineseInfo = &ExtInfo{
		Name:       SimplifiedChinese,
		NativeName: SimplifiedChineseNativeName,
		Code:       SimplifiedChineseCode,
	}
)

const (
	Chinese           = "Chinese"
	ChineseCode       = "zh"
	ChineseNativeName = "中文"
)

var (
	ChineseInfo = SimplifiedChineseInfo
)

// shortcut consts
const (
	English           = "English"
	EnglishCode       = "en"
	EnglishNativeName = "English"
)

const (
	TraditionalChinese           = "Traditional Chinese"
	TraditionalChineseCode       = "zh-Hant"
	TraditionalChineseNativeName = "正體中文"
)

var (
	TraditionalChineseInfo = &ExtInfo{
		Name:       TraditionalChinese,
		NativeName: TraditionalChineseNativeName,
		Code:       TraditionalChineseCode,
	}
)

var (
	NameMap = map[string]*ExtInfo{
		Cantonese:          CantoneseInfo,
		Chinese:            SimplifiedChineseInfo,
		Mandarin:           MandarinInfo,
		SimplifiedChinese:  SimplifiedChineseInfo,
		TraditionalChinese: TraditionalChineseInfo,
	}
)

var (
	CodeMap = map[string]*ExtInfo{
		CantoneseCode:          CantoneseInfo,
		ChineseCode:            ChineseInfo,
		MandarinCode:           MandarinInfo,
		SimplifiedChineseCode:  SimplifiedChineseInfo,
		TraditionalChineseCode: TraditionalChineseInfo,
	}
)

var (
	NativeNameMap = map[string]*ExtInfo{
		CantoneseNativeName:          CantoneseInfo,
		ChineseNativeName:            SimplifiedChineseInfo,
		MandarinNativeName:           MandarinInfo,
		SimplifiedChineseNativeName:  SimplifiedChineseInfo,
		TraditionalChineseNativeName: TraditionalChineseInfo,
	}
)

func NewFromName(s string) (rs *ExtInfo) {
	c := cases.Title(language.English)
	s = c.String(s)

	if rs, hit := NameMap[s]; hit {
		return rs
	}

	i1 := iso6391.FromName(s)
	if i1.Name != "" {
		return &ExtInfo{
			Name:       i1.Name,
			NativeName: i1.NativeName,
			Code:       i1.Code,
		}
	}

	return
}

func NewFromNativeName(s string) (rs *ExtInfo) {
	if rs, hit := NativeNameMap[s]; hit {
		return rs
	}

	i1 := iso6391.FromNativeName(s)
	if i1.Name != "" {
		return &ExtInfo{
			Name:       i1.Name,
			NativeName: i1.NativeName,
			Code:       i1.Code,
		}
	}

	return
}

func NewFromCode(s string) (rs *ExtInfo) {
	if rs, hit := CodeMap[s]; hit {
		return rs
	}

	i1 := iso6391.FromCode(s)
	if i1.Name != "" {
		return &ExtInfo{
			Name:       i1.Name,
			NativeName: i1.NativeName,
			Code:       i1.Code,
		}
	}

	return
}
