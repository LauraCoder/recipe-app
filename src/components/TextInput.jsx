import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color: theme.colors.textPrimary,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  arrayInput: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    padding: 10,
    color: theme.colors.textPrimary,
  },
  warning: {
    color: theme.colors.warning,
  },
})

const TextInput = ({ whiteInput, arrayInput, style, error, ...props }) => {
  const textInputStyle = [
    whiteInput && styles.inputField,
    arrayInput && styles.arrayInput,
    error && styles.warning,
    style,
  ]

  return <NativeTextInput
    style={textInputStyle}
    error={error}
    {...props}
  />
}

export default TextInput