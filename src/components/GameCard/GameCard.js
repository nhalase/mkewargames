import React, { Component } from "react";
import "./GameCard.css";
import TestImage from "../../images/game.jpg";

class GameCard extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return <img src={TestImage} alt="game" className="game-card" />;
  }
}
export default GameCard;
