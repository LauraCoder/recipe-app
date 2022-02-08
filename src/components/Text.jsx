import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

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
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ heading, subHeading, details, color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    heading && styles.headingStyle,
    subHeading && styles.subheadingStyle,
    details && styles.detailsStyle,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;