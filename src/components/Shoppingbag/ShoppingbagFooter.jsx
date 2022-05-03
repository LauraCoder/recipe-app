import { StyleSheet, View, } from 'react-native'
import Button from '../Button'

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
  },
})

const ShoppingbagFooter = ({ deleteSingleIngredient }) => (
  <View style={styles.footer}>
    <Button onPress={() => deleteSingleIngredient}>
      Delete chosen
    </Button>
  </View>
)

export default ShoppingbagFooter