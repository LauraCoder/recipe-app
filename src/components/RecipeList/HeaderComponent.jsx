
import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, } from 'react-native'
import { Overlay, Slider, Input, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconSecondary from 'react-native-vector-icons/FontAwesome'

import Text from '../Text'
import theme from '../../theme'
import StarRating from '../StarRating'
import Button from '../Button'

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
  singleFilter: {
    marginHorizontal: 10,
    marginVertical: 5,
  }
})

const FilterOverlay = ({ visible, toggleOverlay, ratingValue, setRatingValue, addFilters }) => (
  <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: 300, padding: 15 }}>
    <Text fontSize='secondaryHeading' style={{ alignSelf: 'center', marginBottom: 20 }}>Filter by</Text>
    <View style={[styles.singleFilter, { marginBottom: 15 }]}>
      <Text subHeading style={{ paddingBottom: 7 }}>Rating</Text>
      <Slider
        value={ratingValue}
        onValueChange={setRatingValue}
        maximumValue={5}
        minimumValue={0}
        step={1}
        allowTouchTrack
        maximumTrackTintColor={theme.colors.secondary}
        minimumTrackTintColor={theme.colors.primary}
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 30, width: 26, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <IconSecondary
              name='circle'
              size={30}
              containerStyle={{ bottom: 20, right: 20, }}
              color={theme.colors.primary}
            />
          ),
        }}
      />
      <StarRating readOnly startingValue={ratingValue} imageSize={25} />
    </View>
    <View style={styles.singleFilter}>
      <Text subHeading style={{ paddingBottom: 7 }}>Max. cooking time</Text>
      <Input
        placeholder='min'
        inputStyle={{ fontSize: theme.fontSizes.subheading, }}
        rightIcon={
          <Icon
            name='clock'
            size={20}
            color={theme.colors.secondary}
          />
        }
      />
    </View>
    <View style={styles.singleFilter}>
      <Text subHeading style={{ paddingBottom: 7 }}>Servings</Text>
      <Input
        placeholder='amount of persons'
        inputStyle={{ fontSize: theme.fontSizes.subheading, }}
        rightIcon={
          <Icon
            name='user'
            size={20}
            color={theme.colors.secondary}
          />
        }
      />
    </View>
    <View style={styles.singleFilter}>
      <Text subHeading style={{ paddingBottom: 7 }}>Ingredients</Text>
      <Input
        placeholder='ingredient'
        inputStyle={{ fontSize: theme.fontSizes.subheading, }}
        rightIcon={
          <Icon
            name='plus'
            size={20}
            color={theme.colors.secondary}
          />
        }
      />
    </View>
    <View style={{ flexDirection: 'row', alignContent: 'space-between', }}>
      <Button onPress={addFilters}>Add filters</Button>
      <Button secondary onPress={toggleOverlay} style={{ width: '50%' }}>Cancel</Button>
    </View>
  </Overlay>
)

const HeaderComponent = ({ title, navigate, }) => {
  const [visible, setVisible] = useState(false)
  const [ratingValue, setRatingValue] = useState()

  const toggleOverlay = () => setVisible(!visible)

  const addFilters = () => {
    console.log('click')
    setVisible(!visible)
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigate('/')}>
        <Text heading>{title}</Text>
      </TouchableOpacity>
      <View style={styles.icons}>
        <Icon name='sort' style={styles.sortIcon} />
        <TouchableOpacity onPress={toggleOverlay} activeOpacity={.8}>
          <Icon name='filter' style={styles.filterIcon} />
        </TouchableOpacity>
        <FilterOverlay
          visible={visible}
          toggleOverlay={toggleOverlay}
          addFilters={addFilters}
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
      </View>
    </View>
  )
}


export default HeaderComponent