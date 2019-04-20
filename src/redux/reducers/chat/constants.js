import { formatDate } from '../../../constants/functions'

const now = new Date()

export const MESSAGES_INITIAL_STATE = [
  {
    id: '0',
    time: now,
    formattedTime: formatDate(now),
    text: 'well',
  },
]
export const SEARCH_TERM_INITIAL_STATE = {
  isSearchActive: false,
  searchTerm: '',
}

export const CHAT_INITIAL_STATE = {
  messages: MESSAGES_INITIAL_STATE,
  ...SEARCH_TERM_INITIAL_STATE,
}
