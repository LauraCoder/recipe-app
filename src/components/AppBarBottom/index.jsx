import { View, StyleSheet, ScrollView } from 'react-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
});

const AppBarBottom = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link='/categories/Snacks & Starters'>Snacks & Starters</AppBarTab>
        <AppBarTab link='/categories/Salads'>Salads</AppBarTab>
        <AppBarTab link='/categories/Main Courses'>Main Courses</AppBarTab>
        <AppBarTab link='/categories/Desserts'>Desserts</AppBarTab>
        <AppBarTab link='/categories/Drinks'>Drinks</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBarBottom;