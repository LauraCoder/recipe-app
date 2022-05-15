import { StyleSheet, } from 'react-native'
import { useField } from 'formik'
import theme from '../theme'
import { Rating } from 'react-native-elements'

const styles = StyleSheet.create({
  rating: {
    marginVertical: 5,
  }
})

const StarRatingInput  = ({ warning, style, name, ...props }) => {
  const ratingStyle = [
    styles.rating,
    warning && styles.warning,
    style,
  ]
  const [field, meta, helpers] = useField(name)

  return (
    <Rating
      type='custom'
      ratingColor={theme.colors.tertiary}
      ratingBackgroundColor={theme.colors.secondary}
      tintColor={theme.colors.white}
      startingValue={field.value}
      style={ratingStyle}
      onFinishRating={value => helpers.setValue(value)}
      {...props}
    />
  )
}

export default StarRatingInput