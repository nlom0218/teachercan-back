import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getTimetableData(day: Int, index: Int): [TimetableData]
  }
`;
