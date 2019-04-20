import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Wrap, Avatar, Name, Time, Description } from './Message.components'

export const Message = ({ name, time, text, imageUrl }) => (
  <Wrap>
    <Avatar source={{ uri: imageUrl }} />
    <View style={{ flex: 1 }}>
      <Name>
        {name} <Time> {time}</Time>
      </Name>
      <Description>{text}</Description>
    </View>
  </Wrap>
)

Message.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
}

Message.defaultProps = {
  name: 'Nicolas Cage',
  imageUrl: 'https://www.placecage.com/144/144',
}
