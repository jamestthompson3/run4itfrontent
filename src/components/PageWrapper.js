import React from 'react'
import styled from 'styled-components'


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6d6d6d;
`

const Wrapper = styled.div`
  max-width: 540px;
  margin: 0 auto;
  background: white;
  height: 100%;
  box-shadow: 0 2px 5px 0 #403f3f;
  display: flex;
  flex-direction: column;
  font-family: Barlow;
`

const Header = styled.header`
  background-color: transparent;
  height: 70px;
  padding: 20px;
  color: white;
  text-align: center;
  position: absolute;
`

const Content = styled.main`
  position: relative;
  flex: 1;
  overflow-y: auto;
  background: #000;
  color: white;
`

const Logo = styled.div`
  display: flex;
  background: transparent;
`


const LogoText = styled.h1`
  padding: 10px;
  margin: auto;
  line-height: 50px;
  font-size: 1.5rem;
  font-weight: 700;
`

const PageWrapper = ({ children }) => (
  <Background>
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  </Background>
)

export default PageWrapper
