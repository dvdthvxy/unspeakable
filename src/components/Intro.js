import React, {Component} from "react";
import introIMG from '../assets/titleIMG.png'

class Intro extends Component {
    render() {
        return(
            <div className="intro">
                <h1>Unspeakable</h1>
                <div className="introIMG">
                    <img src={introIMG} alt=""/>
                </div>
                <button onClick={this.props.startGame}>START</button>
            </div>
        )
    }
}

export default Intro