import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { GameCard } from '.'
import { games } from '../../Data'

const styles = (theme) => ({
  root: {
    padding: '12px', // half of the grid container spacing of 24 -- this is a Facebook recommended workaround for the negative margin causing horizontal overflow
  },
})

class GameCardList extends Component {
  getGameCards = (classes, isLoggedIn) => {
    return games.map((game, _) => (
      <Grid key={game.key} item lg={3}>
        <GameCard game={game} isLoggedIn={isLoggedIn} />
      </Grid>
    ))
  }

  render() {
    const { classes, isLoggedIn } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24} justify='center' direction='row'>
          {this.getGameCards(classes, isLoggedIn)}
        </Grid>
      </div>
    )
  }
}

GameCardList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GameCardList)
