import { StyleSheet, View, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import theme from '../../theme'
import Image from '../Image'
import ItemView from '../ItemView'
import StarRating from '../StarRating'
import Text from '../Text'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  details: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: 10,
    bottom: 0,
  },
  detailIcon: {
    marginRight: 5,
    color: theme.colors.secondary,
    fontSize: 13,
  },
})

const RecipeCard = ({ title, servings, cookingTime, rating, image }) => {
  return (
    <ItemView>
      <Image image={image} />
      <View style={styles.content}>
        <Text subHeading>{title}</Text>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Icon name='user' style={styles.detailIcon} />
            <Text details>{servings}</Text>
          </View>
          <View style={styles.detail}>
            <Icon name='clock' style={styles.detailIcon} />
            {cookingTime < 15
              ? <Text details>max. 15 min</Text>
              : <Text details>{cookingTime} min</Text>
            }
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <StarRating startingValue={rating} imageSize={22} />
      </View>
    </ItemView>
  )
}

export default RecipeCard