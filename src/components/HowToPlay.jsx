import React from 'react'

const Modal = ({ closeModal }) => {
    return (
        <>
            <div className="modal wrapper">
                <h2>Game setup:</h2>
                <p>
                    Six or more players are divided up into two teams, with one team referred to as Team A and the other team referred to as Team B.
                    504 cards are placed in the card holder and Team A selects a person in their group to be the Clue-giver. This person takes the card holder and places the first card away from his team so that they cannot see it.
                    Clue cards have the clue word on the top of the card and the taboo words listed below the clue word. Clue-givers then start and keep the timer and must get their team to say the guess-word on the card without using one of the taboo words in one of their clues. If a taboo word is used then Team B must sound the buzzer which penalizes Team A by causing the current guess card to go into the discard pile.
    Play is continued until time runs out. Each time a teammate successfully guesses a clue-word, a new card is placed upon the old and each card in this pile represents one point for Team A.</p>

                <h2>Gameplay and Scoring:</h2>
                <p>The team not giving clues must watch for Taboos or other violations of the rules. If they successfully spot a rule being broken, they may use their buzzer to interrupt play and very briefly explain the infraction. Clue-givers must place the current card into the discard pile and draw a new one. Each card in the discard pile represents one point for the other team. Once time runs out, the teams are swapped and roles are reversed. Once each player has taken a turn as clue-give, r the game ends. If teams are uneven, a player on the smaller team will be clue-giver twice.</p>

                <h2>Rules:</h2>
                <ol>
                    <li>Clue-givers may not use any taboo words, including abbreviations and any part of the taboo word.</li>
                    <li>Clue-givers may not use sound effects or use gestures to indicate the clue word.</li>
                    <li>Clue-givers may pass on any card at any time, but the card is then placed in the discard pile.</li>
                    <li>When time is called, the final card does not go into the discard pile, but is instead removed from play.</li>
                </ol>

                <h2>Scoring:</h2>
                <p>Every card stacked upon another in the card holder represents one point for Team A.
                    Every card stacked in the discard pile represents one point for Team B.
                    The final card in play when time runs out is worth no points for either team.
                    At the end of each round points are tallied for each team, the winner is declared by the team with the most points.</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </>
    )
}

export default Modal