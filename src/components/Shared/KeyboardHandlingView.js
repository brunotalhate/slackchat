import React, { Component } from 'react'
import { View, Keyboard, Platform } from 'react-native'
import PropTypes from 'prop-types'

export class KeyboardHandlingView extends Component {
  static propTypes = {
    render: PropTypes.func,
  }

  static defaultProps = {
    render: () => {},
  }

  state = { keyboardHeight: 0, isKeyboardActive: false }

  componentDidMount = () => {
    const show = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
    const hide = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'
    this.keyboardShow = Keyboard.addListener(show, this.onKeyboardShow)
    this.keyboardHide = Keyboard.addListener(hide, this.onKeyboardHide)
  }

  componentWillUnmount = () => {
    this.keyboardShow.remove()
    this.keyboardHide.remove()
  }

  onKeyboardShow = ({ endCoordinates: { height } }) => {
    this.setState({ keyboardHeight: height, isKeyboardActive: true })
  }

  onKeyboardHide = () => {
    this.setState({ keyboardHeight: 0, isKeyboardActive: false })
  }

  render() {
    const { render } = this.props
    const { keyboardHeight, isKeyboardActive } = this.state
    return (
      <View style={{ flex: 1, paddingBottom: keyboardHeight }}>
        {render(isKeyboardActive)}
      </View>
    )
  }
}
