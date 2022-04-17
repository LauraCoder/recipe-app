import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import Text from '../Text'
import useIngredients from '../../hooks/useIngredients'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../../theme'
import { useState } from 'react'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  title: {
    transform: [{
      rotate: '-5deg'
    }]
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ingredientIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  checkIcon: {
    fontSize: 26,
    marginRight: 10,
  },
})

const ShoppingbagHeader = () => (
  <View style={styles.header}>
    <Text heading style={styles.title}>
      Shopping Bag
    </Text>
  </View>
)

const IngredientRow = ({ ingredient }) => {
  const [clickedIngredient, setClickedIngredient] = useState([])

  const checkIngredient = (ingredient) => {
    if (!clickedIngredient.includes(ingredient)) {
      setClickedIngredient(clickedIngredient.concat(ingredient))
    } else {
      setClickedIngredient(clickedIngredient.filter(item => item !== ingredient))
    }
  }

  console.log('clicked', clickedIngredient)

  return (
    <View style={styles.row}>
      <AntIcon
        name='minuscircleo'
        color={theme.colors.secondary}
        style={styles.ingredientIcon}
      />
      <TouchableOpacity onPress={() => checkIngredient(ingredient)} style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', flex: 1, }}>
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
            name={clickedIngredient.includes(ingredient) ? 'check-circle-outline' : 'checkbox-blank-circle-outline'}
            color={clickedIngredient.includes(ingredient) ? theme.colors.primary : theme.colors.secondary }
            style={styles.checkIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const Shoppingbag = () => {
  const { ingredients } = useIngredients()

  const renderIngredient = ({ item }) => (
    <IngredientRow
      ingredient={item.ingredient}
    />
  )

  return (
    <FlatList
      data={ingredients}
      renderItem={renderIngredient}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 5 }}
      ListHeaderComponent={ShoppingbagHeader}
    />
  )
}

export default Shoppingbag