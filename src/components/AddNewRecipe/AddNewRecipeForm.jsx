import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { FieldArray, } from 'formik'

import { categoryList } from '../../../data/categories'
import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'
import Button from '../Button'
import FormikTextArrayInput from '../FormikTextArrayInput'
import StarRating from '../StarRating'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  component: {
    margin: 10,
  },
  item: {
    flexDirection: 'column',
    marginTop: 10,
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
  picker: {
    flex: 1,
    color: theme.colors.textPrimary,
  },
  pickerLabel: {
    flex: 1,
    color: '#a1a1a1',
  },
  deleteIcon: {
    fontSize: 30,
    color: theme.colors.secondary,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    padding: 5,
  },
  detailIcon: {
    fontSize: 20,
    color: theme.colors.secondary,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    marginRight: 10,
  }
})

const AddNewRecipeForm = ({ onSubmit, values, }) => {
  const [selectedValue, setSelectedValue] = useState()

  return (
    <View style={styles.component}>
      <View style={styles.item}>
        <View style={{ backgroundColor: '#ccc', height: 200, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialIcon name='camera-plus' color='#fff' size={35} />
        </View>
      </View>
      <FormikTextInput name='title' placeholder='Title' />
      <View style={styles.item}>
        <Picker
          selectedValue={selectedValue}
          useNativeAndroidPickerStyle={false}
          style={selectedValue ? styles.picker : styles.pickerLabel}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item style={{ fontSize: theme.fontSizes.body, color: '#a1a1a1' }} label='Category' value={null} />
          {categoryList.map(category =>
            <Picker.Item style={{ fontSize: theme.fontSizes.body, color: theme.colors.textPrimary }} label={category.title} value={category.title} key={category.id} />
          )}
        </Picker>
      </View>
      <View style={styles.item}>
        <StarRating imageSize={36} />
      </View>
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.arrayInput} marginRight={10}>
          <FormikTextArrayInput name='servings' placeholder='Servings' style={{ flex: 0.95 }} />
          <FontIcon name='user' style={styles.detailIcon} />
        </View>
        <View style={styles.arrayInput}>
          <FormikTextArrayInput name='cookingTime' placeholder='Cooking Time' style={{ flex: 0.95 }} />
          <FontIcon name='clock' style={styles.detailIcon} />
        </View>
      </View>
      <Text heading style={{ marginTop: 35 }}>Ingredients</Text>
      <FieldArray name='ingredients'>
        {({ remove, push }) => (
          <>
            {values.ingredients.length > 0 &&
                values.ingredients.map((ingredient, index) => (
                  <View style={styles.arrayInput} key={index}>
                    <FormikTextArrayInput name={`ingredients.${index}.ingredient`} placeholder='Ingredient' style={{ flex: 0.95, }} />
                    <TouchableOpacity onPress={() => remove(index)}>
                      <FeatherIcon name='x-circle' style={styles.deleteIcon}/>
                    </TouchableOpacity>
                  </View>
                ))}
            <Button secondary onPress={() => push({ ingredient: '' })}>Add more ingredients</Button>
          </>
        )}
      </FieldArray>
      <Text heading style={{ marginTop: 35 }}>Directions</Text>
      <FieldArray name='instructions'>
        {({ remove, push }) => (
          <>
            {values.instructions.length > 0 &&
                values.instructions.map((step, index) => (
                  <View style={styles.arrayInput} key={index}>
                    <Text color='primary' fontSize='subheading' fontWeight='bold'>{index + 1}</Text>
                    <FormikTextArrayInput name={`instructions.${index}.step`} placeholder='Step' style={{ flex: 0.95, }} />
                    <TouchableOpacity onPress={() => remove(index)}>
                      <FeatherIcon name='x-circle' style={styles.deleteIcon}/>
                    </TouchableOpacity>
                  </View>
                ))}
            <Button secondary onPress={() => push({ ingredient: '' })}>Add more steps</Button>
          </>
        )}
      </FieldArray>
      <Button onPress={onSubmit} style={{ marginTop: 45 }}>Save recipe</Button>
    </View>
  )
}

export default AddNewRecipeForm