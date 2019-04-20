import { Platform } from 'react-native'
import glamorous from 'glamorous-native'

const isIOS = Platform.OS === 'ios'

const FillSquare = glamorous.view({
  height: '100%',
  aspectRatio: 1,
  padding: isIOS ? 0 : 10,
})

const WhiteMask = glamorous.view({
  position: 'absolute',
  top: 16,
  bottom: 16,
  left: 16,
  right: 16,
  backgroundColor: 'white',
  borderRadius: 4,
})

const FillImage = glamorous.image({
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
})

export { FillSquare, WhiteMask, FillImage }
