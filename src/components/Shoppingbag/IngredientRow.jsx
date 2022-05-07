import { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Text from '../Text'
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../../theme'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 4,
    backgroundColor: theme.colors.white,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  ingredientIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  checkIcon: {
    fontSize: 26,
  },
})

const IngredientRow = ({ ingredient, id, setToDelete, toDelete }) => {
  const [clickedIngredient, setClickedIngredient] = useState([])

  const checkIngredient = (ingredient) => {
    if (!clickedIngredient.includes(ingredient)) {
      setClickedIngredient(clickedIngredient.concat(ingredient))
      setToDelete([...toDelete, id])
    } else {
      setClickedIngredient(clickedIngredient.filter(item => item !== ingredient))
      setToDelete(toDelete.filter(item => item !== id))
    }
  }

  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => checkIngredient(ingredient)}
        style={{ flex: 1, flexDirection: 'row' }}
      >
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <Text
            style={clickedIngredient.includes(ingredient)
              ? { textDecorationLine: 'line-through', color: theme.colors.secondary }
              : { textDecorationLine: 'none' }}
          >
            {ingredient}
          </Text>
        </View>
        <View style={{ alignItems: 'flex-end', }}>
          <MaterialCIcon
            name={clickedIngredient.includes(ingredient)
              ? 'check-circle-outline'
              : 'checkbox-blank-circle-outline'
            }
            color={clickedIngredient.includes(ingredient)
              ? theme.colors.primary
              : theme.colors.secondary
            }
            style={styles.checkIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default IngredientRow