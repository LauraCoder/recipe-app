import { FlatList, Alert } from 'react-native'
import useIngredients from '../../hooks/useIngredients'
import IngredientRow from './IngredientRow'
import ShoppingbagHeader from './ShoppingbagHeader'

import useDeleteIngredient from '../../hooks/useDeleteIngredient'
import { useState } from 'react'
import Button from '../Button'

const Shoppingbag = () => {
  const { ingredients, refetch } = useIngredients()
  const [deleteIngredient] = useDeleteIngredient()
  const [toDelete, setToDelete] = useState([])

  const deleteConfirmation = () => {
    Alert.alert(
      'Ingredient deleted',
      '',
      [
        { text: 'Ok', onPress: () => refetch() }
      ],
    )
  }

  const deleteSingleIngredient = () => {
    toDelete.map((id) => deleteIngredient(id))
    deleteConfirmation()
  }

  const deleteAlert = () => {
    Alert.alert(
      'Are you sure you want to delete these ingredients?',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Delete', onPress: () => deleteSingleIngredient() }
      ],
    )
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
        <Button onPress={() => deleteAlert()}>
          Delete chosen
        </Button>
      }
    />
  )
}

export default Shoppingbag