import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import { messagePropTypes } from '../constants/propTypes'
import { Message } from './Message'

const extractKey = item => item.id

const renderMessage = ({ item }) => {
  const { text, formattedTime } = item
  return <Message time={formattedTime} text={text} />
}

export const MessagesList = ({ messages }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      inverted
      data={messages}
      renderItem={renderMessage}
      keyExtractor={extractKey}
    />
  </View>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(messagePropTypes).isRequired,
}
