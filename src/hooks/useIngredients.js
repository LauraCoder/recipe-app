import { useQuery } from '@apollo/client'

import { GET_INCREDIENTS } from '../graphql/queries'

const useIngredients = () => {
  const { data, refetch, loading, } = useQuery(
    GET_INCREDIENTS, {
      fetchPolicy: 'cache-and-network',
      pollInterval: 50,
    })

  return {
    ingredients: data?.allIngredients,
    refetch,
    loading,
  }
}

export default useIngredients