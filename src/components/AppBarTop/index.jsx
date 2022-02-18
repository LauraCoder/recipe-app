import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../../theme'
import AppBarTab from './AppBarTab'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.backgroundSecondary,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.6
  },
  navIcons: {
    fontSize: 24,
    color: theme.colors.white,
    marginHorizontal: 10,
  },
})

const AppBarTop = ({ drawer }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
        <Ionicons name='menu-sharp' style={styles.navIcons} />
      </TouchableOpacity>
      <View style={styles.rightCol}>
        <AppBarTab link='/add-new'><Icon name='plus' style={styles.navIcons} /></AppBarTab>
        <Icon name='search1' style={styles.navIcons} />
        <Ionicons name='basket-outline' style={styles.navIcons} />
      </View>
    </View>
  )
}

export default AppBarTop