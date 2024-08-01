import React from 'react';
import {
    Button,
    Container,
    Paper,
    Typography,
} from '@mui/material';
import Plans from './Plans';

const SubscriptionBody = ({ planType, onPlanChange }) => {
    return (
        <Container
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: '118px'
            }}
        >
            <Typography
                variant='h4'
                component='h2'
                sx={{

                    fontWeight: 'bold',
                    fontSize: '2.4rem'
                }}
            >
                Choose Your Plan!
            </Typography>
            <Typography
                variant='subtitle1'
                component='p'
            >
                Find a plan tailored for your needs
            </Typography>
            <Paper
                elevation={3}
                sx={{
                    alignItems: 'center',
                    background: 'linear-gradient(to right, #6fc3df, #7ed957)',
                    borderRadius: '12px',
                    display: 'flex',
                    height: '8vh',
                    marginTop: '10px',
                    width: '32vw',
                }}
            >
                <Button
                    sx={{
                        margin: 'auto',
                        color: 'black',
                        height: '88%',
                        width: '48%',
                        borderRadius: '12px',
                        boxShadow: planType === 'monthly' ? '0px 0px 5px 1px rgb(50, 50, 50)' : '',
                        fontWeight: planType === 'monthly' ? 'bold' : 'normal',
                    }}
                    onClick={() => onPlanChange('monthly')}
                >
                    Monthly Plan
                </Button>
                <Button
                    sx={{
                        margin: 'auto',
                        color: 'black',
                        height: '88%',
                        width: '48%',
                        borderRadius: '12px',
                        boxShadow: planType === 'yearly' ? '0px 0px 5px 1px rgb(50, 50, 50)' : '',
                        fontWeight: planType === 'yearly' ? 'bold' : 'normal',

                    }}
                    onClick={() => onPlanChange('yearly')}
                >
                    Yearly Plan
                </Button>
            </Paper>
            <Plans planType={planType} />
        </Container>
    )
}

export default SubscriptionBody;