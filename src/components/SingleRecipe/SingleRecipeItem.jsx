import { Image, StyleSheet, View, } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import theme from '../../theme'
import Text from '../Text'

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
})

const SingleRecipeItem = ({ recipe }) => (
  <View style={styles.item}>
    <Image
      style={styles.cardImage}
      source={{
        uri: `${recipe.image}`,
      }}
    />
    <View style={styles.content}>
      <Text recipeSubheading>{recipe.title}</Text>
      <View style={styles.row}>
        <View style={styles.details}>
          <View style={styles.detail}>
            <FontIcon name='user' style={styles.detailIcon} />
            <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>{recipe.servings}</Text>
          </View>
          <View style={styles.detail}>
            <FontIcon name='clock' style={styles.detailIcon} />
            {recipe.cookingTime < 15
              ? <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>max. 15 min</Text>
              : <Text details style={{ fontSize: theme.fontSizes.recipeBody }}>{recipe.cookingTime} min</Text>
            }
          </View>
        </View>
        <View style={styles.rightAlign}>
          <FontIcon name='pen' style={styles.editIcon} />
          <FontIcon name='trash' style={styles.trashIcon} />
        </View>
      </View>
      <View style={styles.instructionsContent}>
        <Text recipeBody style={{ marginBottom: 10 }}>INGREDIENTS</Text>
        {recipe.ingredients.map((ingredient, i) =>
          <Text recipeBody key={i}>{ingredient}</Text>
        )}
      </View>
      <View style={styles.instructionsContent}>
        {recipe.instructions.map((step, i) =>
          <Text recipeBody key={i} style={{ marginBottom: 10 }}>
            <Text color='textSecondary' fontSize='subheading' fontWeight='bold'>{i + 1}: </Text>
            {step}
          </Text>
        )}
      </View>
    </View>
  </View>
)

export default SingleRecipeItem