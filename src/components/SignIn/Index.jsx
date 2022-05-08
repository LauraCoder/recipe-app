import { StyleSheet, ImageBackground, View, } from 'react-native'
import { Formik } from 'formik'

import theme from '../../theme'
import images from '../../../assets/images'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'

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

const SignIn = ( ) => {
  return (
    <ImageBackground source={images.appBackground} imageStyle={{ opacity: 1 }} style={styles.image}>
      <View style={styles.header}>
        <Text heading style={styles.title}>RecipeBook</Text>
        <Text style={{ fontSize: 25, }} >Sign In</Text>
      </View>
      <Formik
      >
        {() =>
          <View style={styles.form}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' />
          </View>
        }
      </Formik>
    </ImageBackground>
  )
}

export default SignIn