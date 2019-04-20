import React from 'react'
import { StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { messagePropTypes } from '../constants/propTypes'
import { MessagesList } from './MessagesList'
import { FooterInput } from './FooterInput'
import { KeyboardHandlingView } from './Shared/KeyboardHandlingView'
import { theme } from '../constants/theme'

export function Chat({ messages, onSendMessage }) {
  return (
    <KeyboardHandlingView
      render={isKeyboardActive => (
        <React.Fragment>
          <StatusBar backgroundColor={theme.colors.primaryDark} />
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
