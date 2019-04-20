import React from 'react'
import { Platform, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import VectorIcon from 'react-native-vector-icons/Ionicons'
import glamorous from 'glamorous-native'
import Touchable from 'react-native-platform-touchable'
import { theme } from '../../constants/theme'

const isIOS = Platform.OS === 'ios'
const padding = isIOS ? 10 : 12

export const Wrap = glamorous.view({ padding })

export const StyledIcon = glamorous(VectorIcon)(({ size }) => ({
  ...Platform.select({
    ios: {
      width: size,
      height: size,
      textAlign: 'center',
    },
  }),
}))

export const Icon = ({ name, color, size, onPress, style }) => {
  const prefix = isIOS ? 'ios-' : 'md-'
  return (
    <Wrap style={style}>
      <Touchable
        hitSlop={{
          left: padding,
          right: padding,
          top: padding,
          bottom: padding,
        }}
        onPress={onPress}
        background={Touchable.SelectableBackgroundBorderless()}
      >
        <StyledIcon
          name={`${prefix}${name}`}
          color={color || theme.colors.textSecondary}
          size={size || theme.iconSize.standard}
        />
      </Touchable>
    </Wrap>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
}

Icon.defaultProps = {
  color: theme.colors.textSecondary,
  size: theme.iconSize.standard,
  onPress: () => {},
  style: {},
}
