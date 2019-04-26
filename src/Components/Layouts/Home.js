import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { HomeHeroUnit } from "../HeroUnit";
import { GameCardList } from "../GameCardList";
import { Paper, Typography } from "@material-ui/core";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  paper: {
    backgroundColor: "inherit",
    marginBottom: "50px",
    paddingTop: "25px",
    paddingBottom: "10px",
    alignContent: "center"
  }
});

class Home extends Component {
  render() {
    const { classes, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <HomeHeroUnit isLoggedIn={isLoggedIn} />
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h5" align="center" gutterBottom>
            Games We Play
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            The games list is sorted by most recently played. If a game is
            missing from this list,{" "}
            <a
              class="primary-anchor"
              rel="noopener"
              href="mailto:njhalase+mkewargames@gmail.com"
            >
              contact us via email
            </a>{" "}
            and we&apos;ll be sure to include it in a future release!
          </Typography>
        </Paper>
        <GameCardList isLoggedIn={isLoggedIn} />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
