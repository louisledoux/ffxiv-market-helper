import { gql } from '@apollo/client';

export const GET_XIVAPI_SEARCH_RESULTS_QUERY = gql`
  query getXivApiSearchResults($query: String!) {
    getXivApiSearchResults(query: $query) {
      Results {
        ID
        IconHD
        LevelItem
        Name_fr
        Name_en
      }
    }
  }
`;
