import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardActions, CardMedia, Button } from '@material-ui/core'

const styles = (theme) => ({
  linkButtonSecondaryDark: {
    color: theme.palette.secondary.dark,
  },
})

class GameCard extends Component {
  renderCardActions = (isLoggedIn, classes) => {
    if (isLoggedIn) {
      return (
        <React.Fragment>
          <Button size='small' color='primary'>
            Log Play
          </Button>
          <Button size='small' color='secondary'>
            Learn More
          </Button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Button size='small' color='secondary'>
            Learn More
          </Button>
        </React.Fragment>
      )
    }
  }

  render() {
    const { classes, game, isLoggedIn } = this.props
    return (
      <Card>
        <CardActionArea>
          <CardMedia component='img' image={game.thumbnail} title={game.name} />
          {/* <CardContent>
            <Typography component="p">By {game.developer}</Typography>
          </CardContent> */}
        </CardActionArea>
        <CardActions>{this.renderCardActions(isLoggedIn, classes)}</CardActions>
      </Card>
    )
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GameCard)
