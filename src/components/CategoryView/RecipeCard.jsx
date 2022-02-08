import { StyleSheet, View, Image } from 'react-native';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemInvisible: {
    flex: 1,
    margin: 5,
    height: 200,
    backgroundColor: 'transparent',
  },
  cardImage: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
    maxHeight: 150,
  },
  content: {
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    flex: 1,
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
  starIconYellow: {
    marginRight: 2,
    color: theme.colors.tertiary,
    fontSize: 13,
  },
  starIconGray: {
    marginRight: 2,
    color: theme.colors.secondary,
    fontSize: 13,
  }
});


const StarRating = ({ rating }) => (
  <Rating
    type='custom'
    ratingColor={theme.colors.tertiary}
    ratingBackgroundColor={theme.colors.secondary}
    tintColor={theme.colors.white}
    startingValue={rating}
    imageSize={16}
  />
)

const RecipeCard = ({ title, servings, cookingTime, rating, image, empty }) => {
  if (empty) {
    return <View style={styles.item, styles.itemInvisible} />
  }
  return (
    <View style={styles.item}>
      <Image
        style={styles.cardImage}
        source={{
          uri: `${image}`,
        }}
      />
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
        <StarRating rating={rating} />
      </View>
    </View>
  )
}

export default RecipeCard