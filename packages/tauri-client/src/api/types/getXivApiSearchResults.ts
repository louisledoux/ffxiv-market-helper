/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getXivApiSearchResults
// ====================================================

export interface getXivApiSearchResults_getXivApiSearchResults_Results {
  __typename: "Result";
  ID: number;
  IconHD: string;
  LevelItem: number;
  Name_fr: string;
  Name_en: string;
}

export interface getXivApiSearchResults_getXivApiSearchResults {
  __typename: "XivApiSearchResults";
  Results: getXivApiSearchResults_getXivApiSearchResults_Results[];
}

export interface getXivApiSearchResults {
  getXivApiSearchResults: getXivApiSearchResults_getXivApiSearchResults;
}

export interface getXivApiSearchResultsVariables {
  query: string;
}
