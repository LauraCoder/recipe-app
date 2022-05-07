import { FlatList, Pressable, } from 'react-native'
import { useNavigate } from 'react-router-native'

import CategoryCard from './CategoryCard'
import useCategories from '../../hooks/useCategories'

const Categories = () => {
  const { categories } = useCategories()
  let navigate = useNavigate()

  const renderCategoryCard = ({ item }) => (
    <Pressable style={{ flex: 0.5 }} onPress={() => navigate(`/categories/${item.title}`)}>
      <CategoryCard
        id={item.id}
        title={item.title}
        image={item.image}
        empty={item.empty}
      />
    </Pressable>
  )

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryCard}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 5 }}
    />
  )
}

export default Categories