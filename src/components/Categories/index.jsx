import { FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import CategoryCard from './CategoryCard';
import { categoryList } from '../../../data/categories';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});

const Categories = () => {
  let navigate = useNavigate();

  const renderCategoryCard = ({ item }) => (
    <Pressable style={{flex: 0.5}} onPress={() => navigate(`/categories/${item.title}`)}>
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
      data={categoryList}
      renderItem={renderCategoryCard}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default Categories