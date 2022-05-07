import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { FieldArray, } from 'formik'

import theme from '../../theme'
import Text from '../Text'
import Button from '../Button'
import FormikTextArrayInput from '../FormikTextArrayInput'


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
  deleteIcon: {
    fontSize: 30,
    color: theme.colors.secondary,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    padding: 5,
  },
})

const AddDirections = ({ values, }) => (
  <>
    <Text heading style={{ marginTop: 35 }}>Directions</Text>
    <FieldArray name='instructions'>
      {({ remove, push }) => (
        <>
          {values.instructions.length > 0 &&
            values.instructions.map((step, index) => (
              <View style={styles.arrayInput} key={index}>
                <Text
                  color='primary'
                  fontSize='secondaryHeading'
                  fontWeight='bold'
                >
                  {index + 1}
                </Text>
                <FormikTextArrayInput
                  name={`instructions.${index}`}
                  placeholder='Step'
                  style={{ flex: 0.95, }}
                />
                <TouchableOpacity onPress={() => remove(index)}>
                  <FeatherIcon name='x-circle' style={styles.deleteIcon}/>
                </TouchableOpacity>
              </View>
            ))}
          <Button secondary onPress={() => push({ instructions: '' })}>
            Add more steps
          </Button>
        </>
      )}
    </FieldArray>
  </>
)

export default AddDirections