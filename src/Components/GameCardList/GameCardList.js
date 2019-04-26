import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
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
      <Grid key={game.key} item xs-auto="true">
        <GameCard game={game} isLoggedIn={isLoggedIn} />
      </Grid>
    ));
  };

  render() {
    const { classes, isLoggedIn } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.grid}>
          {this.getGameCards(isLoggedIn)}
        </Grid>
      </div>
    );
  }
}

GameCardList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCardList);
