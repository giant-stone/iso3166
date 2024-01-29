export interface IIsoRegion {
  alpha2code: string;
  alpha3code: string;
  alpha4code: string;
  independent?: boolean;

  // common name, transform it from short name a-zA-Z0-9, use "South Korea" for "the Republic of Korea"
  name: string;
  numeric_code: string;
  period_of_validity: string;

  // short name (using title case) in ISO 3166
  short_name: string;

  //
  // non-ISO 3166-1 fields
  // https://en.wikipedia.org/wiki/List_of_country_calling_codes
  calling_code: string;

  // other fields
  disabled?: boolean;

  name_in_chinese: string;
  name_in_native: string;
}

const Afghanistan = {
  alpha2code: "AF",
  alpha3code: "AFG",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Afghanistan",

  numeric_code: "004",
  period_of_validity: "",
  short_name: "Afghanistan",

  name_in_native: "",
  name_in_chinese: "阿富汗",
} as IIsoRegion;

const Albania = {
  alpha2code: "AL",
  alpha3code: "ALB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Albania",

  numeric_code: "008",
  period_of_validity: "",
  short_name: "Albania",

  name_in_native: "",
  name_in_chinese: "阿尔巴尼亚",
} as IIsoRegion;

const Algeria = {
  alpha2code: "DZ",
  alpha3code: "DZA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Algeria",

  numeric_code: "012",
  period_of_validity: "",
  short_name: "Algeria",

  name_in_native: "",
  name_in_chinese: "阿尔及利亚",
} as IIsoRegion;

const AmericanSamoa = {
  alpha2code: "AS",
  alpha3code: "ASM",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "American Samoa",

  numeric_code: "016",
  period_of_validity: "",
  short_name: "American Samoa",

  name_in_native: "",
  name_in_chinese: "美属萨摩亚",
} as IIsoRegion;

const Andorra = {
  alpha2code: "AD",
  alpha3code: "AND",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Andorra",

  numeric_code: "020",
  period_of_validity: "",
  short_name: "Andorra",

  name_in_native: "",
  name_in_chinese: "安道尔",
} as IIsoRegion;

const Angola = {
  alpha2code: "AO",
  alpha3code: "AGO",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Angola",

  numeric_code: "024",
  period_of_validity: "",
  short_name: "Angola",

  name_in_native: "",
  name_in_chinese: "安哥拉",
} as IIsoRegion;

const Anguilla = {
  alpha2code: "AI",
  alpha3code: "AIA",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Anguilla",

  numeric_code: "660",
  period_of_validity: "",
  short_name: "Anguilla",

  name_in_native: "",
  name_in_chinese: "安圭拉",
} as IIsoRegion;

const Antarctica = {
  alpha2code: "AQ",
  alpha3code: "ATA",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Antarctica",

  numeric_code: "010",
  period_of_validity: "",
  short_name: "Antarctica",

  name_in_native: "",
  name_in_chinese: "南极洲",
} as IIsoRegion;

const AntiguaAndBarbuda = {
  alpha2code: "AG",
  alpha3code: "ATG",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Antigua And Barbuda",

  numeric_code: "028",
  period_of_validity: "",
  short_name: "Antigua and Barbuda",

  name_in_native: "",
  name_in_chinese: "安提瓜和巴布达",
} as IIsoRegion;

const Argentina = {
  alpha2code: "AR",
  alpha3code: "ARG",
  alpha4code: "",
  calling_code: "54",
  independent: true,
  name: "Argentina",

  numeric_code: "032",
  period_of_validity: "",
  short_name: "Argentina",

  name_in_native: "",
  name_in_chinese: "阿根廷",
} as IIsoRegion;

const Armenia = {
  alpha2code: "AM",
  alpha3code: "ARM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Armenia",

  numeric_code: "051",
  period_of_validity: "",
  short_name: "Armenia",

  name_in_native: "",
  name_in_chinese: "亚美尼亚",
} as IIsoRegion;

const Aruba = {
  alpha2code: "AW",
  alpha3code: "ABW",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Aruba",

  numeric_code: "533",
  period_of_validity: "",
  short_name: "Aruba",

  name_in_native: "",
  name_in_chinese: "阿鲁巴",
} as IIsoRegion;

const Australia = {
  alpha2code: "AU",
  alpha3code: "AUS",
  alpha4code: "",
  calling_code: "61",
  independent: true,
  name: "Australia",

  numeric_code: "036",
  period_of_validity: "",
  short_name: "Australia",

  name_in_native: "",
  name_in_chinese: "澳大利亚",
} as IIsoRegion;

const Austria = {
  alpha2code: "AT",
  alpha3code: "AUT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Austria",

  numeric_code: "040",
  period_of_validity: "",
  short_name: "Austria",

  name_in_native: "",
  name_in_chinese: "奥地利",
} as IIsoRegion;

const Azerbaijan = {
  alpha2code: "AZ",
  alpha3code: "AZE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Azerbaijan",

  numeric_code: "031",
  period_of_validity: "",
  short_name: "Azerbaijan",

  name_in_native: "",
  name_in_chinese: "阿塞拜疆",
} as IIsoRegion;

const Bahamas = {
  alpha2code: "BS",
  alpha3code: "BHS",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Bahamas",

  numeric_code: "044",
  period_of_validity: "",
  short_name: "Bahamas",

  name_in_native: "",
  name_in_chinese: "巴哈马",
} as IIsoRegion;

const Bahrain = {
  alpha2code: "BH",
  alpha3code: "BHR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Bahrain",

  numeric_code: "048",
  period_of_validity: "",
  short_name: "Bahrain",

  name_in_native: "",
  name_in_chinese: "巴林",
} as IIsoRegion;

const Bangladesh = {
  alpha2code: "BD",
  alpha3code: "BGD",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Bangladesh",

  numeric_code: "050",
  period_of_validity: "",
  short_name: "Bangladesh",

  name_in_native: "",
  name_in_chinese: "孟加拉国",
} as IIsoRegion;

const Barbados = {
  alpha2code: "BB",
  alpha3code: "BRB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Barbados",

  numeric_code: "052",
  period_of_validity: "",
  short_name: "Barbados",

  name_in_native: "",
  name_in_chinese: "巴巴多斯",
} as IIsoRegion;

const Belarus = {
  alpha2code: "BY",
  alpha3code: "BLR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Belarus",

  numeric_code: "112",
  period_of_validity: "",
  short_name: "Belarus",

  name_in_native: "",
  name_in_chinese: "白俄罗斯",
} as IIsoRegion;

const Belgium = {
  alpha2code: "BE",
  alpha3code: "BEL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Belgium",

  numeric_code: "056",
  period_of_validity: "",
  short_name: "Belgium",

  name_in_native: "",
  name_in_chinese: "比利时",
} as IIsoRegion;

const Belize = {
  alpha2code: "BZ",
  alpha3code: "BLZ",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Belize",

  numeric_code: "084",
  period_of_validity: "",
  short_name: "Belize",

  name_in_native: "",
  name_in_chinese: "伯利兹",
} as IIsoRegion;

const Benin = {
  alpha2code: "BJ",
  alpha3code: "BEN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Benin",

  numeric_code: "204",
  period_of_validity: "",
  short_name: "Benin",

  name_in_native: "",
  name_in_chinese: "贝宁",
} as IIsoRegion;

const Bermuda = {
  alpha2code: "BM",
  alpha3code: "BMU",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Bermuda",

  numeric_code: "060",
  period_of_validity: "",
  short_name: "Bermuda",

  name_in_native: "",
  name_in_chinese: "百慕大",
} as IIsoRegion;

const Bhutan = {
  alpha2code: "BT",
  alpha3code: "BTN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Bhutan",

  numeric_code: "064",
  period_of_validity: "",
  short_name: "Bhutan",

  name_in_native: "",
  name_in_chinese: "不丹",
} as IIsoRegion;

const BoliviaPlurinationalStateOf = {
  alpha2code: "BO",
  alpha3code: "BOL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Bolivia Plurinational State Of",

  numeric_code: "068",
  period_of_validity: "",
  short_name: "Bolivia (Plurinational State of)",

  name_in_native: "",
  name_in_chinese: "玻利维亚",
} as IIsoRegion;

const Bosnia = {
  alpha2code: "BA",
  alpha3code: "BIH",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Bosnia",

  numeric_code: "070",
  period_of_validity: "",
  short_name: "Bosnia and Herzegovina",

  name_in_native: "",
  name_in_chinese: "波黑",
} as IIsoRegion;

const Botswana = {
  alpha2code: "BW",
  alpha3code: "BWA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Botswana",

  numeric_code: "072",
  period_of_validity: "",
  short_name: "Botswana",

  name_in_native: "",
  name_in_chinese: "博茨瓦纳",
} as IIsoRegion;

const BouvetIsland = {
  alpha2code: "BV",
  alpha3code: "BVT",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Bouvet Island",

  numeric_code: "074",
  period_of_validity: "",
  short_name: "Bouvet Island",

  name_in_native: "",
  name_in_chinese: "布韦岛",
} as IIsoRegion;

const Brazil = {
  alpha2code: "BR",
  alpha3code: "BRA",
  alpha4code: "",
  calling_code: "55",
  independent: true,
  name: "Brazil",

  numeric_code: "076",
  period_of_validity: "",
  short_name: "Brazil",

  name_in_native: "",
  name_in_chinese: "巴西",
} as IIsoRegion;

const BritishAntarcticTerritory = {
  alpha2code: "BQ",
  alpha3code: "ATB",
  alpha4code: "BQAQ",
  calling_code: "",
  independent: false,
  name: "British Antarctic Territory",

  numeric_code: "080",
  period_of_validity: "1974–1979",
  short_name: "British Antarctic Territory",

  name_in_native: "",
  name_in_chinese: "英属南极领地",
} as IIsoRegion;

const BritishIndianOceanTerritory = {
  alpha2code: "IO",
  alpha3code: "IOT",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "British Indian Ocean Territory",

  numeric_code: "086",
  period_of_validity: "",
  short_name: "British Indian Ocean Territory",

  name_in_native: "",
  name_in_chinese: "英属印度洋领地",
} as IIsoRegion;

const Brunei = {
  alpha2code: "BN",
  alpha3code: "BRN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Brunei",

  numeric_code: "096",
  period_of_validity: "",
  short_name: "Brunei Darussalam",

  name_in_native: "",
  name_in_chinese: "文莱",
} as IIsoRegion;

const Bulgaria = {
  alpha2code: "BG",
  alpha3code: "BGR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Bulgaria",

  numeric_code: "100",
  period_of_validity: "",
  short_name: "Bulgaria",

  name_in_native: "",
  name_in_chinese: "保加利亚",
} as IIsoRegion;

const BurkinaFaso = {
  alpha2code: "BF",
  alpha3code: "BFA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Burkina Faso",

  numeric_code: "854",
  period_of_validity: "",
  short_name: "Burkina Faso",

  name_in_native: "",
  name_in_chinese: "布基纳法索",
} as IIsoRegion;

const Burma = {
  alpha2code: "BU",
  alpha3code: "BUR",
  alpha4code: "BUMM",
  calling_code: "",
  independent: true,
  name: "Burma",

  numeric_code: "104",
  period_of_validity: "1974–1989",
  short_name: "Burma",

  name_in_native: "",
  name_in_chinese: "前缅甸",
} as IIsoRegion;

const Burundi = {
  alpha2code: "BI",
  alpha3code: "BDI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Burundi",

  numeric_code: "108",
  period_of_validity: "",
  short_name: "Burundi",

  name_in_native: "",
  name_in_chinese: "布隆迪",
} as IIsoRegion;

const ByelorussianSSR = {
  alpha2code: "BY",
  alpha3code: "BYS",
  alpha4code: "BYAA",
  calling_code: "",
  independent: false,
  name: "Byelorussian SSR",

  numeric_code: "112",
  period_of_validity: "1974–1992",
  short_name: "Byelorussian SSR",

  name_in_native: "",
  name_in_chinese: "白俄罗斯苏维埃社会主义共和国",
} as IIsoRegion;

const CaboVerde = {
  alpha2code: "CV",
  alpha3code: "CPV",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Cabo Verde",

  numeric_code: "132",
  period_of_validity: "",
  short_name: "Cabo Verde",

  name_in_native: "",
  name_in_chinese: "佛得角",
} as IIsoRegion;

const Cambodia = {
  alpha2code: "KH",
  alpha3code: "KHM",
  alpha4code: "",
  calling_code: "855",
  independent: true,
  name: "Cambodia",

  numeric_code: "116",
  period_of_validity: "",
  short_name: "Cambodia",

  name_in_native: "",
  name_in_chinese: "柬埔寨",
} as IIsoRegion;

const Cameroon = {
  alpha2code: "CM",
  alpha3code: "CMR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Cameroon",

  numeric_code: "120",
  period_of_validity: "",
  short_name: "Cameroon",

  name_in_native: "",
  name_in_chinese: "喀麦隆",
} as IIsoRegion;

const Canada = {
  alpha2code: "CA",
  alpha3code: "CAN",
  alpha4code: "",
  calling_code: "1",
  independent: true,
  name: "Canada",

  numeric_code: "124",
  period_of_validity: "",
  short_name: "Canada",

  name_in_native: "",
  name_in_chinese: "加拿大",
} as IIsoRegion;

const CantonAndEnderburyIslands = {
  alpha2code: "CT",
  alpha3code: "CTE",
  alpha4code: "CTKI",
  calling_code: "",
  independent: false,
  name: "Canton And Enderbury Islands",

  numeric_code: "128",
  period_of_validity: "1974–1984",
  short_name: "Canton and Enderbury Islands",

  name_in_native: "",
  name_in_chinese: "坎顿及恩德伯里群岛",
} as IIsoRegion;

const CaribbeanNetherlands = {
  alpha2code: "BQ",
  alpha3code: "BES",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Caribbean Netherlands",

  numeric_code: "535",
  period_of_validity: "",
  short_name: "Bonaire, Sint Eustatius and Saba",

  name_in_native: "",
  name_in_chinese: "荷兰加勒比区",
} as IIsoRegion;

