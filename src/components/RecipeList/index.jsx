import { FlatList, Pressable, StyleSheet, } from 'react-native'
import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'

import { recipeList } from '../../../data/recipes'
import RecipeCard from './RecipeCard'
import theme from '../../theme'
import HeaderComponent from './HeaderComponent'

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

const RecipeList = () => {
  const { title } = useParams()
  let navigate = useNavigate()

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
      ListHeaderComponent={() => <HeaderComponent title={title} navigate={navigate} />}
    />
  )
}

export default RecipeList