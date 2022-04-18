import { FlatList, } from 'react-native'
import useIngredients from '../../hooks/useIngredients'
import IngredientRow from './IngredientRow'
import ShoppingbagHeader from './ShoppingbagHeader'

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
      keyExtractor={item => ingredients.indexOf(item)}
      contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 5 }}
      ListHeaderComponent={<ShoppingbagHeader />}
    />
  )
}

export default Shoppingbag