const CaymanIslands = {
  alpha2code: "KY",
  alpha3code: "CYM",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Cayman Islands",

  numeric_code: "136",
  period_of_validity: "",
  short_name: "Cayman Islands",

  name_in_native: "",
  name_in_chinese: "开曼群岛",
} as IIsoRegion;

const CentralAfricanRepublic = {
  alpha2code: "CF",
  alpha3code: "CAF",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Central African Republic",

  numeric_code: "140",
  period_of_validity: "",
  short_name: "Central African Republic",

  name_in_native: "",
  name_in_chinese: "中非",
} as IIsoRegion;

const Chad = {
  alpha2code: "TD",
  alpha3code: "TCD",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Chad",

  numeric_code: "148",
  period_of_validity: "",
  short_name: "Chad",

  name_in_native: "",
  name_in_chinese: "乍得",
} as IIsoRegion;

const Chile = {
  alpha2code: "CL",
  alpha3code: "CHL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Chile",

  numeric_code: "152",
  period_of_validity: "",
  short_name: "Chile",

  name_in_native: "",
  name_in_chinese: "智利",
} as IIsoRegion;

const China = {
  alpha2code: "CN",
  alpha3code: "CHN",
  alpha4code: "",
  calling_code: "86",
  independent: true,
  name: "China",

  numeric_code: "156",
  period_of_validity: "",
  short_name: "China",

  name_in_native: "中国",
  name_in_chinese: "中国大陆",
} as IIsoRegion;

const ChristmasIsland = {
  alpha2code: "CX",
  alpha3code: "CXR",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Christmas Island",

  numeric_code: "162",
  period_of_validity: "",
  short_name: "Christmas Island",

  name_in_native: "",
  name_in_chinese: "圣诞岛",
} as IIsoRegion;

const CocosKeelingIslands = {
  alpha2code: "CC",
  alpha3code: "CCK",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Cocos Keeling Islands",

  numeric_code: "166",
  period_of_validity: "",
  short_name: "Cocos (Keeling) Islands",

  name_in_native: "",
  name_in_chinese: "科科斯（基林）群岛",
} as IIsoRegion;

const Colombia = {
  alpha2code: "CO",
  alpha3code: "COL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Colombia",

  numeric_code: "170",
  period_of_validity: "",
  short_name: "Colombia",

  name_in_native: "",
  name_in_chinese: "哥伦比亚",
} as IIsoRegion;

const Comoros = {
  alpha2code: "KM",
  alpha3code: "COM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Comoros",

  numeric_code: "174",
  period_of_validity: "",
  short_name: "Comoros",

  name_in_native: "",
  name_in_chinese: "科摩罗",
} as IIsoRegion;

const Congo = {
  alpha2code: "CG",
  alpha3code: "COG",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Congo",

  numeric_code: "178",
  period_of_validity: "",
  short_name: "Congo",

  name_in_native: "",
  name_in_chinese: "刚果共和国",
} as IIsoRegion;

const CongoKinshasa = {
  alpha2code: "CD",
  alpha3code: "COD",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Congo Kinshasa",

  numeric_code: "180",
  period_of_validity: "",
  short_name: "Congo (Democratic Republic of the)",

  name_in_native: "",
  name_in_chinese: "刚果民主共和国",
} as IIsoRegion;

const CookIslands = {
  alpha2code: "CK",
  alpha3code: "COK",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Cook Islands",

  numeric_code: "184",
  period_of_validity: "",
  short_name: "Cook Islands",

  name_in_native: "",
  name_in_chinese: "库克群岛",
} as IIsoRegion;

const CostaRica = {
  alpha2code: "CR",
  alpha3code: "CRI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Costa Rica",

  numeric_code: "188",
  period_of_validity: "",
  short_name: "Costa Rica",

  name_in_native: "",
  name_in_chinese: "哥斯达黎加",
} as IIsoRegion;

const Croatia = {
  alpha2code: "HR",
  alpha3code: "HRV",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Croatia",

  numeric_code: "191",
  period_of_validity: "",
  short_name: "Croatia",

  name_in_native: "",
  name_in_chinese: "克罗地亚",
} as IIsoRegion;

const Cuba = {
  alpha2code: "CU",
  alpha3code: "CUB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Cuba",

  numeric_code: "192",
  period_of_validity: "",
  short_name: "Cuba",

  name_in_native: "",
  name_in_chinese: "古巴",
} as IIsoRegion;

const Curacao = {
  alpha2code: "CW",
  alpha3code: "CUW",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Curacao",

  numeric_code: "531",
  period_of_validity: "",
  short_name: "Curaçao",

  name_in_native: "",
  name_in_chinese: "库拉索",
} as IIsoRegion;

const Cyprus = {
  alpha2code: "CY",
  alpha3code: "CYP",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Cyprus",

  numeric_code: "196",
  period_of_validity: "",
  short_name: "Cyprus",

  name_in_native: "",
  name_in_chinese: "塞浦路斯",
} as IIsoRegion;

const Czechia = {
  alpha2code: "CZ",
  alpha3code: "CZE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Czechia",

  numeric_code: "203",
  period_of_validity: "",
  short_name: "Czechia",

  name_in_native: "",
  name_in_chinese: "捷克",
} as IIsoRegion;

const Czechoslovakia = {
  alpha2code: "CS",
  alpha3code: "CSK",
  alpha4code: "CSHH",
  calling_code: "",
  independent: false,
  name: "Czechoslovakia",

  numeric_code: "200",
  period_of_validity: "1974–1993",
  short_name: "Czechoslovakia",

  name_in_native: "",
  name_in_chinese: "捷克斯洛伐克",
} as IIsoRegion;

const Dahomey = {
  alpha2code: "DY",
  alpha3code: "DHY",
  alpha4code: "DYBJ",
  calling_code: "",
  independent: false,
  name: "Dahomey",

  numeric_code: "204",
  period_of_validity: "1974–1977",
  short_name: "Dahomey",

  name_in_native: "",
  name_in_chinese: "达荷美",
} as IIsoRegion;

const Denmark = {
  alpha2code: "DK",
  alpha3code: "DNK",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Denmark",

  numeric_code: "208",
  period_of_validity: "",
  short_name: "Denmark",

  name_in_native: "",
  name_in_chinese: "丹麦",
} as IIsoRegion;

const Djibouti = {
  alpha2code: "DJ",
  alpha3code: "DJI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Djibouti",

  numeric_code: "262",
  period_of_validity: "",
  short_name: "Djibouti",

  name_in_native: "",
  name_in_chinese: "吉布提",
} as IIsoRegion;

const Dominica = {
  alpha2code: "DM",
  alpha3code: "DMA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Dominica",

  numeric_code: "212",
  period_of_validity: "",
  short_name: "Dominica",

  name_in_native: "",
  name_in_chinese: "多米尼克",
} as IIsoRegion;

const DominicanRepublic = {
  alpha2code: "DO",
  alpha3code: "DOM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Dominican Republic",

  numeric_code: "214",
  period_of_validity: "",
  short_name: "Dominican Republic",

  name_in_native: "",
  name_in_chinese: "多米尼加",
} as IIsoRegion;

const DronningMaudLand = {
  alpha2code: "NQ",
  alpha3code: "ATN",
  alpha4code: "NQAQ",
  calling_code: "",
  independent: false,
  name: "Dronning Maud Land",

  numeric_code: "216",
  period_of_validity: "1974–1983",
  short_name: "Dronning Maud Land",

  name_in_native: "",
  name_in_chinese: "毛德皇后地",
} as IIsoRegion;

const EastGermany = {
  alpha2code: "DD",
  alpha3code: "DDR",
  alpha4code: "DDDE",
  calling_code: "",
  independent: true,
  name: "East Germany",

  numeric_code: "278",
  period_of_validity: "1974–1990",
  short_name: "German Democratic Republic",

  name_in_native: "",
  name_in_chinese: "东德",
} as IIsoRegion;

const EastTimor = {
  alpha2code: "TP",
  alpha3code: "TMP",
  alpha4code: "TPTL",
  calling_code: "",
  independent: false,
  name: "East Timor",

  numeric_code: "626",
  period_of_validity: "1974–2002",
  short_name: "East Timor",

  name_in_native: "",
  name_in_chinese: "东帝汶省",
} as IIsoRegion;

const Ecuador = {
  alpha2code: "EC",
  alpha3code: "ECU",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Ecuador",

  numeric_code: "218",
  period_of_validity: "",
  short_name: "Ecuador",

  name_in_native: "",
  name_in_chinese: "厄瓜多尔",
} as IIsoRegion;

const Egypt = {
  alpha2code: "EG",
  alpha3code: "EGY",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Egypt",

  numeric_code: "818",
  period_of_validity: "",
  short_name: "Egypt",

  name_in_native: "",
  name_in_chinese: "埃及",
} as IIsoRegion;

const ElSalvador = {
  alpha2code: "SV",
  alpha3code: "SLV",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "El Salvador",

  numeric_code: "222",
  period_of_validity: "",
  short_name: "El Salvador",

  name_in_native: "",
  name_in_chinese: "萨尔瓦多",
} as IIsoRegion;

const EquatorialGuinea = {
  alpha2code: "GQ",
  alpha3code: "GNQ",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Equatorial Guinea",

  numeric_code: "226",
  period_of_validity: "",
  short_name: "Equatorial Guinea",

  name_in_native: "",
  name_in_chinese: "赤道几内亚",
} as IIsoRegion;

const Eritrea = {
  alpha2code: "ER",
  alpha3code: "ERI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Eritrea",

  numeric_code: "232",
  period_of_validity: "",
  short_name: "Eritrea",

  name_in_native: "",
  name_in_chinese: "厄立特里亚",
} as IIsoRegion;

const Estonia = {
  alpha2code: "EE",
  alpha3code: "EST",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Estonia",

  numeric_code: "233",
  period_of_validity: "",
  short_name: "Estonia",

  name_in_native: "",
  name_in_chinese: "爱沙尼亚",
} as IIsoRegion;

const Eswatini = {
  alpha2code: "SZ",
  alpha3code: "SWZ",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Eswatini",

  numeric_code: "748",
  period_of_validity: "",
  short_name: "Eswatini",

  name_in_native: "",
  name_in_chinese: "斯威士兰",
} as IIsoRegion;

const Ethiopia = {
  alpha2code: "ET",
  alpha3code: "ETH",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Ethiopia",

  numeric_code: "231",
  period_of_validity: "",
  short_name: "Ethiopia",

  name_in_native: "",
  name_in_chinese: "埃塞俄比亚",
} as IIsoRegion;

const FalklandIslandsMalvinas = {
  alpha2code: "FK",
  alpha3code: "FLK",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Falkland Islands Malvinas",

  numeric_code: "238",
  period_of_validity: "",
  short_name: "Falkland Islands (Malvinas)",

  name_in_native: "",
  name_in_chinese: "福克兰群岛",
} as IIsoRegion;

const FaroeIslands = {
  alpha2code: "FO",
  alpha3code: "FRO",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Faroe Islands",

  numeric_code: "234",
  period_of_validity: "",
  short_name: "Faroe Islands",

  name_in_native: "",
  name_in_chinese: "法罗群岛",
} as IIsoRegion;

const Fiji = {
  alpha2code: "FJ",
  alpha3code: "FJI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Fiji",

  numeric_code: "242",
  period_of_validity: "",
  short_name: "Fiji",

  name_in_native: "",
  name_in_chinese: "斐济",
} as IIsoRegion;

const Finland = {
  alpha2code: "FI",
  alpha3code: "FIN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Finland",

  numeric_code: "246",
  period_of_validity: "",
  short_name: "Finland",

  name_in_native: "",
  name_in_chinese: "芬兰",
} as IIsoRegion;

const France = {
  alpha2code: "FR",
  alpha3code: "FRA",
  alpha4code: "",
  calling_code: "33",
  independent: true,
  name: "France",

  numeric_code: "250",
  period_of_validity: "",
  short_name: "France",

  name_in_native: "",
  name_in_chinese: "法国",
} as IIsoRegion;

const FranceMetropolitan = {
  alpha2code: "FX",
  alpha3code: "FXX",
  alpha4code: "FXFR",
  calling_code: "",
  independent: false,
  name: "France Metropolitan",

  numeric_code: "249",
  period_of_validity: "1993–1997",
  short_name: "France, Metropolitan",

  name_in_native: "",
  name_in_chinese: "法国本土",
} as IIsoRegion;

const FrenchAfarAndIssas = {
  alpha2code: "AI",
  alpha3code: "AFI",
  alpha4code: "AIDJ",
  calling_code: "",
  independent: false,
  name: "French Afar And Issas",

  numeric_code: "262",
  period_of_validity: "1974–1977",
  short_name: "French Afar and Issas",

  name_in_native: "",
  name_in_chinese: "法属阿法尔和伊萨领地",
} as IIsoRegion;

const FrenchGuiana = {
  alpha2code: "GF",
  alpha3code: "GUF",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "French Guiana",

  numeric_code: "254",
  period_of_validity: "",
  short_name: "French Guiana",

  name_in_native: "",
  name_in_chinese: "法属圭亚那",
} as IIsoRegion;

const FrenchPolynesia = {
  alpha2code: "PF",
  alpha3code: "PYF",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "French Polynesia",

  numeric_code: "258",
  period_of_validity: "",
  short_name: "French Polynesia",

  name_in_native: "",
  name_in_chinese: "法属波利尼西亚",
} as IIsoRegion;

const FrenchSouthernAndAntarcticTerritories = {
  alpha2code: "FQ",
  alpha3code: "ATF",
  alpha4code: "FQHH",
  calling_code: "",
  independent: false,
  name: "French Southern And Antarctic Territories",

  numeric_code: "260",
  period_of_validity: "1974–1979",
  short_name: "French Southern and Antarctic Territories",

  name_in_native: "",
  name_in_chinese: "前法属南部和南极领地",
} as IIsoRegion;

