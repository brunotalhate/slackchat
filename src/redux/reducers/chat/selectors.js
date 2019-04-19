import { createSelector } from 'reselect'

export const messagesSelector = state => state.chat.messages
export const searchTermSelector = state => state.chat.searchTerm
export const searchActiveSelector = state => state.chat.isSearchActive

export const filteredMessages = createSelector(
  [messagesSelector, searchTermSelector],
  (messages, searchTerm) =>
    messages.filter(message => message.text.includes(searchTerm))
)
