import Maybe from 'data.maybe'

// Use data.maybe to better handle future giant switch statements
export function createReducer(reducerConfig) {
  const { actionHandlers, initialState } = reducerConfig
  return (state = initialState, action) =>
    Maybe.fromNullable(actionHandlers[action.type])
      .map(handler => handler(state, action))
      .getOrElse(state)
}