const FrenchSouthernTerritories = {
  alpha2code: "TF",
  alpha3code: "ATF",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "French Southern Territories",

  numeric_code: "260",
  period_of_validity: "",
  short_name: "French Southern Territories",

  name_in_native: "",
  name_in_chinese: "法属南部和南极领地",
} as IIsoRegion;

const Gabon = {
  alpha2code: "GA",
  alpha3code: "GAB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Gabon",

  numeric_code: "266",
  period_of_validity: "",
  short_name: "Gabon",

  name_in_native: "",
  name_in_chinese: "加蓬",
} as IIsoRegion;

const Gambia = {
  alpha2code: "GM",
  alpha3code: "GMB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Gambia",

  numeric_code: "270",
  period_of_validity: "",
  short_name: "Gambia",

  name_in_native: "",
  name_in_chinese: "冈比亚",
} as IIsoRegion;

const Georgia = {
  alpha2code: "GE",
  alpha3code: "GEO",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Georgia",

  numeric_code: "268",
  period_of_validity: "",
  short_name: "Georgia",

  name_in_native: "",
  name_in_chinese: "格鲁吉亚",
} as IIsoRegion;

const Germany = {
  alpha2code: "DE",
  alpha3code: "DEU",
  alpha4code: "",
  calling_code: "49",
  independent: true,
  name: "Germany",

  numeric_code: "276",
  period_of_validity: "",
  short_name: "Germany",

  name_in_native: "",
  name_in_chinese: "德国",
} as IIsoRegion;

const Ghana = {
  alpha2code: "GH",
  alpha3code: "GHA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Ghana",

  numeric_code: "288",
  period_of_validity: "",
  short_name: "Ghana",

  name_in_native: "",
  name_in_chinese: "加纳",
} as IIsoRegion;

const Gibraltar = {
  alpha2code: "GI",
  alpha3code: "GIB",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Gibraltar",

  numeric_code: "292",
  period_of_validity: "",
  short_name: "Gibraltar",

  name_in_native: "",
  name_in_chinese: "直布罗陀",
} as IIsoRegion;

const GilbertAndElliceIslands = {
  alpha2code: "GE",
  alpha3code: "GEL",
  alpha4code: "GEHH",
  calling_code: "",
  independent: false,
  name: "Gilbert And Ellice Islands",

  numeric_code: "296",
  period_of_validity: "1974–1979",
  short_name: "Gilbert and Ellice Islands",

  name_in_native: "",
  name_in_chinese: "吉尔伯特和埃利斯群岛",
} as IIsoRegion;

const Greece = {
  alpha2code: "GR",
  alpha3code: "GRC",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Greece",

  numeric_code: "300",
  period_of_validity: "",
  short_name: "Greece",

  name_in_native: "",
  name_in_chinese: "希腊",
} as IIsoRegion;

const Greenland = {
  alpha2code: "GL",
  alpha3code: "GRL",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Greenland",

  numeric_code: "304",
  period_of_validity: "",
  short_name: "Greenland",

  name_in_native: "",
  name_in_chinese: "格陵兰",
} as IIsoRegion;

const Grenada = {
  alpha2code: "GD",
  alpha3code: "GRD",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Grenada",

  numeric_code: "308",
  period_of_validity: "",
  short_name: "Grenada",

  name_in_native: "",
  name_in_chinese: "格林纳达",
} as IIsoRegion;

const Guadeloupe = {
  alpha2code: "GP",
  alpha3code: "GLP",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Guadeloupe",

  numeric_code: "312",
  period_of_validity: "",
  short_name: "Guadeloupe",

  name_in_native: "",
  name_in_chinese: "瓜德罗普",
} as IIsoRegion;

const Guam = {
  alpha2code: "GU",
  alpha3code: "GUM",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Guam",

  numeric_code: "316",
  period_of_validity: "",
  short_name: "Guam",

  name_in_native: "",
  name_in_chinese: "关岛",
} as IIsoRegion;

const Guatemala = {
  alpha2code: "GT",
  alpha3code: "GTM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Guatemala",

  numeric_code: "320",
  period_of_validity: "",
  short_name: "Guatemala",

  name_in_native: "",
  name_in_chinese: "危地马拉",
} as IIsoRegion;

const Guernsey = {
  alpha2code: "GG",
  alpha3code: "GGY",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Guernsey",

  numeric_code: "831",
  period_of_validity: "",
  short_name: "Guernsey",

  name_in_native: "",
  name_in_chinese: "根西",
} as IIsoRegion;

const Guinea = {
  alpha2code: "GN",
  alpha3code: "GIN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Guinea",

  numeric_code: "324",
  period_of_validity: "",
  short_name: "Guinea",

  name_in_native: "",
  name_in_chinese: "几内亚",
} as IIsoRegion;

const Guinea_Bissau = {
  alpha2code: "GW",
  alpha3code: "GNB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Guinea_Bissau",

  numeric_code: "624",
  period_of_validity: "",
  short_name: "Guinea-Bissau",

  name_in_native: "",
  name_in_chinese: "几内亚比绍",
} as IIsoRegion;

const Guyana = {
  alpha2code: "GY",
  alpha3code: "GUY",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Guyana",

  numeric_code: "328",
  period_of_validity: "",
  short_name: "Guyana",

  name_in_native: "",
  name_in_chinese: "圭亚那",
} as IIsoRegion;

const Haiti = {
  alpha2code: "HT",
  alpha3code: "HTI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Haiti",

  numeric_code: "332",
  period_of_validity: "",
  short_name: "Haiti",

  name_in_native: "",
  name_in_chinese: "海地",
} as IIsoRegion;

const HeardIslandAndMcDonaldIslands = {
  alpha2code: "HM",
  alpha3code: "HMD",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Heard Island And McDonald Islands",

  numeric_code: "334",
  period_of_validity: "",
  short_name: "Heard Island and McDonald Islands",

  name_in_native: "",
  name_in_chinese: "赫德岛和麦克唐纳群岛",
} as IIsoRegion;

const HolySee = {
  alpha2code: "VA",
  alpha3code: "VAT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Holy See",

  numeric_code: "336",
  period_of_validity: "",
  short_name: "Holy See",

  name_in_native: "",
  name_in_chinese: "梵蒂冈",
} as IIsoRegion;

const Honduras = {
  alpha2code: "HN",
  alpha3code: "HND",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Honduras",

  numeric_code: "340",
  period_of_validity: "",
  short_name: "Honduras",

  name_in_native: "",
  name_in_chinese: "洪都拉斯",
} as IIsoRegion;

const HongKong = {
  alpha2code: "HK",
  alpha3code: "HKG",
  alpha4code: "",
  calling_code: "852",
  independent: false,
  name: "Hong Kong",

  numeric_code: "344",
  period_of_validity: "",
  short_name: "Hong Kong",

  name_in_native: "香港",
  name_in_chinese: "中国香港",
} as IIsoRegion;

const Hungary = {
  alpha2code: "HU",
  alpha3code: "HUN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Hungary",

  numeric_code: "348",
  period_of_validity: "",
  short_name: "Hungary",

  name_in_native: "",
  name_in_chinese: "匈牙利",
} as IIsoRegion;

const Iceland = {
  alpha2code: "IS",
  alpha3code: "ISL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Iceland",

  numeric_code: "352",
  period_of_validity: "",
  short_name: "Iceland",

  name_in_native: "",
  name_in_chinese: "冰岛",
} as IIsoRegion;

const India = {
  alpha2code: "IN",
  alpha3code: "IND",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "India",

  numeric_code: "356",
  period_of_validity: "",
  short_name: "India",

  name_in_native: "",
  name_in_chinese: "印度",
} as IIsoRegion;

const Indonesia = {
  alpha2code: "ID",
  alpha3code: "IDN",
  alpha4code: "",
  calling_code: "62",
  independent: true,
  name: "Indonesia",

  numeric_code: "360",
  period_of_validity: "",
  short_name: "Indonesia",

  name_in_native: "",
  name_in_chinese: "印度尼西亚",
} as IIsoRegion;

const Iran = {
  alpha2code: "IR",
  alpha3code: "IRN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Iran",

  numeric_code: "364",
  period_of_validity: "",
  short_name: "Iran (Islamic Republic of)",

  name_in_native: "",
  name_in_chinese: "伊朗",
} as IIsoRegion;

const Iraq = {
  alpha2code: "IQ",
  alpha3code: "IRQ",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Iraq",

  numeric_code: "368",
  period_of_validity: "",
  short_name: "Iraq",

  name_in_native: "",
  name_in_chinese: "伊拉克",
} as IIsoRegion;

const Ireland = {
  alpha2code: "IE",
  alpha3code: "IRL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Ireland",

  numeric_code: "372",
  period_of_validity: "",
  short_name: "Ireland",

  name_in_native: "",
  name_in_chinese: "爱尔兰",
} as IIsoRegion;

const IsleOfMan = {
  alpha2code: "IM",
  alpha3code: "IMN",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Isle Of Man",

  numeric_code: "833",
  period_of_validity: "",
  short_name: "Isle of Man",

  name_in_native: "",
  name_in_chinese: "马恩岛",
} as IIsoRegion;

const Israel = {
  alpha2code: "IL",
  alpha3code: "ISR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Israel",

  numeric_code: "376",
  period_of_validity: "",
  short_name: "Israel",

  name_in_native: "",
  name_in_chinese: "以色列",
} as IIsoRegion;

const Italy = {
  alpha2code: "IT",
  alpha3code: "ITA",
  alpha4code: "",
  calling_code: "39",
  independent: true,
  name: "Italy",

  numeric_code: "380",
  period_of_validity: "",
  short_name: "Italy",

  name_in_native: "",
  name_in_chinese: "意大利",
} as IIsoRegion;

const IvoryCoast = {
  alpha2code: "CI",
  alpha3code: "CIV",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Ivory Coast",

  numeric_code: "384",
  period_of_validity: "",
  short_name: "Côte d'Ivoire",

  name_in_native: "",
  name_in_chinese: "科特迪瓦",
} as IIsoRegion;

const Jamaica = {
  alpha2code: "JM",
  alpha3code: "JAM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Jamaica",

  numeric_code: "388",
  period_of_validity: "",
  short_name: "Jamaica",

  name_in_native: "",
  name_in_chinese: "牙买加",
} as IIsoRegion;

const Japan = {
  alpha2code: "JP",
  alpha3code: "JPN",
  alpha4code: "",
  calling_code: "81",
  independent: true,
  name: "Japan",

  numeric_code: "392",
  period_of_validity: "",
  short_name: "Japan",

  name_in_native: "",
  name_in_chinese: "日本",
} as IIsoRegion;

const Jersey = {
  alpha2code: "JE",
  alpha3code: "JEY",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Jersey",

  numeric_code: "832",
  period_of_validity: "",
  short_name: "Jersey",

  name_in_native: "",
  name_in_chinese: "泽西",
} as IIsoRegion;

const JohnstonIsland = {
  alpha2code: "JT",
  alpha3code: "JTN",
  alpha4code: "JTUM",
  calling_code: "",
  independent: false,
  name: "Johnston Island",

  numeric_code: "396",
  period_of_validity: "1974–1986",
  short_name: "Johnston Island",

  name_in_native: "",
  name_in_chinese: "约翰斯顿环礁",
} as IIsoRegion;

const Jordan = {
  alpha2code: "JO",
  alpha3code: "JOR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Jordan",

  numeric_code: "400",
  period_of_validity: "",
  short_name: "Jordan",

  name_in_native: "",
  name_in_chinese: "约旦",
} as IIsoRegion;

const Kazakhstan = {
  alpha2code: "KZ",
  alpha3code: "KAZ",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Kazakhstan",

  numeric_code: "398",
  period_of_validity: "",
  short_name: "Kazakhstan",

  name_in_native: "",
  name_in_chinese: "哈萨克斯坦",
} as IIsoRegion;

const Kenya = {
  alpha2code: "KE",
  alpha3code: "KEN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Kenya",

  numeric_code: "404",
  period_of_validity: "",
  short_name: "Kenya",

  name_in_native: "",
  name_in_chinese: "肯尼亚",
} as IIsoRegion;

const Kiribati = {
  alpha2code: "KI",
  alpha3code: "KIR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Kiribati",

  numeric_code: "296",
  period_of_validity: "",
  short_name: "Kiribati",

  name_in_native: "",
  name_in_chinese: "基里巴斯",
} as IIsoRegion;

const Korea = {
  alpha2code: "",
  alpha3code: "XKO",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Korea",

  numeric_code: "",
  period_of_validity: "",
  short_name: "",

  name_in_native: "한국",
  name_in_chinese: "朝鲜",
} as IIsoRegion;

const Kosovo = {
  alpha2code: "XK",
  alpha3code: "XKV",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Kosovo",

  numeric_code: "",
  period_of_validity: "",
  short_name: "Republic of Kosovo",

  name_in_native: "Kosova",
  name_in_chinese: "科索沃",
} as IIsoRegion;

const Kuwait = {
  alpha2code: "KW",
  alpha3code: "KWT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Kuwait",

  numeric_code: "414",
  period_of_validity: "",
  short_name: "Kuwait",

  name_in_native: "",
  name_in_chinese: "科威特",
} as IIsoRegion;

const Kyrgyzstan = {
  alpha2code: "KG",
  alpha3code: "KGZ",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Kyrgyzstan",

  numeric_code: "417",
  period_of_validity: "",
  short_name: "Kyrgyzstan",

  name_in_native: "",
  name_in_chinese: "吉尔吉斯斯坦",
} as IIsoRegion;

const Laos = {
  alpha2code: "LA",
  alpha3code: "LAO",
  alpha4code: "",
  calling_code: "856",
  independent: true,
  name: "Laos",

  numeric_code: "418",
  period_of_validity: "",
  short_name: "Lao People's Democratic Republic",

  name_in_native: "",
  name_in_chinese: "老挝",
} as IIsoRegion;

const Latvia = {
  alpha2code: "LV",
  alpha3code: "LVA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Latvia",

  numeric_code: "428",
  period_of_validity: "",
  short_name: "Latvia",

  name_in_native: "",
  name_in_chinese: "拉脱维亚",
} as IIsoRegion;

