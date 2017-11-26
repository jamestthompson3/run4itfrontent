import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from './actions'

import LoadingScreen from './LoadingScreen'

const ChallengeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
`
const StartButton = styled.button`
  width: 80%;
  height: 70px;
  cursor: pointer;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px 0 rgba(255, 52, 93, 0.5);
  border: solid 1px #ff345d;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-stretch: condensed;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
`
const Title = styled.h1`
  width: 375px;
  height: 42px;
  font-size: 35px;
  margin: 0;
  font-weight: bold;
  font-style: italic;
  font-stretch: condensed;
  text-align: center;
  color: #ff345d;
  text-shadow: 0 0 3px #ff345d;
`
const Details = styled.h2`
  width: 375px;
  height: 42px;
  font-family: Barlow;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  font-stretch: condensed;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 3px #ff345d;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h2 {
    width: 150px;
    margin: 0;
    height: 48px;
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    font-stretch: condensed;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 3px #ff345d;
  }
  h3 {
    width: 120.8px;
    margin: 0;
    height: 19px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: condensed;
    letter-spacing: 2px;
    text-align: center;
    color: #ff345d;
  }
`

class ChallengePage extends Component {
  state = {
    loadingScreen: false,
    start: false
  }

  componentDidMount() {
    const { sendCoords } = this.props
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        sendCoords(position.coords.latitude, position.coords.longitude)
      })
    }
    else {
      alert('you must have geolocation enabled to compete!')
    }
  }

  findOpponent = () => {
    this.setState({ loadingScreen: true })
  }
  render() {
    const { selectedChallenge, selectedDistance, connected } = this.props
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
          { connected
            ? null
            : <h2> You must be online and have location services enabled to compete</h2>
          }
          <Title>Ready to Run?</Title>
          <Details>Challenge Details</Details>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <DetailContainer>
              <h3>DISTANCE</h3>
              <h2>
                {selectedDistance}
              </h2>
            </DetailContainer>
            <DetailContainer>
              <h3>BET AMOUNT</h3>
              <h2>{selectedChallenge}<span style={{ color: '#ff345d' }}> C</span></h2>
            </DetailContainer>
          </div>
          <StartButton onClick={this.findOpponent}>Find Runner</StartButton>
        </ChallengeContainer>
        : <Redirect to='/' />
    )
  }
}

const mapState = ({ selectedChallenge, selectedDistance, connected, coords }) => ({
  selectedChallenge,
  selectedDistance,
  connected,
  coords
})
export default connect(mapState, actions)(ChallengePage)
