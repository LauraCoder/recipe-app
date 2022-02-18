import { StyleSheet } from 'react-native'
import { Link, } from 'react-router-native'

import Text from '../Text'

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 15,
    marginTop: 15,
    paddingBottom: 15,
  },
})

const AppBarTab = ({ link, children, }) => (
  <Link to={link} underlayColor='transparent' activeOpacity={.5}>
    <Text style={styles.text}>{children}</Text>
  </Link>
)

export default AppBarTab