import { gql } from "apollo-boost";

export const SERVICE_DETAILS = gql`
  fragment ServiceDetails on Service {
    id
    to
    from
    price
    pickUpAddress
    dropOffAddress
  }
`;

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    name
    phone
    email
    address
  }
`;