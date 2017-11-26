import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import reducer from './components/reducer'
import * as actions from './components/actions'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()

store.subscribe(() => {
  const { distance } = store.getState()
  if (distance) {
    actions.emitDistance(distance)
  }
  return
})




