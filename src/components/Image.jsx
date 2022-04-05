import { Image as NativeImage, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import theme from '../theme'

const styles = StyleSheet.create({
  cardImage: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 180,
    maxHeight: 180,
  },
  noImage: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 160,
    maxHeight: 160,
    textAlign: 'center',
    paddingTop: 60,
    fontSize: 40,
    color: theme.colors.secondary
  },
  singleRecipeImage: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 250,
    maxHeight: 250,
  },
})

const Image = ({ style, image, singleRecipe }) => {
  const imageStyle = [
    styles.cardImage,
    singleRecipe && styles.singleRecipeImage,
    style,
  ]

  if(!image) return <Icon name='image-outline' style={styles.noImage} />

  return <NativeImage style={imageStyle} source={{ uri: `${image}` }} />
}

export default Image