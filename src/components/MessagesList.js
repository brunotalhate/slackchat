import React from 'react'
import { FlatList, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { messagePropTypes } from '../constants/propTypes'

const extractKey = item => item.id

const Message = ({ item }) => {
  const { text, formattedTime } = item
  return (
    <View>
      <Text>{formattedTime}</Text>
      <Text>{text}</Text>
    </View>
  )
}

export const MessagesList = ({ messages }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      inverted
      data={messages}
      renderItem={Message}
      keyExtractor={extractKey}
    />
  </View>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(messagePropTypes).isRequired,
}
