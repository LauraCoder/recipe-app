import { InMemoryCache, useMutation } from '@apollo/client'
import { DELETE_RECIPE } from '../graphql/mutations'
import { GET_RECIPES } from '../graphql/queries'

const useDeleteRecipe = () => {
  const [mutate, result] = useMutation(DELETE_RECIPE, {
    refetchQueries: [{ query: GET_RECIPES }]
  })

  const deleteRecipe = async (id) => {
    console.log('id', id)
    const recipesAfter = await mutate({ variables: { deleteRecipeId: id } })
    return recipesAfter
  }

  const cache = new InMemoryCache({
    typePolicies: {
      AllRecipes: {
        fields: {
          recipe: {
            merge: true,
          },
        },
      },
    },
  })

  return [deleteRecipe, result, cache ]
}

export default useDeleteRecipe