import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { DELETE_RECIPE } from '../../graphql/mutations'

import theme from '../../theme'
import Image from '../Image'
import ItemView from '../ItemView'
import Text from '../Text'

const styles = StyleSheet.create({
  content: {
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  details: {
    flexDirection: 'row',
    marginVertical: 5,
    flex: 0.5,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  detailIcon: {
    marginRight: 5,
    color: theme.colors.secondary,
    fontSize: 15,
  },
  editIcon: {
    color: theme.colors.secondary,
    fontSize: 20,
    marginHorizontal: 30,
  },
  ingredientIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  trashIcon: {
    color: theme.colors.secondary,
    fontSize: 20,
    marginHorizontal: 5,
  },
  rightAlign: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
    flex: 0.5,
  },
  instructionsContent: {
    marginTop: 30,
  },
})

const SingleRecipeItem = ({ recipe }) => {
  const [deleteRecipe] = useMutation(DELETE_RECIPE)
  const [clickedIngredient, setClickedIngredient] = useState([])
  let navigate = useNavigate()

  const deleteAlert = () => {
    Alert.alert(
      'Are you sure you want to delete this recipe?',
      `${recipe.title}`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Delete', onPress: () => deleteSingleRecipe() }
      ]
    )
  }

  const deleteSingleRecipe = async () => {
    try {
      await deleteRecipe({
        variables: { deleteRecipeId: recipe.id },
      })
      navigate(`/categories/${recipe.category}`)
    } catch (e) {
      console.log(e)
    }
  }

  const addToShoppingbag = (ingredient) => {
    if (!clickedIngredient.includes(ingredient)) {
      setClickedIngredient(clickedIngredient.concat(ingredient))
    } else {
      setClickedIngredient(clickedIngredient.filter(item => item !== ingredient))
    }
  }

  console.log('clicked ones', clickedIngredient)

  return (
    <ItemView>
      <Image singleRecipe image={recipe.image} />
      <View style={styles.content}>
        <Text recipeSubheading>{recipe.title}</Text>
        <View style={styles.row}>
          <View style={styles.details}>
            <View style={styles.detail}>
              <FontIcon name='user' style={styles.detailIcon} />
              <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>{recipe.servings}</Text>
            </View>
            <View style={styles.detail}>
              <FontIcon name='clock' style={styles.detailIcon} />
              {recipe.cookingTime < 15
                ? <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>
                  max. 15 min
                </Text>
                : <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>
                  {recipe.cookingTime} min
                </Text>
              }
            </View>
          </View>
          <View style={styles.rightAlign}>
            <FontIcon name='pen' style={styles.editIcon} />
            <TouchableOpacity onPress={() => deleteAlert()}>
              <FontIcon name='trash' style={styles.trashIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.instructionsContent}>
          <Text recipeBody style={{ marginBottom: 10 }}>INGREDIENTS</Text>
          {recipe.ingredients?.map((ingredient, i) =>
            <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
              <TouchableOpacity onPress={() => addToShoppingbag(ingredient)}>
                <AntIcon name={!clickedIngredient.includes(ingredient) ? 'pluscircleo' : 'minuscircleo'} color={!clickedIngredient.includes(ingredient) ? theme.colors.secondary : theme.colors.tertiary} style={styles.ingredientIcon} />
              </TouchableOpacity>
              <Text recipeBody>{ingredient}</Text>
            </View>
          )}
        </View>
        <View style={styles.instructionsContent}>
          {recipe.instructions?.map((step, i) =>
            <Text recipeBody key={i} style={{ marginBottom: 10 }}>
              <Text color='primary' fontWeight='bold' style={{ fontSize: 18 }}>{i + 1}: </Text>
              {step}
            </Text>
          )}
        </View>
      </View>
    </ItemView>)
}

export default SingleRecipeItem