/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserData
// ====================================================

export interface getUserData_getUserData_alerts {
  __typename: "IAlert";
  id: string;
  item_id: string;
  market_helper_activated: boolean;
  minimum_margin: number | null;
  minimum_price: number | null;
  hqOnly: boolean;
}

export interface getUserData_getUserData {
  __typename: "IUser";
  id: string;
  email: string;
  datacenter: string;
  server: string;
  alerts: getUserData_getUserData_alerts[];
  retainers: string[];
}

export interface getUserData {
  getUserData: getUserData_getUserData;
}
