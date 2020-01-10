import React from 'react';
import SubscriptionContainer from '../../metacomponents/SubscriptionContainer';
import Subscription from '../../components/Subscription';
import SubscriptionSummary from '../../components/SubscriptionSummary';
export default { title: 'Subscription' }

const PLACEHOLDER_IMAGE = "https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/placeholder-img.jpg?alt=media&token=bc0920f1-79f9-4b7c-bf72-429671a2d95e";

export const subscriptions = () => (
    <SubscriptionContainer>
        <Subscription image={PLACEHOLDER_IMAGE} subscriptionSummary={() => <div>
            <SubscriptionSummary
                title="Bud"
                monthlyPrice={120}
                yearlyPrice={1200}
                summaryList={
                    [
                        "Maximum of 2 years",
                        "Online payment using Stripe",
                        "E-Contract"
                    ]}
            />
        </div>} />
    </SubscriptionContainer>
);

export const subscriptionsMultiple = () => (
    <SubscriptionContainer>
        <Subscription toggled={false} image={PLACEHOLDER_IMAGE} subscriptionSummary={() => <div>
            <SubscriptionSummary
                title="Bud"
                monthlyPrice={120}
                yearlyPrice={1200}
                summaryList={
                    [
                        "Maximum of 2 years",
                        "Online payment using Stripe",
                        "E-Contract"
                    ]}
            />
        </div>} />
        <Subscription toggled={true} image={PLACEHOLDER_IMAGE} subscriptionSummary={() => <div>
            <SubscriptionSummary
                title="Bud"
                monthlyPrice={120}
                yearlyPrice={1200}
                summaryList={
                    [
                        "Maximum of 2 years",
                        "Online payment using Stripe",
                        "E-Contract"
                    ]}
            />
        </div>} />
        <Subscription toggled={false} image={PLACEHOLDER_IMAGE} subscriptionSummary={() => <div>
            <SubscriptionSummary
                title="Bud"
                monthlyPrice={120}
                yearlyPrice={1200}
                summaryList={
                    [
                        "Maximum of 2 years",
                        "Online payment using Stripe",
                        "E-Contract"
                    ]}
            />
        </div>} />
    </SubscriptionContainer>
);