import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import theme from '../theme'
import AppBarTop from './AppBarTop'
import AppBarBottom from './AppBarBottom'
import Categories from './Categories'
import RecipeList from './RecipeList'
import SingleRecipe from './SingleRecipe'
import images from '../../assets/images'
import AddNewRecipe from './AddNewRecipe'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  content: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.appBackground} imageStyle={{opacity: .8}} style={styles.image}>
        <AppBarTop />
        <ScrollView>
        <View style={styles.content} >
          <Routes>
            <Route path="/" element={<Categories />} exact />
            <Route path="/add-new" element={<AddNewRecipe />} exact />
            <Route path="/categories/:title" element={<RecipeList />} exact />
            <Route path="/categories/:category/:id" element={<SingleRecipe />} exact />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </View>
        </ScrollView>
        <AppBarBottom />
      </ImageBackground>
    </View>
  )
}

export default Main