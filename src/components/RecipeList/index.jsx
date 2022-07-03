//import { useQuery } from '@apollo/client'
import { useCallback, useState } from 'react'
import { FlatList, Pressable, } from 'react-native'
import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'

import useRecipes from '../../hooks/useRecipes'
//import { FILTER_RECIPES } from '../../graphql/queries'
import RecipeCard from './RecipeCard'
import HeaderComponent from './HeaderComponent'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

const RecipeList = () => {
  const { title } = useParams()
  let navigate = useNavigate()
  const { recipes, fetchMore } = useRecipes({
    first: 8,
  })
  /*const filterResult = useQuery(FILTER_RECIPES, {
    variables: { rating, cookingTimeFilter, servings },
    skip: !rating || !cookingTimeFilter || !servings,
  })*/
  const [refreshing, setRefreshing] = useState(false)

  const filteredRecipeList = recipes
    ? recipes.filter(recipe => recipe.category === title)
    : []

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  const onEndReach = () => {
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
      ListHeaderComponent={() =>
        <HeaderComponent
          title={title}
          navigate={navigate}
        />}
      contentContainerStyle={{ paddingBottom: 15, paddingHorizontal: 5, }}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  )
}

export default RecipeList