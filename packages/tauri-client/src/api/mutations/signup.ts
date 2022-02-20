import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
mutation SignupMutation(
  $email: String!,
  $password: String!,
  $pseudo: String!,
  $datacenter: String!,
  $server: String!
) {
  signup(
    email: $email,
    password: $password,
    pseudo: $pseudo,
    datacenter: $datacenter,
    server: $server
  ) {
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
