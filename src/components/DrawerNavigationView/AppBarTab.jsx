import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

import Text from '../Text'

const styles = StyleSheet.create({
  tab: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16
  },
  subtab: {
    marginHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 16,
    paddingLeft: 35
  },
})

const AppBarTab = ({ link, children, onPress, subtab, style }) => {
  const tabStyle = [
    styles.tab,
    subtab && styles.subtab,
    style
  ]

  return (
    <Link style={tabStyle} to={link} onPress={onPress} underlayColor='#e9f0f5' >
      <Text style={styles.text}>{children}</Text>
    </Link>
  )
}

export default AppBarTab