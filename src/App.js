import React, { Component } from 'react';
import deck from "./deck/deck.json"
import './App.css';
// import Card from "./components/Card.js"
// import Timer from "./components/Timer.js"
import Intro from "./components/Intro.js"
import GameScreen from './components/GameScreen.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      deck: undefined,
      index: 0,
      currentWord: undefined,
      startGame: false
    }
  }


  shuffle = (deck) => {
    let clonedDeck = [...deck]
    let shuffledDeck = []

    while (clonedDeck.length > 0) {
      let randomNumber = Math.floor(Math.random() * clonedDeck.length)
      shuffledDeck.push(clonedDeck[randomNumber])
      clonedDeck.splice(randomNumber, 1)
    }

    return shuffledDeck
  }

  nextCard = (e) => {
    let index = this.state.index + 1
    const deck = this.state.deck

    if (index > this.state.deck.length - 1) {
      index = 0
    }

    this.setState({
      index,
      currentWord: deck[index]
    })
  }

  startGame = (e) => {
    this.setState({
      startGame: true,
    })
  }

  endGame = (e) => {
    this.setState({
      startGame: false,
    })
  }

  componentDidMount() {
    const shuffledDeck = this.shuffle(deck)
    const currentWord = shuffledDeck[this.state.index]
    this.setState({
      deck: shuffledDeck,
      currentWord: currentWord
    })
  }

//   <div className="gameScreen">
//   <Timer endGame={this.endGame} nextCard={this.nextCard} />
//   <Card word={this.state.currentWord} />
//   <button className="nextButton" onClick={this.nextCard}>NEXT</button>
// </div>

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {this.state.startGame ? 
            <GameScreen endGame={this.endGame} nextCard={this.nextCard} currentWord={this.state.currentWord} onClick={this.nextCard}/>
            : <Intro startGame={this.startGame}/>}
        </div>
      </div>
    )
  }
}

export default App;
