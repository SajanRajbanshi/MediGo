import React from 'react';
import { Box, Typography } from '@mui/material'
import DisplayAvatars from './DisplayAvatars';

const TeamComponent = () => {
  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      mt={50}
    >
      <Typography
        variant='h2'
        component={'h2'}
        fontWeight={600}
      >
        Meet The Team
      </Typography>
      <Typography
        component={'h3'}
        mt={20}
        mb={70}
        variant='h5'
      >
        We’re a dynamic group of individuals who are passionate about what we do.
      </Typography>
      <DisplayAvatars />
    </Box>
  )
}

export default TeamComponent;