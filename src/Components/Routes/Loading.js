import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  grid: {
    minHeight: '100vh',
  },
})

class About extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        className={classes.grid}
      >
        <Grid item xs={3}>
          <CircularProgress className={classes.progress} color='secondary' />
        </Grid>
      </Grid>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
