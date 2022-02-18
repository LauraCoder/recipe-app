import { StyleSheet, } from 'react-native'
import theme from '../theme'
import { Rating } from 'react-native-elements'

const styles = StyleSheet.create({
  rating: {
    marginVertical: 5,
  }
})

const StarRating  = ({ warning, readOnly, style, ...props }) => {
  const ratingStyle = [
    styles.rating,
    warning && styles.warning,
    style,
  ]

  if (readOnly) {
    return (
      <Rating
        readonly
        type='custom'
        ratingColor={theme.colors.tertiary}
        ratingBackgroundColor={theme.colors.secondary}
        tintColor={theme.colors.white}
        startingValue={0}
        style={ratingStyle}
        {...props}
      />
    )
  }

  return (
    <Rating
      type='custom'
      ratingColor={theme.colors.tertiary}
      ratingBackgroundColor={theme.colors.secondary}
      tintColor={theme.colors.white}
      startingValue={0}
      style={ratingStyle}
      {...props}
    />
  )
}

export default StarRating