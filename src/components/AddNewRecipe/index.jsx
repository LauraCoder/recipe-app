import { useMutation } from '@apollo/client'
import { useLocation, useNavigate } from 'react-router-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import { ADD_RECIPE, EDIT_RECIPE } from '../../graphql/mutations'
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

const AddNewRecipe = () => {
  const [addRecipe, { error }] = useMutation(ADD_RECIPE)
  const [editRecipe] = useMutation(EDIT_RECIPE)
  let navigate = useNavigate()
  const location = useLocation()
  const recipeToEdit = location?.state?.recipe

  const initialValues = {
    title: '',
    category: '',
    rating: null,
    servings: '',
    cookingTime: '',
    ingredients: [''],
    instructions:  [''],
  }

  const initialEditValues = {
    image: null,
    title: recipeToEdit?.title,
    category: recipeToEdit?.category,
    rating: recipeToEdit?.rating,
    servings: recipeToEdit?.servings.toString(),
    cookingTime: recipeToEdit?.cookingTime.toString(),
    ingredients: recipeToEdit?.ingredients,
    instructions: recipeToEdit?.instructions,
  }

  const onSubmitEdit = async (values) => {
    const { image, title, category, rating, servings, cookingTime, } = values
    console.log('values', values)

    console.log('edit')
    try {
      const { data } = await editRecipe({
        variables: {
          title,
          category,
          servings,
          cookingTime,
          rating,
          image
        }
      })
      console.log('edit', data)
    } catch (e) {
      console.log(e)
    }
    navigate(`/categories/${category}/${recipeToEdit.id}`)
  }

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
      console.log('data', data)
      navigate(`/categories/${category}/${data.addRecipe.id}`)
    } catch (e) {
      console.log(e)
    }
  }

  if (recipeToEdit) {
    return (
      <ScrollView>
        <Formik
          initialValues={initialEditValues}
          onSubmit={onSubmitEdit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, handleChange, handleBlur, }) =>
            <AddNewRecipeForm
              onSubmitEdit={handleSubmit}
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