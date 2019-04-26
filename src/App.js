import React, { Component } from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { Header, Home, Footer } from "./Components/Layouts";
import { Switch, Route } from "react-router-dom";
import { About } from "./Components/About";
import { SignUp } from "./Components/Registration";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#00a8e1",
      main: "#0d2240"
      // dark: will be calculated from palette.primary.main
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main
      main: "#f7a800",
      // dark: will be calculated from palette.secondary.main
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
});

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
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
