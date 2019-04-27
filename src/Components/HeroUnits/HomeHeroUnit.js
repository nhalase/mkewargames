import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button } from '@material-ui/core'
import { AboutLink, RegisterLink } from '../Links'
import { city, brand } from '../../Data'

const styles = (theme) => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  link: {
    textDecoration: 'none',
  },
  linkButtonPrimaryLight: {
    color: theme.palette.primary.light,
  },
})

class HomeHeroUnit extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
            {city} Wargaming Central
          </Typography>
          <Typography variant='h6' align='center' color='textSecondary' paragraph>
            {brand} attempts to inform what games people are playing, when they are playing them, and
            where they play them at.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary' component={RegisterLink}>
                  Help keep us up-to-date
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='secondary' component={AboutLink}>
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

HomeHeroUnit.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeHeroUnit)
