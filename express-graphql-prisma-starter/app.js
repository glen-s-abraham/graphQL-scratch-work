const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { createApplication, createModule, gql } = require("graphql-modules");

const mainModule = createModule({
  id: "main-module",
  dirname: __dirname,
  typeDefs: [
    gql`
      type Query {
        greeting: String!
      }
    `,
  ],
  resolvers: {
    Query: {
      greeting: () => "graphql app",
    },
  },
});

const api = createApplication({
  modules: [mainModule],
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: api.schema,
    customExecuteFn: api.createExecution(),
    graphiql: process.env.NODE_ENV === "development",
  })
);

module.exports = app;