const Lebanon = {
  alpha2code: "LB",
  alpha3code: "LBN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Lebanon",

  numeric_code: "422",
  period_of_validity: "",
  short_name: "Lebanon",

  name_in_native: "",
  name_in_chinese: "黎巴嫩",
} as IIsoRegion;

const Lesotho = {
  alpha2code: "LS",
  alpha3code: "LSO",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Lesotho",

  numeric_code: "426",
  period_of_validity: "",
  short_name: "Lesotho",

  name_in_native: "",
  name_in_chinese: "莱索托",
} as IIsoRegion;

const Liberia = {
  alpha2code: "LR",
  alpha3code: "LBR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Liberia",

  numeric_code: "430",
  period_of_validity: "",
  short_name: "Liberia",

  name_in_native: "",
  name_in_chinese: "利比里亚",
} as IIsoRegion;

const Libya = {
  alpha2code: "LY",
  alpha3code: "LBY",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Libya",

  numeric_code: "434",
  period_of_validity: "",
  short_name: "Libya",

  name_in_native: "",
  name_in_chinese: "利比亚",
} as IIsoRegion;

const Liechtenstein = {
  alpha2code: "LI",
  alpha3code: "LIE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Liechtenstein",

  numeric_code: "438",
  period_of_validity: "",
  short_name: "Liechtenstein",

  name_in_native: "",
  name_in_chinese: "列支敦士登",
} as IIsoRegion;

const Lithuania = {
  alpha2code: "LT",
  alpha3code: "LTU",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Lithuania",

  numeric_code: "440",
  period_of_validity: "",
  short_name: "Lithuania",

  name_in_native: "",
  name_in_chinese: "立陶宛",
} as IIsoRegion;

const Luxembourg = {
  alpha2code: "LU",
  alpha3code: "LUX",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Luxembourg",

  numeric_code: "442",
  period_of_validity: "",
  short_name: "Luxembourg",

  name_in_native: "",
  name_in_chinese: "卢森堡",
} as IIsoRegion;

const Macao = {
  alpha2code: "MO",
  alpha3code: "MAC",
  alpha4code: "",
  calling_code: "853",
  independent: false,
  name: "Macao",

  numeric_code: "446",
  period_of_validity: "",
  short_name: "Macao",

  name_in_native: "中國澳門",
  name_in_chinese: "中国澳门",
} as IIsoRegion;

const Madagascar = {
  alpha2code: "MG",
  alpha3code: "MDG",
  alpha4code: "",
  calling_code: "261",
  independent: true,
  name: "Madagascar",

  numeric_code: "450",
  period_of_validity: "",
  short_name: "Madagascar",

  name_in_native: "",
  name_in_chinese: "马达加斯加",
} as IIsoRegion;

const Malawi = {
  alpha2code: "MW",
  alpha3code: "MWI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Malawi",

  numeric_code: "454",
  period_of_validity: "",
  short_name: "Malawi",

  name_in_native: "",
  name_in_chinese: "马拉维",
} as IIsoRegion;

const Malaysia = {
  alpha2code: "MY",
  alpha3code: "MYS",
  alpha4code: "",
  calling_code: "60",
  independent: true,
  name: "Malaysia",

  numeric_code: "458",
  period_of_validity: "",
  short_name: "Malaysia",

  name_in_native: "",
  name_in_chinese: "马来西亚",
} as IIsoRegion;

const Maldives = {
  alpha2code: "MV",
  alpha3code: "MDV",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Maldives",

  numeric_code: "462",
  period_of_validity: "",
  short_name: "Maldives",

  name_in_native: "",
  name_in_chinese: "马尔代夫",
} as IIsoRegion;

const Mali = {
  alpha2code: "ML",
  alpha3code: "MLI",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Mali",

  numeric_code: "466",
  period_of_validity: "",
  short_name: "Mali",

  name_in_native: "",
  name_in_chinese: "马里",
} as IIsoRegion;

const Malta = {
  alpha2code: "MT",
  alpha3code: "MLT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Malta",

  numeric_code: "470",
  period_of_validity: "",
  short_name: "Malta",

  name_in_native: "",
  name_in_chinese: "马耳他",
} as IIsoRegion;

const MarshallIslands = {
  alpha2code: "MH",
  alpha3code: "MHL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Marshall Islands",

  numeric_code: "584",
  period_of_validity: "",
  short_name: "Marshall Islands",

  name_in_native: "",
  name_in_chinese: "马绍尔群岛",
} as IIsoRegion;

const Martinique = {
  alpha2code: "MQ",
  alpha3code: "MTQ",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Martinique",

  numeric_code: "474",
  period_of_validity: "",
  short_name: "Martinique",

  name_in_native: "",
  name_in_chinese: "马提尼克",
} as IIsoRegion;

const Mauritania = {
  alpha2code: "MR",
  alpha3code: "MRT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Mauritania",

  numeric_code: "478",
  period_of_validity: "",
  short_name: "Mauritania",

  name_in_native: "",
  name_in_chinese: "毛里塔尼亚",
} as IIsoRegion;

const Mauritius = {
  alpha2code: "MU",
  alpha3code: "MUS",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Mauritius",

  numeric_code: "480",
  period_of_validity: "",
  short_name: "Mauritius",

  name_in_native: "",
  name_in_chinese: "毛里求斯",
} as IIsoRegion;

const Mayotte = {
  alpha2code: "YT",
  alpha3code: "MYT",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Mayotte",

  numeric_code: "175",
  period_of_validity: "",
  short_name: "Mayotte",

  name_in_native: "",
  name_in_chinese: "马约特",
} as IIsoRegion;

const Mexico = {
  alpha2code: "MX",
  alpha3code: "MEX",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Mexico",

  numeric_code: "484",
  period_of_validity: "",
  short_name: "Mexico",

  name_in_native: "",
  name_in_chinese: "墨西哥",
} as IIsoRegion;

const MicronesiaFederatedStatesOf = {
  alpha2code: "FM",
  alpha3code: "FSM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Micronesia Federated States Of",

  numeric_code: "583",
  period_of_validity: "",
  short_name: "Micronesia (Federated States of)",

  name_in_native: "",
  name_in_chinese: "密克罗尼西亚联邦",
} as IIsoRegion;

const MidwayIslands = {
  alpha2code: "MI",
  alpha3code: "MID",
  alpha4code: "MIUM",
  calling_code: "",
  independent: false,
  name: "Midway Islands",

  numeric_code: "488",
  period_of_validity: "1974–1986",
  short_name: "Midway Islands",

  name_in_native: "",
  name_in_chinese: "中途岛",
} as IIsoRegion;

const MoldovaRepublicOf = {
  alpha2code: "MD",
  alpha3code: "MDA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Moldova Republic Of",

  numeric_code: "498",
  period_of_validity: "",
  short_name: "Moldova (Republic of)",

  name_in_native: "",
  name_in_chinese: "摩尔多瓦",
} as IIsoRegion;

const Monaco = {
  alpha2code: "MC",
  alpha3code: "MCO",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Monaco",

  numeric_code: "492",
  period_of_validity: "",
  short_name: "Monaco",

  name_in_native: "",
  name_in_chinese: "摩纳哥",
} as IIsoRegion;

const Mongolia = {
  alpha2code: "MN",
  alpha3code: "MNG",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Mongolia",

  numeric_code: "496",
  period_of_validity: "",
  short_name: "Mongolia",

  name_in_native: "",
  name_in_chinese: "蒙古",
} as IIsoRegion;

const Montenegro = {
  alpha2code: "ME",
  alpha3code: "MNE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Montenegro",

  numeric_code: "499",
  period_of_validity: "",
  short_name: "Montenegro",

  name_in_native: "",
  name_in_chinese: "黑山",
} as IIsoRegion;

const Montserrat = {
  alpha2code: "MS",
  alpha3code: "MSR",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Montserrat",

  numeric_code: "500",
  period_of_validity: "",
  short_name: "Montserrat",

  name_in_native: "",
  name_in_chinese: "蒙特塞拉特",
} as IIsoRegion;

const Morocco = {
  alpha2code: "MA",
  alpha3code: "MAR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Morocco",

  numeric_code: "504",
  period_of_validity: "",
  short_name: "Morocco",

  name_in_native: "",
  name_in_chinese: "摩洛哥",
} as IIsoRegion;

const Mozambique = {
  alpha2code: "MZ",
  alpha3code: "MOZ",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Mozambique",

  numeric_code: "508",
  period_of_validity: "",
  short_name: "Mozambique",

  name_in_native: "",
  name_in_chinese: "莫桑比克",
} as IIsoRegion;

const Myanmar = {
  alpha2code: "MM",
  alpha3code: "MMR",
  alpha4code: "",
  calling_code: "95",
  independent: true,
  name: "Myanmar",

  numeric_code: "104",
  period_of_validity: "",
  short_name: "Myanmar",

  name_in_native: "",
  name_in_chinese: "缅甸",
} as IIsoRegion;

const Namibia = {
  alpha2code: "NA",
  alpha3code: "NAM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Namibia",

  numeric_code: "516",
  period_of_validity: "",
  short_name: "Namibia",

  name_in_native: "",
  name_in_chinese: "纳米比亚",
} as IIsoRegion;

const Nauru = {
  alpha2code: "NR",
  alpha3code: "NRU",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Nauru",

  numeric_code: "520",
  period_of_validity: "",
  short_name: "Nauru",

  name_in_native: "",
  name_in_chinese: "瑙鲁",
} as IIsoRegion;

const Nepal = {
  alpha2code: "NP",
  alpha3code: "NPL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Nepal",

  numeric_code: "524",
  period_of_validity: "",
  short_name: "Nepal",

  name_in_native: "",
  name_in_chinese: "尼泊尔",
} as IIsoRegion;

const Netherlands = {
  alpha2code: "NL",
  alpha3code: "NLD",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Netherlands",

  numeric_code: "528",
  period_of_validity: "",
  short_name: "Netherlands",

  name_in_native: "",
  name_in_chinese: "荷兰",
} as IIsoRegion;

const NetherlandsAntilles = {
  alpha2code: "AN",
  alpha3code: "ANT",
  alpha4code: "ANHH",
  calling_code: "",
  independent: false,
  name: "Netherlands Antilles",

  numeric_code: "530",
  period_of_validity: "1974–2010",
  short_name: "Netherlands Antilles",

  name_in_native: "",
  name_in_chinese: "荷属安的列斯",
} as IIsoRegion;

const NeutralZone = {
  alpha2code: "NT",
  alpha3code: "NTZ",
  alpha4code: "NTHH",
  calling_code: "",
  independent: false,
  name: "Neutral Zone",

  numeric_code: "536",
  period_of_validity: "1974–1993",
  short_name: "Neutral Zone",

  name_in_native: "",
  name_in_chinese: "沙特阿拉伯－伊拉克中立区",
} as IIsoRegion;

const NewCaledonia = {
  alpha2code: "NC",
  alpha3code: "NCL",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "New Caledonia",

  numeric_code: "540",
  period_of_validity: "",
  short_name: "New Caledonia",

  name_in_native: "",
  name_in_chinese: "新喀里多尼亚",
} as IIsoRegion;

const NewHebrides = {
  alpha2code: "NH",
  alpha3code: "NHB",
  alpha4code: "NHVU",
  calling_code: "",
  independent: false,
  name: "New Hebrides",

  numeric_code: "548",
  period_of_validity: "1974–1980",
  short_name: "New Hebrides",

  name_in_native: "",
  name_in_chinese: "新赫布里底群岛",
} as IIsoRegion;

const NewZealand = {
  alpha2code: "NZ",
  alpha3code: "NZL",
  alpha4code: "",
  calling_code: "64",
  independent: true,
  name: "New Zealand",

  numeric_code: "554",
  period_of_validity: "",
  short_name: "New Zealand",

  name_in_native: "",
  name_in_chinese: "新西兰",
} as IIsoRegion;

const Nicaragua = {
  alpha2code: "NI",
  alpha3code: "NIC",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Nicaragua",

  numeric_code: "558",
  period_of_validity: "",
  short_name: "Nicaragua",

  name_in_native: "",
  name_in_chinese: "尼加拉瓜",
} as IIsoRegion;

const Niger = {
  alpha2code: "NE",
  alpha3code: "NER",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Niger",

  numeric_code: "562",
  period_of_validity: "",
  short_name: "Niger",

  name_in_native: "",
  name_in_chinese: "尼日尔",
} as IIsoRegion;

const Nigeria = {
  alpha2code: "NG",
  alpha3code: "NGA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Nigeria",

  numeric_code: "566",
  period_of_validity: "",
  short_name: "Nigeria",

  name_in_native: "",
  name_in_chinese: "尼日利亚",
} as IIsoRegion;

const Niue = {
  alpha2code: "NU",
  alpha3code: "NIU",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Niue",

  numeric_code: "570",
  period_of_validity: "",
  short_name: "Niue",

  name_in_native: "",
  name_in_chinese: "纽埃",
} as IIsoRegion;

const NorfolkIsland = {
  alpha2code: "NF",
  alpha3code: "NFK",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Norfolk Island",

  numeric_code: "574",
  period_of_validity: "",
  short_name: "Norfolk Island",

  name_in_native: "",
  name_in_chinese: "诺福克岛",
} as IIsoRegion;

const NorthKorea = {
  alpha2code: "KP",
  alpha3code: "PRK",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "North Korea",

  numeric_code: "408",
  period_of_validity: "",
  short_name: "Korea (Democratic People's Republic of)",

  name_in_native: "",
  name_in_chinese: "北韩",
} as IIsoRegion;

const NorthMacedonia = {
  alpha2code: "MK",
  alpha3code: "MKD",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "North Macedonia",

  numeric_code: "807",
  period_of_validity: "",
  short_name: "North Macedonia",

  name_in_native: "",
  name_in_chinese: "北马其顿",
} as IIsoRegion;

