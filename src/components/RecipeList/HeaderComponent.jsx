
import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, } from 'react-native'
import { Overlay, Slider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconSecondary from 'react-native-vector-icons/FontAwesome'

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
  slider: {
    padding: 10,
  }
})

const FilterOverlay = ({ visible, toggleOverlay, ratingValue, setRatingValue }) => (
  <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: 280 }}>
    <Text style={styles.textPrimary}>Hello!</Text>
    <View style={styles.slider}>
    <Slider
      value={ratingValue}
      onValueChange={setRatingValue}
      maximumValue={5}
      minimumValue={0}
      step={1}
      allowTouchTrack
      trackStyle={{ height: 5, backgroundColor: 'transparent' }}
      thumbStyle={{ height: 30, width: 30, backgroundColor: 'transparent' }}
      thumbProps={{
        children: (
          <IconSecondary
            name='circle'
            size={30}
            containerStyle={{ bottom: 20, right: 20 }}
            color='#ccc'
          />
        ),
      }}
    />
    <Text style={{ paddingTop: 20 }}>Value: {ratingValue}</Text>
    </View>
  </Overlay>
)

const HeaderComponent = ({ title, navigate, }) => {
  const [visible, setVisible] = useState(false)
  const [ratingValue, setRatingValue] = useState()

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigate('/')}>
        <Text heading>{title}</Text>
      </TouchableOpacity>
      <View style={styles.icons}>
        <Icon name='sort' style={styles.sortIcon} />
        <TouchableOpacity onPress={toggleOverlay}>
          <Icon name='filter' style={styles.filterIcon} />
        </TouchableOpacity>
        <FilterOverlay
          visible={visible}
          toggleOverlay={toggleOverlay}
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
      </View>
    </View>
  )
}


export default HeaderComponent