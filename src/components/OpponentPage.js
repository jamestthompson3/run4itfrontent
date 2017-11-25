import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from './actions'

const challengeList = [
  { distance: '2000 M', amount: '1000' },
  { distance: '5000 M', amount: '1500' },
  { distance: '10 000 M', amount: '3000' }
]

const OppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  text-align: center;
  align-items: center;
  background: linear-gradient(transparent, black);
`
const Title = styled.h1`
  width: 375px;
  height: 42px;
  font-family: Barlow;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  font-stretch: condensed;
  text-align: center;
  margin: 0;
  color: #ff345d;
  text-shadow: 0 0 3px #ff345d;
`

const Challenge = styled.div`
  width: 296px;
  height: 93px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px 0 rgba(255, 52, 93, 0.5);
  border: solid 1px #ff345d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  span {
    width: 120.8px;
    height: 34px;
    font-family: Barlow;
    font-size: 28px;
    font-weight: bold;
    font-style: italic;
    font-stretch: condensed;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 3px #ff345d;
    .c {
      color: #ff345d;
    }
  }
`
const Description = styled.div`
  width: 375px;
  height: 46px;
  font-family: Barlow;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  font-stretch: condensed;
  line-height: 1.44;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`

class OpponentPage extends Component {

  sendChallenge = (amount, distance) => {
    const { selectChallenge } = this.props
    selectChallenge(amount, distance)
  }

  render() {
    const { selectedChallenge } = this.props
    return (
      selectedChallenge != null
        ? <Redirect to={`/${selectedChallenge}/`} />
        : <OppWrapper>
          <Title>Ranked Run</Title>
          <Description>
          Bet your Run Coins and race against runners your&#39;re level. Longer the distance, higher the stakes!
          </Description>
          { challengeList.map((challenge, i) =>
            <Challenge key={i} onClick={() => this.sendChallenge(challenge.amount, challenge.distance)}>
              <span>{challenge.distance}</span><span>{challenge.amount}<span className='c'> C</span></span>
            </Challenge>)}
        </OppWrapper>
    )
  }

}

const mapState = ({ selectedChallenge }) => ({
  selectedChallenge
})

export default connect(mapState, actions)(OpponentPage)
