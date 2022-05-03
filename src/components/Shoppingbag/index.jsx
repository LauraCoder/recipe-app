import { FlatList, } from 'react-native'
import useIngredients from '../../hooks/useIngredients'
import IngredientRow from './IngredientRow'
import ShoppingbagHeader from './ShoppingbagHeader'
import ShoppingbagFooter from './ShoppingbagFooter'

import useDeleteIngredient from '../../hooks/useDeleteIngredient'
import { useState } from 'react'
import Button from '../Button'

const Shoppingbag = () => {
  const { ingredients, refetch } = useIngredients()
  const [deleteIngredient] = useDeleteIngredient()
  const [toDelete, setToDelete] = useState([])

  const deleteSingleIngredient = () => {
    toDelete.map((id) => deleteIngredient(id))
  }

  const renderIngredient = ({ item }) => (
    <IngredientRow
      ingredient={item?.ingredient}
      id={item?.id}
      refetch={refetch}
      setToDelete={setToDelete}
      toDelete={toDelete}
    />
  )

  return (
    <FlatList
      data={ingredients}
      renderItem={renderIngredient}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 5 }}
      ListHeaderComponent={<ShoppingbagHeader />}
      ListFooterComponent={
        <ShoppingbagFooter
          deleteSingleIngredient={deleteSingleIngredient}
        />
      }
    />
  )
}

export default Shoppingbag