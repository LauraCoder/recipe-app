import { useLocation } from 'react-router-native'
import { useEffect, useState } from 'react'
import { View, StyleSheet, } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import theme from '../../theme'
import AppBarTab from './AppBarTab'

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
})

const AppBarBottom = () => {
  let location = useLocation()
  const [newLocation, setNewLocation] = useState()
  const activeColor = theme.colors.primary
  const inactiveColor = theme.colors.secondary

  useEffect(() => {
    setNewLocation(location.pathname)
  }, [location])

  const isSnacksStarters = newLocation === '/categories/Snacks & Starters'
  const isSalads = newLocation === '/categories/Salads'
  const isMainCourses = newLocation === '/categories/Main Courses'
  const isDesserts = newLocation === '/categories/Desserts'
  const isDrinks = newLocation === '/categories/Drinks'

  const changeIconColor = (value) => {
    if (value) return activeColor
    return inactiveColor
  }

  return (
    <View style={styles.container}>
      <AppBarTab link='/categories/Snacks & Starters'><MaterialIcon name='food-croissant' color={changeIconColor(isSnacksStarters)} size={32} /></AppBarTab>
      <AppBarTab link='/categories/Salads'><MaterialIcon name='leaf' color={changeIconColor(isSalads)} style={styles.navIcon} size={32} /></AppBarTab>
      <AppBarTab link='/categories/Main Courses'><MaterialIcon name='food' color={changeIconColor(isMainCourses)} style={styles.navIcon} size={32} /></AppBarTab>
      <AppBarTab link='/categories/Desserts'><MaterialIcon name='muffin' color={changeIconColor(isDesserts)} style={styles.navIcon} size={32} /></AppBarTab>
      <AppBarTab link='/categories/Drinks'><MaterialIcon name='glass-cocktail' color={changeIconColor(isDrinks)} style={styles.navIcon} size={32} /></AppBarTab>
    </View>
  )
}

export default AppBarBottom