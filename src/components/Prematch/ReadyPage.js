import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import steph from '../../img/steph.jpeg'
import steve from '../../img/steve.jpeg'

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
  justify-content: space-between;
  align-items: flex-start;
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
  flex: 1;
  width: 50%;
  margin-left: 1rem;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-around;
  h2 {
    width: 79px;
    height: 35px;
    font-family: Barlow;
    font-size: 30px;
    font-weight: bold;
    font-stretch: condensed;
    line-height: 1.17;
    text-align: left;
    margin-top: 0;
    color: #3cffad;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`
const ReadyButton = styled.button`
  width: 244px;
  height: 70px;
  border-radius: 100px;
  font-family: Barlow;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-stretch: condensed;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px 0 rgba(255, 52, 93, 0.5);
  border: solid 1px #ff345d;
`
const StyledLink = styled(Link)`
  width: 238px;
  margin: auto;
`
class ReadyPage extends Component {
  render() {
    return <ReadyContainer>
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
      <StyledLink to="/go">
        <ReadyButton>Ready?</ReadyButton>
      </StyledLink>
    </ReadyContainer>
  }
}

export default ReadyPage
