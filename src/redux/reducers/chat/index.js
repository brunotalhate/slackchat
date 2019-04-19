import { CHAT_INITIAL_STATE } from './constants'
import {
  ADD_CHAT_MESSAGE,
  SEARCH_START,
  SEARCH_UPDATE_TERM,
  SEARCH_RESET,
} from '../../types/chatTypes'
import {
  handleNewChatMessage,
  handleStartSearch,
  handleUpdateSearchTerm,
  handleResetSearch,
} from './handlers'

const actionHandlers = {
  [ADD_CHAT_MESSAGE]: handleNewChatMessage,
  [SEARCH_START]: handleStartSearch,
  [SEARCH_UPDATE_TERM]: handleUpdateSearchTerm,
  [SEARCH_RESET]: handleResetSearch,
}

export const chatReducerConfig = {
  initialState: CHAT_INITIAL_STATE,
  actionHandlers,
}
