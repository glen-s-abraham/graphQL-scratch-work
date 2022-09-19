import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greeting: String
  }

  type Mutation {
    signUpUser(input: UserInput!): User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

export default typeDefs;
