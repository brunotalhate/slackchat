import React from 'react'
import { Platform } from 'react-native'
import glamorous from 'glamorous-native'
import { theme } from '../../constants/theme'

const StyledTextArea = glamorous.textInput({
  flex: 1,
  fontSize: theme.fontSize.input,

  ...Platform.select({
    ios: {
      paddingHorizontal: 12,
      marginTop: 5,
      marginBottom: 10,
      maxHeight: 100,
    },
  }),
})

export function TextArea({ placeholder, value, onChangeText }) {
  return (
    <StyledTextArea
      multiline
      placeholderTextColor={theme.colors.textSecondary}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  )
}
