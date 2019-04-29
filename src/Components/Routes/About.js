import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: '25vh',
  },
})

class About extends Component {
  render() {
    const { classes } = this.props
    return (
      <Paper elevation={0} className={classes.paper}>
        <Typography variant='h3' align='center' style={{ paddingTop: '25px', paddingBottom: '25px' }}>
          What is Milwaukee Wargames?
        </Typography>
        <Typography style={{ paddingLeft: '25px', paddingRight: '25px' }}>
          This page is under construction... Just know that the site is currently under development and nothing you save
          will be preserved outside of the alpha phase. I appreciate the testing! Also, we will <strong>NOT</strong>{' '}
          display any identifying information about you anywhere on this site. Your account is only used for distinct
          game logs. This site will forever be free (i.e., open-source, no ads, and no charges). It's a hobby project,
          not a business.
        </Typography>
      </Paper>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
