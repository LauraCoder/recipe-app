import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'
import { ScrollView, } from 'react-native'
import { recipeList } from '../../../data/recipes'
import SingleRecipeHeader from './SingleRecipeHeader'
import SingleRecipeItem from './SingleRecipeItem'

const SingleRecipe = () => {
  let navigate = useNavigate()
  const { id } = useParams()
  const clickedRecipe = recipeList.find(item => item.id === id)

  return (
    <ScrollView style={{ paddingHorizontal: 4 }}>
      <SingleRecipeHeader navigate={navigate} rating={clickedRecipe.rating} />
      <SingleRecipeItem recipe={clickedRecipe} />
    </ScrollView>
  )
}

export default SingleRecipe