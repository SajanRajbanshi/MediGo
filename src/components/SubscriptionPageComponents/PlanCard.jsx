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
            <Paper elevation={3} sx={{ borderRadius: '15px' }}>
                <Box>
                    <Typography
                        sx={{ fontWeight: 'bold' }}
                        variant='h4'
                        fontSize={40}
                        p={2}
                    >
                        ${
                            planType === ("monthly" || 0)
                                ? planDetails.price.monthly
                                : planDetails.price.yearly
                        }
                    </Typography>
                    <Typography
                        pl={2}
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', color: '#4d4d4d' }}
                        fontSize={20}
                    >
                        {planDetails.name}
                    </Typography>
                    <Typography
                        pl={2}
                        variant='subtitle2'
                        fontSize={16}
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
                            margin: '0.5rem 5%',
                            background: blue[500],
                            color: 'white',
                            borderRadius: '19px',
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