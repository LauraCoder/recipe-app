import React, { useState } from 'react'
import { Permissions } from 'expo'
import * as ImagePicker from 'expo-image-picker'
import { View, StyleSheet, Image, } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../Button'
import { TouchableOpacity } from 'react-native'
import { Overlay } from 'react-native-elements'


const styles = StyleSheet.create({
  imageInput: {
    backgroundColor: '#ccc',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const AddImageOverlay = ({ toggleOverlay, visible, pickImage, takePicture }) => (
  <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', paddingHorizontal: 5, paddingBottom: 20, display: 'flex', flexDirection: 'row' }}>
    <Button onPress={pickImage} style={{ flex: 0.5 }}>From gallery</Button>
    <Button onPress={takePicture} style={{ flex: 0.5 }}>Take a photo</Button>
  </Overlay>
)

const AddImage = ({ values }) => {
  const [visible, setVisible] = useState(false)
  const [image, setImage] = useState(null)
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions()
  const [statusCamera, requestPermissionCamera] = ImagePicker.useCameraPermissions()

  const toggleOverlay = () => setVisible(!visible)

  const pickImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    console.log('stat', status, statusCamera)
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

    console.log('result', result)

    if (!result.cancelled) {
      setImage(result.uri)
      values.image = result.uri
    }
  }

  const takePicture = async () => {
    await ImagePicker.getCameraPermissionsAsync()
    /*if (!statusCamera.granted) {
      alert('Permission denied')
      return null
    }*/
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    })
    if (!result.cancelled) {
      setImage(result.uri)
      values.image = result.uri
    }
  }

  return (
    <TouchableOpacity onPress={toggleOverlay} activeOpacity={.8}>
      {image
        ? <Image source={{ uri: image }} style={{ height: 200 }} name='image' />
        : (
          <View style={styles.imageInput}>
            <MaterialIcon name='camera-plus' color='#fff' size={35} />
          </View>
        )
      }
      <AddImageOverlay
        toggleOverlay={toggleOverlay}
        visible={visible}
        setVisible={setVisible}
        pickImage={pickImage}
        takePicture={takePicture}
      />
    </TouchableOpacity>
  )
}

export default AddImage