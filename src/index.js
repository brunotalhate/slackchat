import React from 'react'
import { Provider } from 'react-redux'

import { createStore } from './config/redux'
import { Navigator } from './Navigator'

const store = createStore()

export const SlackChat = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)
