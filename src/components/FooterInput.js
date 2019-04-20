import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import glamorous from 'glamorous-native'
import { theme } from '../constants/theme'
import { Row } from './Shared/Row'
import { TextArea } from './Shared/TextArea'
import { appInfo } from '../constants/appInfo'
import { SubmitTextButton } from './Shared/SubmitTextButton'
import { Icon } from './Shared/Icon'

const Wrap = glamorous(SafeAreaView)({
  borderTopWidth: theme.borderWidth,
  borderColor: theme.colors.divider,
})

export function FooterInput({ onSendMessage, isKeyboardActive }) {
  const [newMessage, setNewMessage] = useState('')
  return (
    <Wrap forceInset={{ bottom: isKeyboardActive ? 'never' : 'always' }}>
      <Row>
        <TextArea
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder={`Message ${appInfo.channelName}`}
        />
        <Icon name='expand' />
      </Row>
      <Row padding={theme.module}>
        <Row flex={1}>
          <Icon name='at' />
          <Icon name='code' />
          <Icon name='attach' />
        </Row>
        <Row>
          <Icon name='images' style={{ marginRight: theme.module }} />
          <SubmitTextButton
            onPress={() => {
              onSendMessage(newMessage)
              setNewMessage('')
            }}
            disabled={newMessage.length < 1}
          >
            Send
          </SubmitTextButton>
        </Row>
      </Row>
    </Wrap>
  )
}

FooterInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  isKeyboardActive: PropTypes.bool.isRequired,
}
