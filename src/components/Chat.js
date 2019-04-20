import React from 'react'
import { StatusBar, Platform } from 'react-native'
import PropTypes from 'prop-types'

import { KeyboardHandlingView } from './Shared/KeyboardHandlingView'
import { UserInfo } from './UserInfo'
import { MessagesList } from './MessagesList'
import { FooterInput } from './FooterInput'

import { theme } from '../constants/theme'
import { messagePropTypes } from '../constants/propTypes'

export function Chat({ messages, onSendMessage }) {
  return (
    <KeyboardHandlingView
      render={isKeyboardActive => (
        <React.Fragment>
          <StatusBar backgroundColor={theme.colors.primaryDark} />
          {Platform.OS === 'android' && <UserInfo />}
          <MessagesList messages={messages} />
          <FooterInput
            onSendMessage={onSendMessage}
            isKeyboardActive={isKeyboardActive}
          />
        </React.Fragment>
      )}
    />
  )
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(messagePropTypes).isRequired,
  onSendMessage: PropTypes.func.isRequired,
}
