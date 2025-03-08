export interface IEntity {
  alpha2code: string;
  short_name: string;
  alpha3code: string;
  alpha4code: string;
  numeric_code: string;
  independent?: boolean;
  period_of_validity: string;

  //
  // non-ISO 3166-1 fields
  //

  common_name: string;
  calling_code: string; // ref: https://en.wikipedia.org/wiki/List_of_country_calling_codes

  disabled?: boolean;

  region_in_cn: string;
  region_in_native: string;

  //
  // ISO 4217: https://en.wikipedia.org/wiki/ISO_4217
  //
  alphabetic_code: string;
  numeric_code_4217: string;
  minor_unit: number; // ref: https://en.wikipedia.org/wiki/decimal_separator
  currency: string;

  currency_in_cn: string; // This field is not a part of official ISO 4217. E.g. "瑞士法郎" for CHF.
  currency_in_native: string;
}

const CentralAfricanRepublic = {
  alpha2code: "CF",
  alpha3code: "CAF",
  alpha4code: "",
  independent: true,
  numeric_code: "140",
  short_name: "Central African Republic",

  period_of_validity: "",

  alias: "[]",
  common_name: "Central African Republic",
  calling_code: "",

  languages: "[]",

  region_in_cn: "中非",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NewCaledonia = {
  alpha2code: "NC",
  alpha3code: "NCL",
  alpha4code: "",
  independent: false,
  numeric_code: "540",
  short_name: "New Caledonia",

  period_of_validity: "",

  alias: "[]",
  common_name: "New Caledonia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "新喀里多尼亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const WestGermany = {
  alpha2code: "",
  alpha3code: "XWG",
  alpha4code: "",
  independent: true,
  numeric_code: "",
  short_name: "Federal Republic of Germany",

  period_of_validity: "",

  alias: "[]",
  common_name: "West Germany",
  calling_code: "",

  languages: "["German"]",

  region_in_cn: "西德",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SerbiaAndMontenegro = {
  alpha2code: "CS",
  alpha3code: "SCG",
  alpha4code: "CSXX",
  independent: false,
  numeric_code: "891",
  short_name: "Serbia and Montenegro",

  period_of_validity: "2003–2006",

  alias: "[]",
  common_name: "Serbia And Montenegro",
  calling_code: "",

  languages: "[]",

  region_in_cn: "塞尔维亚和黑山",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Antarctica = {
  alpha2code: "AQ",
  alpha3code: "ATA",
  alpha4code: "",
  independent: false,
  numeric_code: "010",
  short_name: "Antarctica",

  period_of_validity: "",

  alias: "[]",
  common_name: "Antarctica",
  calling_code: "",

  languages: "[]",

  region_in_cn: "南极洲",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Yugoslavia = {
  alpha2code: "YU",
  alpha3code: "YUG",
  alpha4code: "YUCS",
  independent: false,
  numeric_code: "891",
  short_name: "Yugoslavia",

  period_of_validity: "1974–2003",

  alias: "[]",
  common_name: "Yugoslavia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "南斯拉夫",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const WallisAndFutuna = {
  alpha2code: "WF",
  alpha3code: "WLF",
  alpha4code: "",
  independent: false,
  numeric_code: "876",
  short_name: "Wallis and Futuna",

  period_of_validity: "",

  alias: "[]",
  common_name: "Wallis And Futuna",
  calling_code: "",

  languages: "[]",

  region_in_cn: "瓦利斯和富图纳",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const WakeIsland = {
  alpha2code: "WK",
  alpha3code: "WAK",
  alpha4code: "WKUM",
  independent: false,
  numeric_code: "872",
  short_name: "Wake Island",

  period_of_validity: "1974–1986",

  alias: "[]",
  common_name: "Wake Island",
  calling_code: "",

  languages: "[]",

  region_in_cn: "威克岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const AntiguaAndBarbuda = {
  alpha2code: "AG",
  alpha3code: "ATG",
  alpha4code: "",
  independent: true,
  numeric_code: "028",
  short_name: "Antigua and Barbuda",

  period_of_validity: "",

  alias: "[]",
  common_name: "Antigua And Barbuda",
  calling_code: "",

  languages: "[]",

  region_in_cn: "安提瓜和巴布达",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const VenezuelaBolivarianRepublicOf = {
  alpha2code: "VE",
  alpha3code: "VEN",
  alpha4code: "",
  independent: true,
  numeric_code: "862",
  short_name: "Venezuela (Bolivarian Republic of)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Venezuela Bolivarian Republic Of",
  calling_code: "",

  languages: "[]",

  region_in_cn: "委内瑞拉",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Timor_Leste = {
  alpha2code: "TL",
  alpha3code: "TLS",
  alpha4code: "",
  independent: true,
  numeric_code: "626",
  short_name: "Timor-Leste",

  period_of_validity: "",

  alias: "[]",
  common_name: "Timor_Leste",
  calling_code: "",

  languages: "[]",

  region_in_cn: "东帝汶",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const UpperVolta = {
  alpha2code: "HV",
  alpha3code: "HVO",
  alpha4code: "HVBF",
  independent: false,
  numeric_code: "854",
  short_name: "Upper Volta",

  period_of_validity: "1974–1984",

  alias: "[]",
  common_name: "Upper Volta",
  calling_code: "",

  languages: "[]",

  region_in_cn: "上沃尔特",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const FrenchSouthernAndAntarcticTerritories = {
  alpha2code: "FQ",
  alpha3code: "ATF",
  alpha4code: "FQHH",
  independent: false,
  numeric_code: "260",
  short_name: "French Southern and Antarctic Territories",

  period_of_validity: "1974–1979",

  alias: "[]",
  common_name: "French Southern and Antarctic Territories",
  calling_code: "",

  languages: "[]",

  region_in_cn: "前法属南部和南极领地",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const EastTimor = {
  alpha2code: "TP",
  alpha3code: "TMP",
  alpha4code: "TPTL",
  independent: false,
  numeric_code: "626",
  short_name: "East Timor",

  period_of_validity: "1974–2002",

  alias: "[]",
  common_name: "East Timor",
  calling_code: "",

  languages: "[]",

  region_in_cn: "东帝汶省",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const PanamaCanalZone = {
  alpha2code: "PZ",
  alpha3code: "PCZ",
  alpha4code: "PZPA",
  independent: false,
  numeric_code: "594",
  short_name: "Panama Canal Zone",

  period_of_validity: "1974–1980",

  alias: "[]",
  common_name: "Panama Canal Zone",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴拿马运河区",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Russia = {
  alpha2code: "RU",
  alpha3code: "RUS",
  alpha4code: "",
  independent: true,
  numeric_code: "643",
  short_name: "Russian Federation",

  period_of_validity: "",

  alias: "[]",
  common_name: "Russia",
  calling_code: "7",

  languages: "[]",

  region_in_cn: "俄罗斯",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Kosovo = {
  alpha2code: "XK",
  alpha3code: "XKV",
  alpha4code: "",
  independent: true,
  numeric_code: "",
  short_name: "Republic of Kosovo",

  period_of_validity: "",

  alias: "[]",
  common_name: "Kosovo",
  calling_code: "",

  languages: "[]",

  region_in_cn: "科索沃",
  region_in_native: "Kosova",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Chad = {
  alpha2code: "TD",
  alpha3code: "TCD",
  alpha4code: "",
  independent: true,
  numeric_code: "148",
  short_name: "Chad",

  period_of_validity: "",

  alias: "[]",
  common_name: "Chad",
  calling_code: "",

  languages: "[]",

  region_in_cn: "乍得",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const BurkinaFaso = {
  alpha2code: "BF",
  alpha3code: "BFA",
  alpha4code: "",
  independent: true,
  numeric_code: "854",
  short_name: "Burkina Faso",

  period_of_validity: "",

  alias: "[]",
  common_name: "Burkina Faso",
  calling_code: "",

  languages: "[]",

  region_in_cn: "布基纳法索",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaintKittsAndNevis = {
  alpha2code: "KN",
  alpha3code: "KNA",
  alpha4code: "",
  independent: true,
  numeric_code: "659",
  short_name: "Saint Kitts and Nevis",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saint Kitts And Nevis",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣基茨和尼维斯",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaintLucia = {
  alpha2code: "LC",
  alpha3code: "LCA",
  alpha4code: "",
  independent: true,
  numeric_code: "662",
  short_name: "Saint Lucia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saint Lucia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣卢西亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const BoliviaPlurinationalStateOf = {
  alpha2code: "BO",
  alpha3code: "BOL",
  alpha4code: "",
  independent: true,
  numeric_code: "068",
  short_name: "Bolivia (Plurinational State of)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bolivia Plurinational State Of",
  calling_code: "",

  languages: "[]",

  region_in_cn: "玻利维亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const VirginIslands = {
  alpha2code: "VI",
  alpha3code: "VIR",
  alpha4code: "",
  independent: false,
  numeric_code: "850",
  short_name: "Virgin Islands (U.S.)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Virgin Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "美属维尔京群岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Niger = {
  alpha2code: "NE",
  alpha3code: "NER",
  alpha4code: "",
  independent: true,
  numeric_code: "562",
  short_name: "Niger",

  period_of_validity: "",

  alias: "[]",
  common_name: "Niger",
  calling_code: "",

  languages: "[]",

  region_in_cn: "尼日尔",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NewHebrides = {
  alpha2code: "NH",
  alpha3code: "NHB",
  alpha4code: "NHVU",
  independent: false,
  numeric_code: "548",
  short_name: "New Hebrides",

  period_of_validity: "1974–1980",

  alias: "[]",
  common_name: "New Hebrides",
  calling_code: "",

  languages: "[]",

  region_in_cn: "新赫布里底群岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const USMiscellaneousPacificIslands = {
  alpha2code: "PU",
  alpha3code: "PUS",
  alpha4code: "PUUM",
  independent: false,
  numeric_code: "849",
  short_name: "U.S. Miscellaneous Pacific Islands",

  period_of_validity: "1974–1986",

  alias: "[]",
  common_name: "US Miscellaneous Pacific Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "美国其它太平洋岛屿",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const MoldovaRepublicOf = {
  alpha2code: "MD",
  alpha3code: "MDA",
  alpha4code: "",
  independent: true,
  numeric_code: "498",
  short_name: "Moldova (Republic of)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Moldova Republic Of",
  calling_code: "",

  languages: "[]",

  region_in_cn: "摩尔多瓦",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const UnitedStates = {
  alpha2code: "US",
  alpha3code: "USA",
  alpha4code: "",
  independent: true,
  numeric_code: "840",
  short_name: "United States of America",

  period_of_validity: "",

  alias: "[]",
  common_name: "United States",
  calling_code: "1",

  languages: "[]",

  region_in_cn: "美国",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "美元",
  currency_in_native: "United States dollar",
} as IEntity;

const NeutralZone = {
  alpha2code: "NT",
  alpha3code: "NTZ",
  alpha4code: "NTHH",
  independent: false,
  numeric_code: "536",
  short_name: "Neutral Zone",

  period_of_validity: "1974–1993",

  alias: "[]",
  common_name: "Neutral Zone",
  calling_code: "",

  languages: "[]",

  region_in_cn: "沙特阿拉伯－伊拉克中立区",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Tanzania = {
  alpha2code: "TZ",
  alpha3code: "TZA",
  alpha4code: "",
  independent: true,
  numeric_code: "834",
  short_name: "Tanzania, United Republic of",

  period_of_validity: "",

  alias: "[]",
  common_name: "Tanzania",
  calling_code: "",

  languages: "[]",

  region_in_cn: "坦桑尼亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Brunei = {
  alpha2code: "BN",
  alpha3code: "BRN",
  alpha4code: "",
  independent: true,
  numeric_code: "096",
  short_name: "Brunei Darussalam",

  period_of_validity: "",

  alias: "[]",
  common_name: "Brunei",
  calling_code: "",

  languages: "[]",

  region_in_cn: "文莱",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const UnitedKingdom = {
  alpha2code: "GB",
  alpha3code: "GBR",
  alpha4code: "",
  independent: true,
  numeric_code: "826",
  short_name: "United Kingdom of Great Britain and Northern Ireland",

  period_of_validity: "",

  alias: "[]",
  common_name: "United Kingdom",
  calling_code: "44",

  languages: "[]",

  region_in_cn: "英国",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "英镑",
  currency_in_native: "Pound sterling",
} as IEntity;

const Burma = {
  alpha2code: "BU",
  alpha3code: "BUR",
  alpha4code: "BUMM",
  independent: true,
  numeric_code: "104",
  short_name: "Burma",

  period_of_validity: "1974–1989",

  alias: "[]",
  common_name: "Burma",
  calling_code: "",

  languages: "[]",

  region_in_cn: "前缅甸",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CaribbeanNetherlands = {
  alpha2code: "BQ",
  alpha3code: "ATB",
  alpha4code: "BQAQ",
  independent: false,
  numeric_code: "535",
  short_name: "British Antarctic Territory",

  period_of_validity: "1974–1979",

  alias: "[]",
  common_name: "Caribbean Netherlands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "英属南极领地",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NetherlandsAntilles = {
  alpha2code: "AN",
  alpha3code: "ANT",
  alpha4code: "ANHH",
  independent: false,
  numeric_code: "530",
  short_name: "Netherlands Antilles",

  period_of_validity: "1974–2010",

  alias: "[]",
  common_name: "Netherlands Antilles",
  calling_code: "",

  languages: "[]",

  region_in_cn: "荷属安的列斯",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const ByelorussianSSR = {
  alpha2code: "BY",
  alpha3code: "BYS",
  alpha4code: "BYAA",
  independent: true,
  numeric_code: "112",
  short_name: "Byelorussian SSR",

  period_of_validity: "1974–1992",

  alias: "[]",
  common_name: "Byelorussian SSR",
  calling_code: "",

  languages: "[]",

  region_in_cn: "白俄罗斯苏维埃社会主义共和国",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaintVincentAndTheGrenadines = {
  alpha2code: "VC",
  alpha3code: "VCT",
  alpha4code: "",
  independent: true,
  numeric_code: "670",
  short_name: "Saint Vincent and the Grenadines",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saint Vincent And The Grenadines",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣文森特和格林纳丁斯",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Cameroon = {
  alpha2code: "CM",
  alpha3code: "CMR",
  alpha4code: "",
  independent: true,
  numeric_code: "120",
  short_name: "Cameroon",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cameroon",
  calling_code: "",

  languages: "[]",

  region_in_cn: "喀麦隆",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaoTomeAndPrincipe = {
  alpha2code: "ST",
  alpha3code: "STP",
  alpha4code: "",
  independent: true,
  numeric_code: "678",
  short_name: "Sao Tome and Principe",

  period_of_validity: "",

  alias: "[]",
  common_name: "Sao Tome And Principe",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣多美和普林西比",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CantonAndEnderburyIslands = {
  alpha2code: "CT",
  alpha3code: "CTE",
  alpha4code: "CTKI",
  independent: false,
  numeric_code: "128",
  short_name: "Canton and Enderbury Islands",

  period_of_validity: "1974–1984",

  alias: "[]",
  common_name: "Canton And Enderbury Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "坎顿及恩德伯里群岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CaboVerde = {
  alpha2code: "CV",
  alpha3code: "CPV",
  alpha4code: "",
  independent: true,
  numeric_code: "132",
  short_name: "Cabo Verde",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cabo Verde",
  calling_code: "",

  languages: "[]",

  region_in_cn: "佛得角",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Montserrat = {
  alpha2code: "MS",
  alpha3code: "MSR",
  alpha4code: "",
  independent: false,
  numeric_code: "500",
  short_name: "Montserrat",

  period_of_validity: "",

  alias: "[]",
  common_name: "Montserrat",
  calling_code: "",

  languages: "[]",

  region_in_cn: "蒙特塞拉特",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SovietUnion = {
  alpha2code: "SU",
  alpha3code: "SUN",
  alpha4code: "SUHH",
  independent: true,
  numeric_code: "810",
  short_name: "USSR",

  period_of_validity: "1974–1992",

  alias: "[]",
  common_name: "Soviet Union",
  calling_code: "",

  languages: "[]",

  region_in_cn: "苏联",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Korea = {
  alpha2code: "",
  alpha3code: "XKO",
  alpha4code: "",
  independent: true,
  numeric_code: "",
  short_name: "",

  period_of_validity: "",

  alias: "[]",
  common_name: "Korea",
  calling_code: "",

  languages: "["Hangul","Hanja","Korean"]",

  region_in_cn: "朝鲜",
  region_in_native: "한국",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const PacificIslandsTrustTerritoryOfthe = {
  alpha2code: "PC",
  alpha3code: "PCI",
  alpha4code: "PCHH",
  independent: false,
  numeric_code: "582",
  short_name: "Pacific Islands, Trust Territory of the",

  period_of_validity: "1974–1986",

  alias: "[]",
  common_name: "Pacific Islands Trust Territory Of the",
  calling_code: "",

  languages: "[]",

  region_in_cn: "太平洋群岛托管地",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Senegal = {
  alpha2code: "SN",
  alpha3code: "SEN",
  alpha4code: "",
  independent: true,
  numeric_code: "686",
  short_name: "Senegal",

  period_of_validity: "",

  alias: "[]",
  common_name: "Senegal",
  calling_code: "",

  languages: "[]",

  region_in_cn: "塞内加尔",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const MidwayIslands = {
  alpha2code: "MI",
  alpha3code: "MID",
  alpha4code: "MIUM",
  independent: false,
  numeric_code: "488",
  short_name: "Midway Islands",

  period_of_validity: "1974–1986",

  alias: "[]",
  common_name: "Midway Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "中途岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Taiwan = {
  alpha2code: "TW",
  alpha3code: "TWN",
  alpha4code: "",
  independent: false,
  numeric_code: "158",
  short_name: "Taiwan, Province of China",

  period_of_validity: "",

  alias: "[]",
  common_name: "Taiwan",
  calling_code: "886",

  languages: "["Chinese"]",

  region_in_cn: "中国台湾",
  region_in_native: "臺灣",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "新台币",
  currency_in_native: "新臺幣",
} as IEntity;

const Laos = {
  alpha2code: "LA",
  alpha3code: "LAO",
  alpha4code: "",
  independent: true,
  numeric_code: "481",
  short_name: "Lao People's Democratic Republic",

  period_of_validity: "",

  alias: "[]",
  common_name: "Laos",
  calling_code: "856",

  languages: "[]",

  region_in_cn: "老挝",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const VietNam = {
  alpha2code: "VN",
  alpha3code: "VNM",
  alpha4code: "",
  independent: true,
  numeric_code: "704",
  short_name: "Viet Nam",

  period_of_validity: "",

  alias: "[]",
  common_name: "Viet Nam",
  calling_code: "84",

  languages: "[]",

  region_in_cn: "越南",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Mali = {
  alpha2code: "ML",
  alpha3code: "MLI",
  alpha4code: "",
  independent: true,
  numeric_code: "466",
  short_name: "Mali",

  period_of_validity: "",

  alias: "[]",
  common_name: "Mali",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马里",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Viet_NamDemocraticRepublicOf = {
  alpha2code: "VD",
  alpha3code: "VDR",
  alpha4code: "VDVN",
  independent: false,
  numeric_code: "704",
  short_name: "Viet-Nam, Democratic Republic of",

  period_of_validity: "1974–1977",

  alias: "[]",
  common_name: "Viet_Nam Democratic Republic Of",
  calling_code: "",

  languages: "[]",

  region_in_cn: "越南民主共和国",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Togo = {
  alpha2code: "TG",
  alpha3code: "TGO",
  alpha4code: "",
  independent: true,
  numeric_code: "768",
  short_name: "Togo",

  period_of_validity: "",

  alias: "[]",
  common_name: "Togo",
  calling_code: "",

  languages: "[]",

  region_in_cn: "多哥",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Congo = {
  alpha2code: "CG",
  alpha3code: "COG",
  alpha4code: "",
  independent: true,
  numeric_code: "178",
  short_name: "Congo",

  period_of_validity: "",

  alias: "[]",
  common_name: "Congo",
  calling_code: "",

  languages: "[]",

  region_in_cn: "刚果共和国",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Zaire = {
  alpha2code: "ZR",
  alpha3code: "ZAR",
  alpha4code: "ZRCD",
  independent: false,
  numeric_code: "180",
  short_name: "Zaire",

  period_of_validity: "1974–1997",

  alias: "[]",
  common_name: "Zaire",
  calling_code: "",

  languages: "[]",

  region_in_cn: "扎伊尔",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CongoKinshasa = {
  alpha2code: "CD",
  alpha3code: "COD",
  alpha4code: "",
  independent: true,
  numeric_code: "180",
  short_name: "Congo (Democratic Republic of the)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Congo Kinshasa",
  calling_code: "",

  languages: "[]",

  region_in_cn: "刚果民主共和国",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Macao = {
  alpha2code: "MO",
  alpha3code: "MAC",
  alpha4code: "",
  independent: false,
  numeric_code: "446",
  short_name: "Macao",

  period_of_validity: "",

  alias: "[]",
  common_name: "Macao",
  calling_code: "853",

  languages: "[]",

  region_in_cn: "中国澳门",
  region_in_native: "中國澳門",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "澳门元",
  currency_in_native: "澳門元",
} as IEntity;

const SouthernRhodesia = {
  alpha2code: "RH",
  alpha3code: "RHO",
  alpha4code: "RHZW",
  independent: false,
  numeric_code: "716",
  short_name: "Southern Rhodesia",

  period_of_validity: "1974–1980",

  alias: "[]",
  common_name: "Southern Rhodesia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "南罗德西亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SouthKorea = {
  alpha2code: "KR",
  alpha3code: "KOR",
  alpha4code: "",
  independent: true,
  numeric_code: "410",
  short_name: "Korea (Republic of)",

  period_of_validity: "",

  alias: "[]",
  common_name: "South Korea",
  calling_code: "82",

  languages: "[]",

  region_in_cn: "南韩",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NorthKorea = {
  alpha2code: "KP",
  alpha3code: "PRK",
  alpha4code: "",
  independent: true,
  numeric_code: "408",
  short_name: "Korea (Democratic People's Republic of)",

  period_of_validity: "",

  alias: "[]",
  common_name: "North Korea",
  calling_code: "",

  languages: "[]",

  region_in_cn: "北韩",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const JohnstonIsland = {
  alpha2code: "JT",
  alpha3code: "JTN",
  alpha4code: "JTUM",
  independent: false,
  numeric_code: "396",
  short_name: "Johnston Island",

  period_of_validity: "1974–1986",

  alias: "[]",
  common_name: "Johnston Island",
  calling_code: "",

  languages: "[]",

  region_in_cn: "约翰斯顿环礁",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CzechRepublic = {
  alpha2code: "CZ",
  alpha3code: "CZE",
  alpha4code: "",
  independent: true,
  numeric_code: "203",
  short_name: "Czechia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Czech Republic",
  calling_code: "",

  languages: "[]",

  region_in_cn: "捷克",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Benin = {
  alpha2code: "BJ",
  alpha3code: "BEN",
  alpha4code: "",
  independent: true,
  numeric_code: "204",
  short_name: "Benin",

  period_of_validity: "",

  alias: "[]",
  common_name: "Benin",
  calling_code: "",

  languages: "[]",

  region_in_cn: "贝宁",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Dahomey = {
  alpha2code: "DY",
  alpha3code: "DHY",
  alpha4code: "DYBJ",
  independent: false,
  numeric_code: "204",
  short_name: "Dahomey",

  period_of_validity: "1974–1977",

  alias: "[]",
  common_name: "Dahomey",
  calling_code: "",

  languages: "[]",

  region_in_cn: "达荷美",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const IvoryCoast = {
  alpha2code: "CI",
  alpha3code: "CIV",
  alpha4code: "",
  independent: true,
  numeric_code: "384",
  short_name: "Côte d'Ivoire",

  period_of_validity: "",

  alias: "[]",
  common_name: "Ivory Coast",
  calling_code: "",

  languages: "[]",

  region_in_cn: "科特迪瓦",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Dominica = {
  alpha2code: "DM",
  alpha3code: "DMA",
  alpha4code: "",
  independent: true,
  numeric_code: "212",
  short_name: "Dominica",

  period_of_validity: "",

  alias: "[]",
  common_name: "Dominica",
  calling_code: "",

  languages: "[]",

  region_in_cn: "多米尼克",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const YemenDemocratic = {
  alpha2code: "YD",
  alpha3code: "YMD",
  alpha4code: "YDYE",
  independent: false,
  numeric_code: "720",
  short_name: "Yemen, Democratic",

  period_of_validity: "1974–1990",

  alias: "[]",
  common_name: "Yemen Democratic",
  calling_code: "",

  languages: "[]",

  region_in_cn: "也门民主人民共和国",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const DronningMaudLand = {
  alpha2code: "NQ",
  alpha3code: "ATN",
  alpha4code: "NQAQ",
  independent: false,
  numeric_code: "216",
  short_name: "Dronning Maud Land",

  period_of_validity: "1974–1983",

  alias: "[]",
  common_name: "Dronning Maud Land",
  calling_code: "",

  languages: "[]",

  region_in_cn: "毛德皇后地",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Iran = {
  alpha2code: "IR",
  alpha3code: "IRN",
  alpha4code: "",
  independent: true,
  numeric_code: "364",
  short_name: "Iran (Islamic Republic of)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Iran",
  calling_code: "",

  languages: "[]",

  region_in_cn: "伊朗",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Turkey = {
  alpha2code: "TR",
  alpha3code: "TUR",
  alpha4code: "",
  independent: true,
  numeric_code: "792",
  short_name: "Türkiye",

  period_of_validity: "",

  alias: "[]",
  common_name: "Turkey",
  calling_code: "90",

  languages: "[]",

  region_in_cn: "土耳其",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const EquatorialGuinea = {
  alpha2code: "GQ",
  alpha3code: "GNQ",
  alpha4code: "",
  independent: true,
  numeric_code: "226",
  short_name: "Equatorial Guinea",

  period_of_validity: "",

  alias: "[]",
  common_name: "Equatorial Guinea",
  calling_code: "",

  languages: "[]",

  region_in_cn: "赤道几内亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SvalbardAndJanMayen = {
  alpha2code: "SJ",
  alpha3code: "SJM",
  alpha4code: "",
  independent: false,
  numeric_code: "744",
  short_name: "Svalbard and Jan Mayen",

  period_of_validity: "",

  alias: "[]",
  common_name: "Svalbard And Jan Mayen",
  calling_code: "",

  languages: "[]",

  region_in_cn: "斯瓦尔巴和扬马延",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Grenada = {
  alpha2code: "GD",
  alpha3code: "GRD",
  alpha4code: "",
  independent: true,
  numeric_code: "308",
  short_name: "Grenada",

  period_of_validity: "",

  alias: "[]",
  common_name: "Grenada",
  calling_code: "",

  languages: "[]",

  region_in_cn: "格林纳达",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const GilbertAndElliceIslands = {
  alpha2code: "GE",
  alpha3code: "GEL",
  alpha4code: "GEHH",
  independent: true,
  numeric_code: "296",
  short_name: "Gilbert and Ellice Islands",

  period_of_validity: "1974–1979",

  alias: "[]",
  common_name: "Gilbert And Ellice Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "吉尔伯特和埃利斯群岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Guinea_Bissau = {
  alpha2code: "GW",
  alpha3code: "GNB",
  alpha4code: "",
  independent: true,
  numeric_code: "624",
  short_name: "Guinea-Bissau",

  period_of_validity: "",

  alias: "[]",
  common_name: "Guinea_Bissau",
  calling_code: "",

  languages: "[]",

  region_in_cn: "几内亚比绍",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const FalklandIslandsMalvinas = {
  alpha2code: "FK",
  alpha3code: "FLK",
  alpha4code: "",
  independent: false,
  numeric_code: "238",
  short_name: "Falkland Islands (Malvinas)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Falkland Islands Malvinas",
  calling_code: "",

  languages: "[]",

  region_in_cn: "福克兰群岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SouthGeorgiaAndTheSouthSandwichIslands = {
  alpha2code: "GS",
  alpha3code: "SGS",
  alpha4code: "",
  independent: false,
  numeric_code: "239",
  short_name: "South Georgia and the South Sandwich Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "South Georgia And The South Sandwich Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "南乔治亚和南桑威奇群岛",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SyrianArabRepublic = {
  alpha2code: "SY",
  alpha3code: "SYR",
  alpha4code: "",
  independent: true,
  numeric_code: "760",
  short_name: "Syrian Arab Republic",

  period_of_validity: "",

  alias: "[]",
  common_name: "Syrian Arab Republic",
  calling_code: "",

  languages: "[]",

  region_in_cn: "叙利亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const EastGermany = {
  alpha2code: "DD",
  alpha3code: "DDR",
  alpha4code: "DDDE",
  independent: true,
  numeric_code: "278",
  short_name: "German Democratic Republic",

  period_of_validity: "1974–1990",

  alias: "[]",
  common_name: "East Germany",
  calling_code: "",

  languages: "["German"]",

  region_in_cn: "东德",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const PalestineStateOf = {
  alpha2code: "PS",
  alpha3code: "PSE",
  alpha4code: "",
  independent: false,
  numeric_code: "275",
  short_name: "Palestine, State of",

  period_of_validity: "",

  alias: "[]",
  common_name: "Palestine State Of",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴勒斯坦",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const FranceMetropolitan = {
  alpha2code: "FX",
  alpha3code: "FXX",
  alpha4code: "FXFR",
  independent: false,
  numeric_code: "249",
  short_name: "France, Metropolitan",

  period_of_validity: "1993–1997",

  alias: "[]",
  common_name: "France Metropolitan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "法国本土",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Gabon = {
  alpha2code: "GA",
  alpha3code: "GAB",
  alpha4code: "",
  independent: true,
  numeric_code: "266",
  short_name: "Gabon",

  period_of_validity: "",

  alias: "[]",
  common_name: "Gabon",
  calling_code: "",

  languages: "[]",

  region_in_cn: "加蓬",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const FrenchAfarAndIssas = {
  alpha2code: "AI",
  alpha3code: "AFI",
  alpha4code: "AIDJ",
  independent: false,
  numeric_code: "262",
  short_name: "French Afar and Issas",

  period_of_validity: "1974–1977",

  alias: "[]",
  common_name: "French Afar And Issas",
  calling_code: "",

  languages: "[]",

  region_in_cn: "法属阿法尔和伊萨领地",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const FrenchPolynesia = {
  alpha2code: "PF",
  alpha3code: "PYF",
  alpha4code: "",
  independent: false,
  numeric_code: "258",
  short_name: "French Polynesia",

  period_of_validity: "",

  alias: "[]",
  common_name: "French Polynesia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "法属波利尼西亚",
  region_in_native: "",

  alphabetic_code: "",
  numeric_code_4217: "",
  minor_unit: 0,
  currency: "",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Albania = {
  alpha2code: "AL",
  alpha3code: "ALB",
  alpha4code: "",
  independent: true,
  numeric_code: "008",
  short_name: "Albania",

  period_of_validity: "",

  alias: "[]",
  common_name: "Albania",
  calling_code: "",

  languages: "[]",

  region_in_cn: "阿尔巴尼亚",
  region_in_native: "",

  alphabetic_code: "ALL",
  numeric_code_4217: "008",
  minor_unit: 2,
  currency: "Albanian lek",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Algeria = {
  alpha2code: "DZ",
  alpha3code: "DZA",
  alpha4code: "",
  independent: true,
  numeric_code: "012",
  short_name: "Algeria",

  period_of_validity: "",

  alias: "[]",
  common_name: "Algeria",
  calling_code: "",

  languages: "[]",

  region_in_cn: "阿尔及利亚",
  region_in_native: "",

  alphabetic_code: "DZD",
  numeric_code_4217: "012",
  minor_unit: 2,
  currency: "Algerian dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Argentina = {
  alpha2code: "AR",
  alpha3code: "ARG",
  alpha4code: "",
  independent: true,
  numeric_code: "032",
  short_name: "Argentina",

  period_of_validity: "",

  alias: "[]",
  common_name: "Argentina",
  calling_code: "54",

  languages: "[]",

  region_in_cn: "阿根廷",
  region_in_native: "",

  alphabetic_code: "ARS",
  numeric_code_4217: "032",
  minor_unit: 2,
  currency: "Argentine peso",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Kiribati = {
  alpha2code: "KI",
  alpha3code: "KIR",
  alpha4code: "",
  independent: true,
  numeric_code: "296",
  short_name: "Kiribati",

  period_of_validity: "",

  alias: "[]",
  common_name: "Kiribati",
  calling_code: "",

  languages: "[]",

  region_in_cn: "基里巴斯",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NorfolkIsland = {
  alpha2code: "NF",
  alpha3code: "NFK",
  alpha4code: "",
  independent: false,
  numeric_code: "574",
  short_name: "Norfolk Island",

  period_of_validity: "",

  alias: "[]",
  common_name: "Norfolk Island",
  calling_code: "",

  languages: "[]",

  region_in_cn: "诺福克岛",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Australia = {
  alpha2code: "AU",
  alpha3code: "AUS",
  alpha4code: "",
  independent: true,
  numeric_code: "036",
  short_name: "Australia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Australia",
  calling_code: "61",

  languages: "[]",

  region_in_cn: "澳大利亚",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Tuvalu = {
  alpha2code: "TV",
  alpha3code: "TUV",
  alpha4code: "",
  independent: true,
  numeric_code: "798",
  short_name: "Tuvalu",

  period_of_validity: "",

  alias: "[]",
  common_name: "Tuvalu",
  calling_code: "",

  languages: "[]",

  region_in_cn: "图瓦卢",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const HeardIslandAndMcDonaldIslands = {
  alpha2code: "HM",
  alpha3code: "HMD",
  alpha4code: "",
  independent: false,
  numeric_code: "334",
  short_name: "Heard Island and McDonald Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Heard Island And McDonald Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "赫德岛和麦克唐纳群岛",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Nauru = {
  alpha2code: "NR",
  alpha3code: "NRU",
  alpha4code: "",
  independent: true,
  numeric_code: "520",
  short_name: "Nauru",

  period_of_validity: "",

  alias: "[]",
  common_name: "Nauru",
  calling_code: "",

  languages: "[]",

  region_in_cn: "瑙鲁",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CocosKeelingIslands = {
  alpha2code: "CC",
  alpha3code: "CCK",
  alpha4code: "",
  independent: false,
  numeric_code: "166",
  short_name: "Cocos (Keeling) Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cocos Keeling Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "科科斯（基林）群岛",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const ChristmasIsland = {
  alpha2code: "CX",
  alpha3code: "CXR",
  alpha4code: "",
  independent: false,
  numeric_code: "162",
  short_name: "Christmas Island",

  period_of_validity: "",

  alias: "[]",
  common_name: "Christmas Island",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣诞岛",
  region_in_native: "",

  alphabetic_code: "AUD",
  numeric_code_4217: "036",
  minor_unit: 2,
  currency: "Australian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Bahamas = {
  alpha2code: "BS",
  alpha3code: "BHS",
  alpha4code: "",
  independent: true,
  numeric_code: "044",
  short_name: "Bahamas",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bahamas",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴哈马",
  region_in_native: "",

  alphabetic_code: "BSD",
  numeric_code_4217: "044",
  minor_unit: 2,
  currency: "Bahamian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Bahrain = {
  alpha2code: "BH",
  alpha3code: "BHR",
  alpha4code: "",
  independent: true,
  numeric_code: "048",
  short_name: "Bahrain",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bahrain",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴林",
  region_in_native: "",

  alphabetic_code: "BHD",
  numeric_code_4217: "048",
  minor_unit: 3,
  currency: "Bahraini dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Bangladesh = {
  alpha2code: "BD",
  alpha3code: "BGD",
  alpha4code: "",
  independent: true,
  numeric_code: "050",
  short_name: "Bangladesh",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bangladesh",
  calling_code: "",

  languages: "[]",

  region_in_cn: "孟加拉国",
  region_in_native: "",

  alphabetic_code: "BDT",
  numeric_code_4217: "050",
  minor_unit: 2,
  currency: "Bangladeshi taka",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Armenia = {
  alpha2code: "AM",
  alpha3code: "ARM",
  alpha4code: "",
  independent: true,
  numeric_code: "051",
  short_name: "Armenia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Armenia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "亚美尼亚",
  region_in_native: "",

  alphabetic_code: "AMD",
  numeric_code_4217: "051",
  minor_unit: 2,
  currency: "Armenian dram",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Barbados = {
  alpha2code: "BB",
  alpha3code: "BRB",
  alpha4code: "",
  independent: true,
  numeric_code: "052",
  short_name: "Barbados",

  period_of_validity: "",

  alias: "[]",
  common_name: "Barbados",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴巴多斯",
  region_in_native: "",

  alphabetic_code: "BBD",
  numeric_code_4217: "052",
  minor_unit: 2,
  currency: "Barbados dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Bermuda = {
  alpha2code: "BM",
  alpha3code: "BMU",
  alpha4code: "",
  independent: false,
  numeric_code: "060",
  short_name: "Bermuda",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bermuda",
  calling_code: "",

  languages: "[]",

  region_in_cn: "百慕大",
  region_in_native: "",

  alphabetic_code: "BMD",
  numeric_code_4217: "060",
  minor_unit: 2,
  currency: "Bermudian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Botswana = {
  alpha2code: "BW",
  alpha3code: "BWA",
  alpha4code: "",
  independent: true,
  numeric_code: "072",
  short_name: "Botswana",

  period_of_validity: "",

  alias: "[]",
  common_name: "Botswana",
  calling_code: "",

  languages: "[]",

  region_in_cn: "博茨瓦纳",
  region_in_native: "",

  alphabetic_code: "BWP",
  numeric_code_4217: "072",
  minor_unit: 2,
  currency: "Botswana pula",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Belize = {
  alpha2code: "BZ",
  alpha3code: "BLZ",
  alpha4code: "",
  independent: true,
  numeric_code: "084",
  short_name: "Belize",

  period_of_validity: "",

  alias: "[]",
  common_name: "Belize",
  calling_code: "",

  languages: "[]",

  region_in_cn: "伯利兹",
  region_in_native: "",

  alphabetic_code: "BZD",
  numeric_code_4217: "084",
  minor_unit: 2,
  currency: "Belize dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SolomonIslands = {
  alpha2code: "SB",
  alpha3code: "SLB",
  alpha4code: "",
  independent: true,
  numeric_code: "090",
  short_name: "Solomon Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Solomon Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "所罗门群岛",
  region_in_native: "",

  alphabetic_code: "SBD",
  numeric_code_4217: "090",
  minor_unit: 2,
  currency: "Solomon Islands dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Myanmar = {
  alpha2code: "MM",
  alpha3code: "MMR",
  alpha4code: "",
  independent: true,
  numeric_code: "104",
  short_name: "Myanmar",

  period_of_validity: "",

  alias: "[]",
  common_name: "Myanmar",
  calling_code: "95",

  languages: "[]",

  region_in_cn: "缅甸",
  region_in_native: "",

  alphabetic_code: "MMK",
  numeric_code_4217: "104",
  minor_unit: 2,
  currency: "Myanmar kyat",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Burundi = {
  alpha2code: "BI",
  alpha3code: "BDI",
  alpha4code: "",
  independent: true,
  numeric_code: "108",
  short_name: "Burundi",

  period_of_validity: "",

  alias: "[]",
  common_name: "Burundi",
  calling_code: "",

  languages: "[]",

  region_in_cn: "布隆迪",
  region_in_native: "",

  alphabetic_code: "BIF",
  numeric_code_4217: "108",
  minor_unit: 0,
  currency: "Burundian franc",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Cambodia = {
  alpha2code: "KH",
  alpha3code: "KHM",
  alpha4code: "",
  independent: true,
  numeric_code: "116",
  short_name: "Cambodia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cambodia",
  calling_code: "855",

  languages: "[]",

  region_in_cn: "柬埔寨",
  region_in_native: "",

  alphabetic_code: "KHR",
  numeric_code_4217: "116",
  minor_unit: 2,
  currency: "Cambodian riel",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Canada = {
  alpha2code: "CA",
  alpha3code: "CAN",
  alpha4code: "",
  independent: true,
  numeric_code: "124",
  short_name: "Canada",

  period_of_validity: "",

  alias: "[]",
  common_name: "Canada",
  calling_code: "1",

  languages: "[]",

  region_in_cn: "加拿大",
  region_in_native: "",

  alphabetic_code: "CAD",
  numeric_code_4217: "124",
  minor_unit: 2,
  currency: "Canadian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CaymanIslands = {
  alpha2code: "KY",
  alpha3code: "CYM",
  alpha4code: "",
  independent: false,
  numeric_code: "136",
  short_name: "Cayman Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cayman Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "开曼群岛",
  region_in_native: "",

  alphabetic_code: "KYD",
  numeric_code_4217: "136",
  minor_unit: 2,
  currency: "Cayman Islands dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SriLanka = {
  alpha2code: "LK",
  alpha3code: "LKA",
  alpha4code: "",
  independent: true,
  numeric_code: "144",
  short_name: "Sri Lanka",

  period_of_validity: "",

  alias: "[]",
  common_name: "Sri Lanka",
  calling_code: "",

  languages: "[]",

  region_in_cn: "斯里兰卡",
  region_in_native: "",

  alphabetic_code: "LKR",
  numeric_code_4217: "144",
  minor_unit: 2,
  currency: "Sri Lankan rupee",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const China = {
  alpha2code: "CN",
  alpha3code: "CHN",
  alpha4code: "",
  independent: true,
  numeric_code: "156",
  short_name: "China",

  period_of_validity: "",

  alias: "[]",
  common_name: "China",
  calling_code: "86",

  languages: "["Mandarin Chinese"]",

  region_in_cn: "中国大陆",
  region_in_native: "中国",

  alphabetic_code: "CNY",
  numeric_code_4217: "156",
  minor_unit: 2,
  currency: "Renminbi",

  currency_in_cn: "人民币",
  currency_in_native: "人民币",
} as IEntity;

const Colombia = {
  alpha2code: "CO",
  alpha3code: "COL",
  alpha4code: "",
  independent: true,
  numeric_code: "170",
  short_name: "Colombia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Colombia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "哥伦比亚",
  region_in_native: "",

  alphabetic_code: "COP",
  numeric_code_4217: "170",
  minor_unit: 2,
  currency: "Colombian peso",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Comoros = {
  alpha2code: "KM",
  alpha3code: "COM",
  alpha4code: "",
  independent: true,
  numeric_code: "174",
  short_name: "Comoros",

  period_of_validity: "",

  alias: "[]",
  common_name: "Comoros",
  calling_code: "",

  languages: "[]",

  region_in_cn: "科摩罗",
  region_in_native: "",

  alphabetic_code: "KMF",
  numeric_code_4217: "174",
  minor_unit: 0,
  currency: "Comoro franc",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CostaRica = {
  alpha2code: "CR",
  alpha3code: "CRI",
  alpha4code: "",
  independent: true,
  numeric_code: "188",
  short_name: "Costa Rica",

  period_of_validity: "",

  alias: "[]",
  common_name: "Costa Rica",
  calling_code: "",

  languages: "[]",

  region_in_cn: "哥斯达黎加",
  region_in_native: "",

  alphabetic_code: "CRC",
  numeric_code_4217: "188",
  minor_unit: 2,
  currency: "Costa Rican colon",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Cuba = {
  alpha2code: "CU",
  alpha3code: "CUB",
  alpha4code: "",
  independent: true,
  numeric_code: "192",
  short_name: "Cuba",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cuba",
  calling_code: "",

  languages: "[]",

  region_in_cn: "古巴",
  region_in_native: "",

  alphabetic_code: "CUP",
  numeric_code_4217: "192",
  minor_unit: 2,
  currency: "Cuban peso",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Denmark = {
  alpha2code: "DK",
  alpha3code: "DNK",
  alpha4code: "",
  independent: true,
  numeric_code: "208",
  short_name: "Denmark",

  period_of_validity: "",

  alias: "[]",
  common_name: "Denmark",
  calling_code: "",

  languages: "[]",

  region_in_cn: "丹麦",
  region_in_native: "",

  alphabetic_code: "DKK",
  numeric_code_4217: "208",
  minor_unit: 2,
  currency: "Danish krone",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Greenland = {
  alpha2code: "GL",
  alpha3code: "GRL",
  alpha4code: "",
  independent: false,
  numeric_code: "304",
  short_name: "Greenland",

  period_of_validity: "",

  alias: "[]",
  common_name: "Greenland",
  calling_code: "",

  languages: "[]",

  region_in_cn: "格陵兰",
  region_in_native: "",

  alphabetic_code: "DKK",
  numeric_code_4217: "208",
  minor_unit: 2,
  currency: "Danish krone",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const FaroeIslands = {
  alpha2code: "FO",
  alpha3code: "FRO",
  alpha4code: "",
  independent: false,
  numeric_code: "234",
  short_name: "Faroe Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Faroe Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "法罗群岛",
  region_in_native: "",

  alphabetic_code: "DKK",
  numeric_code_4217: "208",
  minor_unit: 2,
  currency: "Danish krone",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const DominicanRepublic = {
  alpha2code: "DO",
  alpha3code: "DOM",
  alpha4code: "",
  independent: true,
  numeric_code: "214",
  short_name: "Dominican Republic",

  period_of_validity: "",

  alias: "[]",
  common_name: "Dominican Republic",
  calling_code: "",

  languages: "[]",

  region_in_cn: "多米尼加",
  region_in_native: "",

  alphabetic_code: "DOP",
  numeric_code_4217: "214",
  minor_unit: 2,
  currency: "Dominican peso",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Ethiopia = {
  alpha2code: "ET",
  alpha3code: "ETH",
  alpha4code: "",
  independent: true,
  numeric_code: "231",
  short_name: "Ethiopia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Ethiopia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "埃塞俄比亚",
  region_in_native: "",

  alphabetic_code: "ETB",
  numeric_code_4217: "230",
  minor_unit: 2,
  currency: "Ethiopian birr",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Eritrea = {
  alpha2code: "ER",
  alpha3code: "ERI",
  alpha4code: "",
  independent: true,
  numeric_code: "232",
  short_name: "Eritrea",

  period_of_validity: "",

  alias: "[]",
  common_name: "Eritrea",
  calling_code: "",

  languages: "[]",

  region_in_cn: "厄立特里亚",
  region_in_native: "",

  alphabetic_code: "ERN",
  numeric_code_4217: "232",
  minor_unit: 2,
  currency: "Eritrean nakfa",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Fiji = {
  alpha2code: "FJ",
  alpha3code: "FJI",
  alpha4code: "",
  independent: true,
  numeric_code: "242",
  short_name: "Fiji",

  period_of_validity: "",

  alias: "[]",
  common_name: "Fiji",
  calling_code: "",

  languages: "[]",

  region_in_cn: "斐济",
  region_in_native: "",

  alphabetic_code: "FJD",
  numeric_code_4217: "242",
  minor_unit: 2,
  currency: "Fiji dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Djibouti = {
  alpha2code: "DJ",
  alpha3code: "DJI",
  alpha4code: "",
  independent: true,
  numeric_code: "262",
  short_name: "Djibouti",

  period_of_validity: "",

  alias: "[]",
  common_name: "Djibouti",
  calling_code: "",

  languages: "[]",

  region_in_cn: "吉布提",
  region_in_native: "",

  alphabetic_code: "DJF",
  numeric_code_4217: "262",
  minor_unit: 0,
  currency: "Djiboutian franc",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Gambia = {
  alpha2code: "GM",
  alpha3code: "GMB",
  alpha4code: "",
  independent: true,
  numeric_code: "270",
  short_name: "Gambia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Gambia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "冈比亚",
  region_in_native: "",

  alphabetic_code: "GMD",
  numeric_code_4217: "270",
  minor_unit: 2,
  currency: "Gambian dalasi",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Gibraltar = {
  alpha2code: "GI",
  alpha3code: "GIB",
  alpha4code: "",
  independent: false,
  numeric_code: "292",
  short_name: "Gibraltar",

  period_of_validity: "",

  alias: "[]",
  common_name: "Gibraltar",
  calling_code: "",

  languages: "[]",

  region_in_cn: "直布罗陀",
  region_in_native: "",

  alphabetic_code: "GIP",
  numeric_code_4217: "292",
  minor_unit: 2,
  currency: "Gibraltar pound",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Guatemala = {
  alpha2code: "GT",
  alpha3code: "GTM",
  alpha4code: "",
  independent: true,
  numeric_code: "320",
  short_name: "Guatemala",

  period_of_validity: "",

  alias: "[]",
  common_name: "Guatemala",
  calling_code: "",

  languages: "[]",

  region_in_cn: "危地马拉",
  region_in_native: "",

  alphabetic_code: "GTQ",
  numeric_code_4217: "320",
  minor_unit: 2,
  currency: "Guatemalan quetzal",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Guinea = {
  alpha2code: "GN",
  alpha3code: "GIN",
  alpha4code: "",
  independent: true,
  numeric_code: "324",
  short_name: "Guinea",

  period_of_validity: "",

  alias: "[]",
  common_name: "Guinea",
  calling_code: "",

  languages: "[]",

  region_in_cn: "几内亚",
  region_in_native: "",

  alphabetic_code: "GNF",
  numeric_code_4217: "324",
  minor_unit: 0,
  currency: "Guinean franc",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Guyana = {
  alpha2code: "GY",
  alpha3code: "GUY",
  alpha4code: "",
  independent: true,
  numeric_code: "328",
  short_name: "Guyana",

  period_of_validity: "",

  alias: "[]",
  common_name: "Guyana",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圭亚那",
  region_in_native: "",

  alphabetic_code: "GYD",
  numeric_code_4217: "328",
  minor_unit: 2,
  currency: "Guyanese dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Haiti = {
  alpha2code: "HT",
  alpha3code: "HTI",
  alpha4code: "",
  independent: true,
  numeric_code: "332",
  short_name: "Haiti",

  period_of_validity: "",

  alias: "[]",
  common_name: "Haiti",
  calling_code: "",

  languages: "[]",

  region_in_cn: "海地",
  region_in_native: "",

  alphabetic_code: "HTG",
  numeric_code_4217: "332",
  minor_unit: 2,
  currency: "Haitian gourde",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Honduras = {
  alpha2code: "HN",
  alpha3code: "HND",
  alpha4code: "",
  independent: true,
  numeric_code: "340",
  short_name: "Honduras",

  period_of_validity: "",

  alias: "[]",
  common_name: "Honduras",
  calling_code: "",

  languages: "[]",

  region_in_cn: "洪都拉斯",
  region_in_native: "",

  alphabetic_code: "HNL",
  numeric_code_4217: "340",
  minor_unit: 2,
  currency: "Honduran lempira",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const HongKong = {
  alpha2code: "HK",
  alpha3code: "HKG",
  alpha4code: "",
  independent: false,
  numeric_code: "344",
  short_name: "Hong Kong",

  period_of_validity: "",

  alias: "[]",
  common_name: "Hong Kong",
  calling_code: "852",

  languages: "["English","Cantonese"]",

  region_in_cn: "中国香港",
  region_in_native: "香港",

  alphabetic_code: "HKD",
  numeric_code_4217: "344",
  minor_unit: 2,
  currency: "Hong Kong dollar",

  currency_in_cn: "港元",
  currency_in_native: "港幣",
} as IEntity;

const Hungary = {
  alpha2code: "HU",
  alpha3code: "HUN",
  alpha4code: "",
  independent: true,
  numeric_code: "348",
  short_name: "Hungary",

  period_of_validity: "",

  alias: "[]",
  common_name: "Hungary",
  calling_code: "",

  languages: "[]",

  region_in_cn: "匈牙利",
  region_in_native: "",

  alphabetic_code: "HUF",
  numeric_code_4217: "348",
  minor_unit: 2,
  currency: "Hungarian forint",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Iceland = {
  alpha2code: "IS",
  alpha3code: "ISL",
  alpha4code: "",
  independent: true,
  numeric_code: "352",
  short_name: "Iceland",

  period_of_validity: "",

  alias: "[]",
  common_name: "Iceland",
  calling_code: "",

  languages: "[]",

  region_in_cn: "冰岛",
  region_in_native: "",

  alphabetic_code: "ISK",
  numeric_code_4217: "352",
  minor_unit: 0,
  currency: "Icelandic króna",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const India = {
  alpha2code: "IN",
  alpha3code: "IND",
  alpha4code: "",
  independent: true,
  numeric_code: "356",
  short_name: "India",

  period_of_validity: "",

  alias: "[]",
  common_name: "India",
  calling_code: "",

  languages: "[]",

  region_in_cn: "印度",
  region_in_native: "",

  alphabetic_code: "INR",
  numeric_code_4217: "356",
  minor_unit: 2,
  currency: "Indian rupee",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Bhutan = {
  alpha2code: "BT",
  alpha3code: "BTN",
  alpha4code: "",
  independent: true,
  numeric_code: "064",
  short_name: "Bhutan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bhutan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "不丹",
  region_in_native: "",

  alphabetic_code: "INR",
  numeric_code_4217: "356",
  minor_unit: 2,
  currency: "Indian rupee",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Indonesia = {
  alpha2code: "ID",
  alpha3code: "IDN",
  alpha4code: "",
  independent: true,
  numeric_code: "360",
  short_name: "Indonesia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Indonesia",
  calling_code: "62",

  languages: "[]",

  region_in_cn: "印度尼西亚",
  region_in_native: "",

  alphabetic_code: "IDR",
  numeric_code_4217: "360",
  minor_unit: 2,
  currency: "Indonesian rupiah",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Iraq = {
  alpha2code: "IQ",
  alpha3code: "IRQ",
  alpha4code: "",
  independent: true,
  numeric_code: "368",
  short_name: "Iraq",

  period_of_validity: "",

  alias: "[]",
  common_name: "Iraq",
  calling_code: "",

  languages: "[]",

  region_in_cn: "伊拉克",
  region_in_native: "",

  alphabetic_code: "IQD",
  numeric_code_4217: "368",
  minor_unit: 3,
  currency: "Iraqi dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Israel = {
  alpha2code: "IL",
  alpha3code: "ISR",
  alpha4code: "",
  independent: true,
  numeric_code: "376",
  short_name: "Israel",

  period_of_validity: "",

  alias: "[]",
  common_name: "Israel",
  calling_code: "",

  languages: "[]",

  region_in_cn: "以色列",
  region_in_native: "",

  alphabetic_code: "ILS",
  numeric_code_4217: "376",
  minor_unit: 2,
  currency: "Israeli new shekel",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Jamaica = {
  alpha2code: "JM",
  alpha3code: "JAM",
  alpha4code: "",
  independent: true,
  numeric_code: "388",
  short_name: "Jamaica",

  period_of_validity: "",

  alias: "[]",
  common_name: "Jamaica",
  calling_code: "",

  languages: "[]",

  region_in_cn: "牙买加",
  region_in_native: "",

  alphabetic_code: "JMD",
  numeric_code_4217: "388",
  minor_unit: 2,
  currency: "Jamaican dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Japan = {
  alpha2code: "JP",
  alpha3code: "JPN",
  alpha4code: "",
  independent: true,
  numeric_code: "392",
  short_name: "Japan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Japan",
  calling_code: "81",

  languages: "[]",

  region_in_cn: "日本",
  region_in_native: "",

  alphabetic_code: "JPY",
  numeric_code_4217: "392",
  minor_unit: 0,
  currency: "Japanese yen",

  currency_in_cn: "日元",
  currency_in_native: "日本円",
} as IEntity;

const Kazakhstan = {
  alpha2code: "KZ",
  alpha3code: "KAZ",
  alpha4code: "",
  independent: true,
  numeric_code: "398",
  short_name: "Kazakhstan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Kazakhstan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "哈萨克斯坦",
  region_in_native: "",

  alphabetic_code: "KZT",
  numeric_code_4217: "398",
  minor_unit: 2,
  currency: "Kazakhstani tenge",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Jordan = {
  alpha2code: "JO",
  alpha3code: "JOR",
  alpha4code: "",
  independent: true,
  numeric_code: "400",
  short_name: "Jordan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Jordan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "约旦",
  region_in_native: "",

  alphabetic_code: "JOD",
  numeric_code_4217: "400",
  minor_unit: 3,
  currency: "Jordanian dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Kenya = {
  alpha2code: "KE",
  alpha3code: "KEN",
  alpha4code: "",
  independent: true,
  numeric_code: "404",
  short_name: "Kenya",

  period_of_validity: "",

  alias: "[]",
  common_name: "Kenya",
  calling_code: "",

  languages: "[]",

  region_in_cn: "肯尼亚",
  region_in_native: "",

  alphabetic_code: "KES",
  numeric_code_4217: "404",
  minor_unit: 2,
  currency: "Kenyan shilling",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Kuwait = {
  alpha2code: "KW",
  alpha3code: "KWT",
  alpha4code: "",
  independent: true,
  numeric_code: "414",
  short_name: "Kuwait",

  period_of_validity: "",

  alias: "[]",
  common_name: "Kuwait",
  calling_code: "",

  languages: "[]",

  region_in_cn: "科威特",
  region_in_native: "",

  alphabetic_code: "KWD",
  numeric_code_4217: "414",
  minor_unit: 3,
  currency: "Kuwaiti dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Kyrgyzstan = {
  alpha2code: "KG",
  alpha3code: "KGZ",
  alpha4code: "",
  independent: true,
  numeric_code: "417",
  short_name: "Kyrgyzstan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Kyrgyzstan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "吉尔吉斯斯坦",
  region_in_native: "",

  alphabetic_code: "KGS",
  numeric_code_4217: "417",
  minor_unit: 2,
  currency: "Kyrgyzstani som",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Lebanon = {
  alpha2code: "LB",
  alpha3code: "LBN",
  alpha4code: "",
  independent: true,
  numeric_code: "422",
  short_name: "Lebanon",

  period_of_validity: "",

  alias: "[]",
  common_name: "Lebanon",
  calling_code: "",

  languages: "[]",

  region_in_cn: "黎巴嫩",
  region_in_native: "",

  alphabetic_code: "LBP",
  numeric_code_4217: "422",
  minor_unit: 2,
  currency: "Lebanese pound",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Liberia = {
  alpha2code: "LR",
  alpha3code: "LBR",
  alpha4code: "",
  independent: true,
  numeric_code: "430",
  short_name: "Liberia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Liberia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "利比里亚",
  region_in_native: "",

  alphabetic_code: "LRD",
  numeric_code_4217: "430",
  minor_unit: 2,
  currency: "Liberian dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Libya = {
  alpha2code: "LY",
  alpha3code: "LBY",
  alpha4code: "",
  independent: true,
  numeric_code: "434",
  short_name: "Libya",

  period_of_validity: "",

  alias: "[]",
  common_name: "Libya",
  calling_code: "",

  languages: "[]",

  region_in_cn: "利比亚",
  region_in_native: "",

  alphabetic_code: "LYD",
  numeric_code_4217: "434",
  minor_unit: 3,
  currency: "Libyan dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Malawi = {
  alpha2code: "MW",
  alpha3code: "MWI",
  alpha4code: "",
  independent: true,
  numeric_code: "454",
  short_name: "Malawi",

  period_of_validity: "",

  alias: "[]",
  common_name: "Malawi",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马拉维",
  region_in_native: "",

  alphabetic_code: "MWK",
  numeric_code_4217: "454",
  minor_unit: 2,
  currency: "Malawian kwacha",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Malaysia = {
  alpha2code: "MY",
  alpha3code: "MYS",
  alpha4code: "",
  independent: true,
  numeric_code: "458",
  short_name: "Malaysia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Malaysia",
  calling_code: "60",

  languages: "[]",

  region_in_cn: "马来西亚",
  region_in_native: "",

  alphabetic_code: "MYR",
  numeric_code_4217: "458",
  minor_unit: 2,
  currency: "Malaysian ringgit",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Maldives = {
  alpha2code: "MV",
  alpha3code: "MDV",
  alpha4code: "",
  independent: true,
  numeric_code: "462",
  short_name: "Maldives",

  period_of_validity: "",

  alias: "[]",
  common_name: "Maldives",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马尔代夫",
  region_in_native: "",

  alphabetic_code: "MVR",
  numeric_code_4217: "462",
  minor_unit: 2,
  currency: "Maldivian rufiyaa",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Mauritius = {
  alpha2code: "MU",
  alpha3code: "MUS",
  alpha4code: "",
  independent: true,
  numeric_code: "480",
  short_name: "Mauritius",

  period_of_validity: "",

  alias: "[]",
  common_name: "Mauritius",
  calling_code: "",

  languages: "[]",

  region_in_cn: "毛里求斯",
  region_in_native: "",

  alphabetic_code: "MUR",
  numeric_code_4217: "480",
  minor_unit: 2,
  currency: "Mauritian rupee",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Mexico = {
  alpha2code: "MX",
  alpha3code: "MEX",
  alpha4code: "",
  independent: true,
  numeric_code: "484",
  short_name: "Mexico",

  period_of_validity: "",

  alias: "[]",
  common_name: "Mexico",
  calling_code: "",

  languages: "[]",

  region_in_cn: "墨西哥",
  region_in_native: "",

  alphabetic_code: "MXN",
  numeric_code_4217: "484",
  minor_unit: 2,
  currency: "Mexican peso",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Mongolia = {
  alpha2code: "MN",
  alpha3code: "MNG",
  alpha4code: "",
  independent: true,
  numeric_code: "496",
  short_name: "Mongolia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Mongolia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "蒙古国",
  region_in_native: "",

  alphabetic_code: "MNT",
  numeric_code_4217: "496",
  minor_unit: 2,
  currency: "Mongolian tögrög",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const WesternSahara = {
  alpha2code: "EH",
  alpha3code: "ESH",
  alpha4code: "",
  independent: false,
  numeric_code: "732",
  short_name: "Western Sahara",

  period_of_validity: "",

  alias: "[]",
  common_name: "Western Sahara",
  calling_code: "",

  languages: "[]",

  region_in_cn: "西撒哈拉",
  region_in_native: "",

  alphabetic_code: "MAD",
  numeric_code_4217: "504",
  minor_unit: 2,
  currency: "Moroccan dirham",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Morocco = {
  alpha2code: "MA",
  alpha3code: "MAR",
  alpha4code: "",
  independent: true,
  numeric_code: "504",
  short_name: "Morocco",

  period_of_validity: "",

  alias: "[]",
  common_name: "Morocco",
  calling_code: "",

  languages: "[]",

  region_in_cn: "摩洛哥",
  region_in_native: "",

  alphabetic_code: "MAD",
  numeric_code_4217: "504",
  minor_unit: 2,
  currency: "Moroccan dirham",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Oman = {
  alpha2code: "OM",
  alpha3code: "OMN",
  alpha4code: "",
  independent: true,
  numeric_code: "512",
  short_name: "Oman",

  period_of_validity: "",

  alias: "[]",
  common_name: "Oman",
  calling_code: "",

  languages: "[]",

  region_in_cn: "阿曼",
  region_in_native: "",

  alphabetic_code: "OMR",
  numeric_code_4217: "512",
  minor_unit: 3,
  currency: "Omani rial",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Nepal = {
  alpha2code: "NP",
  alpha3code: "NPL",
  alpha4code: "",
  independent: true,
  numeric_code: "524",
  short_name: "Nepal",

  period_of_validity: "",

  alias: "[]",
  common_name: "Nepal",
  calling_code: "",

  languages: "[]",

  region_in_cn: "尼泊尔",
  region_in_native: "",

  alphabetic_code: "NPR",
  numeric_code_4217: "524",
  minor_unit: 2,
  currency: "Nepalese rupee",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SintMaartenDutchpart = {
  alpha2code: "SX",
  alpha3code: "SXM",
  alpha4code: "",
  independent: false,
  numeric_code: "534",
  short_name: "Sint Maarten (Dutch part)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Sint Maarten Dutch part",
  calling_code: "",

  languages: "[]",

  region_in_cn: "荷属圣马丁",
  region_in_native: "",

  alphabetic_code: "ANG",
  numeric_code_4217: "532",
  minor_unit: 2,
  currency: "Netherlands Antillean guilder",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Curacao = {
  alpha2code: "CW",
  alpha3code: "CUW",
  alpha4code: "",
  independent: false,
  numeric_code: "531",
  short_name: "Curaçao",

  period_of_validity: "",

  alias: "[]",
  common_name: "Curacao",
  calling_code: "",

  languages: "[]",

  region_in_cn: "库拉索",
  region_in_native: "",

  alphabetic_code: "ANG",
  numeric_code_4217: "532",
  minor_unit: 2,
  currency: "Netherlands Antillean guilder",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Aruba = {
  alpha2code: "AW",
  alpha3code: "ABW",
  alpha4code: "",
  independent: false,
  numeric_code: "533",
  short_name: "Aruba",

  period_of_validity: "",

  alias: "[]",
  common_name: "Aruba",
  calling_code: "",

  languages: "[]",

  region_in_cn: "阿鲁巴",
  region_in_native: "",

  alphabetic_code: "AWG",
  numeric_code_4217: "533",
  minor_unit: 2,
  currency: "Aruban florin",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Vanuatu = {
  alpha2code: "VU",
  alpha3code: "VUT",
  alpha4code: "",
  independent: true,
  numeric_code: "548",
  short_name: "Vanuatu",

  period_of_validity: "",

  alias: "[]",
  common_name: "Vanuatu",
  calling_code: "",

  languages: "[]",

  region_in_cn: "瓦努阿图",
  region_in_native: "",

  alphabetic_code: "VUV",
  numeric_code_4217: "548",
  minor_unit: 0,
  currency: "Vanuatu vatu",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Niue = {
  alpha2code: "NU",
  alpha3code: "NIU",
  alpha4code: "",
  independent: false,
  numeric_code: "570",
  short_name: "Niue",

  period_of_validity: "",

  alias: "[]",
  common_name: "Niue",
  calling_code: "",

  languages: "[]",

  region_in_cn: "纽埃",
  region_in_native: "",

  alphabetic_code: "NZD",
  numeric_code_4217: "554",
  minor_unit: 2,
  currency: "New Zealand dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const CookIslands = {
  alpha2code: "CK",
  alpha3code: "COK",
  alpha4code: "",
  independent: false,
  numeric_code: "184",
  short_name: "Cook Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cook Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "库克群岛",
  region_in_native: "",

  alphabetic_code: "NZD",
  numeric_code_4217: "554",
  minor_unit: 2,
  currency: "New Zealand dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const PitcairnIslands = {
  alpha2code: "PN",
  alpha3code: "PCN",
  alpha4code: "",
  independent: false,
  numeric_code: "612",
  short_name: "Pitcairn",

  period_of_validity: "",

  alias: "[]",
  common_name: "Pitcairn Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "皮特凯恩群岛",
  region_in_native: "",

  alphabetic_code: "NZD",
  numeric_code_4217: "554",
  minor_unit: 2,
  currency: "New Zealand dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Tokelau = {
  alpha2code: "TK",
  alpha3code: "TKL",
  alpha4code: "",
  independent: false,
  numeric_code: "772",
  short_name: "Tokelau",

  period_of_validity: "",

  alias: "[]",
  common_name: "Tokelau",
  calling_code: "",

  languages: "[]",

  region_in_cn: "托克劳",
  region_in_native: "",

  alphabetic_code: "NZD",
  numeric_code_4217: "554",
  minor_unit: 2,
  currency: "New Zealand dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NewZealand = {
  alpha2code: "NZ",
  alpha3code: "NZL",
  alpha4code: "",
  independent: true,
  numeric_code: "554",
  short_name: "New Zealand",

  period_of_validity: "",

  alias: "[]",
  common_name: "New Zealand",
  calling_code: "64",

  languages: "[]",

  region_in_cn: "新西兰",
  region_in_native: "",

  alphabetic_code: "NZD",
  numeric_code_4217: "554",
  minor_unit: 2,
  currency: "New Zealand dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Nicaragua = {
  alpha2code: "NI",
  alpha3code: "NIC",
  alpha4code: "",
  independent: true,
  numeric_code: "558",
  short_name: "Nicaragua",

  period_of_validity: "",

  alias: "[]",
  common_name: "Nicaragua",
  calling_code: "",

  languages: "[]",

  region_in_cn: "尼加拉瓜",
  region_in_native: "",

  alphabetic_code: "NIO",
  numeric_code_4217: "558",
  minor_unit: 2,
  currency: "Nicaraguan córdoba",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Nigeria = {
  alpha2code: "NG",
  alpha3code: "NGA",
  alpha4code: "",
  independent: true,
  numeric_code: "566",
  short_name: "Nigeria",

  period_of_validity: "",

  alias: "[]",
  common_name: "Nigeria",
  calling_code: "",

  languages: "[]",

  region_in_cn: "尼日利亚",
  region_in_native: "",

  alphabetic_code: "NGN",
  numeric_code_4217: "566",
  minor_unit: 2,
  currency: "Nigerian naira",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Norway = {
  alpha2code: "NO",
  alpha3code: "NOR",
  alpha4code: "",
  independent: true,
  numeric_code: "578",
  short_name: "Norway",

  period_of_validity: "",

  alias: "[]",
  common_name: "Norway",
  calling_code: "",

  languages: "[]",

  region_in_cn: "挪威",
  region_in_native: "",

  alphabetic_code: "NOK",
  numeric_code_4217: "578",
  minor_unit: 2,
  currency: "Norwegian krone",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const BouvetIsland = {
  alpha2code: "BV",
  alpha3code: "BVT",
  alpha4code: "",
  independent: false,
  numeric_code: "074",
  short_name: "Bouvet Island",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bouvet Island",
  calling_code: "",

  languages: "[]",

  region_in_cn: "布韦岛",
  region_in_native: "",

  alphabetic_code: "NOK",
  numeric_code_4217: "578",
  minor_unit: 2,
  currency: "Norwegian krone",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Pakistan = {
  alpha2code: "PK",
  alpha3code: "PAK",
  alpha4code: "",
  independent: true,
  numeric_code: "586",
  short_name: "Pakistan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Pakistan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴基斯坦",
  region_in_native: "",

  alphabetic_code: "PKR",
  numeric_code_4217: "586",
  minor_unit: 2,
  currency: "Pakistani rupee",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const PapuaNewGuinea = {
  alpha2code: "PG",
  alpha3code: "PNG",
  alpha4code: "",
  independent: true,
  numeric_code: "598",
  short_name: "Papua New Guinea",

  period_of_validity: "",

  alias: "[]",
  common_name: "Papua New Guinea",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴布亚新几内亚",
  region_in_native: "",

  alphabetic_code: "PGK",
  numeric_code_4217: "598",
  minor_unit: 2,
  currency: "Papua New Guinean kina",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Paraguay = {
  alpha2code: "PY",
  alpha3code: "PRY",
  alpha4code: "",
  independent: true,
  numeric_code: "600",
  short_name: "Paraguay",

  period_of_validity: "",

  alias: "[]",
  common_name: "Paraguay",
  calling_code: "",

  languages: "[]",

  region_in_cn: "巴拉圭",
  region_in_native: "",

  alphabetic_code: "PYG",
  numeric_code_4217: "600",
  minor_unit: 0,
  currency: "Paraguayan guaraní",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Peru = {
  alpha2code: "PE",
  alpha3code: "PER",
  alpha4code: "",
  independent: true,
  numeric_code: "604",
  short_name: "Peru",

  period_of_validity: "",

  alias: "[]",
  common_name: "Peru",
  calling_code: "",

  languages: "[]",

  region_in_cn: "秘鲁",
  region_in_native: "",

  alphabetic_code: "PEN",
  numeric_code_4217: "604",
  minor_unit: 2,
  currency: "Peruvian sol",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Philippines = {
  alpha2code: "PH",
  alpha3code: "PHL",
  alpha4code: "",
  independent: true,
  numeric_code: "608",
  short_name: "Philippines",

  period_of_validity: "",

  alias: "[]",
  common_name: "Philippines",
  calling_code: "63",

  languages: "[]",

  region_in_cn: "菲律宾",
  region_in_native: "",

  alphabetic_code: "PHP",
  numeric_code_4217: "608",
  minor_unit: 2,
  currency: "Philippine peso",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Qatar = {
  alpha2code: "QA",
  alpha3code: "QAT",
  alpha4code: "",
  independent: true,
  numeric_code: "634",
  short_name: "Qatar",

  period_of_validity: "",

  alias: "[]",
  common_name: "Qatar",
  calling_code: "",

  languages: "[]",

  region_in_cn: "卡塔尔",
  region_in_native: "",

  alphabetic_code: "QAR",
  numeric_code_4217: "634",
  minor_unit: 2,
  currency: "Qatari riyal",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Rwanda = {
  alpha2code: "RW",
  alpha3code: "RWA",
  alpha4code: "",
  independent: true,
  numeric_code: "646",
  short_name: "Rwanda",

  period_of_validity: "",

  alias: "[]",
  common_name: "Rwanda",
  calling_code: "",

  languages: "[]",

  region_in_cn: "卢旺达",
  region_in_native: "",

  alphabetic_code: "RWF",
  numeric_code_4217: "646",
  minor_unit: 0,
  currency: "Rwandan franc",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaudiArabia = {
  alpha2code: "SA",
  alpha3code: "SAU",
  alpha4code: "",
  independent: true,
  numeric_code: "682",
  short_name: "Saudi Arabia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saudi Arabia",
  calling_code: "966",

  languages: "[]",

  region_in_cn: "沙特阿拉伯",
  region_in_native: "",

  alphabetic_code: "SAR",
  numeric_code_4217: "682",
  minor_unit: 2,
  currency: "Saudi riyal",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Seychelles = {
  alpha2code: "SC",
  alpha3code: "SYC",
  alpha4code: "",
  independent: true,
  numeric_code: "690",
  short_name: "Seychelles",

  period_of_validity: "",

  alias: "[]",
  common_name: "Seychelles",
  calling_code: "",

  languages: "[]",

  region_in_cn: "塞舌尔",
  region_in_native: "",

  alphabetic_code: "SCR",
  numeric_code_4217: "690",
  minor_unit: 2,
  currency: "Seychelles rupee",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Singapore = {
  alpha2code: "SG",
  alpha3code: "SGP",
  alpha4code: "",
  independent: true,
  numeric_code: "702",
  short_name: "Singapore",

  period_of_validity: "",

  alias: "[]",
  common_name: "Singapore",
  calling_code: "65",

  languages: "[]",

  region_in_cn: "新加坡",
  region_in_native: "",

  alphabetic_code: "SGD",
  numeric_code_4217: "702",
  minor_unit: 2,
  currency: "Singapore dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Somalia = {
  alpha2code: "SO",
  alpha3code: "SOM",
  alpha4code: "",
  independent: true,
  numeric_code: "706",
  short_name: "Somalia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Somalia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "索马里",
  region_in_native: "",

  alphabetic_code: "SOS",
  numeric_code_4217: "706",
  minor_unit: 2,
  currency: "Somalian shilling",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Lesotho = {
  alpha2code: "LS",
  alpha3code: "LSO",
  alpha4code: "",
  independent: true,
  numeric_code: "426",
  short_name: "Lesotho",

  period_of_validity: "",

  alias: "[]",
  common_name: "Lesotho",
  calling_code: "",

  languages: "[]",

  region_in_cn: "莱索托",
  region_in_native: "",

  alphabetic_code: "ZAR",
  numeric_code_4217: "710",
  minor_unit: 2,
  currency: "South African rand",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Eswatini = {
  alpha2code: "SZ",
  alpha3code: "SWZ",
  alpha4code: "",
  independent: true,
  numeric_code: "748",
  short_name: "Eswatini",

  period_of_validity: "",

  alias: "[]",
  common_name: "Eswatini",
  calling_code: "",

  languages: "[]",

  region_in_cn: "斯威士兰",
  region_in_native: "",

  alphabetic_code: "ZAR",
  numeric_code_4217: "710",
  minor_unit: 2,
  currency: "South African rand",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SouthAfrica = {
  alpha2code: "ZA",
  alpha3code: "ZAF",
  alpha4code: "",
  independent: true,
  numeric_code: "710",
  short_name: "South Africa",

  period_of_validity: "",

  alias: "[]",
  common_name: "South Africa",
  calling_code: "27",

  languages: "[]",

  region_in_cn: "南非",
  region_in_native: "",

  alphabetic_code: "ZAR",
  numeric_code_4217: "710",
  minor_unit: 2,
  currency: "South African rand",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Namibia = {
  alpha2code: "NA",
  alpha3code: "NAM",
  alpha4code: "",
  independent: true,
  numeric_code: "516",
  short_name: "Namibia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Namibia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "纳米比亚",
  region_in_native: "",

  alphabetic_code: "ZAR",
  numeric_code_4217: "710",
  minor_unit: 2,
  currency: "South African rand",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SouthSudan = {
  alpha2code: "SS",
  alpha3code: "SSD",
  alpha4code: "",
  independent: true,
  numeric_code: "728",
  short_name: "South Sudan",

  period_of_validity: "",

  alias: "[]",
  common_name: "South Sudan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "南苏丹",
  region_in_native: "",

  alphabetic_code: "SSP",
  numeric_code_4217: "728",
  minor_unit: 2,
  currency: "South Sudanese pound",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Sweden = {
  alpha2code: "SE",
  alpha3code: "SWE",
  alpha4code: "",
  independent: true,
  numeric_code: "752",
  short_name: "Sweden",

  period_of_validity: "",

  alias: "[]",
  common_name: "Sweden",
  calling_code: "",

  languages: "[]",

  region_in_cn: "瑞典",
  region_in_native: "",

  alphabetic_code: "SEK",
  numeric_code_4217: "752",
  minor_unit: 2,
  currency: "Swedish krona",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Liechtenstein = {
  alpha2code: "LI",
  alpha3code: "LIE",
  alpha4code: "",
  independent: true,
  numeric_code: "438",
  short_name: "Liechtenstein",

  period_of_validity: "",

  alias: "[]",
  common_name: "Liechtenstein",
  calling_code: "",

  languages: "[]",

  region_in_cn: "列支敦士登",
  region_in_native: "",

  alphabetic_code: "CHF",
  numeric_code_4217: "756",
  minor_unit: 2,
  currency: "Swiss franc",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Thailand = {
  alpha2code: "TH",
  alpha3code: "THA",
  alpha4code: "",
  independent: true,
  numeric_code: "764",
  short_name: "Thailand",

  period_of_validity: "",

  alias: "[]",
  common_name: "Thailand",
  calling_code: "66",

  languages: "[]",

  region_in_cn: "泰国",
  region_in_native: "",

  alphabetic_code: "THB",
  numeric_code_4217: "764",
  minor_unit: 2,
  currency: "Thai baht",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Tonga = {
  alpha2code: "TO",
  alpha3code: "TON",
  alpha4code: "",
  independent: true,
  numeric_code: "776",
  short_name: "Tonga",

  period_of_validity: "",

  alias: "[]",
  common_name: "Tonga",
  calling_code: "",

  languages: "[]",

  region_in_cn: "汤加",
  region_in_native: "",

  alphabetic_code: "TOP",
  numeric_code_4217: "776",
  minor_unit: 2,
  currency: "Tongan paʻanga",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const TrinidadAndTobago = {
  alpha2code: "TT",
  alpha3code: "TTO",
  alpha4code: "",
  independent: true,
  numeric_code: "780",
  short_name: "Trinidad and Tobago",

  period_of_validity: "",

  alias: "[]",
  common_name: "Trinidad And Tobago",
  calling_code: "",

  languages: "[]",

  region_in_cn: "特立尼达和多巴哥",
  region_in_native: "",

  alphabetic_code: "TTD",
  numeric_code_4217: "780",
  minor_unit: 2,
  currency: "Trinidad and Tobago dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const UnitedArabEmirates = {
  alpha2code: "AE",
  alpha3code: "ARE",
  alpha4code: "",
  independent: true,
  numeric_code: "784",
  short_name: "United Arab Emirates",

  period_of_validity: "",

  alias: "[]",
  common_name: "United Arab Emirates",
  calling_code: "971",

  languages: "[]",

  region_in_cn: "阿联酋",
  region_in_native: "",

  alphabetic_code: "AED",
  numeric_code_4217: "784",
  minor_unit: 2,
  currency: "United Arab Emirates dirham",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Tunisia = {
  alpha2code: "TN",
  alpha3code: "TUN",
  alpha4code: "",
  independent: true,
  numeric_code: "788",
  short_name: "Tunisia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Tunisia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "突尼斯",
  region_in_native: "",

  alphabetic_code: "TND",
  numeric_code_4217: "788",
  minor_unit: 3,
  currency: "Tunisian dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Uganda = {
  alpha2code: "UG",
  alpha3code: "UGA",
  alpha4code: "",
  independent: true,
  numeric_code: "800",
  short_name: "Uganda",

  period_of_validity: "",

  alias: "[]",
  common_name: "Uganda",
  calling_code: "",

  languages: "[]",

  region_in_cn: "乌干达",
  region_in_native: "",

  alphabetic_code: "UGX",
  numeric_code_4217: "800",
  minor_unit: 0,
  currency: "Ugandan shilling",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NorthMacedonia = {
  alpha2code: "MK",
  alpha3code: "MKD",
  alpha4code: "",
  independent: true,
  numeric_code: "807",
  short_name: "North Macedonia",

  period_of_validity: "",

  alias: "[]",
  common_name: "North Macedonia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "北马其顿",
  region_in_native: "",

  alphabetic_code: "MKD",
  numeric_code_4217: "807",
  minor_unit: 2,
  currency: "Macedonian denar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Egypt = {
  alpha2code: "EG",
  alpha3code: "EGY",
  alpha4code: "",
  independent: true,
  numeric_code: "818",
  short_name: "Egypt",

  period_of_validity: "",

  alias: "[]",
  common_name: "Egypt",
  calling_code: "",

  languages: "[]",

  region_in_cn: "埃及",
  region_in_native: "",

  alphabetic_code: "EGP",
  numeric_code_4217: "818",
  minor_unit: 2,
  currency: "Egyptian pound",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaintHelenaAscensionAndTristandaCunha = {
  alpha2code: "SH",
  alpha3code: "SHN",
  alpha4code: "",
  independent: false,
  numeric_code: "654",
  short_name: "Saint Helena, Ascension and Tristan da Cunha",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saint Helena Ascension And Tristan da Cunha",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
  region_in_native: "",

  alphabetic_code: "GBP",
  numeric_code_4217: "826",
  minor_unit: 2,
  currency: "Pound sterling",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Guernsey = {
  alpha2code: "GG",
  alpha3code: "GGY",
  alpha4code: "",
  independent: false,
  numeric_code: "831",
  short_name: "Guernsey",

  period_of_validity: "",

  alias: "[]",
  common_name: "Guernsey",
  calling_code: "",

  languages: "[]",

  region_in_cn: "根西",
  region_in_native: "",

  alphabetic_code: "GBP",
  numeric_code_4217: "826",
  minor_unit: 2,
  currency: "Pound sterling",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const IsleOfMan = {
  alpha2code: "IM",
  alpha3code: "IMN",
  alpha4code: "",
  independent: false,
  numeric_code: "833",
  short_name: "Isle of Man",

  period_of_validity: "",

  alias: "[]",
  common_name: "Isle Of Man",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马恩岛",
  region_in_native: "",

  alphabetic_code: "GBP",
  numeric_code_4217: "826",
  minor_unit: 2,
  currency: "Pound sterling",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Jersey = {
  alpha2code: "JE",
  alpha3code: "JEY",
  alpha4code: "",
  independent: false,
  numeric_code: "832",
  short_name: "Jersey",

  period_of_validity: "",

  alias: "[]",
  common_name: "Jersey",
  calling_code: "",

  languages: "[]",

  region_in_cn: "泽西",
  region_in_native: "",

  alphabetic_code: "GBP",
  numeric_code_4217: "826",
  minor_unit: 2,
  currency: "Pound sterling",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const TurksAndCaicosIslands = {
  alpha2code: "TC",
  alpha3code: "TCA",
  alpha4code: "",
  independent: false,
  numeric_code: "796",
  short_name: "Turks and Caicos Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Turks And Caicos Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "特克斯和凯科斯群岛",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const PuertoRico = {
  alpha2code: "PR",
  alpha3code: "PRI",
  alpha4code: "",
  independent: false,
  numeric_code: "630",
  short_name: "Puerto Rico",

  period_of_validity: "",

  alias: "[]",
  common_name: "Puerto Rico",
  calling_code: "",

  languages: "[]",

  region_in_cn: "波多黎各",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const BritishIndianOceanTerritory = {
  alpha2code: "IO",
  alpha3code: "IOT",
  alpha4code: "",
  independent: false,
  numeric_code: "086",
  short_name: "British Indian Ocean Territory",

  period_of_validity: "",

  alias: "[]",
  common_name: "British Indian Ocean Territory",
  calling_code: "",

  languages: "[]",

  region_in_cn: "英属印度洋领地",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Palau = {
  alpha2code: "PW",
  alpha3code: "PLW",
  alpha4code: "",
  independent: true,
  numeric_code: "585",
  short_name: "Palau",

  period_of_validity: "",

  alias: "[]",
  common_name: "Palau",
  calling_code: "",

  languages: "[]",

  region_in_cn: "帕劳",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const MarshallIslands = {
  alpha2code: "MH",
  alpha3code: "MHL",
  alpha4code: "",
  independent: true,
  numeric_code: "584",
  short_name: "Marshall Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Marshall Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马绍尔群岛",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const AmericanSamoa = {
  alpha2code: "AS",
  alpha3code: "ASM",
  alpha4code: "",
  independent: false,
  numeric_code: "016",
  short_name: "American Samoa",

  period_of_validity: "",

  alias: "[]",
  common_name: "American Samoa",
  calling_code: "",

  languages: "[]",

  region_in_cn: "美属萨摩亚",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const MicronesiaFederatedStatesOf = {
  alpha2code: "FM",
  alpha3code: "FSM",
  alpha4code: "",
  independent: true,
  numeric_code: "583",
  short_name: "Micronesia (Federated States of)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Micronesia Federated States Of",
  calling_code: "",

  languages: "[]",

  region_in_cn: "密克罗尼西亚联邦",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const UnitedStatesMinorOutlyingIslands = {
  alpha2code: "UM",
  alpha3code: "UMI",
  alpha4code: "",
  independent: false,
  numeric_code: "581",
  short_name: "United States Minor Outlying Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "United States Minor Outlying Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "美国本土外小岛屿",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const NorthernMarianaIslands = {
  alpha2code: "MP",
  alpha3code: "MNP",
  alpha4code: "",
  independent: false,
  numeric_code: "580",
  short_name: "Northern Mariana Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Northern Mariana Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "北马里亚纳群岛",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const UnitedStatesVirginIslands = {
  alpha2code: "VG",
  alpha3code: "VGB",
  alpha4code: "",
  independent: false,
  numeric_code: "092",
  short_name: "Virgin Islands (British)",

  period_of_validity: "",

  alias: "[]",
  common_name: "United States Virgin Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "英属维尔京群岛",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Guam = {
  alpha2code: "GU",
  alpha3code: "GUM",
  alpha4code: "",
  independent: false,
  numeric_code: "316",
  short_name: "Guam",

  period_of_validity: "",

  alias: "[]",
  common_name: "Guam",
  calling_code: "",

  languages: "[]",

  region_in_cn: "关岛",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Ecuador = {
  alpha2code: "EC",
  alpha3code: "ECU",
  alpha4code: "",
  independent: true,
  numeric_code: "218",
  short_name: "Ecuador",

  period_of_validity: "",

  alias: "[]",
  common_name: "Ecuador",
  calling_code: "",

  languages: "[]",

  region_in_cn: "厄瓜多尔",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Panama = {
  alpha2code: "PA",
  alpha3code: "PAN",
  alpha4code: "",
  independent: true,
  numeric_code: "591",
  short_name: "Panama",

  period_of_validity: "",

  alias: "[]",
  common_name: "Panama",
  calling_code: "507",

  languages: "[]",

  region_in_cn: "巴拿马",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const ElSalvador = {
  alpha2code: "SV",
  alpha3code: "SLV",
  alpha4code: "",
  independent: true,
  numeric_code: "222",
  short_name: "El Salvador",

  period_of_validity: "",

  alias: "[]",
  common_name: "El Salvador",
  calling_code: "",

  languages: "[]",

  region_in_cn: "萨尔瓦多",
  region_in_native: "",

  alphabetic_code: "USD",
  numeric_code_4217: "840",
  minor_unit: 2,
  currency: "United States dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Uruguay = {
  alpha2code: "UY",
  alpha3code: "URY",
  alpha4code: "",
  independent: true,
  numeric_code: "858",
  short_name: "Uruguay",

  period_of_validity: "",

  alias: "[]",
  common_name: "Uruguay",
  calling_code: "",

  languages: "[]",

  region_in_cn: "乌拉圭",
  region_in_native: "",

  alphabetic_code: "UYU",
  numeric_code_4217: "858",
  minor_unit: 2,
  currency: "Uruguayan peso",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Uzbekistan = {
  alpha2code: "UZ",
  alpha3code: "UZB",
  alpha4code: "",
  independent: true,
  numeric_code: "860",
  short_name: "Uzbekistan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Uzbekistan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "乌兹别克斯坦",
  region_in_native: "",

  alphabetic_code: "UZS",
  numeric_code_4217: "860",
  minor_unit: 2,
  currency: "Uzbekistani sum",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Samoa = {
  alpha2code: "WS",
  alpha3code: "WSM",
  alpha4code: "",
  independent: true,
  numeric_code: "882",
  short_name: "Samoa",

  period_of_validity: "",

  alias: "[]",
  common_name: "Samoa",
  calling_code: "",

  languages: "[]",

  region_in_cn: "萨摩亚",
  region_in_native: "",

  alphabetic_code: "WST",
  numeric_code_4217: "882",
  minor_unit: 2,
  currency: "Samoan tala",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Yemen = {
  alpha2code: "YE",
  alpha3code: "YEM",
  alpha4code: "",
  independent: true,
  numeric_code: "887",
  short_name: "Yemen",

  period_of_validity: "",

  alias: "[]",
  common_name: "Yemen",
  calling_code: "",

  languages: "[]",

  region_in_cn: "也门",
  region_in_native: "",

  alphabetic_code: "YER",
  numeric_code_4217: "886",
  minor_unit: 2,
  currency: "Yemeni rial",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Zimbabwe = {
  alpha2code: "ZW",
  alpha3code: "ZWE",
  alpha4code: "",
  independent: true,
  numeric_code: "716",
  short_name: "Zimbabwe",

  period_of_validity: "",

  alias: "[]",
  common_name: "Zimbabwe",
  calling_code: "",

  languages: "[]",

  region_in_cn: "津巴布韦",
  region_in_native: "",

  alphabetic_code: "ZWG",
  numeric_code_4217: "924",
  minor_unit: 2,
  currency: "Zimbabwe Gold",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SierraLeone = {
  alpha2code: "SL",
  alpha3code: "SLE",
  alpha4code: "",
  independent: true,
  numeric_code: "694",
  short_name: "Sierra Leone",

  period_of_validity: "",

  alias: "[]",
  common_name: "Sierra Leone",
  calling_code: "",

  languages: "[]",

  region_in_cn: "塞拉利昂",
  region_in_native: "",

  alphabetic_code: "SLE",
  numeric_code_4217: "925",
  minor_unit: 2,
  currency: "Sierra Leonean leone",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Mauritania = {
  alpha2code: "MR",
  alpha3code: "MRT",
  alpha4code: "",
  independent: true,
  numeric_code: "478",
  short_name: "Mauritania",

  period_of_validity: "",

  alias: "[]",
  common_name: "Mauritania",
  calling_code: "",

  languages: "[]",

  region_in_cn: "毛里塔尼亚",
  region_in_native: "",

  alphabetic_code: "MRU",
  numeric_code_4217: "929",
  minor_unit: 0,
  currency: "Mauritanian ouguiya",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Turkmenistan = {
  alpha2code: "TM",
  alpha3code: "TKM",
  alpha4code: "",
  independent: true,
  numeric_code: "795",
  short_name: "Turkmenistan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Turkmenistan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "土库曼斯坦",
  region_in_native: "",

  alphabetic_code: "TMT",
  numeric_code_4217: "934",
  minor_unit: 2,
  currency: "Turkmenistan manat",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Ghana = {
  alpha2code: "GH",
  alpha3code: "GHA",
  alpha4code: "",
  independent: true,
  numeric_code: "288",
  short_name: "Ghana",

  period_of_validity: "",

  alias: "[]",
  common_name: "Ghana",
  calling_code: "",

  languages: "[]",

  region_in_cn: "加纳",
  region_in_native: "",

  alphabetic_code: "GHS",
  numeric_code_4217: "936",
  minor_unit: 2,
  currency: "Ghanaian cedi",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Sudan = {
  alpha2code: "SD",
  alpha3code: "SDN",
  alpha4code: "",
  independent: true,
  numeric_code: "729",
  short_name: "Sudan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Sudan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "苏丹",
  region_in_native: "",

  alphabetic_code: "SDG",
  numeric_code_4217: "938",
  minor_unit: 2,
  currency: "Sudanese pound",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Serbia = {
  alpha2code: "RS",
  alpha3code: "SRB",
  alpha4code: "",
  independent: true,
  numeric_code: "688",
  short_name: "Serbia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Serbia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "塞尔维亚",
  region_in_native: "",

  alphabetic_code: "RSD",
  numeric_code_4217: "941",
  minor_unit: 2,
  currency: "Serbian dinar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Mozambique = {
  alpha2code: "MZ",
  alpha3code: "MOZ",
  alpha4code: "",
  independent: true,
  numeric_code: "508",
  short_name: "Mozambique",

  period_of_validity: "",

  alias: "[]",
  common_name: "Mozambique",
  calling_code: "",

  languages: "[]",

  region_in_cn: "莫桑比克",
  region_in_native: "",

  alphabetic_code: "MZN",
  numeric_code_4217: "943",
  minor_unit: 2,
  currency: "Mozambican metical",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Azerbaijan = {
  alpha2code: "AZ",
  alpha3code: "AZE",
  alpha4code: "",
  independent: true,
  numeric_code: "031",
  short_name: "Azerbaijan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Azerbaijan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "阿塞拜疆",
  region_in_native: "",

  alphabetic_code: "AZN",
  numeric_code_4217: "944",
  minor_unit: 2,
  currency: "Azerbaijani manat",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Romania = {
  alpha2code: "RO",
  alpha3code: "ROU",
  alpha4code: "",
  independent: true,
  numeric_code: "642",
  short_name: "Romania",

  period_of_validity: "",

  alias: "[]",
  common_name: "Romania",
  calling_code: "",

  languages: "[]",

  region_in_cn: "罗马尼亚",
  region_in_native: "",

  alphabetic_code: "RON",
  numeric_code_4217: "946",
  minor_unit: 2,
  currency: "Romanian leu",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Switzerland = {
  alpha2code: "CH",
  alpha3code: "CHE",
  alpha4code: "",
  independent: true,
  numeric_code: "756",
  short_name: "Switzerland",

  period_of_validity: "",

  alias: "[]",
  common_name: "Switzerland",
  calling_code: "41",

  languages: "[]",

  region_in_cn: "瑞士",
  region_in_native: "",

  alphabetic_code: "CHE",
  numeric_code_4217: "947",
  minor_unit: 2,
  currency: "WIR",

  currency_in_cn: "瑞士法郎",
  currency_in_native: "Swiss franc",
} as IEntity;

const Zambia = {
  alpha2code: "ZM",
  alpha3code: "ZMB",
  alpha4code: "",
  independent: true,
  numeric_code: "894",
  short_name: "Zambia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Zambia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "赞比亚",
  region_in_native: "",

  alphabetic_code: "ZMW",
  numeric_code_4217: "967",
  minor_unit: 2,
  currency: "Zambian kwacha",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Suriname = {
  alpha2code: "SR",
  alpha3code: "SUR",
  alpha4code: "",
  independent: true,
  numeric_code: "740",
  short_name: "Suriname",

  period_of_validity: "",

  alias: "[]",
  common_name: "Suriname",
  calling_code: "",

  languages: "[]",

  region_in_cn: "苏里南",
  region_in_native: "",

  alphabetic_code: "SRD",
  numeric_code_4217: "968",
  minor_unit: 2,
  currency: "Surinamese dollar",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Madagascar = {
  alpha2code: "MG",
  alpha3code: "MDG",
  alpha4code: "",
  independent: true,
  numeric_code: "450",
  short_name: "Madagascar",

  period_of_validity: "",

  alias: "[]",
  common_name: "Madagascar",
  calling_code: "261",

  languages: "[]",

  region_in_cn: "马达加斯加",
  region_in_native: "",

  alphabetic_code: "MGA",
  numeric_code_4217: "969",
  minor_unit: 0,
  currency: "Malagasy ariary",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Afghanistan = {
  alpha2code: "AF",
  alpha3code: "AFG",
  alpha4code: "",
  independent: true,
  numeric_code: "004",
  short_name: "Afghanistan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Afghanistan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "阿富汗",
  region_in_native: "",

  alphabetic_code: "AFN",
  numeric_code_4217: "971",
  minor_unit: 2,
  currency: "Afghan afghani",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Tajikistan = {
  alpha2code: "TJ",
  alpha3code: "TJK",
  alpha4code: "",
  independent: true,
  numeric_code: "762",
  short_name: "Tajikistan",

  period_of_validity: "",

  alias: "[]",
  common_name: "Tajikistan",
  calling_code: "",

  languages: "[]",

  region_in_cn: "塔吉克斯坦",
  region_in_native: "",

  alphabetic_code: "TJS",
  numeric_code_4217: "972",
  minor_unit: 2,
  currency: "Tajikistani somoni",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Angola = {
  alpha2code: "AO",
  alpha3code: "AGO",
  alpha4code: "",
  independent: true,
  numeric_code: "024",
  short_name: "Angola",

  period_of_validity: "",

  alias: "[]",
  common_name: "Angola",
  calling_code: "",

  languages: "[]",

  region_in_cn: "安哥拉",
  region_in_native: "",

  alphabetic_code: "AOA",
  numeric_code_4217: "973",
  minor_unit: 2,
  currency: "Angolan kwanza",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Bulgaria = {
  alpha2code: "BG",
  alpha3code: "BGR",
  alpha4code: "",
  independent: true,
  numeric_code: "100",
  short_name: "Bulgaria",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bulgaria",
  calling_code: "",

  languages: "[]",

  region_in_cn: "保加利亚",
  region_in_native: "",

  alphabetic_code: "BGN",
  numeric_code_4217: "975",
  minor_unit: 2,
  currency: "Bulgarian lev",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Bosnia = {
  alpha2code: "BA",
  alpha3code: "BIH",
  alpha4code: "",
  independent: true,
  numeric_code: "070",
  short_name: "Bosnia and Herzegovina",

  period_of_validity: "",

  alias: "[]",
  common_name: "Bosnia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "波黑",
  region_in_native: "",

  alphabetic_code: "BAM",
  numeric_code_4217: "977",
  minor_unit: 2,
  currency: "Bosnia and Herzegovina convertible mark",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Guadeloupe = {
  alpha2code: "GP",
  alpha3code: "GLP",
  alpha4code: "",
  independent: false,
  numeric_code: "312",
  short_name: "Guadeloupe",

  period_of_validity: "",

  alias: "[]",
  common_name: "Guadeloupe",
  calling_code: "",

  languages: "[]",

  region_in_cn: "瓜德罗普",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Latvia = {
  alpha2code: "LV",
  alpha3code: "LVA",
  alpha4code: "",
  independent: true,
  numeric_code: "428",
  short_name: "Latvia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Latvia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "拉脱维亚",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Portugal = {
  alpha2code: "PT",
  alpha3code: "PRT",
  alpha4code: "",
  independent: true,
  numeric_code: "620",
  short_name: "Portugal",

  period_of_validity: "",

  alias: "[]",
  common_name: "Portugal",
  calling_code: "",

  languages: "[]",

  region_in_cn: "葡萄牙",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Germany = {
  alpha2code: "DE",
  alpha3code: "DEU",
  alpha4code: "",
  independent: true,
  numeric_code: "276",
  short_name: "Germany",

  period_of_validity: "",

  alias: "[]",
  common_name: "Germany",
  calling_code: "49",

  languages: "[]",

  region_in_cn: "德国",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "欧元",
  currency_in_native: "Euro",
} as IEntity;

const FrenchSouthernTerritories = {
  alpha2code: "TF",
  alpha3code: "ATF",
  alpha4code: "",
  independent: false,
  numeric_code: "260",
  short_name: "French Southern Territories",

  period_of_validity: "",

  alias: "[]",
  common_name: "French Southern Territories",
  calling_code: "",

  languages: "[]",

  region_in_cn: "法属南部和南极领地",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const FrenchGuiana = {
  alpha2code: "GF",
  alpha3code: "GUF",
  alpha4code: "",
  independent: false,
  numeric_code: "254",
  short_name: "French Guiana",

  period_of_validity: "",

  alias: "[]",
  common_name: "French Guiana",
  calling_code: "",

  languages: "[]",

  region_in_cn: "法属圭亚那",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const France = {
  alpha2code: "FR",
  alpha3code: "FRA",
  alpha4code: "",
  independent: true,
  numeric_code: "250",
  short_name: "France",

  period_of_validity: "",

  alias: "[]",
  common_name: "France",
  calling_code: "33",

  languages: "[]",

  region_in_cn: "法国",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const AlandIslands = {
  alpha2code: "AX",
  alpha3code: "ALA",
  alpha4code: "",
  independent: false,
  numeric_code: "248",
  short_name: "Åland Islands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Aland Islands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "奥兰",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Finland = {
  alpha2code: "FI",
  alpha3code: "FIN",
  alpha4code: "",
  independent: true,
  numeric_code: "246",
  short_name: "Finland",

  period_of_validity: "",

  alias: "[]",
  common_name: "Finland",
  calling_code: "",

  languages: "[]",

  region_in_cn: "芬兰",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Estonia = {
  alpha2code: "EE",
  alpha3code: "EST",
  alpha4code: "",
  independent: true,
  numeric_code: "233",
  short_name: "Estonia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Estonia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "爱沙尼亚",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const HolySee = {
  alpha2code: "VA",
  alpha3code: "VAT",
  alpha4code: "",
  independent: true,
  numeric_code: "336",
  short_name: "Holy See",

  period_of_validity: "",

  alias: "[]",
  common_name: "Holy See",
  calling_code: "",

  languages: "[]",

  region_in_cn: "梵蒂冈",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Ireland = {
  alpha2code: "IE",
  alpha3code: "IRL",
  alpha4code: "",
  independent: true,
  numeric_code: "372",
  short_name: "Ireland",

  period_of_validity: "",

  alias: "[]",
  common_name: "Ireland",
  calling_code: "",

  languages: "[]",

  region_in_cn: "爱尔兰",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Spain = {
  alpha2code: "ES",
  alpha3code: "ESP",
  alpha4code: "",
  independent: true,
  numeric_code: "724",
  short_name: "Spain",

  period_of_validity: "",

  alias: "[]",
  common_name: "Spain",
  calling_code: "34",

  languages: "[]",

  region_in_cn: "西班牙",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Italy = {
  alpha2code: "IT",
  alpha3code: "ITA",
  alpha4code: "",
  independent: true,
  numeric_code: "380",
  short_name: "Italy",

  period_of_validity: "",

  alias: "[]",
  common_name: "Italy",
  calling_code: "39",

  languages: "[]",

  region_in_cn: "意大利",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Cyprus = {
  alpha2code: "CY",
  alpha3code: "CYP",
  alpha4code: "",
  independent: true,
  numeric_code: "196",
  short_name: "Cyprus",

  period_of_validity: "",

  alias: "[]",
  common_name: "Cyprus",
  calling_code: "",

  languages: "[]",

  region_in_cn: "塞浦路斯",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Reunion = {
  alpha2code: "RE",
  alpha3code: "REU",
  alpha4code: "",
  independent: false,
  numeric_code: "638",
  short_name: "Réunion",

  period_of_validity: "",

  alias: "[]",
  common_name: "Reunion",
  calling_code: "",

  languages: "[]",

  region_in_cn: "留尼汪",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Croatia = {
  alpha2code: "HR",
  alpha3code: "HRV",
  alpha4code: "",
  independent: true,
  numeric_code: "191",
  short_name: "Croatia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Croatia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "克罗地亚",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Mayotte = {
  alpha2code: "YT",
  alpha3code: "MYT",
  alpha4code: "",
  independent: false,
  numeric_code: "175",
  short_name: "Mayotte",

  period_of_validity: "",

  alias: "[]",
  common_name: "Mayotte",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马约特",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaintBarthelemy = {
  alpha2code: "BL",
  alpha3code: "BLM",
  alpha4code: "",
  independent: false,
  numeric_code: "652",
  short_name: "Saint Barthélemy",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saint Barthelemy",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣巴泰勒米",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Greece = {
  alpha2code: "GR",
  alpha3code: "GRC",
  alpha4code: "",
  independent: true,
  numeric_code: "300",
  short_name: "Greece",

  period_of_validity: "",

  alias: "[]",
  common_name: "Greece",
  calling_code: "",

  languages: "[]",

  region_in_cn: "希腊",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Lithuania = {
  alpha2code: "LT",
  alpha3code: "LTU",
  alpha4code: "",
  independent: true,
  numeric_code: "440",
  short_name: "Lithuania",

  period_of_validity: "",

  alias: "[]",
  common_name: "Lithuania",
  calling_code: "",

  languages: "[]",

  region_in_cn: "立陶宛",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Luxembourg = {
  alpha2code: "LU",
  alpha3code: "LUX",
  alpha4code: "",
  independent: true,
  numeric_code: "442",
  short_name: "Luxembourg",

  period_of_validity: "",

  alias: "[]",
  common_name: "Luxembourg",
  calling_code: "",

  languages: "[]",

  region_in_cn: "卢森堡",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Slovenia = {
  alpha2code: "SI",
  alpha3code: "SVN",
  alpha4code: "",
  independent: true,
  numeric_code: "705",
  short_name: "Slovenia",

  period_of_validity: "",

  alias: "[]",
  common_name: "Slovenia",
  calling_code: "",

  languages: "[]",

  region_in_cn: "斯洛文尼亚",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Malta = {
  alpha2code: "MT",
  alpha3code: "MLT",
  alpha4code: "",
  independent: true,
  numeric_code: "470",
  short_name: "Malta",

  period_of_validity: "",

  alias: "[]",
  common_name: "Malta",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马耳他",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Martinique = {
  alpha2code: "MQ",
  alpha3code: "MTQ",
  alpha4code: "",
  independent: false,
  numeric_code: "474",
  short_name: "Martinique",

  period_of_validity: "",

  alias: "[]",
  common_name: "Martinique",
  calling_code: "",

  languages: "[]",

  region_in_cn: "马提尼克",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaintMartinFrenchpart = {
  alpha2code: "MF",
  alpha3code: "MAF",
  alpha4code: "",
  independent: false,
  numeric_code: "663",
  short_name: "Saint Martin (French part)",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saint Martin French part",
  calling_code: "",

  languages: "[]",

  region_in_cn: "法属圣马丁",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Sikkim = {
  alpha2code: "SK",
  alpha3code: "SKM",
  alpha4code: "SKIN",
  independent: true,
  numeric_code: "698",
  short_name: "Sikkim",

  period_of_validity: "1974–1975",

  alias: "[]",
  common_name: "Sikkim",
  calling_code: "",

  languages: "[]",

  region_in_cn: "锡金",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Belgium = {
  alpha2code: "BE",
  alpha3code: "BEL",
  alpha4code: "",
  independent: true,
  numeric_code: "056",
  short_name: "Belgium",

  period_of_validity: "",

  alias: "[]",
  common_name: "Belgium",
  calling_code: "",

  languages: "[]",

  region_in_cn: "比利时",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Austria = {
  alpha2code: "AT",
  alpha3code: "AUT",
  alpha4code: "",
  independent: true,
  numeric_code: "040",
  short_name: "Austria",

  period_of_validity: "",

  alias: "[]",
  common_name: "Austria",
  calling_code: "",

  languages: "[]",

  region_in_cn: "奥地利",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Monaco = {
  alpha2code: "MC",
  alpha3code: "MCO",
  alpha4code: "",
  independent: true,
  numeric_code: "492",
  short_name: "Monaco",

  period_of_validity: "",

  alias: "[]",
  common_name: "Monaco",
  calling_code: "",

  languages: "[]",

  region_in_cn: "摩纳哥",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Montenegro = {
  alpha2code: "ME",
  alpha3code: "MNE",
  alpha4code: "",
  independent: true,
  numeric_code: "499",
  short_name: "Montenegro",

  period_of_validity: "",

  alias: "[]",
  common_name: "Montenegro",
  calling_code: "",

  languages: "[]",

  region_in_cn: "黑山",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SanMarino = {
  alpha2code: "SM",
  alpha3code: "SMR",
  alpha4code: "",
  independent: true,
  numeric_code: "674",
  short_name: "San Marino",

  period_of_validity: "",

  alias: "[]",
  common_name: "San Marino",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣马力诺",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Netherlands = {
  alpha2code: "NL",
  alpha3code: "NLD",
  alpha4code: "",
  independent: true,
  numeric_code: "528",
  short_name: "Netherlands",

  period_of_validity: "",

  alias: "[]",
  common_name: "Netherlands",
  calling_code: "",

  languages: "[]",

  region_in_cn: "荷兰",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Andorra = {
  alpha2code: "AD",
  alpha3code: "AND",
  alpha4code: "",
  independent: true,
  numeric_code: "020",
  short_name: "Andorra",

  period_of_validity: "",

  alias: "[]",
  common_name: "Andorra",
  calling_code: "",

  languages: "[]",

  region_in_cn: "安道尔",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const SaintPierreAndMiquelon = {
  alpha2code: "PM",
  alpha3code: "SPM",
  alpha4code: "",
  independent: false,
  numeric_code: "666",
  short_name: "Saint Pierre and Miquelon",

  period_of_validity: "",

  alias: "[]",
  common_name: "Saint Pierre And Miquelon",
  calling_code: "",

  languages: "[]",

  region_in_cn: "圣皮埃尔和密克隆",
  region_in_native: "",

  alphabetic_code: "EUR",
  numeric_code_4217: "978",
  minor_unit: 2,
  currency: "Euro",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Ukraine = {
  alpha2code: "UA",
  alpha3code: "UKR",
  alpha4code: "",
  independent: true,
  numeric_code: "804",
  short_name: "Ukraine",

  period_of_validity: "",

  alias: "[]",
  common_name: "Ukraine",
  calling_code: "",

  languages: "[]",

  region_in_cn: "乌克兰",
  region_in_native: "",

  alphabetic_code: "UAH",
  numeric_code_4217: "980",
  minor_unit: 2,
  currency: "Ukrainian hryvnia",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Poland = {
  alpha2code: "PL",
  alpha3code: "POL",
  alpha4code: "",
  independent: true,
  numeric_code: "616",
  short_name: "Poland",

  period_of_validity: "",

  alias: "[]",
  common_name: "Poland",
  calling_code: "",

  languages: "[]",

  region_in_cn: "波兰",
  region_in_native: "",

  alphabetic_code: "PLN",
  numeric_code_4217: "985",
  minor_unit: 2,
  currency: "Polish złoty",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Brazil = {
  alpha2code: "BR",
  alpha3code: "BRA",
  alpha4code: "",
  independent: true,
  numeric_code: "076",
  short_name: "Brazil",

  period_of_validity: "",

  alias: "[]",
  common_name: "Brazil",
  calling_code: "55",

  languages: "[]",

  region_in_cn: "巴西",
  region_in_native: "",

  alphabetic_code: "BRL",
  numeric_code_4217: "986",
  minor_unit: 2,
  currency: "Brazilian real",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;

const Chile = {
  alpha2code: "CL",
  alpha3code: "CHL",
  alpha4code: "",
  independent: true,
  numeric_code: "152",
  short_name: "Chile",

  period_of_validity: "",

  alias: "[]",
  common_name: "Chile",
  calling_code: "",

  languages: "[]",

  region_in_cn: "智利",
  region_in_native: "",

  alphabetic_code: "CLF",
  numeric_code_4217: "990",
  minor_unit: 4,
  currency: "Unidad de Fomento",

  currency_in_cn: "",
  currency_in_native: "",
} as IEntity;



export {
  Afghanistan,
  AlandIslands,
  Albania,
  Algeria,
  AmericanSamoa,
  Andorra,
  Angola,
  Antarctica,
  AntiguaAndBarbuda,
  Argentina,
  Armenia,
  Aruba,
  Australia,
  Austria,
  Azerbaijan,
  Bahamas,
  Bahrain,
  Bangladesh,
  Barbados,
  Belgium,
  Belize,
  Benin,
  Bermuda,
  Bhutan,
  BoliviaPlurinationalStateOf,
  Bosnia,
  Botswana,
  BouvetIsland,
  Brazil,
  BritishIndianOceanTerritory,
  Brunei,
  Bulgaria,
  BurkinaFaso,
  Burma,
  Burundi,
  ByelorussianSSR,
  CaboVerde,
  Cambodia,
  Cameroon,
  Canada,
  CantonAndEnderburyIslands,
  CaribbeanNetherlands,
  CaymanIslands,
  CentralAfricanRepublic,
  Chad,
  Chile,
  China,
  ChristmasIsland,
  CocosKeelingIslands,
  Colombia,
  Comoros,
  Congo,
  CongoKinshasa,
  CookIslands,
  CostaRica,
  Croatia,
  Cuba,
  Curacao,
  Cyprus,
  CzechRepublic,
  Dahomey,
  Denmark,
  Djibouti,
  Dominica,
  DominicanRepublic,
  DronningMaudLand,
  EastGermany,
  EastTimor,
  Ecuador,
  Egypt,
  ElSalvador,
  EquatorialGuinea,
  Eritrea,
  Estonia,
  Eswatini,
  Ethiopia,
  FalklandIslandsMalvinas,
  FaroeIslands,
  Fiji,
  Finland,
  France,
  FranceMetropolitan,
  FrenchAfarAndIssas,
  FrenchGuiana,
  FrenchPolynesia,
  FrenchSouthernAndAntarcticTerritories,
  FrenchSouthernTerritories,
  Gabon,
  Gambia,
  Germany,
  Ghana,
  Gibraltar,
  GilbertAndElliceIslands,
  Greece,
  Greenland,
  Grenada,
  Guadeloupe,
  Guam,
  Guatemala,
  Guernsey,
  Guinea,
  Guinea_Bissau,
  Guyana,
  Haiti,
  HeardIslandAndMcDonaldIslands,
  HolySee,
  Honduras,
  HongKong,
  Hungary,
  Iceland,
  India,
  Indonesia,
  Iran,
  Iraq,
  Ireland,
  IsleOfMan,
  Israel,
  Italy,
  IvoryCoast,
  Jamaica,
  Japan,
  Jersey,
  JohnstonIsland,
  Jordan,
  Kazakhstan,
  Kenya,
  Kiribati,
  Korea,
  Kosovo,
  Kuwait,
  Kyrgyzstan,
  Laos,
  Latvia,
  Lebanon,
  Lesotho,
  Liberia,
  Libya,
  Liechtenstein,
  Lithuania,
  Luxembourg,
  Macao,
  Madagascar,
  Malawi,
  Malaysia,
  Maldives,
  Mali,
  Malta,
  MarshallIslands,
  Martinique,
  Mauritania,
  Mauritius,
  Mayotte,
  Mexico,
  MicronesiaFederatedStatesOf,
  MidwayIslands,
  MoldovaRepublicOf,
  Monaco,
  Mongolia,
  Montenegro,
  Montserrat,
  Morocco,
  Mozambique,
  Myanmar,
  Namibia,
  Nauru,
  Nepal,
  Netherlands,
  NetherlandsAntilles,
  NeutralZone,
  NewCaledonia,
  NewHebrides,
  NewZealand,
  Nicaragua,
  Niger,
  Nigeria,
  Niue,
  NorfolkIsland,
  NorthKorea,
  NorthMacedonia,
  NorthernMarianaIslands,
  Norway,
  Oman,
  PacificIslandsTrustTerritoryOfthe,
  Pakistan,
  Palau,
  PalestineStateOf,
  Panama,
  PanamaCanalZone,
  PapuaNewGuinea,
  Paraguay,
  Peru,
  Philippines,
  PitcairnIslands,
  Poland,
  Portugal,
  PuertoRico,
  Qatar,
  Reunion,
  Romania,
  Russia,
  Rwanda,
  SaintBarthelemy,
  SaintHelenaAscensionAndTristandaCunha,
  SaintKittsAndNevis,
  SaintLucia,
  SaintMartinFrenchpart,
  SaintPierreAndMiquelon,
  SaintVincentAndTheGrenadines,
  Samoa,
  SanMarino,
  SaoTomeAndPrincipe,
  SaudiArabia,
  Senegal,
  Serbia,
  SerbiaAndMontenegro,
  Seychelles,
  SierraLeone,
  Sikkim,
  Singapore,
  SintMaartenDutchpart,
  Slovenia,
  SolomonIslands,
  Somalia,
  SouthAfrica,
  SouthGeorgiaAndTheSouthSandwichIslands,
  SouthKorea,
  SouthSudan,
  SouthernRhodesia,
  SovietUnion,
  Spain,
  SriLanka,
  Sudan,
  Suriname,
  SvalbardAndJanMayen,
  Sweden,
  Switzerland,
  SyrianArabRepublic,
  Taiwan,
  Tajikistan,
  Tanzania,
  Thailand,
  Timor_Leste,
  Togo,
  Tokelau,
  Tonga,
  TrinidadAndTobago,
  Tunisia,
  Turkey,
  Turkmenistan,
  TurksAndCaicosIslands,
  Tuvalu,
  USMiscellaneousPacificIslands,
  Uganda,
  Ukraine,
  UnitedArabEmirates,
  UnitedKingdom,
  UnitedStates,
  UnitedStatesMinorOutlyingIslands,
  UnitedStatesVirginIslands,
  UpperVolta,
  Uruguay,
  Uzbekistan,
  Vanuatu,
  VenezuelaBolivarianRepublicOf,
  VietNam,
  Viet_NamDemocraticRepublicOf,
  VirginIslands,
  WakeIsland,
  WallisAndFutuna,
  WestGermany,
  WesternSahara,
  Yemen,
  YemenDemocratic,
  Yugoslavia,
  Zaire,
  Zambia,
  Zimbabwe
};

export const Regions = [
  Afghanistan,
  AlandIslands,
  Albania,
  Algeria,
  AmericanSamoa,
  Andorra,
  Angola,
  Antarctica,
  AntiguaAndBarbuda,
  Argentina,
  Armenia,
  Aruba,
  Australia,
  Austria,
  Azerbaijan,
  Bahamas,
  Bahrain,
  Bangladesh,
  Barbados,
  Belgium,
  Belize,
  Benin,
  Bermuda,
  Bhutan,
  BoliviaPlurinationalStateOf,
  Bosnia,
  Botswana,
  BouvetIsland,
  Brazil,
  BritishIndianOceanTerritory,
  Brunei,
  Bulgaria,
  BurkinaFaso,
  Burma,
  Burundi,
  ByelorussianSSR,
  CaboVerde,
  Cambodia,
  Cameroon,
  Canada,
  CantonAndEnderburyIslands,
  CaribbeanNetherlands,
  CaymanIslands,
  CentralAfricanRepublic,
  Chad,
  Chile,
  China,
  ChristmasIsland,
  CocosKeelingIslands,
  Colombia,
  Comoros,
  Congo,
  CongoKinshasa,
  CookIslands,
  CostaRica,
  Croatia,
  Cuba,
  Curacao,
  Cyprus,
  CzechRepublic,
  Dahomey,
  Denmark,
  Djibouti,
  Dominica,
  DominicanRepublic,
  DronningMaudLand,
  EastGermany,
  EastTimor,
  Ecuador,
  Egypt,
  ElSalvador,
  EquatorialGuinea,
  Eritrea,
  Estonia,
  Eswatini,
  Ethiopia,
  FalklandIslandsMalvinas,
  FaroeIslands,
  Fiji,
  Finland,
  France,
  FranceMetropolitan,
  FrenchAfarAndIssas,
  FrenchGuiana,
  FrenchPolynesia,
  FrenchSouthernAndAntarcticTerritories,
  FrenchSouthernTerritories,
  Gabon,
  Gambia,
  Germany,
  Ghana,
  Gibraltar,
  GilbertAndElliceIslands,
  Greece,
  Greenland,
  Grenada,
  Guadeloupe,
  Guam,
  Guatemala,
  Guernsey,
  Guinea,
  Guinea_Bissau,
  Guyana,
  Haiti,
  HeardIslandAndMcDonaldIslands,
  HolySee,
  Honduras,
  HongKong,
  Hungary,
  Iceland,
  India,
  Indonesia,
  Iran,
  Iraq,
  Ireland,
  IsleOfMan,
  Israel,
  Italy,
  IvoryCoast,
  Jamaica,
  Japan,
  Jersey,
  JohnstonIsland,
  Jordan,
  Kazakhstan,
  Kenya,
  Kiribati,
  Korea,
  Kosovo,
  Kuwait,
  Kyrgyzstan,
  Laos,
  Latvia,
  Lebanon,
  Lesotho,
  Liberia,
  Libya,
  Liechtenstein,
  Lithuania,
  Luxembourg,
  Macao,
  Madagascar,
  Malawi,
  Malaysia,
  Maldives,
  Mali,
  Malta,
  MarshallIslands,
  Martinique,
  Mauritania,
  Mauritius,
  Mayotte,
  Mexico,
  MicronesiaFederatedStatesOf,
  MidwayIslands,
  MoldovaRepublicOf,
  Monaco,
  Mongolia,
  Montenegro,
  Montserrat,
  Morocco,
  Mozambique,
  Myanmar,
  Namibia,
  Nauru,
  Nepal,
  Netherlands,
  NetherlandsAntilles,
  NeutralZone,
  NewCaledonia,
  NewHebrides,
  NewZealand,
  Nicaragua,
  Niger,
  Nigeria,
  Niue,
  NorfolkIsland,
  NorthKorea,
  NorthMacedonia,
  NorthernMarianaIslands,
  Norway,
  Oman,
  PacificIslandsTrustTerritoryOfthe,
  Pakistan,
  Palau,
  PalestineStateOf,
  Panama,
  PanamaCanalZone,
  PapuaNewGuinea,
  Paraguay,
  Peru,
  Philippines,
  PitcairnIslands,
  Poland,
  Portugal,
  PuertoRico,
  Qatar,
  Reunion,
  Romania,
  Russia,
  Rwanda,
  SaintBarthelemy,
  SaintHelenaAscensionAndTristandaCunha,
  SaintKittsAndNevis,
  SaintLucia,
  SaintMartinFrenchpart,
  SaintPierreAndMiquelon,
  SaintVincentAndTheGrenadines,
  Samoa,
  SanMarino,
  SaoTomeAndPrincipe,
  SaudiArabia,
  Senegal,
  Serbia,
  SerbiaAndMontenegro,
  Seychelles,
  SierraLeone,
  Sikkim,
  Singapore,
  SintMaartenDutchpart,
  Slovenia,
  SolomonIslands,
  Somalia,
  SouthAfrica,
  SouthGeorgiaAndTheSouthSandwichIslands,
  SouthKorea,
  SouthSudan,
  SouthernRhodesia,
  SovietUnion,
  Spain,
  SriLanka,
  Sudan,
  Suriname,
  SvalbardAndJanMayen,
  Sweden,
  Switzerland,
  SyrianArabRepublic,
  Taiwan,
  Tajikistan,
  Tanzania,
  Thailand,
  Timor_Leste,
  Togo,
  Tokelau,
  Tonga,
  TrinidadAndTobago,
  Tunisia,
  Turkey,
  Turkmenistan,
  TurksAndCaicosIslands,
  Tuvalu,
  USMiscellaneousPacificIslands,
  Uganda,
  Ukraine,
  UnitedArabEmirates,
  UnitedKingdom,
  UnitedStates,
  UnitedStatesMinorOutlyingIslands,
  UnitedStatesVirginIslands,
  UpperVolta,
  Uruguay,
  Uzbekistan,
  Vanuatu,
  VenezuelaBolivarianRepublicOf,
  VietNam,
  Viet_NamDemocraticRepublicOf,
  VirginIslands,
  WakeIsland,
  WallisAndFutuna,
  WestGermany,
  WesternSahara,
  Yemen,
  YemenDemocratic,
  Yugoslavia,
  Zaire,
  Zambia,
  Zimbabwe
] as IEntity[];

export const RegionsByCode = {
		"CF": CentralAfricanRepublic,
		"NC": NewCaledonia,
		"XWG": WestGermany,
		"CS": SerbiaAndMontenegro,
		"CSXX": SerbiaAndMontenegro,
		"AQ": Antarctica,
		"YU": Yugoslavia,
		"YUCS": Yugoslavia,
		"WF": WallisAndFutuna,
		"WK": WakeIsland,
		"WKUM": WakeIsland,
		"AG": AntiguaAndBarbuda,
		"VE": VenezuelaBolivarianRepublicOf,
		"TL": Timor_Leste,
		"HV": UpperVolta,
		"HVBF": UpperVolta,
		"FQ": FrenchSouthernAndAntarcticTerritories,
		"FQHH": FrenchSouthernAndAntarcticTerritories,
		"TP": EastTimor,
		"TPTL": EastTimor,
		"PZ": PanamaCanalZone,
		"PZPA": PanamaCanalZone,
		"RU": Russia,
		"XK": Kosovo,
		"TD": Chad,
		"BF": BurkinaFaso,
		"KN": SaintKittsAndNevis,
		"LC": SaintLucia,
		"BO": BoliviaPlurinationalStateOf,
		"VI": VirginIslands,
		"NE": Niger,
		"NH": NewHebrides,
		"NHVU": NewHebrides,
		"PU": USMiscellaneousPacificIslands,
		"PUUM": USMiscellaneousPacificIslands,
		"MD": MoldovaRepublicOf,
		"US": UnitedStates,
		"NT": NeutralZone,
		"NTHH": NeutralZone,
		"TZ": Tanzania,
		"BN": Brunei,
		"GB": UnitedKingdom,
		"BU": Burma,
		"BUMM": Burma,
		"BQ": CaribbeanNetherlands,
		"BQAQ": CaribbeanNetherlands,
		"AN": NetherlandsAntilles,
		"ANHH": NetherlandsAntilles,
		"BY": ByelorussianSSR,
		"BYAA": ByelorussianSSR,
		"VC": SaintVincentAndTheGrenadines,
		"CM": Cameroon,
		"ST": SaoTomeAndPrincipe,
		"CT": CantonAndEnderburyIslands,
		"CTKI": CantonAndEnderburyIslands,
		"CV": CaboVerde,
		"MS": Montserrat,
		"SU": SovietUnion,
		"SUHH": SovietUnion,
		"XKO": Korea,
		"PC": PacificIslandsTrustTerritoryOfthe,
		"PCHH": PacificIslandsTrustTerritoryOfthe,
		"SN": Senegal,
		"MI": MidwayIslands,
		"MIUM": MidwayIslands,
		"TW": Taiwan,
		"LA": Laos,
		"VN": VietNam,
		"ML": Mali,
		"VD": Viet_NamDemocraticRepublicOf,
		"VDVN": Viet_NamDemocraticRepublicOf,
		"TG": Togo,
		"CG": Congo,
		"ZR": Zaire,
		"ZRCD": Zaire,
		"CD": CongoKinshasa,
		"MO": Macao,
		"RH": SouthernRhodesia,
		"RHZW": SouthernRhodesia,
		"KR": SouthKorea,
		"KP": NorthKorea,
		"JT": JohnstonIsland,
		"JTUM": JohnstonIsland,
		"CZ": CzechRepublic,
		"BJ": Benin,
		"DY": Dahomey,
		"DYBJ": Dahomey,
		"CI": IvoryCoast,
		"DM": Dominica,
		"YD": YemenDemocratic,
		"YDYE": YemenDemocratic,
		"NQ": DronningMaudLand,
		"NQAQ": DronningMaudLand,
		"IR": Iran,
		"TR": Turkey,
		"GQ": EquatorialGuinea,
		"SJ": SvalbardAndJanMayen,
		"GD": Grenada,
		"GE": GilbertAndElliceIslands,
		"GEHH": GilbertAndElliceIslands,
		"GW": Guinea_Bissau,
		"FK": FalklandIslandsMalvinas,
		"GS": SouthGeorgiaAndTheSouthSandwichIslands,
		"SY": SyrianArabRepublic,
		"DD": EastGermany,
		"DDDE": EastGermany,
		"PS": PalestineStateOf,
		"FX": FranceMetropolitan,
		"FXFR": FranceMetropolitan,
		"GA": Gabon,
		"AI": FrenchAfarAndIssas,
		"AIDJ": FrenchAfarAndIssas,
		"PF": FrenchPolynesia,
		"AL": Albania,
		"DZ": Algeria,
		"AR": Argentina,
		"KI": Kiribati,
		"NF": NorfolkIsland,
		"AU": Australia,
		"TV": Tuvalu,
		"HM": HeardIslandAndMcDonaldIslands,
		"NR": Nauru,
		"CC": CocosKeelingIslands,
		"CX": ChristmasIsland,
		"BS": Bahamas,
		"BH": Bahrain,
		"BD": Bangladesh,
		"AM": Armenia,
		"BB": Barbados,
		"BM": Bermuda,
		"BW": Botswana,
		"BZ": Belize,
		"SB": SolomonIslands,
		"MM": Myanmar,
		"BI": Burundi,
		"KH": Cambodia,
		"CA": Canada,
		"KY": CaymanIslands,
		"LK": SriLanka,
		"CN": China,
		"CO": Colombia,
		"KM": Comoros,
		"CR": CostaRica,
		"CU": Cuba,
		"DK": Denmark,
		"GL": Greenland,
		"FO": FaroeIslands,
		"DO": DominicanRepublic,
		"ET": Ethiopia,
		"ER": Eritrea,
		"FJ": Fiji,
		"DJ": Djibouti,
		"GM": Gambia,
		"GI": Gibraltar,
		"GT": Guatemala,
		"GN": Guinea,
		"GY": Guyana,
		"HT": Haiti,
		"HN": Honduras,
		"HK": HongKong,
		"HU": Hungary,
		"IS": Iceland,
		"IN": India,
		"BT": Bhutan,
		"ID": Indonesia,
		"IQ": Iraq,
		"IL": Israel,
		"JM": Jamaica,
		"JP": Japan,
		"KZ": Kazakhstan,
		"JO": Jordan,
		"KE": Kenya,
		"KW": Kuwait,
		"KG": Kyrgyzstan,
		"LB": Lebanon,
		"LR": Liberia,
		"LY": Libya,
		"MW": Malawi,
		"MY": Malaysia,
		"MV": Maldives,
		"MU": Mauritius,
		"MX": Mexico,
		"MN": Mongolia,
		"EH": WesternSahara,
		"MA": Morocco,
		"OM": Oman,
		"NP": Nepal,
		"SX": SintMaartenDutchpart,
		"CW": Curacao,
		"AW": Aruba,
		"VU": Vanuatu,
		"NU": Niue,
		"CK": CookIslands,
		"PN": PitcairnIslands,
		"TK": Tokelau,
		"NZ": NewZealand,
		"NI": Nicaragua,
		"NG": Nigeria,
		"NO": Norway,
		"BV": BouvetIsland,
		"PK": Pakistan,
		"PG": PapuaNewGuinea,
		"PY": Paraguay,
		"PE": Peru,
		"PH": Philippines,
		"QA": Qatar,
		"RW": Rwanda,
		"SA": SaudiArabia,
		"SC": Seychelles,
		"SG": Singapore,
		"SO": Somalia,
		"LS": Lesotho,
		"SZ": Eswatini,
		"ZA": SouthAfrica,
		"NA": Namibia,
		"SS": SouthSudan,
		"SE": Sweden,
		"LI": Liechtenstein,
		"TH": Thailand,
		"TO": Tonga,
		"TT": TrinidadAndTobago,
		"AE": UnitedArabEmirates,
		"TN": Tunisia,
		"UG": Uganda,
		"MK": NorthMacedonia,
		"EG": Egypt,
		"SH": SaintHelenaAscensionAndTristandaCunha,
		"GG": Guernsey,
		"IM": IsleOfMan,
		"JE": Jersey,
		"TC": TurksAndCaicosIslands,
		"PR": PuertoRico,
		"IO": BritishIndianOceanTerritory,
		"PW": Palau,
		"MH": MarshallIslands,
		"AS": AmericanSamoa,
		"FM": MicronesiaFederatedStatesOf,
		"UM": UnitedStatesMinorOutlyingIslands,
		"MP": NorthernMarianaIslands,
		"VG": UnitedStatesVirginIslands,
		"GU": Guam,
		"EC": Ecuador,
		"PA": Panama,
		"SV": ElSalvador,
		"UY": Uruguay,
		"UZ": Uzbekistan,
		"WS": Samoa,
		"YE": Yemen,
		"ZW": Zimbabwe,
		"SL": SierraLeone,
		"MR": Mauritania,
		"TM": Turkmenistan,
		"GH": Ghana,
		"SD": Sudan,
		"RS": Serbia,
		"MZ": Mozambique,
		"AZ": Azerbaijan,
		"RO": Romania,
		"CH": Switzerland,
		"ZM": Zambia,
		"SR": Suriname,
		"MG": Madagascar,
		"AF": Afghanistan,
		"TJ": Tajikistan,
		"AO": Angola,
		"BG": Bulgaria,
		"BA": Bosnia,
		"GP": Guadeloupe,
		"LV": Latvia,
		"PT": Portugal,
		"DE": Germany,
		"TF": FrenchSouthernTerritories,
		"GF": FrenchGuiana,
		"FR": France,
		"AX": AlandIslands,
		"FI": Finland,
		"EE": Estonia,
		"VA": HolySee,
		"IE": Ireland,
		"ES": Spain,
		"IT": Italy,
		"CY": Cyprus,
		"RE": Reunion,
		"HR": Croatia,
		"YT": Mayotte,
		"BL": SaintBarthelemy,
		"GR": Greece,
		"LT": Lithuania,
		"LU": Luxembourg,
		"SI": Slovenia,
		"MT": Malta,
		"MQ": Martinique,
		"MF": SaintMartinFrenchpart,
		"SK": Sikkim,
		"SKIN": Sikkim,
		"BE": Belgium,
		"AT": Austria,
		"MC": Monaco,
		"ME": Montenegro,
		"SM": SanMarino,
		"NL": Netherlands,
		"AD": Andorra,
		"PM": SaintPierreAndMiquelon,
		"UA": Ukraine,
		"PL": Poland,
		"BR": Brazil,
		"CL": Chile,
} as {
  [key: string]: IEntity;
};

export const RegionsFromCommonNameInAlphaNumeric = {
		"CentralAfricanRepublic": CentralAfricanRepublic,
		"NewCaledonia": NewCaledonia,
		"WestGermany": WestGermany,
		"SerbiaAndMontenegro": SerbiaAndMontenegro,
		"Antarctica": Antarctica,
		"Yugoslavia": Yugoslavia,
		"WallisAndFutuna": WallisAndFutuna,
		"WakeIsland": WakeIsland,
		"AntiguaAndBarbuda": AntiguaAndBarbuda,
		"VenezuelaBolivarianRepublicOf": VenezuelaBolivarianRepublicOf,
		"Timor_Leste": Timor_Leste,
		"UpperVolta": UpperVolta,
		"FrenchSouthernAndAntarcticTerritories": FrenchSouthernAndAntarcticTerritories,
		"EastTimor": EastTimor,
		"PanamaCanalZone": PanamaCanalZone,
		"Russia": Russia,
		"Kosovo": Kosovo,
		"Chad": Chad,
		"BurkinaFaso": BurkinaFaso,
		"SaintKittsAndNevis": SaintKittsAndNevis,
		"SaintLucia": SaintLucia,
		"BoliviaPlurinationalStateOf": BoliviaPlurinationalStateOf,
		"VirginIslands": VirginIslands,
		"Niger": Niger,
		"NewHebrides": NewHebrides,
		"USMiscellaneousPacificIslands": USMiscellaneousPacificIslands,
		"MoldovaRepublicOf": MoldovaRepublicOf,
		"UnitedStates": UnitedStates,
		"NeutralZone": NeutralZone,
		"Tanzania": Tanzania,
		"Brunei": Brunei,
		"UnitedKingdom": UnitedKingdom,
		"Burma": Burma,
		"CaribbeanNetherlands": CaribbeanNetherlands,
		"NetherlandsAntilles": NetherlandsAntilles,
		"ByelorussianSSR": ByelorussianSSR,
		"SaintVincentAndTheGrenadines": SaintVincentAndTheGrenadines,
		"Cameroon": Cameroon,
		"SaoTomeAndPrincipe": SaoTomeAndPrincipe,
		"CantonAndEnderburyIslands": CantonAndEnderburyIslands,
		"CaboVerde": CaboVerde,
		"Montserrat": Montserrat,
		"SovietUnion": SovietUnion,
		"Korea": Korea,
		"PacificIslandsTrustTerritoryOfthe": PacificIslandsTrustTerritoryOfthe,
		"Senegal": Senegal,
		"MidwayIslands": MidwayIslands,
		"Taiwan": Taiwan,
		"Laos": Laos,
		"VietNam": VietNam,
		"Mali": Mali,
		"Viet_NamDemocraticRepublicOf": Viet_NamDemocraticRepublicOf,
		"Togo": Togo,
		"Congo": Congo,
		"Zaire": Zaire,
		"CongoKinshasa": CongoKinshasa,
		"Macao": Macao,
		"SouthernRhodesia": SouthernRhodesia,
		"SouthKorea": SouthKorea,
		"NorthKorea": NorthKorea,
		"JohnstonIsland": JohnstonIsland,
		"CzechRepublic": CzechRepublic,
		"Benin": Benin,
		"Dahomey": Dahomey,
		"IvoryCoast": IvoryCoast,
		"Dominica": Dominica,
		"YemenDemocratic": YemenDemocratic,
		"DronningMaudLand": DronningMaudLand,
		"Iran": Iran,
		"Turkey": Turkey,
		"EquatorialGuinea": EquatorialGuinea,
		"SvalbardAndJanMayen": SvalbardAndJanMayen,
		"Grenada": Grenada,
		"GilbertAndElliceIslands": GilbertAndElliceIslands,
		"Guinea_Bissau": Guinea_Bissau,
		"FalklandIslandsMalvinas": FalklandIslandsMalvinas,
		"SouthGeorgiaAndTheSouthSandwichIslands": SouthGeorgiaAndTheSouthSandwichIslands,
		"SyrianArabRepublic": SyrianArabRepublic,
		"EastGermany": EastGermany,
		"PalestineStateOf": PalestineStateOf,
		"FranceMetropolitan": FranceMetropolitan,
		"Gabon": Gabon,
		"FrenchAfarAndIssas": FrenchAfarAndIssas,
		"FrenchPolynesia": FrenchPolynesia,
		"Albania": Albania,
		"Algeria": Algeria,
		"Argentina": Argentina,
		"Kiribati": Kiribati,
		"NorfolkIsland": NorfolkIsland,
		"Australia": Australia,
		"Tuvalu": Tuvalu,
		"HeardIslandAndMcDonaldIslands": HeardIslandAndMcDonaldIslands,
		"Nauru": Nauru,
		"CocosKeelingIslands": CocosKeelingIslands,
		"ChristmasIsland": ChristmasIsland,
		"Bahamas": Bahamas,
		"Bahrain": Bahrain,
		"Bangladesh": Bangladesh,
		"Armenia": Armenia,
		"Barbados": Barbados,
		"Bermuda": Bermuda,
		"Botswana": Botswana,
		"Belize": Belize,
		"SolomonIslands": SolomonIslands,
		"Myanmar": Myanmar,
		"Burundi": Burundi,
		"Cambodia": Cambodia,
		"Canada": Canada,
		"CaymanIslands": CaymanIslands,
		"SriLanka": SriLanka,
		"China": China,
		"Colombia": Colombia,
		"Comoros": Comoros,
		"CostaRica": CostaRica,
		"Cuba": Cuba,
		"Denmark": Denmark,
		"Greenland": Greenland,
		"FaroeIslands": FaroeIslands,
		"DominicanRepublic": DominicanRepublic,
		"Ethiopia": Ethiopia,
		"Eritrea": Eritrea,
		"Fiji": Fiji,
		"Djibouti": Djibouti,
		"Gambia": Gambia,
		"Gibraltar": Gibraltar,
		"Guatemala": Guatemala,
		"Guinea": Guinea,
		"Guyana": Guyana,
		"Haiti": Haiti,
		"Honduras": Honduras,
		"HongKong": HongKong,
		"Hungary": Hungary,
		"Iceland": Iceland,
		"India": India,
		"Bhutan": Bhutan,
		"Indonesia": Indonesia,
		"Iraq": Iraq,
		"Israel": Israel,
		"Jamaica": Jamaica,
		"Japan": Japan,
		"Kazakhstan": Kazakhstan,
		"Jordan": Jordan,
		"Kenya": Kenya,
		"Kuwait": Kuwait,
		"Kyrgyzstan": Kyrgyzstan,
		"Lebanon": Lebanon,
		"Liberia": Liberia,
		"Libya": Libya,
		"Malawi": Malawi,
		"Malaysia": Malaysia,
		"Maldives": Maldives,
		"Mauritius": Mauritius,
		"Mexico": Mexico,
		"Mongolia": Mongolia,
		"WesternSahara": WesternSahara,
		"Morocco": Morocco,
		"Oman": Oman,
		"Nepal": Nepal,
		"SintMaartenDutchpart": SintMaartenDutchpart,
		"Curacao": Curacao,
		"Aruba": Aruba,
		"Vanuatu": Vanuatu,
		"Niue": Niue,
		"CookIslands": CookIslands,
		"PitcairnIslands": PitcairnIslands,
		"Tokelau": Tokelau,
		"NewZealand": NewZealand,
		"Nicaragua": Nicaragua,
		"Nigeria": Nigeria,
		"Norway": Norway,
		"BouvetIsland": BouvetIsland,
		"Pakistan": Pakistan,
		"PapuaNewGuinea": PapuaNewGuinea,
		"Paraguay": Paraguay,
		"Peru": Peru,
		"Philippines": Philippines,
		"Qatar": Qatar,
		"Rwanda": Rwanda,
		"SaudiArabia": SaudiArabia,
		"Seychelles": Seychelles,
		"Singapore": Singapore,
		"Somalia": Somalia,
		"Lesotho": Lesotho,
		"Eswatini": Eswatini,
		"SouthAfrica": SouthAfrica,
		"Namibia": Namibia,
		"SouthSudan": SouthSudan,
		"Sweden": Sweden,
		"Liechtenstein": Liechtenstein,
		"Thailand": Thailand,
		"Tonga": Tonga,
		"TrinidadAndTobago": TrinidadAndTobago,
		"UnitedArabEmirates": UnitedArabEmirates,
		"Tunisia": Tunisia,
		"Uganda": Uganda,
		"NorthMacedonia": NorthMacedonia,
		"Egypt": Egypt,
		"SaintHelenaAscensionAndTristandaCunha": SaintHelenaAscensionAndTristandaCunha,
		"Guernsey": Guernsey,
		"IsleOfMan": IsleOfMan,
		"Jersey": Jersey,
		"TurksAndCaicosIslands": TurksAndCaicosIslands,
		"PuertoRico": PuertoRico,
		"BritishIndianOceanTerritory": BritishIndianOceanTerritory,
		"Palau": Palau,
		"MarshallIslands": MarshallIslands,
		"AmericanSamoa": AmericanSamoa,
		"MicronesiaFederatedStatesOf": MicronesiaFederatedStatesOf,
		"UnitedStatesMinorOutlyingIslands": UnitedStatesMinorOutlyingIslands,
		"NorthernMarianaIslands": NorthernMarianaIslands,
		"UnitedStatesVirginIslands": UnitedStatesVirginIslands,
		"Guam": Guam,
		"Ecuador": Ecuador,
		"Panama": Panama,
		"ElSalvador": ElSalvador,
		"Uruguay": Uruguay,
		"Uzbekistan": Uzbekistan,
		"Samoa": Samoa,
		"Yemen": Yemen,
		"Zimbabwe": Zimbabwe,
		"SierraLeone": SierraLeone,
		"Mauritania": Mauritania,
		"Turkmenistan": Turkmenistan,
		"Ghana": Ghana,
		"Sudan": Sudan,
		"Serbia": Serbia,
		"Mozambique": Mozambique,
		"Azerbaijan": Azerbaijan,
		"Romania": Romania,
		"Switzerland": Switzerland,
		"Zambia": Zambia,
		"Suriname": Suriname,
		"Madagascar": Madagascar,
		"Afghanistan": Afghanistan,
		"Tajikistan": Tajikistan,
		"Angola": Angola,
		"Bulgaria": Bulgaria,
		"Bosnia": Bosnia,
		"Guadeloupe": Guadeloupe,
		"Latvia": Latvia,
		"Portugal": Portugal,
		"Germany": Germany,
		"FrenchSouthernTerritories": FrenchSouthernTerritories,
		"FrenchGuiana": FrenchGuiana,
		"France": France,
		"AlandIslands": AlandIslands,
		"Finland": Finland,
		"Estonia": Estonia,
		"HolySee": HolySee,
		"Ireland": Ireland,
		"Spain": Spain,
		"Italy": Italy,
		"Cyprus": Cyprus,
		"Reunion": Reunion,
		"Croatia": Croatia,
		"Mayotte": Mayotte,
		"SaintBarthelemy": SaintBarthelemy,
		"Greece": Greece,
		"Lithuania": Lithuania,
		"Luxembourg": Luxembourg,
		"Slovenia": Slovenia,
		"Malta": Malta,
		"Martinique": Martinique,
		"SaintMartinFrenchpart": SaintMartinFrenchpart,
		"Sikkim": Sikkim,
		"Belgium": Belgium,
		"Austria": Austria,
		"Monaco": Monaco,
		"Montenegro": Montenegro,
		"SanMarino": SanMarino,
		"Netherlands": Netherlands,
		"Andorra": Andorra,
		"SaintPierreAndMiquelon": SaintPierreAndMiquelon,
		"Ukraine": Ukraine,
		"Poland": Poland,
		"Brazil": Brazil,
		"Chile": Chile,
} as {
  [key: string]: IEntity;
};

const ReservedRegionCodeUnderline = "_";

export { ReservedRegionCodeUnderline };

// Return alpha code by priority, user assigned one is the high priority, then 2 > 3 > 4.
export function GetCode(region: IEntity): string {
  let code = "";
  if (region.alpha2code !== "") {
    code = region.alpha2code!;
  } else if (region.alpha3code !== "") {
    code = region.alpha3code!;
  } else if (region.alpha4code !== "") {
    code = region.alpha4code!;
  }
  return code;
}

export function stripAlphaCode(s:string) :string {
  const splits = s.split("+")
  // splits[0] is alphaCode, we have to strip it from callingCode
  // "CA+1-xxx..." => "1-xxx..."
  // "CN+86-13800138000" => "86-13800138000"    
  return splits[splits.length-1];
}