const NorthernMarianaIslands = {
  alpha2code: "MP",
  alpha3code: "MNP",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Northern Mariana Islands",

  numeric_code: "580",
  period_of_validity: "",
  short_name: "Northern Mariana Islands",

  name_in_native: "",
  name_in_chinese: "北马里亚纳群岛",
} as IIsoRegion;

const Norway = {
  alpha2code: "NO",
  alpha3code: "NOR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Norway",

  numeric_code: "578",
  period_of_validity: "",
  short_name: "Norway",

  name_in_native: "",
  name_in_chinese: "挪威",
} as IIsoRegion;

const Oman = {
  alpha2code: "OM",
  alpha3code: "OMN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Oman",

  numeric_code: "512",
  period_of_validity: "",
  short_name: "Oman",

  name_in_native: "",
  name_in_chinese: "阿曼",
} as IIsoRegion;

const PacificIslandsTrustTerritoryOfthe = {
  alpha2code: "PC",
  alpha3code: "PCI",
  alpha4code: "PCHH",
  calling_code: "",
  independent: false,
  name: "Pacific Islands Trust Territory Of the",

  numeric_code: "582",
  period_of_validity: "1974–1986",
  short_name: "Pacific Islands, Trust Territory of the",

  name_in_native: "",
  name_in_chinese: "太平洋群岛托管地",
} as IIsoRegion;

const Pakistan = {
  alpha2code: "PK",
  alpha3code: "PAK",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Pakistan",

  numeric_code: "586",
  period_of_validity: "",
  short_name: "Pakistan",

  name_in_native: "",
  name_in_chinese: "巴基斯坦",
} as IIsoRegion;

const Palau = {
  alpha2code: "PW",
  alpha3code: "PLW",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Palau",

  numeric_code: "585",
  period_of_validity: "",
  short_name: "Palau",

  name_in_native: "",
  name_in_chinese: "帕劳",
} as IIsoRegion;

const PalestineStateOf = {
  alpha2code: "PS",
  alpha3code: "PSE",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Palestine State Of",

  numeric_code: "275",
  period_of_validity: "",
  short_name: "Palestine, State of",

  name_in_native: "",
  name_in_chinese: "巴勒斯坦",
} as IIsoRegion;

const Panama = {
  alpha2code: "PA",
  alpha3code: "PAN",
  alpha4code: "",
  calling_code: "507",
  independent: true,
  name: "Panama",

  numeric_code: "591",
  period_of_validity: "",
  short_name: "Panama",

  name_in_native: "",
  name_in_chinese: "巴拿马",
} as IIsoRegion;

const PanamaCanalZone = {
  alpha2code: "PZ",
  alpha3code: "PCZ",
  alpha4code: "PZPA",
  calling_code: "",
  independent: false,
  name: "Panama Canal Zone",

  numeric_code: "594",
  period_of_validity: "1974–1980",
  short_name: "Panama Canal Zone",

  name_in_native: "",
  name_in_chinese: "巴拿马运河区",
} as IIsoRegion;

const PapuaNewGuinea = {
  alpha2code: "PG",
  alpha3code: "PNG",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Papua New Guinea",

  numeric_code: "598",
  period_of_validity: "",
  short_name: "Papua New Guinea",

  name_in_native: "",
  name_in_chinese: "巴布亚新几内亚",
} as IIsoRegion;

const Paraguay = {
  alpha2code: "PY",
  alpha3code: "PRY",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Paraguay",

  numeric_code: "600",
  period_of_validity: "",
  short_name: "Paraguay",

  name_in_native: "",
  name_in_chinese: "巴拉圭",
} as IIsoRegion;

const Peru = {
  alpha2code: "PE",
  alpha3code: "PER",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Peru",

  numeric_code: "604",
  period_of_validity: "",
  short_name: "Peru",

  name_in_native: "",
  name_in_chinese: "秘鲁",
} as IIsoRegion;

const Philippines = {
  alpha2code: "PH",
  alpha3code: "PHL",
  alpha4code: "",
  calling_code: "63",
  independent: true,
  name: "Philippines",

  numeric_code: "608",
  period_of_validity: "",
  short_name: "Philippines",

  name_in_native: "",
  name_in_chinese: "菲律宾",
} as IIsoRegion;

const Pitcairn = {
  alpha2code: "PN",
  alpha3code: "PCN",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Pitcairn",

  numeric_code: "612",
  period_of_validity: "",
  short_name: "Pitcairn",

  name_in_native: "",
  name_in_chinese: "皮特凯恩群岛",
} as IIsoRegion;

const Poland = {
  alpha2code: "PL",
  alpha3code: "POL",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Poland",

  numeric_code: "616",
  period_of_validity: "",
  short_name: "Poland",

  name_in_native: "",
  name_in_chinese: "波兰",
} as IIsoRegion;

const Portugal = {
  alpha2code: "PT",
  alpha3code: "PRT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Portugal",

  numeric_code: "620",
  period_of_validity: "",
  short_name: "Portugal",

  name_in_native: "",
  name_in_chinese: "葡萄牙",
} as IIsoRegion;

const PuertoRico = {
  alpha2code: "PR",
  alpha3code: "PRI",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Puerto Rico",

  numeric_code: "630",
  period_of_validity: "",
  short_name: "Puerto Rico",

  name_in_native: "",
  name_in_chinese: "波多黎各",
} as IIsoRegion;

const Qatar = {
  alpha2code: "QA",
  alpha3code: "QAT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Qatar",

  numeric_code: "634",
  period_of_validity: "",
  short_name: "Qatar",

  name_in_native: "",
  name_in_chinese: "卡塔尔",
} as IIsoRegion;

const Romania = {
  alpha2code: "RO",
  alpha3code: "ROU",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Romania",

  numeric_code: "642",
  period_of_validity: "",
  short_name: "Romania",

  name_in_native: "",
  name_in_chinese: "罗马尼亚",
} as IIsoRegion;

const Russia = {
  alpha2code: "RU",
  alpha3code: "RUS",
  alpha4code: "",
  calling_code: "7",
  independent: true,
  name: "Russia",

  numeric_code: "643",
  period_of_validity: "",
  short_name: "Russian Federation",

  name_in_native: "",
  name_in_chinese: "俄罗斯",
} as IIsoRegion;

const Rwanda = {
  alpha2code: "RW",
  alpha3code: "RWA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Rwanda",

  numeric_code: "646",
  period_of_validity: "",
  short_name: "Rwanda",

  name_in_native: "",
  name_in_chinese: "卢旺达",
} as IIsoRegion;

const Réunion = {
  alpha2code: "RE",
  alpha3code: "REU",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Réunion",

  numeric_code: "638",
  period_of_validity: "",
  short_name: "Réunion",

  name_in_native: "",
  name_in_chinese: "留尼汪",
} as IIsoRegion;

const SaintBarthélemy = {
  alpha2code: "BL",
  alpha3code: "BLM",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Saint Barthélemy",

  numeric_code: "652",
  period_of_validity: "",
  short_name: "Saint Barthélemy",

  name_in_native: "",
  name_in_chinese: "圣巴泰勒米",
} as IIsoRegion;

const SaintHelenaAscensionAndTristandaCunha = {
  alpha2code: "SH",
  alpha3code: "SHN",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Saint Helena Ascension And Tristan da Cunha",

  numeric_code: "654",
  period_of_validity: "",
  short_name: "Saint Helena, Ascension and Tristan da Cunha",

  name_in_native: "",
  name_in_chinese: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
} as IIsoRegion;

const SaintKittsAndNevis = {
  alpha2code: "KN",
  alpha3code: "KNA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Saint Kitts And Nevis",

  numeric_code: "659",
  period_of_validity: "",
  short_name: "Saint Kitts and Nevis",

  name_in_native: "",
  name_in_chinese: "圣基茨和尼维斯",
} as IIsoRegion;

const SaintLucia = {
  alpha2code: "LC",
  alpha3code: "LCA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Saint Lucia",

  numeric_code: "662",
  period_of_validity: "",
  short_name: "Saint Lucia",

  name_in_native: "",
  name_in_chinese: "圣卢西亚",
} as IIsoRegion;

const SaintMartinFrenchpart = {
  alpha2code: "MF",
  alpha3code: "MAF",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Saint Martin French part",

  numeric_code: "663",
  period_of_validity: "",
  short_name: "Saint Martin (French part)",

  name_in_native: "",
  name_in_chinese: "法属圣马丁",
} as IIsoRegion;

const SaintPierreAndMiquelon = {
  alpha2code: "PM",
  alpha3code: "SPM",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Saint Pierre And Miquelon",

  numeric_code: "666",
  period_of_validity: "",
  short_name: "Saint Pierre and Miquelon",

  name_in_native: "",
  name_in_chinese: "圣皮埃尔和密克隆",
} as IIsoRegion;

const SaintVincentAndTheGrenadines = {
  alpha2code: "VC",
  alpha3code: "VCT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Saint Vincent And The Grenadines",

  numeric_code: "670",
  period_of_validity: "",
  short_name: "Saint Vincent and the Grenadines",

  name_in_native: "",
  name_in_chinese: "圣文森特和格林纳丁斯",
} as IIsoRegion;

const Samoa = {
  alpha2code: "WS",
  alpha3code: "WSM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Samoa",

  numeric_code: "882",
  period_of_validity: "",
  short_name: "Samoa",

  name_in_native: "",
  name_in_chinese: "萨摩亚",
} as IIsoRegion;

const SanMarino = {
  alpha2code: "SM",
  alpha3code: "SMR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "San Marino",

  numeric_code: "674",
  period_of_validity: "",
  short_name: "San Marino",

  name_in_native: "",
  name_in_chinese: "圣马力诺",
} as IIsoRegion;

const SaoTomeAndPrincipe = {
  alpha2code: "ST",
  alpha3code: "STP",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Sao Tome And Principe",

  numeric_code: "678",
  period_of_validity: "",
  short_name: "Sao Tome and Principe",

  name_in_native: "",
  name_in_chinese: "圣多美和普林西比",
} as IIsoRegion;

const SaudiArabia = {
  alpha2code: "SA",
  alpha3code: "SAU",
  alpha4code: "",
  calling_code: "966",
  independent: true,
  name: "Saudi Arabia",

  numeric_code: "682",
  period_of_validity: "",
  short_name: "Saudi Arabia",

  name_in_native: "",
  name_in_chinese: "沙特阿拉伯",
} as IIsoRegion;

const Senegal = {
  alpha2code: "SN",
  alpha3code: "SEN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Senegal",

  numeric_code: "686",
  period_of_validity: "",
  short_name: "Senegal",

  name_in_native: "",
  name_in_chinese: "塞内加尔",
} as IIsoRegion;

const Serbia = {
  alpha2code: "RS",
  alpha3code: "SRB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Serbia",

  numeric_code: "688",
  period_of_validity: "",
  short_name: "Serbia",

  name_in_native: "",
  name_in_chinese: "塞尔维亚",
} as IIsoRegion;

const SerbiaAndMontenegro = {
  alpha2code: "CS",
  alpha3code: "SCG",
  alpha4code: "CSXX",
  calling_code: "",
  independent: false,
  name: "Serbia And Montenegro",

  numeric_code: "891",
  period_of_validity: "2003–2006",
  short_name: "Serbia and Montenegro",

  name_in_native: "",
  name_in_chinese: "塞尔维亚和黑山",
} as IIsoRegion;

const Seychelles = {
  alpha2code: "SC",
  alpha3code: "SYC",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Seychelles",

  numeric_code: "690",
  period_of_validity: "",
  short_name: "Seychelles",

  name_in_native: "",
  name_in_chinese: "塞舌尔",
} as IIsoRegion;

const SierraLeone = {
  alpha2code: "SL",
  alpha3code: "SLE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Sierra Leone",

  numeric_code: "694",
  period_of_validity: "",
  short_name: "Sierra Leone",

  name_in_native: "",
  name_in_chinese: "塞拉利昂",
} as IIsoRegion;

const Sikkim = {
  alpha2code: "SK",
  alpha3code: "SKM",
  alpha4code: "SKIN",
  calling_code: "",
  independent: false,
  name: "Sikkim",

  numeric_code: "698",
  period_of_validity: "1974–1975",
  short_name: "Sikkim",

  name_in_native: "",
  name_in_chinese: "锡金",
} as IIsoRegion;

const Singapore = {
  alpha2code: "SG",
  alpha3code: "SGP",
  alpha4code: "",
  calling_code: "65",
  independent: true,
  name: "Singapore",

  numeric_code: "702",
  period_of_validity: "",
  short_name: "Singapore",

  name_in_native: "",
  name_in_chinese: "新加坡",
} as IIsoRegion;

const SintMaartenDutchpart = {
  alpha2code: "SX",
  alpha3code: "SXM",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Sint Maarten Dutch part",

  numeric_code: "534",
  period_of_validity: "",
  short_name: "Sint Maarten (Dutch part)",

  name_in_native: "",
  name_in_chinese: "荷属圣马丁",
} as IIsoRegion;

const Slovakia = {
  alpha2code: "SK",
  alpha3code: "SVK",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Slovakia",

  numeric_code: "703",
  period_of_validity: "",
  short_name: "Slovakia",

  name_in_native: "",
  name_in_chinese: "斯洛伐克",
} as IIsoRegion;

const Slovenia = {
  alpha2code: "SI",
  alpha3code: "SVN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Slovenia",

  numeric_code: "705",
  period_of_validity: "",
  short_name: "Slovenia",

  name_in_native: "",
  name_in_chinese: "斯洛文尼亚",
} as IIsoRegion;

const SolomonIslands = {
  alpha2code: "SB",
  alpha3code: "SLB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Solomon Islands",

  numeric_code: "090",
  period_of_validity: "",
  short_name: "Solomon Islands",

  name_in_native: "",
  name_in_chinese: "所罗门群岛",
} as IIsoRegion;

const Somalia = {
  alpha2code: "SO",
  alpha3code: "SOM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Somalia",

  numeric_code: "706",
  period_of_validity: "",
  short_name: "Somalia",

  name_in_native: "",
  name_in_chinese: "索马里",
} as IIsoRegion;

