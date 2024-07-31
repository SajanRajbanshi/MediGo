import React, { useState } from 'react'
import Header from '../components/landingPageComponents/Header';
import SubscriptionBody from '../components/SubscriptionPageComponents/SubscriptionBody';

const SubscriptionPage = () => {
    const [planType, setPlantype] = useState('monthly');

    const handlePlanChange = (plan) => {
        setPlantype(plan);
    };

    return (
        <>
            <Header />
            <SubscriptionBody planType={planType} onPlanChange={handlePlanChange} />

        </>
    )
}

export default SubscriptionPage