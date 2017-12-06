import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import reducer from './components/reducer'
import { emitDistance } from './socketUtils/emit'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker('service-worker')
registerServiceWorker('post-distance')

store.subscribe(() => {
  const { distance } = store.getState()
  if (distance) {
    emitDistance(distance)
  }
  return
})




