/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_alerts {
  __typename: "IAlert";
  id: string;
  item_id: string;
  market_helper_activated: boolean;
  minimum_margin: number | null;
  minimum_price: number | null;
  hqOnly: boolean;
  userId: string;
}

export interface LoginMutation_login {
  __typename: "IUser";
  id: string;
  email: string;
  pseudo: string;
  avatar: string | null;
  datacenter: string;
  server: string;
  alerts: LoginMutation_login_alerts[];
  retainers: string[];
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}
