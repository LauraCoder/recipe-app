import { StyleSheet, View } from 'react-native';
import AppBarTop from './AppBarTop';
import AppBarBottom from './AppBarBottom';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBarTop />
      <AppBarBottom />
    </View>
  );
};

export default Main;