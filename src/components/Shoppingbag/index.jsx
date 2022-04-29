import { FlatList, } from 'react-native'
import useIngredients from '../../hooks/useIngredients'
import IngredientRow from './IngredientRow'
import ShoppingbagHeader from './ShoppingbagHeader'

const Shoppingbag = () => {
  const { ingredients, refetch } = useIngredients()

  const renderIngredient = ({ item }) => (
    <IngredientRow
      ingredient={item?.ingredient}
      id={item?.id}
      refetch={refetch}
    />
  )

  return (
    <FlatList
      data={ingredients}
      renderItem={renderIngredient}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 5 }}
      ListHeaderComponent={<ShoppingbagHeader />}
    />
  )
}

export default Shoppingbag