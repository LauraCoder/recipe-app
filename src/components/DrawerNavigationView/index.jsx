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
  subcontent: {
    paddingLeft: 25,
  }
})

const DrawerNavigationView = ({ drawer }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text heading style={{ padding: 16 }}>Recipe Book</Text>
      <AppBarTab link='/' onPress={() => drawer.current.closeDrawer()}>
        All categories
      </AppBarTab>
      <AppBarTab subtab link='/categories/Snacks & Starters' onPress={() => drawer.current.closeDrawer()}>
        - Snacks & Starters
      </AppBarTab>
      <AppBarTab subtab link='/categories/Salads' onPress={() => drawer.current.closeDrawer()}>
        - Salads
      </AppBarTab>
      <AppBarTab subtab link='/categories/Main Courses' onPress={() => drawer.current.closeDrawer()}>
        - Main Courses
      </AppBarTab>
      <AppBarTab subtab link='/categories/Desserts' onPress={() => drawer.current.closeDrawer()}>
        - Desserts
      </AppBarTab>
      <AppBarTab subtab link='/categories/Drinks' onPress={() => drawer.current.closeDrawer()}>
        - Drinks
      </AppBarTab>
      <AppBarTab link='/add-new' onPress={() => drawer.current.closeDrawer()}>
        Add Recipe
      </AppBarTab>
      <AppBarTab link='/shoppingbag' onPress={() => drawer.current.closeDrawer()}>
        Shopping Bag
      </AppBarTab>
      <AppBarTab link='/signup' onPress={() => drawer.current.closeDrawer()}>
        Sign Up
      </AppBarTab>
      <AppBarTab link='/signin' onPress={() => drawer.current.closeDrawer()}>
        Sign In
      </AppBarTab>
    </View>
  </View>
)

export default DrawerNavigationView