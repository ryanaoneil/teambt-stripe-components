import React from 'react';
import * as RTL from '@testing-library/react';
import SubscriptionSummary from './SubscriptionSummary';

describe('Subscription Summary tests', () => {
    test('render', () => {
        const subscriptionSummary = RTL.render(<SubscriptionSummary
            title="Test"
            monthlyPrice={43}
            yearlyPrice={323}
            summaryList={[
                'test 1',
                'test 2'
            ]}
        />);

        expect(subscriptionSummary.getByText('test 1')).toBeVisible();
        expect(subscriptionSummary.getByText('test 2')).toBeVisible();
    })
})