import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  link: {
    textDecoration: "none"
  }
});

class HomeHeroUnit extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Milwaukee Wargaming Central
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Milwaukee Wargames attempts to inform what games people are playing,
            when they are playing them, and where they play them at.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Link to="/register" className={classes.link}>
                  <Button variant="contained" color="primary">
                    Help keep us up-to-date
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" className={classes.link}>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

HomeHeroUnit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeHeroUnit);
