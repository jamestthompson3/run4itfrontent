import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LandingContainer = styled.div`
  height: 85%;
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  color: white;
  flex-wrap: wrap;
`
const Avatar = styled.div`
  border-radius: 50px;
  width: 35px;
  height: 35px;
  background: gray;
  position: absolute;
  border: ${p => p.number === 1 ? '2px solid red' : '2px solid blue'};
`
const StartButton = styled.button`
  color: #6ebf79;
  border: 2px solid;
  border-radius: 5px;
  padding: 8px 12px;
  background: transparent;
  font-size: 18px;
  margin: auto;
  cursor: pointer;
  width: 100%;
`
const Mask = styled.div`
  position: absolute;
  border-left: 2px solid #000;
  width: 100%;
  height: 96px;
  left: 17.6rem;
`
const StyledLink = styled(Link)`
  width: 100%;
  margin-top: 1rem;
`
const Player = styled.div`
  height: 100%;
  border-right: ${p => p.number === 1 ? '2px solid #fff' : 'none'};
  border-left: ${p => p.number === 1 ? 'none' : '2px solid #fff'};
  width: 47%;
`
const LandingPage = () =>
  <LandingContainer>
    <Player number={1}>
      <Avatar number={1} style={{ right: '16.5rem' }} />
    </Player>
    <Player number={2}>
      <Mask />
      <Avatar number={2} style={{ right: '14.8rem', top: '6rem' }} />
    </Player>
    <StyledLink to='/start'><StartButton>Let&#39;s go!</StartButton></StyledLink>
  </LandingContainer>

export default LandingPage
