import * as yup from 'yup'
import { Formik } from 'formik'
import AddNewRecipeForm from './AddNewRecipeForm'

const validationSchema = yup.object().shape({
})

const initialValues = {
}

const AddNewRecipe = () => {
  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <>
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <AddNewRecipeForm onSubmit={handleSubmit} />}
    </Formik>
    </>
  )
}

export default AddNewRecipe