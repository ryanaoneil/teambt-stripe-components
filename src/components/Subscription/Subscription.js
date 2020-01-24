import React from "react";
import * as MUI from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = MUI.makeStyles(theme => {
  return {
    subscriptions: {
      display: "flex",
      marginBottom: "1em",
      height: "100%",
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
      width: "100%"
    }
  };
});

const Subscription = props => {
  const { subscriptionSummary, toggled } = props;
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
    </MUI.Card>
  );
};

export default Subscription;

Subscription.propTypes = {
  image: PropTypes.string,
  subscriptionSummary: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired
};
