import { createSelector } from 'reselect'

export const messagesSelector = state => state.chat.messages
export const searchTermSelector = state => state.chat.searchTerm
export const searchActiveSelector = state => state.chat.isSearchActive

// Using reselect for faster and memoized messages filter
export const filteredMessages = createSelector(
  [messagesSelector, searchTermSelector],
  (messages, searchTerm) =>
    messages.filter(message =>
      message.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
)
