import { FlatList, Pressable, StyleSheet, View, } from 'react-native'
import { useParams } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Text from '../Text';
import RecipeCard from './RecipeCard';
import theme from '../../theme';

const recipeList = [
  {
    id: '10',
    title: 'Double Chocolate Hot Cocoa',
    servings: 2,
    cookingTime: 10,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '11',
    title: 'Grapefruit Sunrise',
    servings: 4,
    cookingTime: 8,
    rating: 3.4,
    image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '12',
    title: 'Lemon Soda',
    servings: 2,
    cookingTime: 10,
    rating: 2.5,
    image: 'https://images.unsplash.com/photo-1588276552401-30058a0fe57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80',
  },
  {
    id: '13',
    title: 'Watermelon Smoothie',
    servings: 3,
    cookingTime: 20,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '14',
    title: 'Vanilla Latte',
    servings: 2,
    cookingTime: 6,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1595622948135-a651def558a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHNtb290aGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  },
]

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 5,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 30,
      marginHorizontal: 10,
    },
    icons: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    sortIcon: {
      marginRight: 30,
      color: theme.colors.primary,
      fontSize: 20,
    },
    filterIcon: {
      backgroundColor: theme.colors.white,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderRadius: 100,
      padding: 8,
      color: theme.colors.primary,
      fontSize: 15,
    }
  });

const HeaderComponent = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text heading>{title}</Text>
      <View style={styles.icons}>
        <Icon name='sort' style={styles.sortIcon} />
        <Icon name='filter' style={styles.filterIcon} />
      </View>
    </View>
  )
}

const CategoryView = () => {
  const { title } = useParams();
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

  const renderRecipeCard = ({ item }) => (
    <Pressable style={{flex: 1}}>
      <RecipeCard
        id={item.id}
        title={item.title}
        servings={item.servings}
        cookingTime={item.cookingTime}
        rating={item.rating}
        image={item.image}
        empty={item.empty}
      />
    </Pressable>
  );

  return (
    <FlatList
      style={styles.container}
      data={formatData(recipeList, numColumns)}
      renderItem={renderRecipeCard}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      ListHeaderComponent={() => <HeaderComponent title={title} />}
    />
  )
}

export default CategoryView