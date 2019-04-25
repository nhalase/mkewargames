import React, { Component } from "react";
import "./MainView.css";
import { Route, Switch } from "react-router-dom";

import GameCardView from "../GameCardView/GameCardView";
import GameView from "../GameView/GameView";

class MainView extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/game/:gameId"
          render={props => <GameView {...props} />}
        />
        <Route exact path="/" component={GameCardView} />
      </Switch>
    );
  }
}

export default MainView;
