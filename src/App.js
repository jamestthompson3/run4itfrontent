import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import PageWrapper from './components/PageWrapper'
import StartPage from './components/StartPage'
import LandingPage from './components/LandingPage'

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/start' component={StartPage} />
          </Switch>
        </PageWrapper>
      </Router>
    )
  }
}

export default App
