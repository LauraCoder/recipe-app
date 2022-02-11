import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color: theme.colors.textPrimary,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  warning: {
    borderColor: theme.colors.warning,
  },
});  

const TextInput = ({ whiteInput, style, error, ...props }) => {
  const textInputStyle = [
    whiteInput && styles.inputField,
    error && styles.warning,
    style,
  ];

  return <NativeTextInput 
    style={textInputStyle}
    error={error}
    {...props} 
  />;
};

export default TextInput;