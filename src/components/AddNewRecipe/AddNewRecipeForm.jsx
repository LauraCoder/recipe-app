import { View, StyleSheet, } from 'react-native';
import theme from '../../theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Rating } from 'react-native-elements';
import Button from '../Button';
import { FieldArray } from 'formik';

const styles = StyleSheet.create({
    component: {
      margin: 10,
    },
    item: {
      flexDirection: 'column',
      marginTop: 10,
      backgroundColor: theme.colors.white,
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
    arrayInput: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    },
    deleteIcon: {
      fontSize: 30,
      color: theme.colors.secondary,
      backgroundColor: theme.colors.white,
      borderRadius: 100,
      padding: 5,
      marginTop: 10,
    }
});

const StarRating = () => (
  <Rating
    type='custom'
    ratingColor={theme.colors.tertiary}
    ratingBackgroundColor={theme.colors.secondary}
    tintColor={theme.colors.white}
    startingValue={0}
    imageSize={35}
  />
)

const AddNewRecipeForm = ({ values }) => {
  return (
    <View style={styles.component}>
      <View style={styles.item}>
        <View style={{backgroundColor: '#ccc', height: 200, justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcon name='camera-plus' color='#fff' size={35} />
        </View>
      </View>
      <FormikTextInput name='title' placeholder='Title' />
      <FormikTextInput name='category' placeholder='Category' />
      <View style={styles.item}>
        <StarRating />
      </View>
      <View style={{flexDirection: 'row'}}>
        <FormikTextInput style={{flex: 0.5, marginRight: 10}} name='servings' placeholder='Servings' />
        <FormikTextInput style={{flex: 0.5}} name='cookingTime' placeholder='Cooking Time' />
      </View>
      <Text heading style={{marginTop: 20}}>Ingredients</Text>
      <FieldArray name='ingredients'>
            {({ push }) => (
              <>
              {values.ingredients.length > 0 &&
                  values.ingredients.map((ingredient, index) => (
      <View style={styles.arrayInput} key={index}>
        <FormikTextInput name={`ingredients.${index}.ingredient`} placeholder='Ingredient' style={{flex: 0.95}} />
        <FeatherIcon name='x-circle' style={styles.deleteIcon}/>
      </View>
                  ))}
      <Button onPress={() => push({ ingredient: ''})}>Add an ingredient</Button>
      </>
      )}
      </FieldArray>
      <Text heading style={{marginTop: 20}}>Directions</Text>
      <FormikTextInput name='step' placeholder='Step' />
    </View>
  );
};

export default AddNewRecipeForm;