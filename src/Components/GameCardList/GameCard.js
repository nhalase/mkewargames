import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  linkButtonSecondaryDark: {
    color: (theme.palette.secondary.dark)
  }
});

class GameCard extends Component {
  renderCardActions = (isLoggedIn, classes) => {
    if (isLoggedIn) {
      return (
        <React.Fragment>
          <Button size="small" className={classes.linkButtonSecondaryDark}>
            Log Play
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </React.Fragment>
      );
    }
  };

  render() {
    const { classes, game, isLoggedIn } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={game.thumbnail}
            title={game.name}
          />
          <CardContent>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>{this.renderCardActions(isLoggedIn, classes)}</CardActions>
      </Card>
    );
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCard);
