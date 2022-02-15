import * as yup from 'yup'
import { Formik } from 'formik'
import AddNewRecipeForm from './AddNewRecipeForm'
import { ScrollView } from 'react-native'

const validationSchema = yup.object().shape({
})

const initialValues = {
  title: '',
  category: '',
  rating: '',
  servings: '',
  cookingTime: '',
  ingredients: [
    {
      ingredient: '',
    }
  ],
  instructions:  [
    {
      step: '',
    }
  ],
}

const AddNewRecipe = () => {
  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <ScrollView>
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values }) => <AddNewRecipeForm onSubmit={handleSubmit} values={values} />}
    </Formik>
    </ScrollView>
  )
}

export default AddNewRecipe