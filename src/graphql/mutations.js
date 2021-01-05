import {gql} from "apollo-boost";
import {SERVICE_DETAILS} from "./fragments";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!){
    login(
      email: $email
      password: $password
    ) {
      token
    }
  }
  `

export const CREATE_SERVICE = gql`
  mutation createService($to: String!, $from: String!, $dropOffAddress: String!, $pickUpAddress: String!, $information: String!, $price: Int!) { 
    createService(
      to: $to
      from: $author
      dropOffAddress: $dropOffAddress
      pickUpAddress: $pickUpAddress
      price: $price
      information: $information
    ) {
      ...ServiceDetails
    }
  }
  ${SERVICE_DETAILS}  
`