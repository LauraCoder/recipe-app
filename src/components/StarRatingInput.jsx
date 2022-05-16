import { StyleSheet, } from 'react-native'
import { useField } from 'formik'
import theme from '../theme'
import { Rating } from 'react-native-elements'
import Text from './Text'

const styles = StyleSheet.create({
  rating: {
    marginVertical: 5,
  },
  errorText: {
    marginTop: 5,
    color: theme.colors.warning,
  },
})

const StarRatingInput  = ({ warning, style, name, ...props }) => {
  const ratingStyle = [
    styles.rating,
    warning && styles.warning,
    style,
  ]
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
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
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default StarRatingInput