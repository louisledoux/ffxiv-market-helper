import { gql } from '@apollo/client';

export const GET_USER_DATA = gql`
query getUserData {
  getUserData {
    id
    email
    datacenter
    server
    alerts {
      id
      item_id
      market_helper_activated
      minimum_margin
      minimum_price
      hqOnly
    }
    retainers
  }
}
`;
