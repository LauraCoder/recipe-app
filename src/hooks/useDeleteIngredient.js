import { useMutation } from '@apollo/client'
import { DELETE_INGREDIENT } from '../graphql/mutations'

const useDeleteIngredient = () => {
  const [mutate, result] = useMutation(DELETE_INGREDIENT)

  const deleteIngredient = async (id) => {
    const ingredientsAfter = await mutate({ variables: { deleteIngredientId: id } })
    return ingredientsAfter
  }

  return [deleteIngredient, result]
}

export default useDeleteIngredient