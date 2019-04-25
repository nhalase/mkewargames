import React, { Component } from "react";
import "./GameCardView.css";
import { Link } from "react-router-dom";

import GameCard from "../GameCard/GameCard";

class GameCardView extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="content content-game-cards">{this.renderCards()}</div>;
  }

  renderCards = () => {
    return Array(24)
      .fill()
      .map((_, i) => (
        <Link to={"/game/" + i}>
          <GameCard id={i} />
        </Link>
      ));
  };
}

export default GameCardView;
