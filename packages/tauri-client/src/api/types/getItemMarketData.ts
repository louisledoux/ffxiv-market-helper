/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getItemMarketData
// ====================================================

export interface getItemMarketData_getItemMarketData_serversData {
  __typename: "ServerData";
  serverName: string;
  currentPrice: number;
  isHq: boolean;
  quantity: number;
  timestamps: number;
  potentialProfit: number;
}

export interface getItemMarketData_getItemMarketData_userServer {
  __typename: "ServerData";
  serverName: string;
  currentPrice: number;
  isHq: boolean;
  quantity: number;
  timestamps: number;
  hqBoughtPercentage: number | null;
}

export interface getItemMarketData_getItemMarketData_userSellOrders {
  __typename: "SellOrder";
  pricePerUnit: number;
  quantity: number;
  total: number;
  position: number;
}

export interface getItemMarketData_getItemMarketData_marketHelper_sellsFrequency {
  __typename: "SellsFrequency";
  status: boolean;
  historyLength: number;
  salesVelocity: number | null;
}

export interface getItemMarketData_getItemMarketData_marketHelper_marketStability {
  __typename: "MarketStability";
  status: boolean;
  marketEvolution: number;
}

export interface getItemMarketData_getItemMarketData_marketHelper_marketSaturation {
  __typename: "MarketSaturation";
  status: boolean;
  sellOrdersLength: number;
  uniqueSellers: number;
}

export interface getItemMarketData_getItemMarketData_marketHelper {
  __typename: "MarketHelper";
  sellsFrequency: getItemMarketData_getItemMarketData_marketHelper_sellsFrequency;
  marketStability: getItemMarketData_getItemMarketData_marketHelper_marketStability;
  marketSaturation: getItemMarketData_getItemMarketData_marketHelper_marketSaturation;
}

export interface getItemMarketData_getItemMarketData {
  __typename: "MarketData";
  itemID: number;
  serversData: getItemMarketData_getItemMarketData_serversData[];
  userServer: getItemMarketData_getItemMarketData_userServer;
  userSellOrders: getItemMarketData_getItemMarketData_userSellOrders[] | null;
  marketHelper: getItemMarketData_getItemMarketData_marketHelper;
}

export interface getItemMarketData {
  getItemMarketData: getItemMarketData_getItemMarketData;
}

export interface getItemMarketDataVariables {
  itemId: number;
}
