import { useQuery } from '@apollo/client'

import { GET_INCREDIENTS } from '../graphql/queries'

const useIngredients = () => {
  const { data, error, loading } = useQuery(
    GET_INCREDIENTS, {
      fetchPolicy: 'cache-and-network',
    })
  const ingredients = data?.allIngredients
  return { ingredients, loading, error }
}

export default useIngredients