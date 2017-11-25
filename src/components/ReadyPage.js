import React, { Component } from 'react'
import styled from 'styled-components'

const ReadyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
`
class ReadyPage extends Component {
  render() {
    return (
      <ReadyContainer>
        <h1>Opponent Found</h1>
      </ReadyContainer>
    )
  }
}

export default ReadyPage
