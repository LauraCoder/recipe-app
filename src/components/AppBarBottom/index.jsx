import { View, StyleSheet, ScrollView } from 'react-native';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    paddingHorizontal: 10,
    backgroundColor: '#cccccc',
  },
});

const AppBarBottom = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link='/'>Snacks & Starters</AppBarTab>
        <AppBarTab link='/'>Salads</AppBarTab>
        <AppBarTab link='/'>Main Courses</AppBarTab>
        <AppBarTab link='/'>Desserts</AppBarTab>
        <AppBarTab link='/'>Drinks</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBarBottom;