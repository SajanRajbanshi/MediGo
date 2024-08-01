import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';

const AboutUsBody = () => {
  return (
    <Container sx={{ marginTop: '110px' }}>
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
        >
          About Medi<span style={{ color: 'red' }}>Go</span>
        </Typography>
        <Typography variant='h5' component='h3' sx={{color: '#5c5c5c'}}>
          hey
        </Typography>
      </Box>
    </Container>
  )
}

export default AboutUsBody;