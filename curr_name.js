
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};
//let options ={
//      method:'POST',
//      headers:{
//       'Content-type': 'application/json',
//    
//  },
//  body: JSON.stringify({
//        day: 'monday',
//        relation: 'barber',
//        userId: 1,
//    
//  }),
//}
//fetch('https://jsonplaceholder.typicode.com/posts',options)
// .then((response) => response.json())
//  .then((value) => console.log(value));

//console.log(document.cookie);
//document.cookie=" name=my name";
//document.cookie="waqt=chup";
//document.cookie="my=saale";
//document.cookie="my=work";
//document.cookie="mny=66";
//document.cookie="my=99";


//let key=prompt("what's your key");
//let value=prompt("what's your value");
//document.cookie=`${key}=${value}`;
//
//console.log(document.cookie);

//const url="https://api.artic.edu/api/v1/artworks/search?q=cats";
//const a= fetch(url)
//a.then((value)=>{
//  console.log(value.status);
// console.log(value.ok);
//    return value.json();
//}).then((data)=>{
//  console.log(data)
//})
//console.log(a);


//async function find(value) {
//      let a=  await fetch(url);
//      let b= await a.json();
//     console.log(b);
//     console.log(value);
//}; 
//find(100);
//let url='https://placebear.com/200/300';
//let a=fetch(url);
//
//a.then((value)=>{
//   console.log(value);
//     return value.json();
// }).then((data)=>{
//   console.log(data);
// })
//
//let options={
//   method:"POST",
//   headers:{
//      'Content-Type':'appliaction/json',
//   },
//   body:JSON.stringify({
//    name:'arusji',
//    work:'whole saler',
//    id:'teri ma ki'
//   })
//}

//let k=async()=>{
//let a=await fetch(url,options);
//let b=await a.json();
//
//console.log(a);
//}
//let k=async()=>{
//    let a=await fetch(url);
//    let b=await a.json();
//    console.log(a);
//    console.log(b);
//    }

