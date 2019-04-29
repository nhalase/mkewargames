import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog,
  Paper,
  Typography,
  CircularProgress,
  Grid,
} from '@material-ui/core'
import { firestore, FieldValue } from '../Firebase'

const styles = (theme) => ({
  linkButtonSecondaryDark: {
    color: theme.palette.secondary.dark,
  },
  dialogPaper: {
    minWidth: '300px',
  },
})

class GameCard extends Component {
  state = {
    logPlayConfirmationDialogOpen: false,
    isDialogLoading: false,
    learnMoreDialogOpen: false,
  }
  getDialogContent = (classes, game) => {
    if (this.state.isDialogLoading) {
      return (
        <Grid container spacing={0} direction='column' alignItems='center' justify='center'>
          <Grid item xs={3}>
            <CircularProgress color='secondary' />
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Paper elevation={0}>
          <Typography variant='body1'>
            Please only log <u>once</u> per game. In other words, you should <strong>NOT</strong> log a game for both
            yourself and your opponent.
            <br />
            <br />
            This feature is still in-progress.
            <br />
            <br />
            The plan is to have you specify the location you are logging the game from.
            <br />
            <br />
            Select "Ok" if you are ready to log a game of <strong>{game.name}</strong>.
          </Typography>
        </Paper>
      )
    }
  }
  renderCardActions = (classes) => {
    const { isLoggedIn, game, user } = this.props
    const learnMoreDialog = (
      <Dialog
        open={this.state.learnMoreDialogOpen}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Under Construction'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Normally, clicking "Learn More" would bring you to a dashboard showing the detailed logged play information.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              e.preventDefault()
              this.setState({ learnMoreDialogOpen: false })
            }}
            color='primary'
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
    const logPlayDialog = (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth='xs'
        aria-labelledby='confirmation-dialog-title'
        open={this.state.logPlayConfirmationDialogOpen}
      >
        <DialogTitle id='confirmation-dialog-title'>Log a play for {game.name}?</DialogTitle>
        <DialogContent>{this.getDialogContent(classes, game)}</DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              e.preventDefault()
              this.setState({
                logPlayConfirmationDialogOpen: false,
                isDialogLoading: false,
              })
            }}
            color='primary'
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault()
              this.setState({
                logPlayConfirmationDialogOpen: false,
                isDialogLoading: true,
              })
              const gameDocRef = firestore.collection('games').doc(game.key)
              gameDocRef
                .update({ playCount: FieldValue.increment(1) })
                .then(() => {
                  console.log(user.uid + ' logged a play!')
                  this.setState({
                    logPlayConfirmationDialogOpen: false,
                    isDialogLoading: false,
                  })
                })
                .catch((error) => {
                  console.error(error)
                  this.setState({
                    logPlayConfirmationDialogOpen: false,
                    isDialogLoading: false,
                  })
                })
            }}
            color='primary'
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
    if (isLoggedIn) {
      return (
        <React.Fragment>
          {learnMoreDialog}
          {logPlayDialog}
          <Button
            size='small'
            color='primary'
            onClick={(e) => {
              e.preventDefault()
              this.setState({
                logPlayConfirmationDialogOpen: true,
                isDialogLoading: false,
              })
            }}
          >
            Log Play
          </Button>
          <Button
            size='small'
            color='secondary'
            onClick={(e) => {
              e.preventDefault()
              this.setState({ learnMoreDialogOpen: true })
            }}
          >
            Learn More
          </Button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {learnMoreDialog}
          <Button
            size='small'
            color='secondary'
            onClick={(e) => {
              e.preventDefault()
              this.setState({ learnMoreDialogOpen: true })
            }}
          >
            Learn More
          </Button>
        </React.Fragment>
      )
    }
  }

  render() {
    const { classes, game } = this.props
    return (
      <Card>
        <CardActionArea>
          <CardMedia component='img' image={game.thumbnail} title={game.name} />
          {/* <CardContent>
            <Typography component="p">By {game.developer}</Typography>
          </CardContent> */}
        </CardActionArea>
        <CardActions>{this.renderCardActions(classes)}</CardActions>
      </Card>
    )
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GameCard)
