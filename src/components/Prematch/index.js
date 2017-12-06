import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


import ChallengePage from './ChallengePage'
import StartPage from './StartPage'
import ReadyPage from './ReadyPage'

class Prematch extends Component {
  render() {
    const { selectedChallenge } = this.props
    return (
      selectedChallenge !== null
        ? <Switch>
          <Route path='/:challenge' component={ChallengePage} />
          <Route path='/:challenge/go' component={StartPage} />
          <Route path='/:challenge/ready' component={ReadyPage} />
        </Switch>
        : <Redirect to='/' />
    )
  }
}
const mapState = ({ selectedChallenge }) => ({
  selectedChallenge
})
export default connect(mapState)(Prematch)
