import { Platform } from 'react-native'
import VectorIcon from 'react-native-vector-icons/Ionicons'
import glamorous from 'glamorous-native'

const isIOS = Platform.OS === 'ios'
const padding = isIOS ? 10 : 12

const Wrap = glamorous.view({ padding })

const StyledIcon = glamorous(VectorIcon)(({ size }) => ({
  ...Platform.select({
    ios: {
      width: size,
      height: size,
      textAlign: 'center',
    },
  }),
}))

export { Wrap, StyledIcon, padding }
