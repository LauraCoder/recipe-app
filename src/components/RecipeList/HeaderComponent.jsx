import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { FILTER_RECIPES } from '../../graphql/queries'
import Text from '../Text'
import theme from '../../theme'
import FilterOverlay from './FilterOverlay'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  title: {
    transform: [{
      rotate: '-5deg'
    }]
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
    shadowColor: '#000',
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
})

const HeaderComponent = ({ title, navigate, }) => {
  //const rating = null
  //const servings = null
  const [visible, setVisible] = useState(false)
  const [ratingValue, setRatingValue] = useState(null)
  const [cookingTime, setCookingTimeFilter] = useState(null)
  const filterResult = useQuery(FILTER_RECIPES, {
    variables: { cookingTime },
    skip: !cookingTime,
  })

  const toggleOverlay = () => setVisible(!visible)
  const updateCookingTimeFilter = (cookingTime) => setCookingTimeFilter(cookingTime)

  const addFilters = () => {
    console.log('filter', cookingTime)
    const filteredRecipes = filterResult?.data?.filterRecipes
    console.log('fil', filteredRecipes)
    setVisible(!visible)
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigate('/')}>
        <Text heading style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.icons}>
        <Icon name='sort' style={styles.sortIcon} />
        <TouchableOpacity onPress={() => toggleOverlay()} activeOpacity={.8}>
          <Icon name='filter' style={styles.filterIcon} />
        </TouchableOpacity>
        <FilterOverlay
          visible={visible}
          toggleOverlay={toggleOverlay}
          addFilters={addFilters}
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
          updateCookingTimeFilter={updateCookingTimeFilter}
          cookingTime={cookingTime}
        />
      </View>
    </View>
  )
}


export default HeaderComponent