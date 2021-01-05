import {gql} from "apollo-boost";
import {SERVICE_DETAILS, USER_DETAILS} from "./fragments";

export const ME = gql`
    query {
      me {
        ..UserDetails
      }
    }
    ${USER_DETAILS}
  `

export const ALL_SERVICES = gql`
  query {
    allAuthors {
      ...ServiceDetails
    }
  }
  ${SERVICE_DETAILS}  
`