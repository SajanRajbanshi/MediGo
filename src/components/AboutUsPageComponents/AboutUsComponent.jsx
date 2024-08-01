import React from 'react';
import { Box, Typography } from '@mui/material'

const AboutUsComponent = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box
                alignItems={'center'}
                display={'flex'}
                flexDirection={'column'}
                height="80vh"
                justifyContent={'center'}
                width="50%"
            >
                <Typography
                    variant='h2'
                    component='h1'
                    fontWeight={600}
                    mb={35}
                >
                    About Medi<span style={{ color: 'red' }}>Go</span>
                </Typography>
                <Typography variant='h5' component='h3' color='#5c5c5c' fontWeight={500} fontSize={'1.92rem'}>
                    Helping you connect to medical help when you need from the comfort of your home, this site is our home for providing you help to connect with compassionate doctors who genuinely care about your well-being.
                </Typography>
            </Box>
            <Box ml={130} mt={120} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src="icons\aboutUsImage.jpeg" alt="image" width={400} height={280} className='about-image' />
            </Box>
        </Box>
    )
}

export default AboutUsComponent;