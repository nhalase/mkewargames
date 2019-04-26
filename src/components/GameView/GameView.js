import React, { Component } from "react";
import "./GameView.css";

import TestImage from "../../images/game.jpg";

class GameView extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-view content-view-game">
        <div
          className="game"
          style={{
            backgroundImage: `url(${TestImage})`,
            backgroundSize: "cover",
            filter: "blur(10px)"
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      </div>
    );
  }
}
export default GameView;
