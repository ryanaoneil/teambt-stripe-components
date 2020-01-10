import React from 'react';
import SubscriptionSummary from '../../components/SubscriptionSummary';

export default { title: 'SubscriptionSummary' };
export const subscriptionSummary = () => <SubscriptionSummary
    title="Bud"
    monthlyPrice={50}
    yearlyPrice={2000}
    summaryList={['test 1', 'fasdfsdfa', 'dfasdfasdfasdfasdf']}
/>