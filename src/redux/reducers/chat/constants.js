export const MESSAGES_INITIAL_STATE = [
  // Add some dummy data by removing the comments from the code below
  // {
  //   id: '0',
  //   time: new Date(),
  //   formattedTime: '2:12PM',
  //   text: 'I like hamburgers',
  // },
]
export const SEARCH_TERM_INITIAL_STATE = {
  isSearchActive: false,
  searchTerm: '',
}

export const CHAT_INITIAL_STATE = {
  messages: MESSAGES_INITIAL_STATE,
  ...SEARCH_TERM_INITIAL_STATE,
}
