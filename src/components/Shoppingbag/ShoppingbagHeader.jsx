import { StyleSheet, View, } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
    marginBottom: 35,
  },
  title: {
    transform: [{
      rotate: '-5deg'
    }]
  },
})

const ShoppingbagHeader = () => (
  <View style={styles.header}>
    <Text heading style={styles.title}>
      Shopping Bag
    </Text>
  </View>
)

export default ShoppingbagHeader