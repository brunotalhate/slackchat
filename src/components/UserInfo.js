import React from 'react'
import { Text } from 'react-native'
import { Row } from './Shared/Row'
import { theme } from '../constants/theme'
import { Icon } from './Shared/Icon'

export function UserInfo() {
  return (
    <Row
      elevation={2}
      maxHeight={32}
      paddingLeft={theme.module * 2}
      backgroundColor={theme.colors.surface}
      // borderBottomWidth={theme.borderWidth}
      // borderColor={theme.colors.divider}
    >
      <Text
        style={{
          fontSize: theme.fontSize.button,
          flex: 1,
          color: theme.colors.text,
        }}
      >
        # chat
      </Text>
      <Icon name='arrow-dropdown' />
    </Row>
  )
}
