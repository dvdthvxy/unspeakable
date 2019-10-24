import React, { Component } from 'react';
import deck from "./deck/deck.json"
import './App.css';
import Card from "./components/Card.js"
import Timer from "./components/Timer.js"

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
    console.log("clicked")
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

  componentDidMount() {
    const shuffledDeck = this.shuffle(deck)
    const currentWord = shuffledDeck[this.state.index]
    this.setState({
      deck: shuffledDeck,
      currentWord
    })
    console.log("mounted")
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Timer />
          {this.state.currentWord ? <Card word={this.state.currentWord} />
            : null}
          <button onClick={this.nextCard}>NEXT</button>
        </div>
      </div>
    )
  }
}

export default App;
