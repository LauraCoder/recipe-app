import { NativeRouter } from 'react-router-native'
import { ApolloProvider, } from '@apollo/client'
import {
  useFonts,
  Caveat_500Medium,
} from '@expo-google-fonts/caveat'

import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'

const apolloClient = createApolloClient()

const App = () => {
  let [fontsLoaded] = useFonts({
    Caveat_500Medium,
  })

  if (!fontsLoaded) {
    return null
  } else {
    return (
      <>
        <NativeRouter>
          <ApolloProvider client={apolloClient}>
            <Main />
          </ApolloProvider>
        </NativeRouter>
      </>
    )
  }
}

export default App