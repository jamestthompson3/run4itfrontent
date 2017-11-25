import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from './actions'

const challengeList = [
  { type: 'Ranked Run', distance: '2km', color: '#3eff73' },
  { type: 'Ranked Run', distance: '5km', color: '#3eff73' },
  { type: 'Casual Run', distance: '2km', color: '#ffb33e' },
  { type: 'Casual Run', distance: '5km', color: '#ffb33e' }
]
const OppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  text-align: center;
`

const Challenge = styled.div`
  background: #80000000;
  border: 1px solid ${p => p.color};
  border-radius: 5px;
  width: 200px;
  height: 80px;
  color: white;
  margin: auto;
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  span {
    color: ${p => p.color};
    margin-left: -3rem;
  }
`

class OpponentPage extends Component {

  sendChallenge = (type, distance) => {
    const { selectChallenge } = this.props
    selectChallenge(type, distance)
  }

  render() {
    const { selectedChallenge } = this.props
    return (
      selectedChallenge != null
        ? <Redirect to={`/${selectedChallenge}/`} />
        : <OppWrapper>
          <h1>Choose a running challenge!</h1>
          { challengeList.map((challenge, i) =>
            <Challenge key={i} color={challenge.color} onClick={() => this.sendChallenge(challenge.type, challenge.distance)}>
              {challenge.type} <span>{challenge.distance}</span>
            </Challenge>)}
        </OppWrapper>
    )
  }

}

const mapState = ({ selectedChallenge }) => ({
  selectedChallenge
})

export default connect(mapState, actions)(OpponentPage)
