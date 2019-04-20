import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Chat } from '../components/Chat'
import {
  filteredMessages,
  searchTermSelector,
  searchActiveSelector,
} from '../redux/reducers/chat/selectors'
import { addMessage } from '../redux/actions/sync/chatSyncActions'
import { messagePropTypes } from '../constants/propTypes'
import { chatNavBar } from '../constants/navBars'
import { formatDate } from '../constants/functions'

class ChatContainer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func,
    }).isRequired,
    messages: PropTypes.arrayOf(messagePropTypes).isRequired,
    addChatMessage: PropTypes.func.isRequired,
    isSearchActive: PropTypes.bool.isRequired,
  }

  static navigationOptions = ({ navigation }) => {
    const isSearchActive = navigation.getParam('isSearchActive', false)
    return chatNavBar(isSearchActive)
  }

  componentDidMount = () => {
    const { navigation, isSearchActive } = this.props
    navigation.setParams({ isSearchActive })
  }

  componentDidUpdate(prevProps) {
    const { isSearchActive, navigation } = this.props
    if (prevProps.isSearchActive !== isSearchActive) {
      navigation.setParams({ isSearchActive })
    }
  }

  sendMessage = text => {
    const { messages, addChatMessage } = this.props
    const time = new Date()
    const id = `${messages.length}${time}`
    const formattedTime = formatDate(time)
    addChatMessage({ id, text, time, formattedTime })
  }

  render() {
    const { messages } = this.props
    return <Chat messages={messages} onSendMessage={this.sendMessage} />
  }
}

const mapStateToProps = state => ({
  messages: filteredMessages(state),
  searchTerm: searchTermSelector(state),
  isSearchActive: searchActiveSelector(state),
})

const mapDispatchToProps = {
  addChatMessage: message => addMessage(message),
}

export const ChatScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer)
