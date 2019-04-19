import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'
import { messagePropTypes } from '../constants/propTypes'
import { MessagesList } from './MessagesList'

export function Chat({ messages, onSendMessage }) {
  const [newMessage, setNewMessage] = useState('')
  return (
    <View style={{ flex: 1 }}>
      <MessagesList messages={messages} />
      <TextInput
        value={newMessage}
        onChangeText={text => setNewMessage(text)}
      />
      <Button
        title='Send'
        onPress={() => {
          onSendMessage(newMessage)
          setNewMessage('')
        }}
      />
    </View>
  )
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(messagePropTypes).isRequired,
  onSendMessage: PropTypes.func.isRequired,
}
