import { Image as NativeImage, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardImage: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 160,
    maxHeight: 160,
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

  return <NativeImage style={imageStyle} source={{ uri: `${image}` }} />
}

export default Image