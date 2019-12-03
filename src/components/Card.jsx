import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div className="card wrapper">
                {this.props.word ?
                    <React.Fragment>
                        <h1>{this.props.word.answer}</h1>
                        <ul>
                            <li>{this.props.word.word1}</li>
                            <li>{this.props.word.word2}</li>
                            <li>{this.props.word.word3}</li>
                            <li>{this.props.word.word4}</li>
                            <li>{this.props.word.word5}</li>
                        </ul>
                    </React.Fragment>
                    :
                    <div className="preloader">
                        <p>Loading...</p>
                    </div>}
            </div>
        )
    }
}

export default Card