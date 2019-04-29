import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { HomeHeroUnit } from '../HeroUnits'
import { GameCardList } from '../CardLists'
import { Paper, Typography } from '@material-ui/core'
import { contactEmail } from '../../Data'

const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: 'inherit',
    marginBottom: '50px',
    paddingTop: '25px',
    paddingBottom: '10px',
    alignContent: 'center',
  },
})

class Home extends Component {
  render() {
    const { classes, isLoggedIn, games, user } = this.props
    return (
      <React.Fragment>
        <HomeHeroUnit user={user} isLoggedIn={isLoggedIn} games={games} />
        <Paper elevation={0} className={classes.paper}>
          <Typography variant='h5' align='center' gutterBottom>
            Games We Play
          </Typography>
          <Typography variant='body1' align='center' gutterBottom>
            The games list is sorted first by most recently played, followed by alphabetical ordering. If a game is
            missing from this list,{' '}
            <a className='primary-anchor' rel='noopener noreferrer' href={`mailto:${contactEmail}`}>
              contact us via email
            </a>{' '}
            and we&apos;ll be sure to include it in a future release!
          </Typography>
        </Paper>
        <GameCardList user={user} isLoggedIn={isLoggedIn} games={games} />
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
