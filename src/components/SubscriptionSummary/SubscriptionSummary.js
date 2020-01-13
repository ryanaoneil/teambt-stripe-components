import React from "react";
import PropTypes from "prop-types";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    subscriptionSummary: {
      padding: "1em",
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
      fontWeight: "bold",
      color: theme.palette.primary.dark
    },
    yearlyPrice: {
      fontStyle: "italic",
      color: theme.palette.primary.main
    }
  };
});

const SubscriptionSummary = props => {
  const classes = useStyles();
  const { title, monthlyPrice, yearlyPrice } = props;
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
        >
          ${monthlyPrice}/ monthly
        </MUI.Typography>
        <MUI.Typography
          align="center"
          className={classes.yearlyPrice}
          variant="subtitle1"
        >
          ${yearlyPrice}/ yearly
        </MUI.Typography>
      </div>
    </div>
  );
};

export default SubscriptionSummary;

SubscriptionSummary.propTypes = {
  title: PropTypes.string.isRequired,
  monthlyPrice: PropTypes.number.isRequired,
  yearlyPrice: PropTypes.number.isRequired
};
