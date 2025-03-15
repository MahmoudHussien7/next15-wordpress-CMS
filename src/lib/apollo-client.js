import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "PLACE IT WITH YOUR REAL URL",
  cache: new InMemoryCache(),
});

export default client;
