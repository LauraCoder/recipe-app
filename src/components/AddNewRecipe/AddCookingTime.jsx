import { View, StyleSheet, } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

import theme from '../../theme'
import FormikNumberInput from '../FormikNumberInput'


const styles = StyleSheet.create({
  arrayInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  detailIcon: {
    fontSize: 20,
    color: theme.colors.secondary,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    marginRight: 10,
  }
})

const AddCookingTime = () => (
  <View style={styles.arrayInput}>
    <FormikNumberInput name='cookingTime' placeholder='Cooking Time' style={{ flex: 0.95 }} />
    <FontIcon name='clock' style={styles.detailIcon} />
  </View>
)

export default AddCookingTime