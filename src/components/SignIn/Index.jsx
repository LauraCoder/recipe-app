//import { useMutation } from '@apollo/client'
//import { useEffect } from 'react'
import { StyleSheet, ImageBackground, View, } from 'react-native'
import { Formik } from 'formik'

//import { LOGIN } from '../../graphql/mutations'
import theme from '../../theme'
import images from '../../../assets/images'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'
import Button from '../Button'
//import useLogin from '../../hooks/useLogin'

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
    resizeMode: 'cover'
  },
})

const SignIn = () => {
  //const [signIn] = useLogin()

  const onSubmit = async (values) => {
    console.log('login', values)
    /*const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
    } catch (e) {
      console.log(e)
    }*/
  }

  /*const { image, title, category, rating, servings, cookingTime, ingredients, instructions  } = values
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
    }*/

  return (
    <ImageBackground source={images.appBackground} imageStyle={{ opacity: 1 }} style={styles.image}>
      <View style={styles.header}>
        <Text heading style={styles.title}>RecipeBook</Text>
        <Text style={{ fontSize: 25, }} >Sign In</Text>
      </View>
      <Formik
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) =>
          <View style={styles.form}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' />
            <Button onPress={handleSubmit} style={{ marginTop: 45 }}>Sign In</Button>
          </View>
        }
      </Formik>
    </ImageBackground>
  )
}

export default SignIn