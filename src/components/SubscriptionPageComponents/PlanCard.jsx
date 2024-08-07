import React from 'react';
import {
    Box,
    Button,
    Grid,
    List,
    ListItem,
    Paper,
    Typography
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { blue } from '@mui/material/colors';

const PlanCard = ({ planType, planDetails }) => {
    return (
        <Grid item xs={6} sm={4} md={4}>
            <Paper elevation={5} sx={{ borderRadius: '15px' }}>
                <Box>
                    <Typography
                        sx={{ fontWeight: 'bold' }}
                        variant='h4'
                        fontSize={40}
                        pl={15}
                        pt={13}
                        pb={13}
                    >
                        ${
                            planType === ("monthly" || 0)
                                ? planDetails.price.monthly
                                : planDetails.price.yearly
                        }
                    </Typography>
                    <Typography
                        pl={20}
                        mb={4}
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', color: '#4d4d4d' }}
                        fontSize={20}
                    >
                        {planDetails.name}
                    </Typography>
                    <Typography
                        pl={20}
                        variant='subtitle2'
                        fontSize={16}
                        mb={18}
                    >
                        {planDetails.text}
                    </Typography>
                    <Typography
                        variant='body1'
                        mt={2}
                        component='ul'
                        fontSize={15}
                    >
                        <List disablePadding>
                            {
                                planDetails.featured.map((feature, index) => (
                                    <ListItem
                                        disablePadding
                                        key={index}
                                        sx={{
                                            paddingLeft: '15px',
                                            paddingTop: '2px'
                                        }}
                                    >
                                        <CheckIcon />{feature}
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Typography>
                    <Typography
                        variant='body1'
                        component='ul'
                        fontSize={15}
                    >
                        <List disablePadding>
                            {
                                planDetails.notFeatured.map((feature, index) => (
                                    <ListItem
                                        disablePadding
                                        key={index}
                                        sx={{
                                            paddingLeft: '15px',
                                            paddingTop: '2px'
                                        }}
                                    >
                                        <CloseIcon />{feature}
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Typography>
                    <Button
                        sx={{
                            width: '90%',
                            margin: '1.3rem 5%',
                            background: blue[500],
                            color: 'white',
                            borderRadius: '19px',
                            ':hover': {
                                background: blue[500],
                                color: 'white',
                                transition: '0.1s',
                                transform: 'scale(1.03)',
                            },
                        }}
                    >
                        Choose Plan
                    </Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default PlanCard;