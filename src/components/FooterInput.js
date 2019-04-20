import React, { useState } from 'react'
import { Platform } from 'react-native'
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
      {Platform.OS === 'android' && (
        <Row paddingHorizontal={theme.module} justifyContent='space-between'>
          <Icon name='happy' />
          <Icon name='camera' />
          <Icon name='images' />
          <Icon name='attach' />
          <Icon name='code' />
          <Icon name='at' />
        </Row>
      )}
      <Row>
        <TextArea
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder={`Message #${appInfo.channelName}`}
        />
        {Platform.OS === 'ios' && <Icon name='expand' />}
        {Platform.OS === 'android' && (
          <Icon
            color={theme.colors.success}
            disabled={newMessage.length < 1}
            name='send'
            style={{ marginRight: theme.module }}
            onPress={() => {
              onSendMessage(newMessage)
              setNewMessage('')
            }}
          />
        )}
      </Row>
      {Platform.OS === 'ios' && (
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
      )}
    </Wrap>
  )
}

FooterInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  isKeyboardActive: PropTypes.bool.isRequired,
}
