import { useRef } from 'react'
import { DrawerLayoutAndroid, FlatList, Pressable, StyleSheet, } from 'react-native'
import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'

import { recipeList } from '../../../data/recipes'
import RecipeCard from './RecipeCard'
import theme from '../../theme'
import HeaderComponent from './HeaderComponent'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  addNewCard: {
    flex: 1,
    margin: 5,
    height: 200,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
})

const FilterDrawer = () => (
  <Text>hei</Text>
)

const RecipeList = () => {
  const { title } = useParams()
  let navigate = useNavigate()
  const drawer = useRef(null)

  const renderRecipeCard = ({ item }) => (
    <Pressable style={{ flex: 0.5 }} onPress={() => navigate(`/categories/${item.category}/${item.id}`)}>
      <RecipeCard
        id={item.id}
        title={item.title}
        servings={item.servings}
        cookingTime={item.cookingTime}
        rating={item.rating}
        category={item.category}
        ingredients={item.ingredients}
        instructions={item.instructions}
        image={item.image}
      />
    </Pressable>
  )

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='right'
      renderNavigationView={() => <FilterDrawer drawer={drawer} />}>
      <FlatList
        style={styles.container}
        data={recipeList}
        renderItem={({ item }) => {
          if (item.category === title) {
            return renderRecipeCard({ item })
          }
        }}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={() =>
          <HeaderComponent title={title} navigate={navigate} drawer={drawer} />}
      />
    </DrawerLayoutAndroid>
  )
}

export default RecipeList