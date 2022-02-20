/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignupMutation
// ====================================================

export interface SignupMutation_signup_alerts {
  __typename: "IAlert";
  id: string;
  item_id: string;
  market_helper_activated: boolean;
  minimum_margin: number | null;
  minimum_price: number | null;
  hqOnly: boolean;
  userId: string;
}

export interface SignupMutation_signup {
  __typename: "IUser";
  id: string;
  email: string;
  pseudo: string;
  avatar: string | null;
  datacenter: string;
  server: string;
  alerts: SignupMutation_signup_alerts[];
  retainers: string[];
}

export interface SignupMutation {
  signup: SignupMutation_signup;
}

export interface SignupMutationVariables {
  email: string;
  password: string;
  pseudo: string;
  datacenter: string;
  server: string;
}
