import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

import Text from '../Text'

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginTop: 14,
    paddingBottom: 14,
  },
})

const AppBarTab = ({ link, children, onPress }) => (
  <Link to={link} onPress={onPress} underlayColor='transparent' activeOpacity={.5}>
    <Text style={styles.text}>{children}</Text>
  </Link>
)

export default AppBarTab