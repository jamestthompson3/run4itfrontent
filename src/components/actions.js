
import io from 'socket.io-client'
const socket = io('http://localhost:3050')

export const emitDistance = (distance) => {
  socket.emit('distance', distance)
}

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
