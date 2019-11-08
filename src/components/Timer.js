import React, { Component } from 'react';
import Buzzer from '../assets/wrongBuzzerSoundEffect.mp3'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            startTime: 0,
            currentTime: undefined
        }
    }

    runTime = () => {
        const currentTime = Math.trunc((this.state.startTime - new Date()) / 1000)
        this.setState({
            currentTime
        })
    }

    componentDidMount() {
        const startTime = new Date().valueOf() + 90000
        this.setState({
            startTime
        })
        this.interval = setInterval(() => this.runTime(), 100)
    }

    componentWillUnmount() {
        this.props.nextCard()
        const buzzer = new Audio(Buzzer)
        buzzer.play()
    }

    render() {
        if (this.state.currentTime === 0) {
            clearInterval(this.interval)
            this.props.endGame()
        }
        return (
            <div className="timer">
                {this.state.currentTime}
            </div>
        )
    }
}

export default Timer