import React from 'react'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'
import { theme } from '../../constants/theme'
import { Wrap, StyledIcon } from './Icon'

const isIOS = Platform.OS === 'ios'

export const StaticIcon = ({ name, color, size }) => {
  const prefix = isIOS ? 'ios-' : 'md-'
  return (
    <Wrap>
      <StyledIcon
        name={`${prefix}${name}`}
        color={color || theme.colors.textSecondary}
        size={size || theme.iconSize.standard}
      />
    </Wrap>
  )
}

StaticIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

StaticIcon.defaultProps = {
  color: theme.colors.textSecondary,
  size: theme.iconSize.standard,
}
