import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../theme/designTokens';

const HomeHeroBanner = () => (
  <Box
    component="section"
    aria-label="Coditium integrated enterprise solutions"
    sx={{
      position: 'relative',
      width: '100%',
      m: 0,
      p: 0,
      overflow: 'hidden',
      bgcolor: colors.dark,
      borderBottom: '3px solid #ffc100',
    }}
  >
    <Box
      component="img"
      src="/homeimage_05.png"
      alt="Coditium Solutions — property, education, travel, and mobile app development"
      sx={{
        display: 'block',
        width: '100%',
        height: 'auto',
      }}
    />
  </Box>
);

export default HomeHeroBanner;
