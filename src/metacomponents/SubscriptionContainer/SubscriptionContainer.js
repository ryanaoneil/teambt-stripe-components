import React from 'react';
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
    return {
        subscriptionContainer: {
            width: '100%',
            height: 500,
            maxWidth: 500
        }
    }
})

const SubscriptionContainer = props => {
    const classes = useStyles();
    return <div className={classes.subscriptionContainer}>
        {props.children}
    </div>
}

export default SubscriptionContainer;