import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../img/logo.svg'
import league from '../img/league-icon.png'
import steph from '../img/steph.jpeg'
import event from '../img/event.png'
import star from '../img/star.svg'
import cup from '../img/cup.png'
import store from '../img/store.png'


const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  img {
    margin: auto;
    width: 50px;
    height: 50px;
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 200px;
    border: solid 1px #f7335b;
    margin: 0;
  }
`
const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`
const InfoButton = styled.button`
  width: 117.9px;
  height: 44.4px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  border: solid 1px #5b5b5b;
  color: #fff;
  font-size: 18px;
}
`
const NameContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
`
const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
`
const CompeteButton = styled.button`
  width: 244px;
  height: 70px;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px 0 rgba(255, 52, 93, 0.5);
  border: solid 1px #ff345d;
  color: white;
  font-size: 28px;
  font-family: Barlow;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-stretch: condensed;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  margin: auto;
`
const StyledLink = styled(Link)`
  width: 100%;
  margin: auto;
  display: flex;
  text-decoration: none;
`
const TrainButton = styled.button`
  width: 189px;
  height: 53px;
  margin: auto;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border: solid 1px #ff9d34;
  font-family: Barlow;
  font-size: 25px;
  font-weight: 500;
  font-style: italic;
  font-stretch: condensed;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
`
const ProfileFooter = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  img {
  width: 38px;
  height: 39px;
  object-fit: contain;
  margin: 0;
  align-items: flex-end;
  }
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: center;
  align-items: center;
`
class ProfilePage extends Component {
  render() {
    return (
      <ProfileWrapper>
        <img src={logo} />
        <ProfileContainer>
          <Info>
            <NameContainer>
              <img className='avatar'
                src={steph}
              />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <h1 style={{ margin: '0' }}>Stephanie</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={league} style={{ margin: '0' }} />
                  <h3>1640RP</h3>
                </div>
              </div>
            </NameContainer>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
              <InfoButton>League</InfoButton>
              <InfoButton>History</InfoButton>
            </div>
          </Info>
          <Actions>
            <StyledLink to='/start'><CompeteButton>Run Online</CompeteButton></StyledLink>
            <TrainButton>Run Solo</TrainButton>
          </Actions>
        </ProfileContainer>
        <ProfileFooter>
          <IconContainer>
            <img src={cup} />
            <h3>Run</h3>
          </IconContainer>
          <IconContainer>
            <img src={star} />
            <h3>Goals</h3>
          </IconContainer>
          <IconContainer>
            <img src={event} />
            <h3>Events</h3>
          </IconContainer>
          <IconContainer>
            <img src={store} />
            <h3>Store</h3>
          </IconContainer>
        </ProfileFooter>
      </ProfileWrapper>
    )
  }
}

export default ProfilePage
