import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
};

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4s662so1tna01yyfd2l49cp/master',
  cache: new InMemoryCache({ resultCaching: false }),
  defaultOptions,
});
