import React from 'react';
import PropTypes from 'prop-types';
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
    return {
        subscriptionSummary: {
            padding: '1em'
        },
        title: {
            fontWeight: 'bold'
        },
        monthlyPrice: {
            fontWeight: 'bold',
            color: 'grey'
        },
        yearlyPrice: {
            fontStyle: 'italic'
        }
    }
})

const SubscriptionSummary = props => {
    const classes = useStyles();
    const { title, monthlyPrice, yearlyPrice, summaryList } = props;
    return <div className={classes.subscriptionSummary}>
        <MUI.Typography className={classes.title} variant="h6">{title}</MUI.Typography>
        <MUI.Typography className={classes.monthlyPrice} variant="body1">${monthlyPrice}/ monthly</MUI.Typography>
        <MUI.Typography className={classes.yearlyPrice} variant="subtitle1">${yearlyPrice}/ yearly</MUI.Typography>
        <ul>
            {
                summaryList.map((s, i) => {
                    return <li key={i}><MUI.Typography>{s}</MUI.Typography></li>
                })
            }
        </ul>

    </div>
}

export default SubscriptionSummary;

SubscriptionSummary.propTypes = {
    title: PropTypes.string.isRequired,
    monthlyPrice: PropTypes.number.isRequired,
    yearlyPrice: PropTypes.number.isRequired,
    summaryList: PropTypes.array.isRequired
}

