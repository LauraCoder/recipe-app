import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 3,
    padding: 15,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  warning: {
    backgroundColor: theme.colors.warning,
  },
});

const Button  = ({ children, onPress, warning, style, ...props }) => {
  const buttonStyle = [
    styles.button,
    warning && styles.warning,
    style,
  ];

  return (
    <Pressable onPress={onPress} style={buttonStyle} {...props}>
      <Text color='white' fontWeight='bold'>{children}</Text>
    </Pressable>
  )
};

export default Button;