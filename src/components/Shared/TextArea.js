import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../constants/theme'
import { StyledTextArea } from './TextArea.components'

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
