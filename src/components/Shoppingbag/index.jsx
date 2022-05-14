import { FlatList, Alert } from 'react-native'
import useIngredients from '../../hooks/useIngredients'
import IngredientRow from './IngredientRow'
import ShoppingbagHeader from './ShoppingbagHeader'

import useDeleteIngredient from '../../hooks/useDeleteIngredient'
import { useCallback, useState } from 'react'
import Button from '../Button'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

const Shoppingbag = () => {
  const { ingredients } = useIngredients()
  const [deleteIngredient] = useDeleteIngredient()
  const [toDelete, setToDelete] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  /*
  const deleteConfirmation = () => {
    Alert.alert(
      'Ingredient deleted',
      '',
      [
        { text: 'Ok', onPress: () => refetch() }
      ],
    )
  }*/

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  const deleteSingleIngredient = () => {
    toDelete.map((id) => deleteIngredient(id))
    //deleteConfirmation()
  }

  const deleteAlert = () => {
    if (toDelete.length <= 0) {
      Alert.alert(
        'Please choose some ingredients first',
        '',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
        ]
      )
    } else {
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
  }

  const renderIngredient = ({ item }) => (
    <IngredientRow
      ingredient={item?.ingredient}
      id={item?.id}
      //refetch={refetch}
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
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  )
}

export default Shoppingbag