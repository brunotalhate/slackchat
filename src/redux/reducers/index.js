import { combineReducers } from 'redux'

import { createReducer } from './functionalReducer'
import { chatReducerConfig } from './chat'

export const reducers = combineReducers({
  chat: createReducer(chatReducerConfig),
})

export const rootReducer = (state, action) => reducers(state, action)
