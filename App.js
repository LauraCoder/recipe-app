import { NativeRouter } from 'react-router-native'
import {
  useFonts,
  Caveat_500Medium,
} from '@expo-google-fonts/caveat'

import Main from './src/components/Main'
import Text from './src/components/Text'

const App = () => {
  let [fontsLoaded] = useFonts({
    Caveat_500Medium,
  })

  if (!fontsLoaded) {
    return <Text style={{ fontFamily: 'Caveat_500Medium' }}>Loading...</Text>
  } else {
    return (
      <>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </>
    )
  }
}

export default App