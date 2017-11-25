import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'

const LandingContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  background-image: url(/start-screen.jpg);
  background-repeat: no-repeat;
  background-position: 50%;
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
  color: #fff;
  border: 2px solid #ff345d;
  border-radius: 100px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  margin: auto;
  cursor: pointer;
  width: 238px;
  height: 57px;
`
const Mask = styled.div`
  position: absolute;
  border-left: 2px solid #000;
  width: 100%;
  height: 96px;
  left: 17.6rem;
`
const StyledLink = styled(Link)`
  width: 238px;
  margin: auto;
`
const Player = styled.div`
  height: 100%;
  border-right: ${p => p.number === 1 ? '2px solid #fff' : 'none'};
  border-left: ${p => p.number === 1 ? 'none' : '2px solid #fff'};
  width: 47%;
`
const LandingPage = () =>
  <LandingContainer>
    <img src={logo} style={{ margin: 'auto' }} />
    <StyledLink to='/profile'><StartButton>Start Running!</StartButton></StyledLink>
  </LandingContainer>

export default LandingPage
