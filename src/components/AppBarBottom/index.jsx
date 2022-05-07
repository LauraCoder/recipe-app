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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 10,
  },
})

const AppBarBottom = () => {
  let location = useLocation()
  const [currentLocation, setCurrentLocation] = useState()
  const [visible, setVisible] = useState(false)
  const activeColor = theme.colors.primary
  const inactiveColor = theme.colors.secondary

  useEffect(() => {
    setCurrentLocation(location.pathname)
    setVisible(true)
    return currentLocation
  }, [location])

  const isSnacksStarters = currentLocation === '/categories/Snacks & Starters'
  const isSalads = currentLocation === '/categories/Salads'
  const isMainCourses = currentLocation === '/categories/Main Courses'
  const isDesserts = currentLocation === '/categories/Desserts'
  const isDrinks = currentLocation === '/categories/Drinks'

  const changeIconColor = (value) => {
    if (value) return activeColor
    return inactiveColor
  }

  return (
    <View style={styles.container}>
      <AppBarTab link={visible && !isSnacksStarters ? '/categories/Snacks & Starters' : '/'}>
        <MaterialIcon
          name='food-croissant'
          color={changeIconColor(isSnacksStarters)}
          size={31}
        />
      </AppBarTab>
      <AppBarTab link={visible && !isSalads ? '/categories/Salads' : '/'}>
        <MaterialIcon
          name='leaf'
          color={changeIconColor(isSalads)}
          style={styles.navIcon}
          size={31}
        />
      </AppBarTab>
      <AppBarTab link={visible && !isMainCourses ? '/categories/Main Courses' : '/'}>
        <MaterialIcon
          name='food'
          color={changeIconColor(isMainCourses)}
          style={styles.navIcon} size={31}
        />
      </AppBarTab>
      <AppBarTab link={visible && !isDesserts ? '/categories/Desserts' : '/'}>
        <MaterialIcon
          name='muffin'
          color={changeIconColor(isDesserts)}
          style={styles.navIcon}
          size={31}
        />
      </AppBarTab>
      <AppBarTab link={visible && !isDrinks ? '/categories/Drinks' : '/'}>
        <MaterialIcon
          name='glass-cocktail'
          color={changeIconColor(isDrinks)}
          style={styles.navIcon}
          size={31}
        />
      </AppBarTab>
    </View>
  )
}

export default AppBarBottom