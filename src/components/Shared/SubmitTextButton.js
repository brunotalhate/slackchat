import React from 'react'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import Touchable from 'react-native-platform-touchable'
import { Button, Text } from './SubmitTextButton.components'

export const SubmitTextButton = ({ onPress, disabled, style, children }) => (
  <Touchable onPress={onPress} disabled={disabled}>
    <Button disabled={disabled} style={style}>
      <Text disabled={disabled}>{children}</Text>
    </Button>
  </Touchable>
)

SubmitTextButton.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: ViewPropTypes.style,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

SubmitTextButton.defaultProps = {
  onPress: () => {},
  disabled: false,
  style: {},
}
