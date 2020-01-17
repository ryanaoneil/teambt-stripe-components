
import React from "react";
import PropTypes from "prop-types";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    subscriptionSummary: {
      fontSize: "0.6em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    title: {
      fontWeight: "bold"
    },
    monthlyPrice: {
      fontWeight: "regular"
    },
    yearlyPrice: {
      fontStyle: "italic"
    },
    description: {
      fontWeight: "bold",
    }
  };
});

const SubscriptionSummary = props => {
  const classes = useStyles();
  const { title, monthlyPrice, yearlyPrice } = props;
  if (monthlyPrice === 0) {


    return (
      <div className={classes.subscriptionSummary}>
        <div>
          <MUI.Typography align="center" className={classes.title} variant="h6">
            {title}
          </MUI.Typography>
          <React.Fragment>
            <MUI.Typography
              align="center"
              className={classes.description}
              variant="body1"
              color="primary"
            >
              Free Forever
            </MUI.Typography>
          </React.Fragment>
        </div>
      </div>
    );
  } else if (monthlyPrice < 0) {
    return (
      <div className={classes.subscriptionSummary}>
        <div>
          <MUI.Typography align="center" className={classes.title} variant="h6">
            {title}
          </MUI.Typography>
        </div>
        <div>
          <MUI.Typography
            align="center"
            className={classes.monthlyPrice}
            variant="body1"
            color="primary"
          >
            We will call you to customize the best plan for your needs
            </MUI.Typography>
        </div>
        <div>
          <MUI.Typography align="center" className={classes.description} variant="body1">
            {`You will get 7 days free trial`}
          </MUI.Typography>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.subscriptionSummary}>
        <div>
          <MUI.Typography align="center" className={classes.title} variant="h6">
            {title}
          </MUI.Typography>
        </div>
        <div>
          <MUI.Typography align="center" className={classes.description} variant="body1">
            {`Starting with 7 days free trial, then`}
          </MUI.Typography>
        </div>
        <div>
          <React.Fragment>
            <MUI.Typography
              align="center"
              className={classes.monthlyPrice}
              variant="body1"
              color="primary"
            >
              ${monthlyPrice}/ monthly
        </MUI.Typography>
            <MUI.Typography
              align="center"
              className={classes.yearlyPrice}
              variant="subtitle1"
              color="primary"
            >
              ${yearlyPrice}/ yearly
        </MUI.Typography>
          </React.Fragment>
        </div>
      </div>
    );
  }
};

export default SubscriptionSummary;

SubscriptionSummary.propTypes = {
  title: PropTypes.string.isRequired,
  monthlyPrice: PropTypes.number,
  yearlyPrice: PropTypes.number
};
