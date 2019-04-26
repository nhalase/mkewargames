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
        </header>
        <Switch>
          <Route
            exact
            path="/game/:gameId"
            render={props => <GameView {...props} />}
          />
          <Route exact path="/" component={GameCardList} />
        </Switch>
        <footer className="footer-primary" />
      </div>
    );
  }
}

export default App;
