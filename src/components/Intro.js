import React, {Component} from "react";

class Intro extends Component {
    render() {
        return(
            <div>
                <h1>Unspeakable</h1>
                {/* <img src="" alt=""/> */}
                <button onClick={this.props.startGame}>START</button>
            </div>
        )
    }
}

export default Intro