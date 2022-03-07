import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import { ADD_RECIPE } from '../../graphql/mutations'
import AddNewRecipeForm from './AddNewRecipeForm'
import { ScrollView } from 'react-native'

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title must be longer')
    .required('Title is required'),
  servings: yup
    .number()
    .min(1, 'Number of servings must be greater or equal to 1')
    .required('Number of servings is required'),
  cookingTime: yup
    .number()
    .min(1, 'Cooking time must be greater or equal to 1')
    .required('Cooking time is required'),
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
  const [addRecipe, { error }] = useMutation(ADD_RECIPE)
  let navigate = useNavigate()

  const onSubmit = async (values) => {
    const { title, category, servings, cookingTime, } = values
    console.log('cat', category)

    console.log('values', values)

    try {
      const { data } = await addRecipe({
        variables: {
          recipe: {
            title,
            category,
            servings,
            cookingTime,
          }
        }
      })
      console.log(data)
      navigate('/categories')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, }) =>
          <AddNewRecipeForm onSubmit={handleSubmit} values={values} error={error} />}
      </Formik>
    </ScrollView>
  )
}

export default AddNewRecipe