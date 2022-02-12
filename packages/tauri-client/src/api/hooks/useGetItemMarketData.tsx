import { QueryHookOptions, useQuery } from '@apollo/client';
import { GET_ITEM_MARKET_DATA_QUERY } from '../queries/market-item';
import { getItemMarketData, getItemMarketDataVariables } from '../types/getItemMarketData';

export type UseGetItemMarketDataOptions = QueryHookOptions<
  getItemMarketData,
  getItemMarketDataVariables
>;

export function useGetItemMarketData(itemMarketDataOptions: UseGetItemMarketDataOptions = {}) {
  return useQuery<getItemMarketData, getItemMarketDataVariables>(GET_ITEM_MARKET_DATA_QUERY, {
    fetchPolicy: 'cache-and-network',
    ...itemMarketDataOptions,
  });
}
