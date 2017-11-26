import React, { Component } from 'react'
import styled from 'styled-components'
import steph from '../img/steph.jpeg'
import steve from '../img/steve.jpeg'

const ReadyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  border: solid 1px #f7335b;
  margin: 0;
  }
`
const AvatarContainer = styled.div`
  display: flex;
`
const Title = styled.h1`
  width: 375px;
  height: 42px;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  font-stretch: condensed;
  text-align: center;
  color: #ff345d;
  text-shadow: 0 0 3px #ff345d;
`
const InfoContainer = styled.div`
  display: flex;
  flex; 1;
  h2 {
    width: 79px;
    height: 35px;
    font-family: Barlow;
    font-size: 30px;
    font-weight: bold;
    font-stretch: condensed;
    line-height: 1.17;
    text-align: left;
    color: #3cffad;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`
class ReadyPage extends Component {
  render() {
    return (
      <ReadyContainer>
        <Title>Opponent Found</Title>
        <AvatarContainer>
          <Avatar src={steve} style={{ border: 'solid 1px #3cffad' }} />
          <InfoContainer>
            <h2>Danger Steve</h2>
            <h4>Sweden</h4>
          </InfoContainer>
        </AvatarContainer>
        <AvatarContainer>
          <Avatar src={steph} />
          <InfoContainer>
            <h2 style={{ color: '#ff345d' }}>You</h2>
            <h4>United States</h4>
          </InfoContainer>
        </AvatarContainer>
      </ReadyContainer>
    )
  }
}

export default ReadyPage
