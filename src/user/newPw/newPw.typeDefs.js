import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    newPw(userEmail: String!, certificate: String, password: String): mutationResult
  }
`;
