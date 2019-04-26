import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Sunrise from "./images/Sunrise.png";
import GameCardList from "./components/GameCardList/GameCardList";
import GameView from "./components/GameView/GameView";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header-primary">
          <img src={Sunrise} alt="sunrise" className="header-sunrise" />
          <nav
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              height: "25px",
              paddingLeft: "20px",
              zIndex: 2
            }}
          >
            <button>Home</button>
          </nav>
          <nav
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              height: "25px",
              paddingRight: "20px",
              zIndex: 2
            }}
          >
            <button>Log In</button>
          </nav>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "35%",
              height: "25px",
              backgroundImage: `linear-gradient(to left, rgba(0, 168, 225, 0), rgba(0, 168, 225, 1))`
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "35%",
              height: "25px",
              backgroundImage: `linear-gradient(to right, rgba(0, 168, 225, 0), rgba(0, 168, 225, 1))`
            }}
          />
        </header>
        <Switch>
          <Route
            exact
            path="/game/:gameId"
            render={props => <GameView {...props} />}
          />
          <Route exact path="/" component={GameCardList} />
        </Switch>
        <footer className="footer-primary">
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "50%",
              height: "5px",
              backgroundImage: `linear-gradient(to left, rgba(0, 168, 225, 0), rgba(0, 168, 225, .5))`
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "50%",
              height: "5px",
              backgroundImage: `linear-gradient(to right, rgba(0, 168, 225, 0), rgba(0, 168, 225, .5))`
            }}
          />
        </footer>
      </div>
    );
  }
}

export default App;
