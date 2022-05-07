import { useQuery } from '@apollo/client'

import { GET_RECIPES } from '../graphql/queries'

const useRecipes = (variables) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_RECIPES, {
      fetchPolicy: 'cache-and-network',
      variables
    })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.allRecipes.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.allRecipes.endCursor,
        ...variables,
      },
    })
  }

  const recipes = data?.allRecipes
  return {
    recipes,
    loading,
    error,
    fetchMore: handleFetchMore,
    ...result
  }
}

export default useRecipes