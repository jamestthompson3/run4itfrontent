import io from 'socket.io-client'
const socket = io('http://localhost:3050')

export const emitDistance = distance => {
  socket.emit('distance', distance)
}
