import { SearchBar, Overlay } from 'react-native-elements'

const SearchOverlay = ({ toggleOverlay, visible, search, updateSearch }) => (
  <Overlay
    isVisible={visible}
    onBackdropPress={toggleOverlay}
    overlayStyle={{ width: 300, padding: 5 }}
  >
    <SearchBar
      placeholder='Type here...'
      onChangeText={updateSearch}
      value={search}
      containerStyle={{
        backgroundColor: '#fff',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
      }}
      inputContainerStyle={{ backgroundColor: '#fff' }}
      searchIcon={{ size: 20 }}
      showLoading
      showCancel
      lightTheme
    />
  </Overlay>
)

export default SearchOverlay