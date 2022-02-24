import { StyleSheet } from 'react-native'
import { Link, } from 'react-router-native'

import Text from '../Text'

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 15,
    marginTop: 13,
    paddingBottom: 13,
  },
})

const AppBarTab = ({ link, children, onPress }) => (
  <Link to={link} onPress={onPress} underlayColor='transparent' activeOpacity={.5}>
    <Text style={styles.text}>{children}</Text>
  </Link>
)

export default AppBarTab