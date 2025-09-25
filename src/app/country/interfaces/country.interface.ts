export interface RESTCountry {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   { [key: string]: Currency };
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  cca3:         string;
  translations: { [key: string]: Translation };
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
  borders?:     string[];
  fifa?:        string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currency {
  symbol: string;
  name:   string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  eng?: string;
  nau?: string;
  sin?: string;
  tam?: string;
  lao?: string;
  dan?: string;
  nld?: string;
  pap?: string;
  ell?: string;
  ara?: string;
  fra?: string;
  rus?: string;
  uzb?: string;
  deu?: string;
  grn?: string;
  spa?: string;
  nor?: string;
  khm?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: null | string;
  regex:  null | string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
