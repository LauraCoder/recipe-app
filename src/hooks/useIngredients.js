import { useQuery } from '@apollo/client'

import { GET_INCREDIENTS } from '../graphql/queries'

const useIngredients = () => {
  const { data, refetch, error, loading } = useQuery(
    GET_INCREDIENTS, {
      fetchPolicy: 'cache-and-network',
    })

  return {
    ingredients: data?.allIngredients,
    refetch,
    loading,
    error, }
}

export default useIngredients