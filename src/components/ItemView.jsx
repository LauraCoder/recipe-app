import { StyleSheet, View, } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
})

const ItemView = ({ children, ...props }) => {
  return (
    <View style={styles.item} {...props}>
      {children}
    </View>
  )
}

export default ItemView