const SouthAfrica = {
  alpha2code: "ZA",
  alpha3code: "ZAF",
  alpha4code: "",
  calling_code: "27",
  independent: true,
  name: "South Africa",

  numeric_code: "710",
  period_of_validity: "",
  short_name: "South Africa",

  name_in_native: "",
  name_in_chinese: "南非",
} as IIsoRegion;

const SouthGeorgiaAndTheSouthSandwichIslands = {
  alpha2code: "GS",
  alpha3code: "SGS",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "South Georgia And The South Sandwich Islands",

  numeric_code: "239",
  period_of_validity: "",
  short_name: "South Georgia and the South Sandwich Islands",

  name_in_native: "",
  name_in_chinese: "南乔治亚和南桑威奇群岛",
} as IIsoRegion;

const SouthKorea = {
  alpha2code: "KR",
  alpha3code: "KOR",
  alpha4code: "",
  calling_code: "82",
  independent: true,
  name: "South Korea",

  numeric_code: "410",
  period_of_validity: "",
  short_name: "Korea (Republic of)",

  name_in_native: "",
  name_in_chinese: "南韩",
} as IIsoRegion;

const SouthSudan = {
  alpha2code: "SS",
  alpha3code: "SSD",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "South Sudan",

  numeric_code: "728",
  period_of_validity: "",
  short_name: "South Sudan",

  name_in_native: "",
  name_in_chinese: "南苏丹",
} as IIsoRegion;

const SouthernRhodesia = {
  alpha2code: "RH",
  alpha3code: "RHO",
  alpha4code: "RHZW",
  calling_code: "",
  independent: false,
  name: "Southern Rhodesia",

  numeric_code: "716",
  period_of_validity: "1974–1980",
  short_name: "Southern Rhodesia",

  name_in_native: "",
  name_in_chinese: "南罗德西亚",
} as IIsoRegion;

const SovietUnion = {
  alpha2code: "SU",
  alpha3code: "SUN",
  alpha4code: "SUHH",
  calling_code: "",
  independent: true,
  name: "Soviet Union",

  numeric_code: "810",
  period_of_validity: "1974–1992",
  short_name: "Soviet Union (USSR)",

  name_in_native: "",
  name_in_chinese: "苏联",
} as IIsoRegion;

const Spain = {
  alpha2code: "ES",
  alpha3code: "ESP",
  alpha4code: "",
  calling_code: "34",
  independent: true,
  name: "Spain",

  numeric_code: "724",
  period_of_validity: "",
  short_name: "Spain",

  name_in_native: "",
  name_in_chinese: "西班牙",
} as IIsoRegion;

const SriLanka = {
  alpha2code: "LK",
  alpha3code: "LKA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Sri Lanka",

  numeric_code: "144",
  period_of_validity: "",
  short_name: "Sri Lanka",

  name_in_native: "",
  name_in_chinese: "斯里兰卡",
} as IIsoRegion;

const Sudan = {
  alpha2code: "SD",
  alpha3code: "SDN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Sudan",

  numeric_code: "729",
  period_of_validity: "",
  short_name: "Sudan",

  name_in_native: "",
  name_in_chinese: "苏丹",
} as IIsoRegion;

const Suriname = {
  alpha2code: "SR",
  alpha3code: "SUR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Suriname",

  numeric_code: "740",
  period_of_validity: "",
  short_name: "Suriname",

  name_in_native: "",
  name_in_chinese: "苏里南",
} as IIsoRegion;

const SvalbardAndJanMayen = {
  alpha2code: "SJ",
  alpha3code: "SJM",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Svalbard And Jan Mayen",

  numeric_code: "744",
  period_of_validity: "",
  short_name: "Svalbard and Jan Mayen",

  name_in_native: "",
  name_in_chinese: "斯瓦尔巴和扬马延",
} as IIsoRegion;

const Sweden = {
  alpha2code: "SE",
  alpha3code: "SWE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Sweden",

  numeric_code: "752",
  period_of_validity: "",
  short_name: "Sweden",

  name_in_native: "",
  name_in_chinese: "瑞典",
} as IIsoRegion;

const Switzerland = {
  alpha2code: "CH",
  alpha3code: "CHE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Switzerland",

  numeric_code: "756",
  period_of_validity: "",
  short_name: "Switzerland",

  name_in_native: "",
  name_in_chinese: "瑞士",
} as IIsoRegion;

const SyrianArabRepublic = {
  alpha2code: "SY",
  alpha3code: "SYR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Syrian Arab Republic",

  numeric_code: "760",
  period_of_validity: "",
  short_name: "Syrian Arab Republic",

  name_in_native: "",
  name_in_chinese: "叙利亚",
} as IIsoRegion;

const Taiwan = {
  alpha2code: "TW",
  alpha3code: "TWN",
  alpha4code: "",
  calling_code: "886",
  independent: false,
  name: "Taiwan",

  numeric_code: "158",
  period_of_validity: "",
  short_name: "Taiwan, Province of China",

  name_in_native: "臺灣",
  name_in_chinese: "中国台湾",
} as IIsoRegion;

const Tajikistan = {
  alpha2code: "TJ",
  alpha3code: "TJK",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Tajikistan",

  numeric_code: "762",
  period_of_validity: "",
  short_name: "Tajikistan",

  name_in_native: "",
  name_in_chinese: "塔吉克斯坦",
} as IIsoRegion;

const TanzaniaUnitedRepublicOf = {
  alpha2code: "TZ",
  alpha3code: "TZA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Tanzania United Republic Of",

  numeric_code: "834",
  period_of_validity: "",
  short_name: "Tanzania, United Republic of",

  name_in_native: "",
  name_in_chinese: "坦桑尼亚",
} as IIsoRegion;

const Thailand = {
  alpha2code: "TH",
  alpha3code: "THA",
  alpha4code: "",
  calling_code: "66",
  independent: true,
  name: "Thailand",

  numeric_code: "764",
  period_of_validity: "",
  short_name: "Thailand",

  name_in_native: "",
  name_in_chinese: "泰国",
} as IIsoRegion;

const Timor_Leste = {
  alpha2code: "TL",
  alpha3code: "TLS",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Timor_Leste",

  numeric_code: "626",
  period_of_validity: "",
  short_name: "Timor-Leste",

  name_in_native: "",
  name_in_chinese: "东帝汶",
} as IIsoRegion;

const Togo = {
  alpha2code: "TG",
  alpha3code: "TGO",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Togo",

  numeric_code: "768",
  period_of_validity: "",
  short_name: "Togo",

  name_in_native: "",
  name_in_chinese: "多哥",
} as IIsoRegion;

const Tokelau = {
  alpha2code: "TK",
  alpha3code: "TKL",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Tokelau",

  numeric_code: "772",
  period_of_validity: "",
  short_name: "Tokelau",

  name_in_native: "",
  name_in_chinese: "托克劳",
} as IIsoRegion;

const Tonga = {
  alpha2code: "TO",
  alpha3code: "TON",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Tonga",

  numeric_code: "776",
  period_of_validity: "",
  short_name: "Tonga",

  name_in_native: "",
  name_in_chinese: "汤加",
} as IIsoRegion;

const TrinidadAndTobago = {
  alpha2code: "TT",
  alpha3code: "TTO",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Trinidad And Tobago",

  numeric_code: "780",
  period_of_validity: "",
  short_name: "Trinidad and Tobago",

  name_in_native: "",
  name_in_chinese: "特立尼达和多巴哥",
} as IIsoRegion;

const Tunisia = {
  alpha2code: "TN",
  alpha3code: "TUN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Tunisia",

  numeric_code: "788",
  period_of_validity: "",
  short_name: "Tunisia",

  name_in_native: "",
  name_in_chinese: "突尼斯",
} as IIsoRegion;

const Turkey = {
  alpha2code: "TR",
  alpha3code: "TUR",
  alpha4code: "",
  calling_code: "90",
  independent: true,
  name: "Turkey",

  numeric_code: "792",
  period_of_validity: "",
  short_name: "Türkiye",

  name_in_native: "",
  name_in_chinese: "土耳其",
} as IIsoRegion;

const Turkmenistan = {
  alpha2code: "TM",
  alpha3code: "TKM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Turkmenistan",

  numeric_code: "795",
  period_of_validity: "",
  short_name: "Turkmenistan",

  name_in_native: "",
  name_in_chinese: "土库曼斯坦",
} as IIsoRegion;

const TurksAndCaicosIslands = {
  alpha2code: "TC",
  alpha3code: "TCA",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Turks And Caicos Islands",

  numeric_code: "796",
  period_of_validity: "",
  short_name: "Turks and Caicos Islands",

  name_in_native: "",
  name_in_chinese: "特克斯和凯科斯群岛",
} as IIsoRegion;

const Tuvalu = {
  alpha2code: "TV",
  alpha3code: "TUV",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Tuvalu",

  numeric_code: "798",
  period_of_validity: "",
  short_name: "Tuvalu",

  name_in_native: "",
  name_in_chinese: "图瓦卢",
} as IIsoRegion;

const USMiscellaneousPacificIslands = {
  alpha2code: "PU",
  alpha3code: "PUS",
  alpha4code: "PUUM",
  calling_code: "",
  independent: false,
  name: "US Miscellaneous Pacific Islands",

  numeric_code: "849",
  period_of_validity: "1974–1986",
  short_name: "U.S. Miscellaneous Pacific Islands",

  name_in_native: "",
  name_in_chinese: "美国其它太平洋岛屿",
} as IIsoRegion;

const Uganda = {
  alpha2code: "UG",
  alpha3code: "UGA",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Uganda",

  numeric_code: "800",
  period_of_validity: "",
  short_name: "Uganda",

  name_in_native: "",
  name_in_chinese: "乌干达",
} as IIsoRegion;

const Ukraine = {
  alpha2code: "UA",
  alpha3code: "UKR",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Ukraine",

  numeric_code: "804",
  period_of_validity: "",
  short_name: "Ukraine",

  name_in_native: "",
  name_in_chinese: "乌克兰",
} as IIsoRegion;

const UnitedArabEmirates = {
  alpha2code: "AE",
  alpha3code: "ARE",
  alpha4code: "",
  calling_code: "971",
  independent: true,
  name: "United Arab Emirates",

  numeric_code: "784",
  period_of_validity: "",
  short_name: "United Arab Emirates",

  name_in_native: "",
  name_in_chinese: "阿联酋",
} as IIsoRegion;

const UnitedKingdom = {
  alpha2code: "GB",
  alpha3code: "GBR",
  alpha4code: "",
  calling_code: "44",
  independent: true,
  name: "United Kingdom",

  numeric_code: "826",
  period_of_validity: "",
  short_name: "United Kingdom of Great Britain and Northern Ireland",

  name_in_native: "",
  name_in_chinese: "英国",
} as IIsoRegion;

const UnitedStates = {
  alpha2code: "US",
  alpha3code: "USA",
  alpha4code: "",
  calling_code: "1",
  independent: true,
  name: "United States",

  numeric_code: "840",
  period_of_validity: "",
  short_name: "United States of America",

  name_in_native: "",
  name_in_chinese: "美国",
} as IIsoRegion;

const UnitedStatesMinorOutlyingIslands = {
  alpha2code: "UM",
  alpha3code: "UMI",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "United States Minor Outlying Islands",

  numeric_code: "581",
  period_of_validity: "",
  short_name: "United States Minor Outlying Islands",

  name_in_native: "",
  name_in_chinese: "美国本土外小岛屿",
} as IIsoRegion;

const UnitedStatesVirginIslands = {
  alpha2code: "VG",
  alpha3code: "VGB",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "United States Virgin Islands",

  numeric_code: "092",
  period_of_validity: "",
  short_name: "Virgin Islands (British)",

  name_in_native: "",
  name_in_chinese: "英属维尔京群岛",
} as IIsoRegion;

const UpperVolta = {
  alpha2code: "HV",
  alpha3code: "HVO",
  alpha4code: "HVBF",
  calling_code: "",
  independent: false,
  name: "Upper Volta",

  numeric_code: "854",
  period_of_validity: "1974–1984",
  short_name: "Upper Volta",

  name_in_native: "",
  name_in_chinese: "上沃尔特",
} as IIsoRegion;

const Uruguay = {
  alpha2code: "UY",
  alpha3code: "URY",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Uruguay",

  numeric_code: "858",
  period_of_validity: "",
  short_name: "Uruguay",

  name_in_native: "",
  name_in_chinese: "乌拉圭",
} as IIsoRegion;

const Uzbekistan = {
  alpha2code: "UZ",
  alpha3code: "UZB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Uzbekistan",

  numeric_code: "860",
  period_of_validity: "",
  short_name: "Uzbekistan",

  name_in_native: "",
  name_in_chinese: "乌兹别克斯坦",
} as IIsoRegion;

const Vanuatu = {
  alpha2code: "VU",
  alpha3code: "VUT",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Vanuatu",

  numeric_code: "548",
  period_of_validity: "",
  short_name: "Vanuatu",

  name_in_native: "",
  name_in_chinese: "瓦努阿图",
} as IIsoRegion;

const VenezuelaBolivarianRepublicOf = {
  alpha2code: "VE",
  alpha3code: "VEN",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Venezuela Bolivarian Republic Of",

  numeric_code: "862",
  period_of_validity: "",
  short_name: "Venezuela (Bolivarian Republic of)",

  name_in_native: "",
  name_in_chinese: "委内瑞拉",
} as IIsoRegion;

const VietNam = {
  alpha2code: "VN",
  alpha3code: "VNM",
  alpha4code: "",
  calling_code: "84",
  independent: true,
  name: "Viet Nam",

  numeric_code: "704",
  period_of_validity: "",
  short_name: "Viet Nam",

  name_in_native: "",
  name_in_chinese: "越南",
} as IIsoRegion;

const Viet_NamDemocraticRepublicOf = {
  alpha2code: "VD",
  alpha3code: "VDR",
  alpha4code: "VDVN",
  calling_code: "",
  independent: false,
  name: "Viet_Nam Democratic Republic Of",

  numeric_code: "704",
  period_of_validity: "1974–1977",
  short_name: "Viet-Nam, Democratic Republic of",

  name_in_native: "",
  name_in_chinese: "越南民主共和国",
} as IIsoRegion;

