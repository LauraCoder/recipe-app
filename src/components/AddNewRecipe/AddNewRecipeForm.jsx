import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import theme from '../../theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Rating } from 'react-native-elements';
import Button from '../Button';
import { FieldArray } from 'formik';
import FormikTextArrayInput from '../FormikTextArrayInput';

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
      justifyContent: 'space-between',
      marginTop: 10,
      paddingLeft: 10,
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
    deleteIcon: {
      fontSize: 30,
      color: theme.colors.secondary,
      backgroundColor: theme.colors.white,
      borderRadius: 50,
      padding: 5,
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
        {({ remove, push }) => (
          <>
            {values.ingredients.length > 0 &&
                values.ingredients.map((ingredient, index) => (
              <View style={styles.arrayInput} key={index}>
                <FormikTextArrayInput name={`ingredients.${index}.ingredient`} placeholder='Ingredient' style={{flex: 0.95,}} />
                <TouchableOpacity onPress={() => remove(index)}>
                  <FeatherIcon name='x-circle' style={styles.deleteIcon}/>
                </TouchableOpacity>
              </View>
            ))}
            <Button onPress={() => push({ingredient: ''})}>Add more ingredients</Button>
          </>
        )}
      </FieldArray>
      <Text heading style={{marginTop: 20}}>Directions</Text>
      <FieldArray name='instructions'>
        {({ remove, push }) => (
          <>
            {values.instructions.length > 0 &&
                values.instructions.map((step, index) => (
              <View style={styles.arrayInput} key={index}>
                <Text color='primary' fontSize='subheading' fontWeight='bold'>{index + 1}</Text>
                <FormikTextArrayInput name={`instructions.${index}.step`} placeholder='Step' style={{flex: 0.95,}} />
                <TouchableOpacity onPress={() => remove(index)}>
                  <FeatherIcon name='x-circle' style={styles.deleteIcon}/>
                </TouchableOpacity>
              </View>
            ))}
            <Button onPress={() => push({ingredient: ''})}>Add more steps</Button>
          </>
        )} 
      </FieldArray>
    </View>
  );
};

export default AddNewRecipeForm;