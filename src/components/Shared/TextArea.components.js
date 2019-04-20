import { Platform } from 'react-native'
import glamorous from 'glamorous-native'
import { theme } from '../../constants/theme'

const StyledTextArea = glamorous.textInput(({ inputHeight }) => ({
  flex: 1,
  fontSize: theme.fontSize.input,
  ...Platform.select({
    ios: {
      paddingHorizontal: 12,
      marginTop: 5,
      marginBottom: 10,
      maxHeight: 110,
    },
    android: {
      paddingLeft: theme.module * 2,
      height: Math.min(inputHeight, 100),
    },
  }),
}))

export { StyledTextArea }
