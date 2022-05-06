import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'
import { ScrollView, } from 'react-native'
import useRecipes from '../../hooks/useRecipes'
import SingleRecipeHeader from './SingleRecipeHeader'
import SingleRecipeItem from './SingleRecipeItem'

const SingleRecipe = () => {
  let navigate = useNavigate()
  const { id } = useParams()
  const { recipes } = useRecipes()
  const clickedRecipe = recipes.find(item => item.id === id)

  return (
    <ScrollView style={{ paddingHorizontal: 4 }}>
      <SingleRecipeHeader navigate={navigate} rating={clickedRecipe?.rating} />
      <SingleRecipeItem recipe={clickedRecipe} />
    </ScrollView>
  )
}

export default SingleRecipe