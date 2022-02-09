import { FlatList, Pressable, StyleSheet, View, } from 'react-native'
import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { recipeList } from '../../../data/recipes'
import Text from '../Text'
import RecipeCard from './RecipeCard'
import theme from '../../theme'

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
    },
    addNewCard: {
      flex: 1,
      margin: 5,
      height: 200,
      backgroundColor: theme.colors.secondary,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
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

const RecipeList = () => {
  const { title } = useParams()
  let navigate = useNavigate()

  const renderRecipeCard = ({ item }) => (
    <Pressable style={{flex: 0.5}} onPress={() => navigate(`/categories/${item.category}/${item.id}`)}>
      <RecipeCard
        id={item.id}
        title={item.title}
        servings={item.servings}
        cookingTime={item.cookingTime}
        rating={item.rating}
        category={item.category}
        ingredients={item.ingredients}
        instructions={item.instructions}
        image={item.image}
      />
    </Pressable>
  );
  //  renderItem={renderRecipeCard}
  return (
    <FlatList
      style={styles.container}
      data={recipeList}
      renderItem={({ item }) => {
        if (item.category === title) {
          return renderRecipeCard({ item });
        }
      }}
      keyExtractor={item => item.id}
      numColumns={2}
      ListHeaderComponent={() => <HeaderComponent title={title} />}
    />
  )
}

export default RecipeList