import { useParams } from 'react-router-native'
import { useNavigate } from 'react-router-native';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, } from 'react-native';
import { Rating } from 'react-native-elements';
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/AntDesign'
import theme from '../../theme';
import Text from '../Text';
import { recipeList } from '../../../data/recipes';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    margin: 10,
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
  cardImage: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 250,
    maxHeight: 250,
  },
  content: {
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  details: {
    flexDirection: 'row',
    marginVertical: 5,
    flex: 0.5,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  detailIcon: {
    marginRight: 5,
    color: theme.colors.secondary,
    fontSize: 15,
  },
  editIcon: {
    color: theme.colors.secondary,
    fontSize: 20,
    marginHorizontal: 30,
  },
  trashIcon: {
    color: theme.colors.secondary,
    fontSize: 20,
    marginHorizontal: 5,
  },
  rightAlign: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
    flex: 0.5,
  },
  instructionsContent: {
    marginTop: 30,
  },
});

const StarRating = ({ rating }) => (
  <Rating
    readonly
    type='custom'
    ratingColor={theme.colors.tertiary}
    ratingBackgroundColor={theme.colors.secondary}
    tintColor={'#F3F4F8'}
    startingValue={rating}
    imageSize={22}
  />
)

const SingleRecipe = () => {
  let navigate = useNavigate()
  const { id } = useParams()
  const clickedRecipe = recipeList.find(item => item.id === id)

  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate(-1)}>
          <Icon name='arrowleft' style={styles.goBackIcon} />
        </TouchableOpacity>
        <StarRating rating={clickedRecipe.rating} />
      </View>
      <View style={styles.item}>
        <Image
          style={styles.cardImage}
          source={{
            uri: `${clickedRecipe.image}`,
          }}
        />
        <View style={styles.content}>
          <Text recipeSubheading>{clickedRecipe.title}</Text>
          <View style={styles.row}>
            <View style={styles.details}>
              <View style={styles.detail}>
                <FontIcon name='user' style={styles.detailIcon} />
                <Text details style={{fontSize: theme.fontSizes.recipeBody}}>{clickedRecipe.servings}</Text>
              </View>
              <View style={styles.detail}>
                <FontIcon name='clock' style={styles.detailIcon} />
                {clickedRecipe.cookingTime < 15 
                  ? <Text details style={{fontSize: theme.fontSizes.recipeBody}}>max. 15 min</Text>
                  : <Text details style={{fontSize: theme.fontSizes.recipeBody}}>{clickedRecipe.cookingTime} min</Text>
                }
              </View>
            </View>
            <View style={styles.rightAlign}>
              <FontIcon name='pen' style={styles.editIcon} />
              <FontIcon name='trash' style={styles.trashIcon} />
            </View>
          </View>
          <View style={styles.instructionsContent}>
            <Text recipeBody style={{marginBottom: 10}}>INGREDIENTS</Text>
            {clickedRecipe.ingredients.map((ingredient, i) => 
              <Text recipeBody key={i}>{ingredient}</Text>
            )}
          </View>
          <View style={styles.instructionsContent}>
            {clickedRecipe.instructions.map((step, i) => 
              <Text recipeBody key={i} style={{marginBottom: 10}}>{i}: {step}</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default SingleRecipe