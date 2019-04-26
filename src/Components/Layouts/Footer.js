import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footer: {
    marginTop: "50px",
    marginBottom: "50px"
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thanks for visiting!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Milwaukee Wargames is an open-source hobby project.{" "}
          <a href="https://github.com/nhalase/mkewargames" target="_blank">
            Check it out on GitHub
          </a>
        </Typography>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
