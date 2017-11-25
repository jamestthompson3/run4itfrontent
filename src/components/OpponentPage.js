import React from 'react'
import styled from 'styled-components'


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
  justify-content: space-around;
  align-items: center;
  span {
    color: ${p => p.color};
    margin-left: -3rem;
  }
`

const OpponentPage = () =>
  <OppWrapper>
    <h1>Choose a running challenge!</h1>
    { challengeList.map((challenge, i) =>
      <Challenge key={i} color={challenge.color}>
        {challenge.type} <span>{challenge.distance}</span>
      </Challenge>)}
  </OppWrapper>

export default OpponentPage
