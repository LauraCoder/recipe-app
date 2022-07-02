import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { FIND_RECIPE } from '../../graphql/queries'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import SearchOverlay from './SearchOverlay'

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
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState(null)
  const result = useQuery(FIND_RECIPE, {
    variables: { title },
    skip: !title,
  })
  let navigate = useNavigate()

  const toggleOverlay = () => setVisible(!visible)
  const updateSearch = (title) => {
    setTitle(title)
  }
  const onSubmitSearch = () => {
    const foundRecipe = result?.data?.findRecipe
    setTitle(null)
    toggleOverlay()
    navigate(`/categories/${foundRecipe.category}/${foundRecipe.id}`)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
        <Ionicons name='menu-sharp' style={styles.navIcons} />
      </TouchableOpacity>
      <View style={styles.rightCol}>
        <AppBarTab link='/add-new'>
          <Icon name='plus' style={styles.navIcons} />
        </AppBarTab>
        <TouchableOpacity onPress={toggleOverlay}>
          <Icon name='search1' style={styles.navIcons} />
        </TouchableOpacity>
        <AppBarTab link='/shoppingbag'>
          <Ionicons name='basket-outline' style={styles.navIcons} />
        </AppBarTab>
      </View>
      <SearchOverlay
        toggleOverlay={toggleOverlay}
        visible={visible}
        setVisible={setVisible}
        title={title}
        updateSearch={updateSearch}
        onSubmitSearch={onSubmitSearch}
      />
    </View>
  )
}

export default AppBarTop