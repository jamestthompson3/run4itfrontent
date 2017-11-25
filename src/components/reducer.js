
const initialState = {
  selectedChallenge: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_CHALLENGE':
      return {
        ...state,
        selectedChallenge: action.challenge
      }
    default:
      return state
  }
}

export default reducer
