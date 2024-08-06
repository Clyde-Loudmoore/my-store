import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

export default client;