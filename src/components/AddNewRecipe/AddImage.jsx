import React, { useState, useEffect } from 'react'
import { Permissions } from 'expo'
import * as ImagePicker from 'expo-image-picker'
import { View, StyleSheet, Image, } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../../theme'
import Button from '../Button'
import { TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
  imageInput: {
    backgroundColor: '#ccc',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const AddImage = ( ) => {
  const [image, setImage] = useState(null)
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions()

  const pickImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    console.log('stat', status)
    if (!status.granted) {
      alert('Permission denied')
      return null
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <TouchableOpacity onPress={pickImage} activeOpacity={.8}>
      {image
        ? <Image source={{ uri: image }} style={{ height: 200 }} />
        : (
          <View style={styles.imageInput}>
            <MaterialIcon name='camera-plus' color='#fff' size={35} />
          </View>
        )
      }
    </TouchableOpacity>
  )
}

export default AddImage