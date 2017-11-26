
const initialState = {
  selectedChallenge: null,
  selectedDistance: null,
  coords: null,
  connected: false,
  distance: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_CHALLENGE':
      return {
        ...state,
        selectedChallenge: action.challenge,
        selectedDistance: action.distance
      }
    case 'SEND_COORDS':
      return {
        ...state,
        coords: [action.lat, action.lon]
      }
    case 'CONNECT':
      return {
        ...state,
        connected: true
      }
    default:
      return state
  }
}

export default reducer
