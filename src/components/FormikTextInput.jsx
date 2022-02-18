import { StyleSheet, View } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.warning,
    /*elevation: 100,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 20,
    paddingRight: 10,*/
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  //{showError && <Text style={styles.errorText}>{meta.error}</Text>}

  return (
    <View>
      <TextInput whiteInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
    </View>
  )
}

export default FormikTextInput