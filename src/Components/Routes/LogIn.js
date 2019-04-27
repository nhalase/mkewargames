import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { auth, uiConfig } from '../Firebase'

const styles = (theme) => ({
  root: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})

class LogIn extends Component {
  componentDidMount() {
    console.info('LogIn did mount; setting unregisterAuthObserver')
    const { handleLogInSuccess, history } = this.props
    this.unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      handleLogInSuccess(!!user)
      if (!!user) {
        history.push('/')
      }
    })
  }
  componentWillUnmount() {
    console.debug('LogIn will unmount; unregisterAuthObserver')
    this.unregisterAuthObserver()
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    )
  }
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LogIn)
