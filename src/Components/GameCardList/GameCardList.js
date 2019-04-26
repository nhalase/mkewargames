import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { GameCard } from ".";
import { games } from "../../Data";

const styles = theme => ({
  root: {
    padding: "12px" // half of the grid container spacing of 24 -- this is a Facebook recommended workaround for the negative margin causing horizontal overflow
  },
  grid: {
    justifyContent: "center",
    flexGrow: 1
  }
});

class GameCardList extends Component {
  getGameCards = (isLoggedIn) => {
    return games.map((game, index) => (
      <GridListTile key={game.key} item xs={3}>
        <GameCard game={game} isLoggedIn={isLoggedIn} />
      </GridListTile>
    ));
  };

  render() {
    const { classes, isLoggedIn } = this.props;
    return (
      <div className={classes.root}>
        <GridList
          // container
          // spacing={24}
          // className={classes.grid}
          cols={4}
        >
          {this.getGameCards(isLoggedIn)}
        </GridList>
      </div>
    );
  }
}

GameCardList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCardList);
