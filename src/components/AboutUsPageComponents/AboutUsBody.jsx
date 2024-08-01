import React from 'react';
import { Container } from '@mui/material';
import AboutUsComponent from './AboutUsComponent';
import TeamComponent from './TeamComponent';

const AboutUsBody = () => {
  return (
    <Container sx={{ marginTop: '85px' }}>
      <AboutUsComponent />
      <TeamComponent />
    </Container>
  )
}

export default AboutUsBody;