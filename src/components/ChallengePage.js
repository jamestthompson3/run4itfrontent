import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoadingScreen from './LoadingScreen'

const ChallengeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`
const StartButton = styled.button`
  color: #fff;
  border: 2px solid #3eff73;
  border-radius: 20px;
  padding: 8px 12px;
  background: #80000000;
  font-size: 20px;
  margin: auto;
  cursor: pointer;
  width: 300px;
`

class ChallengePage extends Component {
  state = {
    loadingScreen: false,
    start: false
  }
  findOpponent = () => {
    this.setState({ loadingScreen: true })
  }
  render() {
    const { selectedChallenge, selectedDistance } = this.props
    const { loadingScreen, start } = this.state
    if (loadingScreen) {
      return (
        <LoadingScreen
          onComplete={() => this.setState({ loadingScreen: false, start: true })}
          messages={[
            'Searching for Opponent...',
            'Calibrating Sensors...',
            'Pysching you up...'
          ]}
        />
      )
    }
    if (start) {
      return (
        <Redirect to="/ready" />
      )
    }
    return (
      selectedChallenge != null
        ? <ChallengeContainer>
            <h1>Challenge Details</h1>
            <h2>{selectedChallenge}</h2>
            <h2>{selectedDistance}</h2>
            <StartButton onClick={this.findOpponent}>Find opponent</StartButton>
          </ChallengeContainer>
        : <Redirect to='/' />
    )
  }
}

const mapState = ({ selectedChallenge, selectedDistance }) => ({
  selectedChallenge,
  selectedDistance
})
export default connect(mapState)(ChallengePage)
