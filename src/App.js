import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import PageWrapper from './components/PageWrapper'
import LandingPage from './components/LandingPage'
import OpponentPage from './components/OpponentPage'
import ChallengePage from './components/ChallengePage'
import ProfilePage from './components/ProfilePage'
import ReadyPage from './components/ReadyPage'
import reducer from './components/reducer'


const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <PageWrapper>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/profile' component={ProfilePage} />
              <Route path='/start' component={OpponentPage} />
              <Route path='/ready' component={ReadyPage} />
              <Route path='/:challenge' component={ChallengePage} />
            </Switch>
          </PageWrapper>
        </Router>
      </Provider>
    )
  }
}

export default App
