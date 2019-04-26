import React, { Component } from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Header, Home, Footer } from "./Components/Layouts";
import { Switch, Route } from "react-router-dom";
import { About } from "./Components/About";
import { SignUp } from "./Components/Registration";

const styles = theme => ({
  grow: {
    flexGrow: 1
  }
});

class App extends Component {
  state = {
    isLoggedIn: false
  };
  handleLogInLogOut = e => {
    const { isLoggedIn } = this.state;
    this.setState({
      isLoggedIn: !isLoggedIn
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header
          isLoggedIn={this.state.isLoggedIn}
          handleLogInLogOut={this.handleLogInLogOut}
        />
        <main>
          <Switch>
            <Route
              exact
              path="/about"
              render={props => (
                <About {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact
              path="/register"
              render={props => (
                <SignUp {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact
              strict
              path="/"
              render={props => (
                <Home {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
          </Switch>
        </main>
        <Footer isLoggedIn={this.state.isLoggedIn} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
