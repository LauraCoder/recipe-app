import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

import Text from '../Text'

const styles = StyleSheet.create({
  tab: {
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    marginHorizontal: 10,
    marginTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16
  },
})

const AppBarTab = ({ link, children, onPress }) => (
  <Link style={styles.tab} to={link} onPress={onPress} underlayColor='#e9f0f5' >
    <Text style={styles.text}>{children}</Text>
  </Link>
)

export default AppBarTab