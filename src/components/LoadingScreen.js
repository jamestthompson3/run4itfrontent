import React, { Component } from 'react'
import styled from 'styled-components'

import PageWrapper from './PageWrapper'


const delay = () => new Promise(resolve => {
  setTimeout(() => resolve(), 2000)
})

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #3ae267, #3BE3BC);
  color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  i {
    font-size: 3rem;
    margin: 1rem;
  }
`

class LoadingScreen extends Component {
  state = {
    i: 0
  }

  componentDidMount() {
    this.showNextMessage()
  }

  showNextMessage = () => {
    const { i } = this.state
    const { messages, onComplete } = this.props
    return i === messages.length
      ? onComplete()
      : delay()
        .then(() => this.setState(prevState => ({ i: prevState.i + 1 })))
        .then(this.showNextMessage)
  }

  render() {
    const { i } = this.state
    const { messages } = this.props

    return (
        <Wrapper>
          {messages[i]}
        </Wrapper>
    )
  }
}

export default LoadingScreen
