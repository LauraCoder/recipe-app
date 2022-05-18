import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'
import { relayStylePagination } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.env,
})

const cache = new InMemoryCache({
  typePolicies: {
    Recipe: {
      fields: {
        recipes: relayStylePagination(),
      },
      merge: true,
    },
    Shoppingbag: {
      merge: true,
      fields: {
        ingredient: {
          merge(existing, incoming, { mergeObjects }) {
            return mergeObjects(existing, incoming)
          },
        },
      },
    },
  },
})
/*
Author: {

  merge: true,

},*/

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken()
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      }
    } catch (e) {
      console.log(e)
      return {
        headers,
      }
    }
  })
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  })
}

export default createApolloClient