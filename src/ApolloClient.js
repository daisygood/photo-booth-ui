import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/nmPhotoBooth"
});

export default client;
