# iso3166

ISO 3166 part 1 and part 3 data for Go, TypeScript and JSON

生成 ISO 3166 第一部分和第三部分数据文件，可用于 Go 、TypeScript 等语言项目，同时生成 JSON 数据文件，理论上可兼容任意语言和框架。

[![Go](https://github.com/giant-stone/iso3166/actions/workflows/go.yml/badge.svg)](https://github.com/giant-stone/iso3166/actions/workflows/go.yml)

源码目录说明

| 目录                           | 说明                                                                             |
| ------------------------------ | -------------------------------------------------------------------------------- |
| iso/iso3166/                   | 定义地区结构                                                                     |
| iso/iso3166data/iso3166data.go | 用 Wikipedia 作为数据源生成 Go package                                           |
| iso3166.json                   | 用 Wikipedia 作为数据源生成 JSON 数据文件                                        |
| iso/lang/                      | 基于 [emvi/iso-639-1](https://github.com/emvi/iso-639-1) 提供 ISO 639-1 简单支持 |
| iso/region/                    | 引用数据文件入口                                                                 |
| cmd/iso3166/                   | 生成数据文件的命令行工具                                                         |
| gen/iso3166data/iso3166data.ts | 用 iso3166.json 作为数据源生成 TypeScript 包                                     |
| testdata/                      | 解释器测试样本数据                                                               |

## 更新 ISO 数据文件

构建依赖

- Go 1.21.x+

从 Wikipedia ISO 3166 页面生成或更新本地数据文件 iso3166.json 或/和 Go、TypeScript 代码

    # OPTIONAL: use HTTP proxy
    set HTTPS_PROXY=http://localhost:7890

    go run cmd/iso3166/main.go -gen json,go,ts

（可选）如果想覆盖指定 alpha2code/alpha4code 记录，在根目录新建 iso3166.patch.json 补丁文件，格式

    [
        {<IsoRegion，字段参考 iso/iso3166/region.go>},
        // ...
    ]

重新以此执行以上 `gen json,go,ts` 命令即可。

## Go 用法示例

示例： Go 代码片段

```go
package main

import (
	"encoding/json"
	"fmt"

	"github.com/giant-stone/iso3166/iso/iso3166data"
	"github.com/giant-stone/iso3166/iso/region"
)

func main() {
	got := region.NewFromCode("HK")
	dat, _ := json.MarshalIndent(got, "", "  ")
	fmt.Println(string(dat))
	fmt.Println(got.Alpha2code == iso3166data.UnitedStates.Alpha2code)
}
```

输出：

```json
{
  "Alpha2code": "HK",
  "ShortName": "Hong Kong",
  "ShortNameLowerCase": "",
  "FullName": "",
  "Alpha3code": "HKG",
  "Alpha4code": "",
  "NumericCode": "344",
  "Independent": false,
  "PeriodOfValidity": "",
  "Name": "Hong Kong",
  "NameNoSpace": "HongKong",
  "Alias": [],
  "NameInNative": "",
  "Capital": "",
  "CapitalInNative": "",
  "Languages": [
    "English",
    "Cantonese"
  ],
  "NameInChinese": "中国香港", // 简体中文短名，可通过上面提到 patch 方式自定义覆盖
  "CallingCode": "852" // 国际电信联盟（ITU）区号
}
false
```

更多用法见 iso/region/region_test.go

## TypeScript 项目用法示例

示例： TypeScript 代码片段

```ts
import * as Iso3166 from "./gen/iso3166data/iso3166data";

function NewFromCode(code: string): Iso3166.IIsoRegion {
  return Iso3166.RegionsByCode[code];
}

const got = NewFromCode("HK");
console.log(JSON.stringify(got, undefined, "  "));
console.log(got.alpha2code == Iso3166.UnitedStates.alpha2code);
```

输出：

```json
{
  "alpha2code": "HK",
  "alpha3code": "HKG",
  "alpha4code": "",
  "calling_code": "852",
  "independent": false,
  "name": "Hong Kong",
  "numeric_code": "344",
  "period_of_validity": "",
  "short_name": "Hong Kong",
  "name_in_native": "香港",
  "name_in_chinese": "中国香港"
}
false
```
