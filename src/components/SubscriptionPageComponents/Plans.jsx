import React from 'react';
import { Box, Grid } from '@mui/material';
import PlanCard from './PlanCard';

const Plans = ({ planType }) => {
    const plans = [
        {
            name: "Basic",
            price: {
                monthly: 0,
                yearly: 0,
            },
            text: "Ideal for occasional consultations",
            featured: ["Electronic Health Records", "Reminder Notifications"],
            notFeatured: [
                "Secure Video Connection",
                "Audio Communication",
                "Appointment Scheduling",
                "Access to Premium Content",
                "Prioritized Support",
            ],
        },
        {
            name: "Standard",
            price: {
                monthly: 3.99,
                yearly: 44.99,
            },
            text: "Perfect for regular checkups",
            featured: [
                "Secure Video Connection",
                "Audio Communication",
                "Appointment Scheduling",
                "Electronic Health Records",
                "Reminder Notifications",
            ],
            notFeatured: ["Access to Premium Content", "Prioritized Support"],
        },
        {
            name: "Premium",
            price: {
                monthly: 5.99,
                yearly: 64.99,
            },
            text: "Comprehensive Care Tailored For You",
            featured: [
                "Secure Video Connection",
                "Audio Communication",
                "Appointment Scheduling",
                "Electronic Health Records",
                "Reminder Notifications",
                "Access to Premium Content",
                "Prioritized Support",
            ],
            notFeatured: [],
        },
    ];

    return (
        <Box mt={20} width='inherit'>
            <Grid container spacing={{ xs: 4, md: 20 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    plans.map((planDetails) => (
                        <PlanCard key={planDetails.name} planType={planType} planDetails={planDetails} />
                    ))
                }
            </Grid>
        </Box>
    )
};

export default Plans;