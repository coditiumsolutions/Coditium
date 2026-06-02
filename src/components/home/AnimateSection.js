import React from 'react';
import { Box } from '@mui/material';
import { useInView } from '../../hooks/useInView';

const AnimateSection = ({ children, className = 'animate-in-view', sx, ...props }) => {
  const { ref, isInView } = useInView({ threshold: 0.08 });

  return (
    <Box
      ref={ref}
      className={`${className} ${isInView ? 'is-visible' : ''}`}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
};

export default AnimateSection;
