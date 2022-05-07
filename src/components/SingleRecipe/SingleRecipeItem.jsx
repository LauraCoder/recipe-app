import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { DELETE_RECIPE } from '../../graphql/mutations'
import { ADD_INGREDIENT } from '../../graphql/mutations'
import { GET_INCREDIENTS } from '../../graphql/queries'
import useIngredients from '../../hooks/useIngredients'
import useDeleteIngredient from '../../hooks/useDeleteIngredient'

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
  const [addIngredient] = useMutation(ADD_INGREDIENT, {
    refetchQueries: [ { query: GET_INCREDIENTS } ]
  })
  const { ingredients } = useIngredients()
  const [deleteIngredient, result] = useDeleteIngredient()
  const [clickedIngredient, setClickedIngredient] = useState([])
  let navigate = useNavigate()
  const [error, setError] = useState('')

  let shoppingbagList = ingredients
    ? ingredients.map(edge => edge.ingredient)
    : []

  let shoppingbagListID = ingredients
    ? ingredients.map(edge => edge)
    : []

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
/*
  useEffect(() => {
    if (result.data && !result.data.deleteIngredient ) {
      setError('Ingredient not found')
    }
  }, [result.data, setError])*/

  const addToShoppingbag = async (ingredient) => {
    if (!clickedIngredient.includes(ingredient) && !shoppingbagList.includes(ingredient)) {
      try {
        setClickedIngredient(clickedIngredient.concat(ingredient))
        const { data } = await addIngredient({
          variables: {
            ingredient
          }
        })
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    } else if (clickedIngredient.includes(ingredient) && !shoppingbagList.includes(ingredient)) {
      try {
        const findIngredientIndex = shoppingbagList.indexOf(ingredient)
        const findIngredientID = shoppingbagListID[findIngredientIndex].id
        setClickedIngredient(clickedIngredient.filter(item => item !== ingredient))
        deleteIngredient(findIngredientID)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <ItemView>
      <Image singleRecipe image={recipe?.image} />
      <View style={styles.content}>
        <Text recipeSubheading>{recipe?.title}</Text>
        <View style={styles.row}>
          <View style={styles.details}>
            <View style={styles.detail}>
              <FontIcon name='user' style={styles.detailIcon} />
              <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>
                {recipe?.servings}
              </Text>
            </View>
            <View style={styles.detail}>
              <FontIcon name='clock' style={styles.detailIcon} />
              {recipe?.cookingTime < 15
                ? <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>
                  max. 15 min
                </Text>
                : <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>
                  {recipe?.cookingTime} min
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
          {recipe?.ingredients?.map((ingredient, i) =>
            <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
              <TouchableOpacity onPress={() => addToShoppingbag(ingredient)}>
                <AntIcon
                  name={
                    !clickedIngredient.includes(ingredient) && !shoppingbagList.includes(ingredient)
                      ? 'pluscircleo'
                      : 'minuscircleo'
                  }
                  color={
                    !clickedIngredient.includes(ingredient) && !shoppingbagList.includes(ingredient)
                      ? theme.colors.secondary
                      : theme.colors.tertiary
                  }
                  style={styles.ingredientIcon}
                />
              </TouchableOpacity>
              <Text recipeBody>{ingredient}</Text>
            </View>
          )}
        </View>
        <View style={styles.instructionsContent}>
          {recipe?.instructions?.map((step, i) =>
            <Text recipeBody key={i} style={{ marginBottom: 10 }}>
              <Text color='primary' fontWeight='bold' style={{ fontSize: 18 }}>{i + 1}: </Text>
              {step}
            </Text>
          )}
        </View>
      </View>
    </ItemView>
  )
}

export default SingleRecipeItem