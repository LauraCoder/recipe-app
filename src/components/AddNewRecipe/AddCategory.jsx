import { StyleSheet, } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import useCategories from '../../hooks/useCategories'
import theme from '../../theme'


const styles = StyleSheet.create({
  picker: {
    flex: 1,
    color: theme.colors.textPrimary,
  },
})

const AddCategory = ({ values, handleChange, handleBlur, }) => {
  const { categories } = useCategories()

  return (
    <>
      <Picker
        useNativeAndroidPickerStyle={false}
        style={styles.picker}
        onValueChange={handleChange('category')}
        onBlur={handleBlur('category')}
        selectedValue={values.category}
      >
        <Picker.Item
          style={{ fontSize: theme.fontSizes.body, color: '#a1a1a1' }}
          label='Category'
          value={null}
        />
        {categories.map(category =>
          <Picker.Item
            style={{ fontSize: theme.fontSizes.body, color: theme.colors.textPrimary }}
            label={category.title}
            value={category.title}
            key={category.id}
          />
        )}
      </Picker>
    </>
  )
}

export default AddCategory