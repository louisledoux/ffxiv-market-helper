import { QueryHookOptions, useQuery } from '@apollo/client';
import { GET_XIVAPI_SEARCH_RESULTS_QUERY } from '../queries/xiv-api';
import { getXivApiSearchResults, getXivApiSearchResultsVariables } from '../types/getXivApiSearchResults';

export type UseGetXivApiSearchResultsOptions = QueryHookOptions<
  getXivApiSearchResults,
  getXivApiSearchResultsVariables
>;

export function useGetXivApiSearchResults(xivApiOptions: UseGetXivApiSearchResultsOptions = {}) {
  return useQuery<
    getXivApiSearchResults,
    getXivApiSearchResultsVariables
  >(GET_XIVAPI_SEARCH_RESULTS_QUERY, {
    ...xivApiOptions,
  });
}
