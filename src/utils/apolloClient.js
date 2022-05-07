import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'
import { relayStylePagination } from '@apollo/client/utilities'

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.env,
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
  },
})

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache,
  })
}

export default createApolloClient