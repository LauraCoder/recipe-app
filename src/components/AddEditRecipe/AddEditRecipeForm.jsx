import { View, StyleSheet, } from 'react-native'
import { Field, } from 'formik'

import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'
import Button from '../Button'
import StarRatingInput from '../StarRatingInput'
import AddEditImage from './AddEditImage'
import AddEditCategory from './AddEditCategory'
import AddEditServings from './AddEditServings'
import AddEditCookingTime from './AddEditCookingTime'
import AddEditIngredients from './AddEditIngredients'
import AddEditDirections from './AddEditDirections'

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
      <AddEditImage values={values} />
    </View>
    <FormikTextInput name='title' placeholder='Title' />
    <View style={styles.item}>
      <AddEditCategory
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </View>
    <View style={styles.item}>
      <Field name='rating' as={StarRatingInput} imageSize={36} />
    </View>
    <View style={{ flexDirection: 'row', }}>
      <AddEditServings values={values} />
      <AddEditCookingTime values={values} />
    </View>
    <AddEditIngredients values={values} />
    <AddEditDirections values={values} />
    {recipeToEdit
      ? <Button onPress={onSubmitEdit} style={{ marginTop: 45 }}>Save recipe</Button>
      : <Button onPress={onSubmit} style={{ marginTop: 45 }}>Add recipe</Button>
    }
  </View>
)

export default AddNewRecipeForm