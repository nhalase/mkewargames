import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
});

class Header extends Component {
  logInOrLogOutButton = () => {
    const { isLoggedIn, handleLogInLogOut } = this.props;
    if (isLoggedIn) {
      return (
        <Button color="inherit" onClick={handleLogInLogOut}>
          Log Out
        </Button>
      );
    } else {
      return (
        <Button color="inherit" onClick={handleLogInLogOut}>
          Log In
        </Button>
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
            >
              <Link to="/" className={classes.link}>
                Milwaukee Wargames
              </Link>
            </Typography>

            {this.logInOrLogOutButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
