import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
})

class Register extends Component {
  render() {
    // const { classes } = this.props
    return (
      <Paper>
        <Typography>Coming soon...</Typography>
      </Paper>
    )
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Register)
