import React, { Component } from 'react';
import Timer from './Timer';
import Card from './Card'

class GameScreen extends Component {

    render() {
        return(
            <div className="gameScreen">
                <Timer endGame={this.endGame} nextCard={this.nextCard} />
                <Card word={this.props.currentWord} />
                <button className="nextButton" onClick={this.props.nextCard}>NEXT</button>
            </div>
        )
    }
}

export default GameScreen