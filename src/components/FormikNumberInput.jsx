//import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
//import Text from './Text'
//import theme from '../theme'

/*const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.warning,
  },
})*/

const FormikNumberInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  //{showError && <Text style={styles.errorText}>{meta.error}</Text>}

  return (
    <>
      <TextInput arrayInput
        onChangeText={value => helpers.setValue(Number(value))}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
    </>
  )
}

export default FormikNumberInput