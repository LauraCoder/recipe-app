import { StyleSheet, TouchableOpacity, View, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Text from '../Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  icons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sortIcon: {
    marginRight: 30,
    color: theme.colors.primary,
    fontSize: 20,
  },
  filterIcon: {
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 100,
    padding: 8,
    color: theme.colors.primary,
    fontSize: 15,
  },
})

const HeaderComponent = ({ title, navigate }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigate('/')}>
      <Text heading>{title}</Text>
    </TouchableOpacity>
    <View style={styles.icons}>
      <Icon name='sort' style={styles.sortIcon} />
      <Icon name='filter' style={styles.filterIcon} />
    </View>
  </View>
)


export default HeaderComponent