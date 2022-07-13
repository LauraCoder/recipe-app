import { useMutation } from '@apollo/client'
import { useLocation, useNavigate } from 'react-router-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import { ADD_RECIPE, EDIT_RECIPE } from '../../graphql/mutations'
import AddEditRecipeForm from './AddEditRecipeForm'
import { ScrollView } from 'react-native'

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title must be longer')
    .required('Title is required'),
  servings: yup
    .number('Please write a number')
    .min(1, 'Number of servings must be greater or equal to 1'),
  cookingTime: yup
    .number()
    .min(1, 'Cooking time must be greater or equal to 1')
    .positive('The rating value must be at least 0'),
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
    editRecipeId: recipeToEdit?.id,
    image: recipeToEdit?.image,
    title: recipeToEdit?.title,
    category: recipeToEdit?.category,
    rating: recipeToEdit?.rating,
    servings: recipeToEdit?.servings.toString(),
    cookingTime: recipeToEdit?.cookingTime.toString(),
    ingredients: recipeToEdit?.ingredients,
    instructions: recipeToEdit?.instructions,
  }

  const onSubmitEdit = async (values) => {
    const { editRecipeId, image, title, category, rating, servings, cookingTime, ingredients, instructions } = values
    try {
      const { data } = await editRecipe({
        variables: {
          editRecipeId,
          title,
          category,
          servings,
          cookingTime,
          rating,
          image,
          ingredients,
          instructions
        }
      })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
    navigate(`/categories/${category}/${recipeToEdit.id}`)
  }

  const onSubmit = async (values) => {
    const { image, title, category, rating, servings, cookingTime, ingredients, instructions  } = values

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
      console.log(data)
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
            <AddEditRecipeForm
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
          <AddEditRecipeForm
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