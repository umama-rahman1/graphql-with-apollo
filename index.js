import { ApolloServer } from "@apollo/server";
import { startStandAloneApolloServer } from "@graphback/runtime";

// types
import { typeDefs } from "./schema.js";

// server setup
const server = new ApolloServer({
    typeDefs,
    // resolvers
});

const { url } = await startStandAloneApolloServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at port`, port);
