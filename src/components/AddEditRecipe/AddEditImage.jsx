import React, { useState } from 'react'
//import { Permissions } from 'expo'
import * as ImagePicker from 'expo-image-picker'
import { View, StyleSheet, Image, Alert } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Button from '../Button'
import { TouchableOpacity } from 'react-native'
import { Overlay } from 'react-native-elements'
import theme from '../../theme'


const styles = StyleSheet.create({
  imageInput: {
    backgroundColor: '#ccc',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageInput2: {
    justifyContent: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    alignSelf: 'center'
  },
})

const AddImageOverlay = ({ toggleOverlay, visible, pickImage, takePicture, deleteImage }) => (
  <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', paddingHorizontal: 5, paddingBottom: 20, display: 'flex', flexDirection: 'column' }}>
    <View style={{ isplay: 'flex', flexDirection: 'row' }}>
      <Button onPress={pickImage} style={{ flex: 0.5 }}>From gallery</Button>
      <Button onPress={takePicture} style={{ flex: 0.5 }}>Take a photo</Button>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
      <Button secondary onPress={deleteImage} style={{ flex: 0.5 }}>
        <FontIcon name='trash' color={theme.colors.primary} size={15} />
        Delete image
      </Button>
    </View>
  </Overlay>
)

const AddImage = ({ values }) => {
  const [visible, setVisible] = useState(false)
  const [image, setImage] = useState(null)
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions()
  const [statusCamera, requestPermissionCamera] = ImagePicker.useCameraPermissions()
  const imageExist = image || values.image

  const toggleOverlay = () => setVisible(!visible)

  const deleteImage = () => {
    values.image = null
    setVisible(!visible)
  }

  const deleteAlert = () => {
    Alert.alert(
      'Are you sure you want to delete this image?',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Delete', onPress: () => deleteImage() }
      ]
    )
  }

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

  /*
  {imageExist
        ? (
          <View style={styles.imageInput2}>
            <Image source={values.image ? { uri: values.image } : { uri: image }} style={{ height: 200 }} name='image' />
            <MaterialIcon name='camera-plus' color='#fff' size={35} style={styles.cameraIcon} />
          </View>
        )
        : (
          <View style={styles.imageInput}>
            <MaterialIcon name='camera-plus' color='#fff' size={35} />
          </View>
        )
      }
        <TouchableOpacity onPress={() => deleteImage()}>
          <FontIcon name='trash' size={25} style={styles.deleteIcon} />
        </TouchableOpacity>
      */
  return (
    <TouchableOpacity onPress={toggleOverlay} activeOpacity={.8}>
      <View style={imageExist ? styles.imageInput2 : styles.imageInput}>
        {imageExist &&
          <Image source={values.image ? { uri: values.image } : { uri: image }} style={{ height: 200 }} name='image' />
        }
        <MaterialIcon name='camera-plus' color='#fff' size={35} style={styles.cameraIcon} />
      </View>
      <AddImageOverlay
        toggleOverlay={toggleOverlay}
        visible={visible}
        setVisible={setVisible}
        pickImage={pickImage}
        takePicture={takePicture}
        deleteImage={deleteAlert}
      />
    </TouchableOpacity>
  )
}

export default AddImage