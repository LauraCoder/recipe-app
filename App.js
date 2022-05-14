import { NativeRouter } from 'react-router-native'
import { ApolloProvider, } from '@apollo/client'
import {
  useFonts,
  Caveat_500Medium,
} from '@expo-google-fonts/caveat'

import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/context/AuthStorageContext'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

//const apolloClient = createApolloClient()


import Main from './src/components/Main'
import SignIn from './src/components/SignIn/Index'
import useAuthStorage from './src/hooks/useAuthStorage'
import SignUp from './src/components/SignUp/Index'

const App = () => {
  const authStorage = useAuthStorage()
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
            <AuthStorageContext.Provider value={authStorage}>
              <Main />
            </AuthStorageContext.Provider>
          </ApolloProvider>
        </NativeRouter>
      </>
    )
  }
}

export default App