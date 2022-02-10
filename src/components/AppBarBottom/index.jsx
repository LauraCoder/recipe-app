import { View, StyleSheet, } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
  navIcon: {
    fontSize: 32,
    color: theme.colors.primary,
  }
});

const AppBarBottom = () => {
  return (
    <View style={styles.container}>
      <AppBarTab link='/categories/Snacks & Starters'><MaterialIcon name='food-croissant' style={styles.navIcon} /></AppBarTab>
      <AppBarTab link='/categories/Salads'><MaterialIcon name='leaf' style={styles.navIcon} /></AppBarTab>
      <AppBarTab link='/categories/Main Courses'><MaterialIcon name='food' style={styles.navIcon} /></AppBarTab>
      <AppBarTab link='/categories/Desserts'><MaterialIcon name='muffin' style={styles.navIcon} /></AppBarTab>
      <AppBarTab link='/categories/Drinks'><MaterialIcon name='glass-cocktail' style={styles.navIcon} /></AppBarTab>
    </View>
  )
}

export default AppBarBottom;