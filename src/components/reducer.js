
const initialState = {
  selectedChallenge: null,
  selectedDistance: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_CHALLENGE':
      return {
        ...state,
        selectedChallenge: action.challenge,
        selectedDistance: action.distance
      }
    default:
      return state
  }
}

export default reducer
