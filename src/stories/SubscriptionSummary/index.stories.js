import React from 'react';
import SubscriptionSummary from '../../components/SubscriptionSummary';

export default { title: 'SubscriptionSummary' };

export const subscriptionSummaryWithOoutPrice = () => (
    <SubscriptionSummary
        title='Bud'
        monthlyPrice={0}
        yearlyPrice={0}
        summaryList={[]} />
)

export const subscriptionSummaryWithPrice = () => <SubscriptionSummary
    title="Bloom"
    monthlyPrice={150}
    yearlyPrice={1800}
    summaryList={['test 1', 'fasdfsdfa', 'dfasdfasdfasdfasdf']}
/>

export const subscriptionSummaryWithEnterprise = () => <SubscriptionSummary
    title="Enterprise"
    monthlyPrice={-1}
    summaryList={[]}
/>

