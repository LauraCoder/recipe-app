import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  headingStyle: {
    fontSize: theme.fontSizes.heading,
    color: theme.colors.primary,
    fontFamily: theme.fonts.heading,
  },
  subheadingStyle: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textPrimary,
  },
  detailsStyle: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
  },
  colorTextSecondary: {
    color: theme.colors.secondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  fontSizeSecondaryHeading: {
    fontSize: theme.fontSizes.recipeSubHeading,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  recipeSubheading: {
    fontSize: theme.fontSizes.recipeSubHeading,
  },
  recipeBody: {
    fontSize: theme.fontSizes.recipeBody,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
})

const Text = ({
  heading,
  subHeading,
  recipeBody,
  recipeSubheading,
  details,
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    heading && styles.headingStyle,
    subHeading && styles.subheadingStyle,
    recipeSubheading && styles.recipeSubheading,
    recipeBody && styles.recipeBody,
    details && styles.detailsStyle,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'secondaryHeading' && styles.fontSizeSecondaryHeading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text