import React, { useState } from 'react'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'
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
      height: Math.min(inputHeight, 100),
    },
  }),
}))

export function TextArea({ placeholder, value, onChangeText }) {
  const [inputHeight, setHeight] = useState(48)
  return (
    <StyledTextArea
      multiline
      placeholderTextColor={theme.colors.textSecondary}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      onContentSizeChange={({
        nativeEvent: {
          contentSize: { height },
        },
      }) => setHeight(height)}
      inputHeight={inputHeight}
    />
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
}

TextArea.defaultProps = {
  placeholder: '',
  value: '',
  onChangeText: () => {},
}
