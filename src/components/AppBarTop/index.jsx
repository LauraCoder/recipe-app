import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.backgroundSecondary,
  },
});

const AppBarTop = () => {
  return (
    <View style={styles.container}>
      <AppBarTab link='/'>Categories</AppBarTab>
    </View>
  );
};

export default AppBarTop;