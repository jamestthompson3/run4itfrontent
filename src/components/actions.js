
export const selectChallenge = (challenge, distance) => ({
  type: 'SELECTED_CHALLENGE',
  challenge,
  distance
})

export const sendCoords = (lat, lon) => ({
  type: 'SEND_COORDS',
  lat,
  lon
})

export const connect = () => ({
  type: 'CONNECT'
})
