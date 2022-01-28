import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
mutation LoginMutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
    pseudo
    avatar
    datacenter
    server
    alerts {
      id
      item_id
      market_helper_activated
      minimum_margin
      minimum_price
      hqOnly
      userId
    }
    retainers
  }
}
`;
