import { NativeRouter } from 'react-router-native'
import {
  useFonts,
  Caveat_500Medium,
} from '@expo-google-fonts/caveat'

import Main from './src/components/Main'

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
          <Main />
        </NativeRouter>
      </>
    )
  }
}

export default App