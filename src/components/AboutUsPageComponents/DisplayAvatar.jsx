import React from 'react'
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { amber, blue, blueGrey, deepPurple, red } from '@mui/material/colors';

const DisplayAvatar = ({ name, index }) => {
    const colors = [
        red,
        blue, blueGrey, deepPurple, amber
    ]
    return (
        <Grid item xs={6} sm={3} md={2.4}>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Avatar
                    sx={{
                        width: '100px',
                        height: '100px',
                        bgcolor: colors[index][500]
                    }}
                    alt='???'
                    src=''
                >
                    {name[0]}
                </Avatar>
                <Typography
                    variant='subtitle1'
                    mt={20}
                    mb={70}
                    fontWeight={'bold'}
                    fontSize={'larger'}
                >
                    {name}
                </Typography>
            </Box>
        </Grid>
    )
}

export default DisplayAvatar;