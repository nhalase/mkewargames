import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CssBaseline } from '@material-ui/core'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Header, Footer } from './Components/Layouts'
import { Switch, Route } from 'react-router-dom'
import { Loading, Home, PrivacyPolicy, About, LogIn, TermsOfService } from './Components/Routes'
import { auth, firestore } from './Components/Firebase' // eslint-disable-line no-unused-vars
import { thumbnails } from './Images'

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

const about = (props) => <About myName='Nick' {...props} />
const login = (props) => <LogIn {...props} />
const privacy = (props) => <PrivacyPolicy {...props} />
const terms = (props) => <TermsOfService {...props} />
const home = (props) => <Home {...props} />
const header = (props) => <Header {...props} />
const footer = (props) => <Footer {...props} />

class App extends Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    games: [],
  }
  setLoading = (isLoading) => {
    this.setState({ isLoading: isLoading })
  }
  handleLogOut = (e) => {
    auth
      .signOut()
      .then(() => {
        console.debug('sign out success')
      })
      .catch((error) => {
        console.error(error)
      })
    this.setState({
      isLoggedIn: false,
    })
  }
  handleLogIn = (user) => {
    if (!!user) {
      const userRef = firestore.collection('users').doc(user.uid)
      userRef.set(
        {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          isAnonymous: user.isAnonymous,
        },
        { merge: true }
      )
      this.setState({ isLoggedIn: true, user: user })
    } else {
      this.setState({ isLoggedIn: false, user: null })
    }
  }
  listenForAuthChange = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.handleLogIn(user)
      }
    })
  }
  setGames = (games) => {
    this.setState({ games: games, isLoading: false })
  }
  normalizeGameData = (data, id) => {
    data['key'] = id
    data['thumbnail'] = thumbnails[id]
    return data
  }
  handleGamesSnapshot = (snapshot) => {
    let games = []
    snapshot.forEach((doc) => {
      const data = this.normalizeGameData(doc.data(), doc.id)
      games.push(data)
    })
    return games
  }
  fetchGames = () => {
    console.log('fetching games')
    firestore
      .collection('games')
      .orderBy('playCount', 'desc')
      .orderBy('nickname', 'asc')
      .get()
      .then(this.handleGamesSnapshot)
      .then(this.setGames)
  }
  listenForGamesChange = () => {
    firestore.collection('games').onSnapshot(
      (_) => {
        this.fetchGames()
      },
      (error) => {
        console.error('Failed to listen for games collection changes: ' + JSON.stringify(error))
      }
    )
  }
  componentWillMount() {
    this.setLoading(true)
    this.listenForAuthChange()
    this.listenForGamesChange()
  }
  getCommonProps = (props) => {
    const { isLoggedIn, games, user } = this.state
    const common = {
      isLoggedIn: isLoggedIn,
      games: games,
      setLoading: this.setLoading,
      handleLogOut: this.handleLogOut,
      user: user,
    }
    if (typeof props !== 'undefined') {
      return { ...props, ...common }
    } else {
      return common
    }
  }
  getComposedView = () => {
    const { isLoading } = this.state
    const common = this.getCommonProps()
    if (isLoading) {
      return <Loading />
    } else {
      return (
        <React.Fragment>
          {header(common)}
          <main>
            <Switch>
              <Route exact path='/about' render={(props) => about({ ...props, ...common })} />
              <Route exact path='/login' render={(props) => login({ ...props, ...common })} />
              <Route exact path='/privacy' render={(props) => privacy({ ...props, ...common })} />
              <Route exact path='/terms' render={(props) => terms({ ...props, ...common })} />
              <Route exact strict path='/' render={(props) => home({ ...props, ...common })} />
            </Switch>
          </main>
          {footer(common)}
        </React.Fragment>
      )
    }
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>{this.getComposedView()}</MuiThemeProvider>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
