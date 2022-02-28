import { FlatList, Pressable, } from 'react-native'
import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'

import { recipeList } from '../../../data/recipes'
import RecipeCard from './RecipeCard'
import HeaderComponent from './HeaderComponent'

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
      data={recipeList}
      renderItem={({ item }) => {
        if (item.category === title) {
          return renderRecipeCard({ item })
        }
      }}
      keyExtractor={item => item.id}
      numColumns={2}
      ListHeaderComponent={() => <HeaderComponent title={title} navigate={navigate} />}
      contentContainerStyle={{ paddingBottom: 15, paddingHorizontal: 5 }}
    />
  )
}

export default RecipeList