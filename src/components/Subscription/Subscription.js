import React from "react";

import * as MUI from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = MUI.makeStyles(theme => {
  return {
    subscriptions: {
      height: 200,
      display: "flex",
      marginBottom: "1em",
      border: props => {
        if (props.toggled) {
          return "2px solid lightcoral";
        } else {
          return "";
        }
      }
    },
    text: {
      flex: 1
    },
    media: {
      flex: 1,
      height: "100%",
      width: "100%",
      maxWidth: 200
    }
  };
});

const Subscription = props => {
  const { image, subscriptionSummary, toggled } = props;
  const classes = useStyles({ toggled });
  const [elevation, setElevation] = React.useState(toggled);

  return (
    <MUI.Card
      elevation={elevation ? 3 : 1}
      onMouseEnter={() => setElevation(true)}
      onMouseLeave={() => setElevation(false)}
      className={classes.subscriptions}
    >
      <div className={classes.text}>{subscriptionSummary()}</div>
      <MUI.CardMedia className={classes.media} image={image} />
    </MUI.Card>
  );
};

export default Subscription;

Subscription.propTypes = {
  image: PropTypes.string.isRequired,
  subscriptionSummary: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired
};
