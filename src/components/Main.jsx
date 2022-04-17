import { useRef } from 'react'
import { StyleSheet, View, ImageBackground, DrawerLayoutAndroid, } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import theme from '../theme'
import AppBarTop from './AppBarTop'
import AppBarBottom from './AppBarBottom'
import Categories from './Categories'
import RecipeList from './RecipeList'
import SingleRecipe from './SingleRecipe'
import Shoppingbag from './Shoppingbag/indes'
import images from '../../assets/images'
import AddNewRecipe from './AddNewRecipe'
import DrawerNavigationView from './DrawerNavigationView'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
})

const Main = () => {
  const drawer = useRef(null)

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={() => <DrawerNavigationView drawer={drawer} />}>
      <View style={styles.container}>
        <ImageBackground source={images.appBackground} imageStyle={{ opacity: .5 }} style={styles.image}>
          <AppBarTop drawer={drawer} />
          <View style={styles.content}>
            <Routes>
              <Route path="/" element={<Categories />} exact />
              <Route path="/add-new" element={<AddNewRecipe />} exact />
              <Route path="/shoppingbag" element={<Shoppingbag />} exact />
              <Route path="/categories/:title" element={<RecipeList />} exact />
              <Route path="/categories/:category/:id" element={<SingleRecipe />} exact />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </View>
          <AppBarBottom />
        </ImageBackground>
      </View>
    </DrawerLayoutAndroid>
  )
}

export default Main