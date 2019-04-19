import {
  ADD_CHAT_MESSAGE,
  SEARCH_START,
  SEARCH_UPDATE_TERM,
  SEARCH_RESET,
} from '../../types/chatTypes'

export const addMessage = message => ({ type: ADD_CHAT_MESSAGE, message })
export const searchStart = () => ({ type: SEARCH_START })
export const searchTermUpdate = searchTerm => ({
  type: SEARCH_UPDATE_TERM,
  searchTerm,
})
export const searchReset = () => ({ type: SEARCH_RESET })
