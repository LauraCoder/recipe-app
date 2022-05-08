import { NativeRouter } from 'react-router-native'
import { ApolloProvider, } from '@apollo/client'
import {
  useFonts,
  Caveat_500Medium,
} from '@expo-google-fonts/caveat'

import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import SignIn from './src/components/SignIn/Index'

const apolloClient = createApolloClient()

//<Main />

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
            <SignIn />
          </ApolloProvider>
        </NativeRouter>
      </>
    )
  }
}

export default App