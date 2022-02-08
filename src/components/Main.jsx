import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import theme from '../theme';
import AppBarTop from './AppBarTop';
import AppBarBottom from './AppBarBottom';
import Categories from './Categories';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBarTop />
      <Routes>
        <Route path="/" element={<Categories />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AppBarBottom />
    </View>
  );
};

export default Main;