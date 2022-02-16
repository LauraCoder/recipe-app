import { StyleSheet, TouchableOpacity, View, } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import theme from '../../theme'
import StarRating from '../StarRating'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
    top: 0,
  },
  goBackIcon: {
    fontSize: 28,
    color: theme.colors.primary,
  },
})

const SingleRecipeHeader = ({ navigate, rating }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigate(-1)}>
        <Icon name='arrowleft' style={styles.goBackIcon} />
      </TouchableOpacity>
      <StarRating readOnly startingValue={rating} imageSize={22} tintColor={'#F3F4F8'} />
    </View>
  )
}

export default SingleRecipeHeader