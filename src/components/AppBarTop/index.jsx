import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    backgroundColor: '#cccccc',
  },
});

const AppBarTop = () => {
  return (
    <View style={styles.container}>
      <AppBarTab link='/'>Recipess</AppBarTab>
    </View>
  );
};

export default AppBarTop;