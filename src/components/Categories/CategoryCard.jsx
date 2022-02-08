import { StyleSheet, View, Image } from 'react-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    margin: 5,
    height: 200,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemInvisible: {
    flex: 1,
    margin: 5,
    height: 200,
    backgroundColor: 'transparent',
  },
  cardImage: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    flex: 1,
    height: 150,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  }
});

const CategoryCard = ({ title, image, empty }) => {
  if (empty) {
    return <View style={styles.item, styles.itemInvisible} />
  }
  return (
    <View style={styles.item}>
      <Image
        style={styles.cardImage}
        source={{
          uri: `${image}`,
        }}
      />
      <View style={styles.content}>
        <Text subHeading>{title}</Text>
      </View>
    </View>
  )
}

export default CategoryCard