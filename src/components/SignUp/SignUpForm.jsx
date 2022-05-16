import { View, StyleSheet, } from 'react-native'

import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'
import Button from '../Button'

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

const SignUpForm = ({ onSubmit, }) => (
  <View style={styles.component}>
    <FormikTextInput name='username' placeholder='Username' />
    <Button onPress={onSubmit} style={{ marginTop: 45 }}>Sign Up</Button>
  </View>
)

export default SignUpForm