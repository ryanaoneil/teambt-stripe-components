import React from "react";
import PropTypes from "prop-types";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    subscriptionMedia: {
      width: "50%",
      height: "100%",
      fontSize: 0
    },
    image: {
      objectFit: "cover",
      height: "100%",
      width: "100%"
    }
  };
});

const SubscriptionMedia = props => {
  const { src, width, height } = props;
  const WIDTH = width || 100;
  const HEIGHT = height || 100;
  const classes = useStyles({ width: WIDTH, height: HEIGHT });
  return (
    <div className={classes.subscriptionMedia}>
      <img src={src} className={classes.image} alt="subscription" />
    </div>
  );
};

export default SubscriptionMedia;

SubscriptionMedia.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired
};
