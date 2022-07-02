import { SearchBar, Overlay } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'

const SearchOverlay = ({ toggleOverlay, visible, title, updateSearch, onSubmitSearch }) => (
  <Overlay
    isVisible={visible}
    onBackdropPress={toggleOverlay}
    overlayStyle={{ width: 300, padding: 5 }}
  >
    <SearchBar
      placeholder='Type here...'
      onChangeText={updateSearch}
      value={title}
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
      on
    />
    <TouchableOpacity onPress={() => onSubmitSearch()}>
      <Text>Etsi</Text>
    </TouchableOpacity>
  </Overlay>
)

export default SearchOverlay