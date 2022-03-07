import { useQuery } from '@apollo/client'

import { GET_CATEGORIES } from '../graphql/queries'

const useCategories = () => {
  const { data, error, loading } = useQuery(
    GET_CATEGORIES, {
      fetchPolicy: 'cache-and-network',
    })
  const categories = data?.allCategories
  return { categories, loading, error }
}

export default useCategories