import React, { Component } from 'react'
import styled from 'styled-components'


const delay = () => new Promise(resolve => {
  setTimeout(() => resolve(), 1000)
})

const Wrapper = styled.div`
  color: White;
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
