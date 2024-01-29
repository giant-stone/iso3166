# iso3166

ISO 3166 part 1 and part 3 data for Go, TypeScript and JSON

生成 ISO 3166 第一部分和第三部分数据文件，可用于 Go 、TypeScript 等语言项目，同时生成 JSON 数据文件，理论上可兼容任意语言和框架。

[![Go](https://github.com/giant-stone/iso3166/actions/workflows/go.yml/badge.svg)](https://github.com/giant-stone/iso3166/actions/workflows/go.yml)

源码目录说明

| 目录 | 说明 |
| ---- | ---- |
| iso/iso3166/ | 定义地区结构 |
| iso/iso3166data/iso3166data.go | 用 Wikipedia 作为数据源生成 Go package |
| iso3166.json | 用 Wikipedia 作为数据源生成 JSON 数据文件 |
| iso/lang/ | 基于 [emvi/iso-639-1](https://github.com/emvi/iso-639-1) 提供 ISO 639-1 简单支持 |
| iso/region/ | 引用数据文件入口 |
| cmd/iso3166/ | 生成数据文件的命令行工具 |
| gen/iso3166data/iso3166data.ts | 用 iso3166.json 作为数据源生成 TypeScript 包 |
| testdata/ | 解释器测试样本数据 |

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

iso/region/region_test.go

## TypeScript 项目用法示例

TBD.