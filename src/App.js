import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'

import PageWrapper from './components/PageWrapper'
import LandingPage from './components/LandingPage'
import ProfilePage from './components/ProfilePage'
import Prematch from './components/Prematch'
import * as actions from './components/actions'
import OpponentPage from './components/OpponentPage'




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
    return <Router>
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path='/start' component={OpponentPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/prematch" component={Prematch} />
        </Switch>
      </PageWrapper>
    </Router>
  }
}

const mapState = state => ({
  connected: state.connected
})

export default connect(mapState, actions)(App)
