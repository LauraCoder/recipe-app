import { useQuery } from '@apollo/client'

import { GET_RECIPES } from '../graphql/queries'

const useRecipes = () => {
  const { data, error, loading } = useQuery(
    GET_RECIPES, {
      fetchPolicy: 'cache-and-network',
    })
  const recipes = data?.allRecipes
  return { recipes, loading, error }
}

export default useRecipes