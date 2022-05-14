import { useMutation } from '@apollo/client'
import { useLocation, useNavigate } from 'react-router-native'
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
  /*servings: yup
    .number()
    .min(1, 'Number of servings must be greater or equal to 1')
    .required('Number of servings is required'),
  cookingTime: yup
    .number()
    .min(1, 'Cooking time must be greater or equal to 1')
    .required('Cooking time is required'),*/
})

const initialValues = {
  title: '',
  category: '',
  rating: null,
  servings: '',
  cookingTime: '',
  ingredients: [''],
  instructions:  [''],
}

const AddNewRecipe = () => {
  const [addRecipe, { error }] = useMutation(ADD_RECIPE)
  let navigate = useNavigate()
  const location = useLocation()
  const recipeToEdit = location?.state?.recipe

  const onSubmit = async (values) => {
    const { image, title, category, rating, servings, cookingTime, ingredients, instructions  } = values
    console.log('values', values)

    try {
      const { data } = await addRecipe({
        variables: {
          image,
          title,
          category,
          servings,
          cookingTime,
          rating,
          ingredients,
          instructions
        }
      })
      navigate(`/categories/${category}/${data.addRecipe.id}`)
    } catch (e) {
      console.log(e)
    }
  }

  if (recipeToEdit) {
    return (
<ScrollView>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, handleChange, handleBlur, }) =>
          <AddNewRecipeForm
            onSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            error={error}
            recipeToEdit={recipeToEdit}
          />
        }
      </Formik>
    </ScrollView>
    )
  }
  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, handleChange, handleBlur, }) =>
          <AddNewRecipeForm
            onSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            error={error}
          />
        }
      </Formik>
    </ScrollView>
  )
}

export default AddNewRecipe