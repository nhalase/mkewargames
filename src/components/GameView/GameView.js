import React, { Component } from "react";
import "./GameView.css";

class GameView extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content content-game-wrapper">
        <div className="content content-game">
          <span>row</span>
        </div>
      </div>
    );
  }
}
export default GameView;
