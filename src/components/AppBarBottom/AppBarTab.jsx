import { StyleSheet, Text } from 'react-native';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginTop: 20,
    paddingBottom: 25,
  },
});

const AppBarTab = ({ link, children, onPress }) => (
  <Link to={link} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </Link>
);

export default AppBarTab;