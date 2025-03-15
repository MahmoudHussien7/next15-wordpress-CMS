import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://hrawy.local/graphql",
  cache: new InMemoryCache(),
});

export default client;
