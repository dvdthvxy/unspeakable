import React, { Component } from "react";
import introIMG from '../assets/titleIMG.png'
import HowToPlay from './HowToPlay'

class Intro extends Component {
    render() {
        return (
            this.props.displayModal ?
                <HowToPlay closeModal={this.props.toggleDisplay} />
                :
                <div className="intro">
                    <h1>Unspeakable</h1>
                    <div className="introIMG">
                        <img src={introIMG} alt="" />
                    </div>
                    <button onClick={this.props.startGame}>START</button>
                    <button onClick={this.props.toggleDisplay}>HOW TO PLAY</button>
                </div>
        )
    }
}

export default Intro