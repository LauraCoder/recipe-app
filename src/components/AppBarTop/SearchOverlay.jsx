import { SearchBar, Overlay } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import theme from '../../theme'
import Button from '../Button'

const styles = StyleSheet.create({
  overlay: {
    width: 350,
    padding: 5,
    flexDirection: 'row'
  },
  searchBar: {
    backgroundColor: '#fff',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    flex: 0.9,
    paddingLeft: 0
  },
  searchButton: {
    flexDirection: 'row',
    flex: 0.1,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: 10,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 0,
  },
})

const SearchOverlay = ({ toggleOverlay, visible, title, updateSearch, onSubmitSearch }) => (
  <Overlay
    isVisible={visible}
    onBackdropPress={toggleOverlay}
    overlayStyle={styles.overlay}
  >
    <SearchBar
      placeholder='Search recipe by title...'
      onChangeText={updateSearch}
      value={title}
      containerStyle={styles.searchBar}
      inputContainerStyle={{ backgroundColor: '#fff' }}
      searchIcon={{ size: 0 }}
      showLoading
      showCancel
      lightTheme
      on
    />
    <Button
      onPress={() => onSubmitSearch()}
      style={styles.searchButton}
    >
      <Icon name='search1' size={20} />
    </Button>
  </Overlay>
)

export default SearchOverlay