import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CssBaseline } from '@material-ui/core'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Header, Footer } from './Components/Layouts'
import { Switch, Route } from 'react-router-dom'
import { Home, PrivacyPolicy, About, LogIn, TermsOfService } from './Components/Routes'
import { auth } from './Components/Firebase' // eslint-disable-line no-unused-vars

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#00a8e1',
      main: '#0d2240',
      // dark: will be calculated from palette.primary.main
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main
      main: '#f7a800',
      // dark: will be calculated from palette.secondary.main
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
})

const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
})

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  handleLogInSuccess = (success) => {
    console.debug(success)
    this.setState({
      isLoggedIn: success,
    })
  }
  handleLogOut = (e) => {
    auth.signOut().then(() => {
      console.debug('sign out success')
    }, (error) => {
      console.error(error)
    })
    this.setState({
      isLoggedIn: false,
    })
  }
  render() {
    // const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Header isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
          <main>
            <Switch>
              <Route exact path='/about' render={(props) => <About {...props} isLoggedIn={this.state.isLoggedIn} />} />
              <Route
                exact
                path='/login'
                render={(props) => <LogIn handleLogInSuccess={this.handleLogInSuccess} {...props} />}
              />
              <Route exact path='/privacy' render={(props) => <PrivacyPolicy {...props} />} />
              <Route exact path='/terms' render={(props) => <TermsOfService {...props} />} />
              <Route exact strict path='/' render={(props) => <Home {...props} isLoggedIn={this.state.isLoggedIn} />} />
            </Switch>
          </main>
          <Footer isLoggedIn={this.state.isLoggedIn} />
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
