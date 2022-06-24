import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4s662so1tna01yyfd2l49cp/master',
  cache: new InMemoryCache(),
});
