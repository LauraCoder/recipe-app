import { FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import CategoryCard from './CategoryCard';

const categoryList = [
  {
    id: '10',
    title: 'Snacks & Starters',
    image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '11',
    title: 'Salads',
    image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '12',
    title: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1588276552401-30058a0fe57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80',
  },
  {
    id: '13',
    title: 'Desserts',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '14',
    title: 'Drinks',
    image: 'https://images.unsplash.com/photo-1595622948135-a651def558a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHNtb290aGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  },
]

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});

const Categories = () => {
  let navigate = useNavigate();
  const numColumns = 2

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns)

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true })
      numberOfElementsLastRow = numberOfElementsLastRow + 1
    }

    return data
  }

  const renderCategoryCard = ({ item }) => (
    <Pressable style={{flex: 1}} onPress={() => navigate(`/categories/${item.title}`)}>
      <CategoryCard
        id={item.id}
        title={item.title}
        image={item.image}
        empty={item.empty}
      />
    </Pressable>
  );

  return (
    <FlatList
      style={styles.container}
      data={formatData(categoryList, numColumns)}
      renderItem={renderCategoryCard}
      keyExtractor={item => item.id}
      numColumns={numColumns}
    />
  )
}

export default Categories