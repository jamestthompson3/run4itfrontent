import React, { Component } from 'react'
import styled from 'styled-components'


const StartWrapper = styled.div`
  margin: auto;
  h1 {
    text-align: center;
  }
`
class StartPage extends Component {
  state = {
    countdown: 3,
    countdownDisplay: true
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.startCountdown(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  startCountdown = () => {
    let { countdown } = this.state
    countdown = countdown -1
    this.setState({ countdown })
    setTimeout(() => this.clearCountdown(), 1600)
  }

  clearCountdown = () => {
    clearInterval(this.timerID)
    this.setState({ countdownDisplay: false })
  }

  render() {
    const { countdown, countdownDisplay } = this.state
    return (
      <StartWrapper>
        { countdownDisplay &&
          <h1 style={{ color: 'white' }}>{countdown}</h1>
        }
        { countdownDisplay ||
          <h1 style={{ color: 'white' }}>Go!</h1>
        }
      </StartWrapper>
    )
  }
}

export default StartPage
