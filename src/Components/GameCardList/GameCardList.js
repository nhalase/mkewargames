import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { GameCard } from ".";

const styles = theme => ({
  root: {
    padding: "12px" // half of the grid container spacing of 24 -- this is a Facebook recommended workaround for the negative margin causing horizontal overflow
  },
  grid: {
    justifyContent: "center",
    flexGrow: 1
  }
});

function getGameCards() {
  return Array(10)
    .fill()
    .map((_, index) => (
      <Grid key={index.toString()} item xs-auto="true">
        <GameCard key={index} />
      </Grid>
    ));
}

class GameCardList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.grid}>
          {getGameCards()}
        </Grid>
      </div>
    );
  }
}

GameCardList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCardList);
