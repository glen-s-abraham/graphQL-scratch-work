import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 6969 }).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
