import React from 'react'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import Touchable from 'react-native-platform-touchable'
import glamorous from 'glamorous-native'
import { theme } from '../../constants/theme'

const Button = glamorous.view(({ disabled }) => ({
  borderWidth: disabled ? 1 : 0,
  borderColor: theme.colors.divider,
  backgroundColor: disabled ? 'transparent' : theme.colors.accent,
  borderRadius: theme.borderRadius,
}))

const Text = glamorous.text(({ disabled }) => ({
  color: disabled ? theme.colors.textSecondary : theme.colors.surface,
  fontSize: theme.fontSize.button,
  paddingVertical: theme.module,
  paddingHorizontal: theme.module * 1.5,
  textAlign: 'center',
  ...theme.fontWeight.medium,
}))

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
