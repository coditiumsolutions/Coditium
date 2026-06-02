import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../theme/designTokens';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', light = false }) => (
  <Box sx={{ textAlign: align, mb: { xs: 4, md: 6 }, maxWidth: align === 'center' ? 720 : 'none', mx: align === 'center' ? 'auto' : 0 }}>
    {eyebrow && (
      <Typography
        component="span"
        sx={{
          display: 'block',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: light ? colors.accent : colors.primary,
          mb: 1.5,
        }}
      >
        {eyebrow}
      </Typography>
    )}
    <Typography
      component="h2"
      variant="h3"
      sx={{
        fontWeight: 700,
        fontSize: { xs: '1.75rem', md: '2.25rem' },
        lineHeight: 1.2,
        color: light ? '#fff' : colors.dark,
        letterSpacing: '-0.02em',
      }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography
        sx={{
          mt: 2,
          fontSize: { xs: '1rem', md: '1.125rem' },
          lineHeight: 1.7,
          color: light ? 'rgba(255,255,255,0.75)' : colors.textMuted,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default SectionHeading;
