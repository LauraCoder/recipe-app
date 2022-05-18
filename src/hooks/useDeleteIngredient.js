import { InMemoryCache, useMutation } from '@apollo/client'
import { DELETE_INGREDIENT } from '../graphql/mutations'
import { GET_INCREDIENTS } from '../graphql/queries'

const useDeleteIngredient = () => {
  const [mutate, result] = useMutation(DELETE_INGREDIENT, {
    refetchQueries: [{ query: GET_INCREDIENTS }]
  })

  const deleteIngredient = async (id) => {
    const ingredientsAfter = await mutate({ variables: { deleteIngredientId: id } })
    return ingredientsAfter
  }

  const cache = new InMemoryCache({
    typePolicies: {
      AllIngredients: {
        fields: {
          ingredient: {
            merge: true,
          },
        },
      },
    },
  })

  return [deleteIngredient, result, cache ]
}

export default useDeleteIngredient