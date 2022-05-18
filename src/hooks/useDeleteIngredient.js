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
/*
  const cache = new InMemoryCache({
    typePolicies: {
      Shoppingbag: {
        fields: {
          ingredient: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming)
            },
          },
        },
      },
    },
  })*/

  return [deleteIngredient, result, ]
}

export default useDeleteIngredient