const VirginIslands = {
  alpha2code: "VI",
  alpha3code: "VIR",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Virgin Islands",

  numeric_code: "850",
  period_of_validity: "",
  short_name: "Virgin Islands (U.S.)",

  name_in_native: "",
  name_in_chinese: "美属维尔京群岛",
} as IIsoRegion;

const WakeIsland = {
  alpha2code: "WK",
  alpha3code: "WAK",
  alpha4code: "WKUM",
  calling_code: "",
  independent: false,
  name: "Wake Island",

  numeric_code: "872",
  period_of_validity: "1974–1986",
  short_name: "Wake Island",

  name_in_native: "",
  name_in_chinese: "威克岛",
} as IIsoRegion;

const WallisAndFutuna = {
  alpha2code: "WF",
  alpha3code: "WLF",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Wallis And Futuna",

  numeric_code: "876",
  period_of_validity: "",
  short_name: "Wallis and Futuna",

  name_in_native: "",
  name_in_chinese: "瓦利斯和富图纳",
} as IIsoRegion;

const WestGermany = {
  alpha2code: "",
  alpha3code: "XWG",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "West Germany",

  numeric_code: "",
  period_of_validity: "",
  short_name: "Federal Republic of Germany",

  name_in_native: "",
  name_in_chinese: "西德",
} as IIsoRegion;

const WesternSahara = {
  alpha2code: "EH",
  alpha3code: "ESH",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Western Sahara",

  numeric_code: "732",
  period_of_validity: "",
  short_name: "Western Sahara",

  name_in_native: "",
  name_in_chinese: "西撒哈拉",
} as IIsoRegion;

const Yemen = {
  alpha2code: "YE",
  alpha3code: "YEM",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Yemen",

  numeric_code: "887",
  period_of_validity: "",
  short_name: "Yemen",

  name_in_native: "",
  name_in_chinese: "也门",
} as IIsoRegion;

const YemenDemocratic = {
  alpha2code: "YD",
  alpha3code: "YMD",
  alpha4code: "YDYE",
  calling_code: "",
  independent: false,
  name: "Yemen Democratic",

  numeric_code: "720",
  period_of_validity: "1974–1990",
  short_name: "Yemen, Democratic",

  name_in_native: "",
  name_in_chinese: "也门民主人民共和国",
} as IIsoRegion;

const Yugoslavia = {
  alpha2code: "YU",
  alpha3code: "YUG",
  alpha4code: "YUCS",
  calling_code: "",
  independent: false,
  name: "Yugoslavia",

  numeric_code: "891",
  period_of_validity: "1974–2003",
  short_name: "Yugoslavia",

  name_in_native: "",
  name_in_chinese: "南斯拉夫",
} as IIsoRegion;

const Zaire = {
  alpha2code: "ZR",
  alpha3code: "ZAR",
  alpha4code: "ZRCD",
  calling_code: "",
  independent: false,
  name: "Zaire",

  numeric_code: "180",
  period_of_validity: "1974–1997",
  short_name: "Zaire",

  name_in_native: "",
  name_in_chinese: "扎伊尔",
} as IIsoRegion;

const Zambia = {
  alpha2code: "ZM",
  alpha3code: "ZMB",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Zambia",

  numeric_code: "894",
  period_of_validity: "",
  short_name: "Zambia",

  name_in_native: "",
  name_in_chinese: "赞比亚",
} as IIsoRegion;

const Zimbabwe = {
  alpha2code: "ZW",
  alpha3code: "ZWE",
  alpha4code: "",
  calling_code: "",
  independent: true,
  name: "Zimbabwe",

  numeric_code: "716",
  period_of_validity: "",
  short_name: "Zimbabwe",

  name_in_native: "",
  name_in_chinese: "津巴布韦",
} as IIsoRegion;

const ÅlandIslands = {
  alpha2code: "AX",
  alpha3code: "ALA",
  alpha4code: "",
  calling_code: "",
  independent: false,
  name: "Åland Islands",

  numeric_code: "248",
  period_of_validity: "",
  short_name: "Åland Islands",

  name_in_native: "",
  name_in_chinese: "奥兰",
} as IIsoRegion;



export {
  Afghanistan,
  Albania,
  Algeria,
  AmericanSamoa,
  Andorra,
  Angola,
  Anguilla,
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
  Belarus,
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
  BritishAntarcticTerritory,
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
  Czechia,
  Czechoslovakia,
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
  Georgia,
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
  Pitcairn,
  Poland,
  Portugal,
  PuertoRico,
  Qatar,
  Romania,
  Russia,
  Rwanda,
  Réunion,
  SaintBarthélemy,
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
  Slovakia,
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
  TanzaniaUnitedRepublicOf,
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
  Zimbabwe,
  ÅlandIslands
};

const Regions = [
  Afghanistan,
  Albania,
  Algeria,
  AmericanSamoa,
  Andorra,
  Angola,
  Anguilla,
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
  Belarus,
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
  BritishAntarcticTerritory,
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
  Czechia,
  Czechoslovakia,
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
  Georgia,
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
  Pitcairn,
  Poland,
  Portugal,
  PuertoRico,
  Qatar,
  Romania,
  Russia,
  Rwanda,
  Réunion,
  SaintBarthélemy,
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
  Slovakia,
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
  TanzaniaUnitedRepublicOf,
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
  Zimbabwe,
  ÅlandIslands
] as IIsoRegion[];

export { Regions };

const RegionsByCode = {
		"AF": Afghanistan,
		"AL": Albania,
		"DZ": Algeria,
		"AS": AmericanSamoa,
		"AD": Andorra,
		"AO": Angola,
		"AI": Anguilla,
		"AQ": Antarctica,
		"AG": AntiguaAndBarbuda,
		"AR": Argentina,
		"AM": Armenia,
		"AW": Aruba,
		"AU": Australia,
		"AT": Austria,
		"AZ": Azerbaijan,
		"BS": Bahamas,
		"BH": Bahrain,
		"BD": Bangladesh,
		"BB": Barbados,
		"BY": Belarus,
		"BE": Belgium,
		"BZ": Belize,
		"BJ": Benin,
		"BM": Bermuda,
		"BT": Bhutan,
		"BO": BoliviaPlurinationalStateOf,
		"BA": Bosnia,
		"BW": Botswana,
		"BV": BouvetIsland,
		"BR": Brazil,
		"BQ": BritishAntarcticTerritory,
		"BQAQ": BritishAntarcticTerritory,
		"IO": BritishIndianOceanTerritory,
		"BN": Brunei,
		"BG": Bulgaria,
		"BF": BurkinaFaso,
		"BU": Burma,
		"BUMM": Burma,
		"BI": Burundi,
		"BYAA": ByelorussianSSR,
		"CV": CaboVerde,
		"KH": Cambodia,
		"CM": Cameroon,
		"CA": Canada,
		"CT": CantonAndEnderburyIslands,
		"CTKI": CantonAndEnderburyIslands,
		"KY": CaymanIslands,
		"CF": CentralAfricanRepublic,
		"TD": Chad,
		"CL": Chile,
		"CN": China,
		"CX": ChristmasIsland,
		"CC": CocosKeelingIslands,
		"CO": Colombia,
		"KM": Comoros,
		"CG": Congo,
		"CD": CongoKinshasa,
		"CK": CookIslands,
		"CR": CostaRica,
		"HR": Croatia,
		"CU": Cuba,
		"CW": Curacao,
		"CY": Cyprus,
		"CZ": Czechia,
		"CS": Czechoslovakia,
		"CSHH": Czechoslovakia,
		"DY": Dahomey,
		"DYBJ": Dahomey,
		"DK": Denmark,
		"DJ": Djibouti,
		"DM": Dominica,
		"DO": DominicanRepublic,
		"NQ": DronningMaudLand,
		"NQAQ": DronningMaudLand,
		"DD": EastGermany,
		"DDDE": EastGermany,
		"TP": EastTimor,
		"TPTL": EastTimor,
		"EC": Ecuador,
		"EG": Egypt,
		"SV": ElSalvador,
		"GQ": EquatorialGuinea,
		"ER": Eritrea,
		"EE": Estonia,
		"SZ": Eswatini,
		"ET": Ethiopia,
		"FK": FalklandIslandsMalvinas,
		"FO": FaroeIslands,
		"FJ": Fiji,
		"FI": Finland,
		"FR": France,
		"FX": FranceMetropolitan,
		"FXFR": FranceMetropolitan,
		"AIDJ": FrenchAfarAndIssas,
		"GF": FrenchGuiana,
		"PF": FrenchPolynesia,
		"FQ": FrenchSouthernAndAntarcticTerritories,
		"FQHH": FrenchSouthernAndAntarcticTerritories,
		"TF": FrenchSouthernTerritories,
		"GA": Gabon,
		"GM": Gambia,
		"GE": Georgia,
		"DE": Germany,
		"GH": Ghana,
		"GI": Gibraltar,
		"GEHH": GilbertAndElliceIslands,
		"GR": Greece,
		"GL": Greenland,
		"GD": Grenada,
		"GP": Guadeloupe,
		"GU": Guam,
		"GT": Guatemala,
		"GG": Guernsey,
		"GN": Guinea,
		"GW": Guinea_Bissau,
		"GY": Guyana,
		"HT": Haiti,
		"HM": HeardIslandAndMcDonaldIslands,
		"VA": HolySee,
		"HN": Honduras,
		"HK": HongKong,
		"HU": Hungary,
		"IS": Iceland,
		"IN": India,
		"ID": Indonesia,
		"IR": Iran,
		"IQ": Iraq,
		"IE": Ireland,
		"IM": IsleOfMan,
		"IL": Israel,
		"IT": Italy,
		"CI": IvoryCoast,
		"JM": Jamaica,
		"JP": Japan,
		"JE": Jersey,
		"JT": JohnstonIsland,
		"JTUM": JohnstonIsland,
		"JO": Jordan,
		"KZ": Kazakhstan,
		"KE": Kenya,
		"KI": Kiribati,
		"XKO": Korea,
		"XK": Kosovo,
		"KW": Kuwait,
		"KG": Kyrgyzstan,
		"LA": Laos,
		"LV": Latvia,
		"LB": Lebanon,
		"LS": Lesotho,
		"LR": Liberia,
		"LY": Libya,
		"LI": Liechtenstein,
		"LT": Lithuania,
		"LU": Luxembourg,
		"MO": Macao,
		"MG": Madagascar,
		"MW": Malawi,
		"MY": Malaysia,
		"MV": Maldives,
		"ML": Mali,
		"MT": Malta,
		"MH": MarshallIslands,
		"MQ": Martinique,
		"MR": Mauritania,
		"MU": Mauritius,
		"YT": Mayotte,
		"MX": Mexico,
		"FM": MicronesiaFederatedStatesOf,
		"MI": MidwayIslands,
		"MIUM": MidwayIslands,
		"MD": MoldovaRepublicOf,
		"MC": Monaco,
		"MN": Mongolia,
		"ME": Montenegro,
		"MS": Montserrat,
		"MA": Morocco,
		"MZ": Mozambique,
		"MM": Myanmar,
		"NA": Namibia,
		"NR": Nauru,
		"NP": Nepal,
		"NL": Netherlands,
		"AN": NetherlandsAntilles,
		"ANHH": NetherlandsAntilles,
		"NT": NeutralZone,
		"NTHH": NeutralZone,
		"NC": NewCaledonia,
		"NH": NewHebrides,
		"NHVU": NewHebrides,
		"NZ": NewZealand,
		"NI": Nicaragua,
		"NE": Niger,
		"NG": Nigeria,
		"NU": Niue,
		"NF": NorfolkIsland,
		"KP": NorthKorea,
		"MK": NorthMacedonia,
		"MP": NorthernMarianaIslands,
		"NO": Norway,
		"OM": Oman,
		"PC": PacificIslandsTrustTerritoryOfthe,
		"PCHH": PacificIslandsTrustTerritoryOfthe,
		"PK": Pakistan,
		"PW": Palau,
		"PS": PalestineStateOf,
		"PA": Panama,
		"PZ": PanamaCanalZone,
		"PZPA": PanamaCanalZone,
		"PG": PapuaNewGuinea,
		"PY": Paraguay,
		"PE": Peru,
		"PH": Philippines,
		"PN": Pitcairn,
		"PL": Poland,
		"PT": Portugal,
		"PR": PuertoRico,
		"QA": Qatar,
		"RO": Romania,
		"RU": Russia,
		"RW": Rwanda,
		"RE": Réunion,
		"BL": SaintBarthélemy,
		"SH": SaintHelenaAscensionAndTristandaCunha,
		"KN": SaintKittsAndNevis,
		"LC": SaintLucia,
		"MF": SaintMartinFrenchpart,
		"PM": SaintPierreAndMiquelon,
		"VC": SaintVincentAndTheGrenadines,
		"WS": Samoa,
		"SM": SanMarino,
		"ST": SaoTomeAndPrincipe,
		"SA": SaudiArabia,
		"SN": Senegal,
		"RS": Serbia,
		"CSXX": SerbiaAndMontenegro,
		"SC": Seychelles,
		"SL": SierraLeone,
		"SK": Sikkim,
		"SKIN": Sikkim,
		"SG": Singapore,
		"SX": SintMaartenDutchpart,
		"SI": Slovenia,
		"SB": SolomonIslands,
		"SO": Somalia,
		"ZA": SouthAfrica,
		"GS": SouthGeorgiaAndTheSouthSandwichIslands,
		"KR": SouthKorea,
		"SS": SouthSudan,
		"RH": SouthernRhodesia,
		"RHZW": SouthernRhodesia,
		"SU": SovietUnion,
		"SUHH": SovietUnion,
		"ES": Spain,
		"LK": SriLanka,
		"SD": Sudan,
		"SR": Suriname,
		"SJ": SvalbardAndJanMayen,
		"SE": Sweden,
		"CH": Switzerland,
		"SY": SyrianArabRepublic,
		"TW": Taiwan,
		"TJ": Tajikistan,
		"TZ": TanzaniaUnitedRepublicOf,
		"TH": Thailand,
		"TL": Timor_Leste,
		"TG": Togo,
		"TK": Tokelau,
		"TO": Tonga,
		"TT": TrinidadAndTobago,
		"TN": Tunisia,
		"TR": Turkey,
		"TM": Turkmenistan,
		"TC": TurksAndCaicosIslands,
		"TV": Tuvalu,
		"PU": USMiscellaneousPacificIslands,
		"PUUM": USMiscellaneousPacificIslands,
		"UG": Uganda,
		"UA": Ukraine,
		"AE": UnitedArabEmirates,
		"GB": UnitedKingdom,
		"US": UnitedStates,
		"UM": UnitedStatesMinorOutlyingIslands,
		"VG": UnitedStatesVirginIslands,
		"HV": UpperVolta,
		"HVBF": UpperVolta,
		"UY": Uruguay,
		"UZ": Uzbekistan,
		"VU": Vanuatu,
		"VE": VenezuelaBolivarianRepublicOf,
		"VN": VietNam,
		"VD": Viet_NamDemocraticRepublicOf,
		"VDVN": Viet_NamDemocraticRepublicOf,
		"VI": VirginIslands,
		"WK": WakeIsland,
		"WKUM": WakeIsland,
		"WF": WallisAndFutuna,
		"XWG": WestGermany,
		"EH": WesternSahara,
		"YE": Yemen,
		"YD": YemenDemocratic,
		"YDYE": YemenDemocratic,
		"YU": Yugoslavia,
		"YUCS": Yugoslavia,
		"ZR": Zaire,
		"ZRCD": Zaire,
		"ZM": Zambia,
		"ZW": Zimbabwe,
		"AX": ÅlandIslands,
} as {
  [key: string]: IIsoRegion;
};

