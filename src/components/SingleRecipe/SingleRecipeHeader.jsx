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
//onPress={() => navigate(-1)}
const SingleRecipeHeader = ({ navigate, category, rating }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigate(`/categories/${category}`)}>
      <Icon name='arrowleft' style={styles.goBackIcon} />
    </TouchableOpacity>
    <StarRating startingValue={rating} imageSize={22} tintColor={'#F9F8FB'} />
  </View>
)

export default SingleRecipeHeader