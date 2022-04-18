import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    width: '50%',
  },
  secondary: {
    backgroundColor: theme.colors.white,
    width: '70%',
  },
  warning: {
    backgroundColor: theme.colors.warning,
  },
})

const Button  = ({ children, onPress, warning, secondary, style, ...props }) => {
  const buttonStyle = [
    styles.button,
    secondary && styles.secondary,
    warning && styles.warning,
    style,
  ]

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} activeOpacity={0.8} {...props}>
      <Text color={!secondary ? 'white' : 'primary'} fontWeight='bold'>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button