export { RegionsByCode };

const RegionsByName = {
		"afghanistan": Afghanistan,
		"albania": Albania,
		"algeria": Algeria,
		"americansamoa": AmericanSamoa,
		"andorra": Andorra,
		"angola": Angola,
		"anguilla": Anguilla,
		"antarctica": Antarctica,
		"antiguaandbarbuda": AntiguaAndBarbuda,
		"argentina": Argentina,
		"armenia": Armenia,
		"aruba": Aruba,
		"australia": Australia,
		"austria": Austria,
		"azerbaijan": Azerbaijan,
		"bahamas": Bahamas,
		"bahrain": Bahrain,
		"bangladesh": Bangladesh,
		"barbados": Barbados,
		"belarus": Belarus,
		"belgium": Belgium,
		"belize": Belize,
		"benin": Benin,
		"bermuda": Bermuda,
		"bhutan": Bhutan,
		"boliviaplurinationalstateof": BoliviaPlurinationalStateOf,
		"bosnia": Bosnia,
		"botswana": Botswana,
		"bouvetisland": BouvetIsland,
		"brazil": Brazil,
		"britishantarcticterritory": BritishAntarcticTerritory,
		"britishindianoceanterritory": BritishIndianOceanTerritory,
		"brunei": Brunei,
		"bulgaria": Bulgaria,
		"burkinafaso": BurkinaFaso,
		"burma": Burma,
		"burundi": Burundi,
		"byelorussianssr": ByelorussianSSR,
		"caboverde": CaboVerde,
		"cambodia": Cambodia,
		"cameroon": Cameroon,
		"canada": Canada,
		"cantonandenderburyislands": CantonAndEnderburyIslands,
		"caribbeannetherlands": CaribbeanNetherlands,
		"caymanislands": CaymanIslands,
		"centralafricanrepublic": CentralAfricanRepublic,
		"chad": Chad,
		"chile": Chile,
		"china": China,
		"christmasisland": ChristmasIsland,
		"cocoskeelingislands": CocosKeelingIslands,
		"colombia": Colombia,
		"comoros": Comoros,
		"congo": Congo,
		"congokinshasa": CongoKinshasa,
		"cookislands": CookIslands,
		"costarica": CostaRica,
		"croatia": Croatia,
		"cuba": Cuba,
		"curacao": Curacao,
		"cyprus": Cyprus,
		"czechia": Czechia,
		"czechoslovakia": Czechoslovakia,
		"dahomey": Dahomey,
		"denmark": Denmark,
		"djibouti": Djibouti,
		"dominica": Dominica,
		"dominicanrepublic": DominicanRepublic,
		"dronningmaudland": DronningMaudLand,
		"eastgermany": EastGermany,
		"easttimor": EastTimor,
		"ecuador": Ecuador,
		"egypt": Egypt,
		"elsalvador": ElSalvador,
		"equatorialguinea": EquatorialGuinea,
		"eritrea": Eritrea,
		"estonia": Estonia,
		"eswatini": Eswatini,
		"ethiopia": Ethiopia,
		"falklandislandsmalvinas": FalklandIslandsMalvinas,
		"faroeislands": FaroeIslands,
		"fiji": Fiji,
		"finland": Finland,
		"france": France,
		"francemetropolitan": FranceMetropolitan,
		"frenchafarandissas": FrenchAfarAndIssas,
		"frenchguiana": FrenchGuiana,
		"frenchpolynesia": FrenchPolynesia,
		"frenchsouthernandantarcticterritories": FrenchSouthernAndAntarcticTerritories,
		"frenchsouthernterritories": FrenchSouthernTerritories,
		"gabon": Gabon,
		"gambia": Gambia,
		"georgia": Georgia,
		"germany": Germany,
		"ghana": Ghana,
		"gibraltar": Gibraltar,
		"gilbertandelliceislands": GilbertAndElliceIslands,
		"greece": Greece,
		"greenland": Greenland,
		"grenada": Grenada,
		"guadeloupe": Guadeloupe,
		"guam": Guam,
		"guatemala": Guatemala,
		"guernsey": Guernsey,
		"guinea": Guinea,
		"guinea_bissau": Guinea_Bissau,
		"guyana": Guyana,
		"haiti": Haiti,
		"heardislandandmcdonaldislands": HeardIslandAndMcDonaldIslands,
		"holysee": HolySee,
		"honduras": Honduras,
		"hongkong": HongKong,
		"hungary": Hungary,
		"iceland": Iceland,
		"india": India,
		"indonesia": Indonesia,
		"iran": Iran,
		"iraq": Iraq,
		"ireland": Ireland,
		"isleofman": IsleOfMan,
		"israel": Israel,
		"italy": Italy,
		"ivorycoast": IvoryCoast,
		"jamaica": Jamaica,
		"japan": Japan,
		"jersey": Jersey,
		"johnstonisland": JohnstonIsland,
		"jordan": Jordan,
		"kazakhstan": Kazakhstan,
		"kenya": Kenya,
		"kiribati": Kiribati,
		"korea": Korea,
		"kosovo": Kosovo,
		"kuwait": Kuwait,
		"kyrgyzstan": Kyrgyzstan,
		"laos": Laos,
		"latvia": Latvia,
		"lebanon": Lebanon,
		"lesotho": Lesotho,
		"liberia": Liberia,
		"libya": Libya,
		"liechtenstein": Liechtenstein,
		"lithuania": Lithuania,
		"luxembourg": Luxembourg,
		"macao": Macao,
		"madagascar": Madagascar,
		"malawi": Malawi,
		"malaysia": Malaysia,
		"maldives": Maldives,
		"mali": Mali,
		"malta": Malta,
		"marshallislands": MarshallIslands,
		"martinique": Martinique,
		"mauritania": Mauritania,
		"mauritius": Mauritius,
		"mayotte": Mayotte,
		"mexico": Mexico,
		"micronesiafederatedstatesof": MicronesiaFederatedStatesOf,
		"midwayislands": MidwayIslands,
		"moldovarepublicof": MoldovaRepublicOf,
		"monaco": Monaco,
		"mongolia": Mongolia,
		"montenegro": Montenegro,
		"montserrat": Montserrat,
		"morocco": Morocco,
		"mozambique": Mozambique,
		"myanmar": Myanmar,
		"namibia": Namibia,
		"nauru": Nauru,
		"nepal": Nepal,
		"netherlands": Netherlands,
		"netherlandsantilles": NetherlandsAntilles,
		"neutralzone": NeutralZone,
		"newcaledonia": NewCaledonia,
		"newhebrides": NewHebrides,
		"newzealand": NewZealand,
		"nicaragua": Nicaragua,
		"niger": Niger,
		"nigeria": Nigeria,
		"niue": Niue,
		"norfolkisland": NorfolkIsland,
		"northkorea": NorthKorea,
		"northmacedonia": NorthMacedonia,
		"northernmarianaislands": NorthernMarianaIslands,
		"norway": Norway,
		"oman": Oman,
		"pacificislandstrustterritoryofthe": PacificIslandsTrustTerritoryOfthe,
		"pakistan": Pakistan,
		"palau": Palau,
		"palestinestateof": PalestineStateOf,
		"panama": Panama,
		"panamacanalzone": PanamaCanalZone,
		"papuanewguinea": PapuaNewGuinea,
		"paraguay": Paraguay,
		"peru": Peru,
		"philippines": Philippines,
		"pitcairn": Pitcairn,
		"poland": Poland,
		"portugal": Portugal,
		"puertorico": PuertoRico,
		"qatar": Qatar,
		"romania": Romania,
		"russia": Russia,
		"rwanda": Rwanda,
		"réunion": Réunion,
		"saintbarthélemy": SaintBarthélemy,
		"sainthelenaascensionandtristandacunha": SaintHelenaAscensionAndTristandaCunha,
		"saintkittsandnevis": SaintKittsAndNevis,
		"saintlucia": SaintLucia,
		"saintmartinfrenchpart": SaintMartinFrenchpart,
		"saintpierreandmiquelon": SaintPierreAndMiquelon,
		"saintvincentandthegrenadines": SaintVincentAndTheGrenadines,
		"samoa": Samoa,
		"sanmarino": SanMarino,
		"saotomeandprincipe": SaoTomeAndPrincipe,
		"saudiarabia": SaudiArabia,
		"senegal": Senegal,
		"serbia": Serbia,
		"serbiaandmontenegro": SerbiaAndMontenegro,
		"seychelles": Seychelles,
		"sierraleone": SierraLeone,
		"sikkim": Sikkim,
		"singapore": Singapore,
		"sintmaartendutchpart": SintMaartenDutchpart,
		"slovakia": Slovakia,
		"slovenia": Slovenia,
		"solomonislands": SolomonIslands,
		"somalia": Somalia,
		"southafrica": SouthAfrica,
		"southgeorgiaandthesouthsandwichislands": SouthGeorgiaAndTheSouthSandwichIslands,
		"southkorea": SouthKorea,
		"southsudan": SouthSudan,
		"southernrhodesia": SouthernRhodesia,
		"sovietunion": SovietUnion,
		"spain": Spain,
		"srilanka": SriLanka,
		"sudan": Sudan,
		"suriname": Suriname,
		"svalbardandjanmayen": SvalbardAndJanMayen,
		"sweden": Sweden,
		"switzerland": Switzerland,
		"syrianarabrepublic": SyrianArabRepublic,
		"taiwan": Taiwan,
		"tajikistan": Tajikistan,
		"tanzaniaunitedrepublicof": TanzaniaUnitedRepublicOf,
		"thailand": Thailand,
		"timor_leste": Timor_Leste,
		"togo": Togo,
		"tokelau": Tokelau,
		"tonga": Tonga,
		"trinidadandtobago": TrinidadAndTobago,
		"tunisia": Tunisia,
		"turkey": Turkey,
		"turkmenistan": Turkmenistan,
		"turksandcaicosislands": TurksAndCaicosIslands,
		"tuvalu": Tuvalu,
		"usmiscellaneouspacificislands": USMiscellaneousPacificIslands,
		"uganda": Uganda,
		"ukraine": Ukraine,
		"unitedarabemirates": UnitedArabEmirates,
		"unitedkingdom": UnitedKingdom,
		"unitedstates": UnitedStates,
		"unitedstatesminoroutlyingislands": UnitedStatesMinorOutlyingIslands,
		"unitedstatesvirginislands": UnitedStatesVirginIslands,
		"uppervolta": UpperVolta,
		"uruguay": Uruguay,
		"uzbekistan": Uzbekistan,
		"vanuatu": Vanuatu,
		"venezuelabolivarianrepublicof": VenezuelaBolivarianRepublicOf,
		"vietnam": VietNam,
		"viet_namdemocraticrepublicof": Viet_NamDemocraticRepublicOf,
		"virginislands": VirginIslands,
		"wakeisland": WakeIsland,
		"wallisandfutuna": WallisAndFutuna,
		"westgermany": WestGermany,
		"westernsahara": WesternSahara,
		"yemen": Yemen,
		"yemendemocratic": YemenDemocratic,
		"yugoslavia": Yugoslavia,
		"zaire": Zaire,
		"zambia": Zambia,
		"zimbabwe": Zimbabwe,
		"ålandislands": ÅlandIslands,
} as {
  [key: string]: IIsoRegion;
};

export { RegionsByName };

const ReservedRegionCodeUnderline = "_";

export { ReservedRegionCodeUnderline };

// return alpha code by priority,
// user assigned one is the high priority, then 4 > 3 > 2.
function GetAlphaCode(region: IIsoRegion): string {
  let code = "";
  if (region.alpha4code !== "") {
    code = region.alpha4code!;
  } else if (region.alpha2code !== "" && (region.alpha3code === "" || region.alpha3code![0] != "X")) {
    code = region.alpha2code!;
  } else if (region.alpha3code !== "") {
    code = region.alpha3code!;
  }
  return code;
}

export { GetAlphaCode };

function stripAlphaCode(s:string) :string {
  const splits = s.split("+")
  // splits[0] is alphaCode, we have to strip it from callingCode
  // "CA+1-xxx..." => "1-xxx..."
  // "CN+86-13800138000" => "86-13800138000"    
  return splits[splits.length-1];
}
  
export { stripAlphaCode };
