import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import { StyleSheet, ImageBackground, View, } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import { REGISTER } from '../../graphql/mutations'
import theme from '../../theme'
import images from '../../../assets/images'
import Text from '../Text'
import SignUpForm from './SignUpForm'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    flex: 0.3,
  },
  title: {
    fontSize: 60,
    transform: [{
      rotate: '-5deg'
    }],
    width: 260,
    marginBottom: 20,
  },
  form: {
    paddingHorizontal: 25,
    flex: 0.5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
})

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Title must be longer')
    .required('Title is required'),
})

const initialValues = {
  username: '',
}

const SignUp = () => {
  const [createUser, { error }] = useMutation(REGISTER)
  let navigate = useNavigate()

  const onSubmit = async (values) => {
    console.log('register', values)
    navigate('/')
    const { username } = values

    try {
      const { data } = await createUser({ variables: { username } })
      console.log(data)
      navigate('/categories')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ImageBackground source={images.appBackground} imageStyle={{ opacity: 1 }} style={styles.image}>
      <View style={styles.header}>
        <Text heading style={styles.title}>RecipeBook</Text>
        <Text style={{ fontSize: 25, }} >Sign Up</Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, handleChange, handleBlur, }) =>
          <View style={styles.form}>
            <SignUpForm
              onSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              error={error}
            />
          </View>
        }
      </Formik>
    </ImageBackground>
  )
}

export default SignUp