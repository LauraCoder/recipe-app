import { StyleSheet, View, } from 'react-native'

import ItemView from '../ItemView'
import Image from '../Image'
import Text from '../Text'

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  }
})

const CategoryCard = ({ title, image, }) => (
  <ItemView>
    <Image image={image} />
    <View style={styles.content}>
      <Text subHeading>{title}</Text>
    </View>
  </ItemView>
)

export default CategoryCard