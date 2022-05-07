import { FlatList, Pressable, } from 'react-native'
import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'

import useRecipes from '../../hooks/useRecipes'
import RecipeCard from './RecipeCard'
import HeaderComponent from './HeaderComponent'

const RecipeList = () => {
  const { title } = useParams()
  let navigate = useNavigate()
  const { recipes, fetchMore } = useRecipes({
    first: 8,
  })

  const filteredRecipeList = recipes
    ? recipes.filter(recipe => recipe.category === title)
    : []

  const onEndReach = () => {
    console.log('You have reached the end of the list')
    fetchMore()
  }

  const renderRecipeCard = ({ item }) => (
    <Pressable
      style={{ flex: 0.5 }}
      onPress={() => navigate(`/categories/${item.category}/${item.id}`)}
    >
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
      data={filteredRecipeList}
      renderItem={({ item }) =>
        renderRecipeCard({ item })
      }
      keyExtractor={item => item.id}
      numColumns={2}
      ListHeaderComponent={() => <HeaderComponent title={title} navigate={navigate} />}
      contentContainerStyle={{ paddingBottom: 15, paddingHorizontal: 5, }}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default RecipeList