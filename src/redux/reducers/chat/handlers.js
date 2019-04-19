import { SEARCH_TERM_INITIAL_STATE } from './constants'

export const handleNewChatMessage = ({ messages, ...state }, { message }) => ({
  ...state,
  messages: [message, ...messages],
})

export const handleStartSearch = state => ({
  ...state,
  isSearchActive: true,
})

export const handleUpdateSearchTerm = (state, { searchTerm }) => ({
  ...state,
  searchTerm,
})

export const handleResetSearch = state => ({
  ...state,
  ...SEARCH_TERM_INITIAL_STATE,
})
