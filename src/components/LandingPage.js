import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import startscreen from '../img/start-screen.jpg'

const LandingContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  background-image: url(${startscreen});
  background-repeat: no-repeat;
  background-position: 50%;
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

const StyledLink = styled(Link)`
  width: 238px;
  margin: auto;
`
const LandingPage = () =>
  <LandingContainer>
    <img src={logo} style={{ margin: 'auto' }} />
    <StyledLink to='/profile'><StartButton>Start Running!</StartButton></StyledLink>
  </LandingContainer>

export default LandingPage
