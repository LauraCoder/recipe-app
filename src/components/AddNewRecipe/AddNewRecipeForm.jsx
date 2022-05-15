import { View, StyleSheet, } from 'react-native'
import { Field, } from 'formik'

import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'
import Button from '../Button'
import StarRatingInput from '../StarRatingInput'
import AddImage from './AddImage'
import AddCategory from './AddCategory'
import AddServings from './AddServings'
import AddCookingTime from './AddCookingTime'
import AddIngredients from './AddIngredients'
import AddDirections from './AddDirections'

const styles = StyleSheet.create({
  component: {
    margin: 10,
  },
  item: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: theme.colors.white,
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
})

const AddNewRecipeForm = ({ onSubmit, values, handleChange, handleBlur, recipeToEdit, onSubmitEdit }) => (
  <View style={styles.component}>
    <View style={styles.item}>
      <AddImage values={values} />
    </View>
    <FormikTextInput name='title' placeholder='Title' />
    <View style={styles.item}>
      <AddCategory
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </View>
    <View style={styles.item}>
      <Field name='rating' as={StarRatingInput} imageSize={36} />
    </View>
    <View style={{ flexDirection: 'row', }}>
      <AddServings values={values} />
      <AddCookingTime values={values} />
    </View>
    <AddIngredients values={values} />
    <AddDirections values={values} />
    {recipeToEdit
      ? <Button onPress={onSubmitEdit} style={{ marginTop: 45 }}>Save recipe</Button>
      : <Button onPress={onSubmit} style={{ marginTop: 45 }}>Add recipe</Button>
    }
  </View>
)

export default AddNewRecipeForm