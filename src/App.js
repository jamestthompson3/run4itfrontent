import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'

import PageWrapper from './components/PageWrapper'
import LandingPage from './components/LandingPage'
import OpponentPage from './components/OpponentPage'
import ChallengePage from './components/ChallengePage'
import ProfilePage from './components/ProfilePage'
import ReadyPage from './components/ReadyPage'
import * as actions from './components/actions'




injectGlobal`
  @font-face {
    font-family: Barlow;
  }
  body {
    margin: 0;
    padding: 0;
  }
`


class App extends Component {

  render() {
    return (
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
    )
  }
}

const mapState = state => ({
  connected: state.connected
})

export default connect(mapState, actions)(App)
