import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { HomeLink, LogInLink } from '../Links'
import { brand } from '../../Data'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

class Header extends Component {
  getToolbarButtons = (classes) => {
    const { isLoggedIn, handleLogOut } = this.props
    if (isLoggedIn) {
      return (
        <Button color='inherit' onClick={handleLogOut}>
          Log Out
        </Button>
      )
    } else {
      return (
        <React.Fragment>
          <Button component={LogInLink} color='inherit'>
            Log In
          </Button>
        </React.Fragment>
      )
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              <HomeLink className={classes.link}>{brand}</HomeLink>
            </Typography>
            {this.getToolbarButtons(classes)}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
