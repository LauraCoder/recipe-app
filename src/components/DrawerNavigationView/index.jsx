import { StyleSheet, View, } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../theme'
import Text from '../Text'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    backgroundColor: theme.colors.white,
    marginTop: 20,
  },
})

const DrawerNavigationView = ({ drawer }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text heading style={{ padding: 16 }}>Recipe Book</Text>
      <AppBarTab link='/' onPress={() => drawer.current.closeDrawer()}>
        All categories
      </AppBarTab>
    </View>
  </View>
)

export default DrawerNavigationView