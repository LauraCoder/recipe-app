import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import theme from '../theme';
import AppBarTop from './AppBarTop';
import AppBarBottom from './AppBarBottom';
import Categories from './Categories';
import CategoryView from './CategoryView';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  content: {
    flex: 1,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBarTop />
      <View style={styles.content} >
        <Routes>
          <Route path="/" element={<Categories />} exact />
          <Route path="/categories/:title" element={<CategoryView />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
      <AppBarBottom />
    </View>
  );
};

export default Main;