import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../theme/designTokens';

const PropertyIllustration = () => (
  <Box sx={{ position: 'relative', width: '100%', maxWidth: 280, mx: 'auto', aspectRatio: '4/3' }} aria-hidden>
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        borderRadius: '14px',
        background: `linear-gradient(145deg, ${colors.primary}20, ${colors.secondary}15)`,
        border: `1px solid ${colors.border}`,
      }}
    />
    {[0, 1, 2].map((i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          bottom: `${12 + i * 8}%`,
          left: `${15 + i * 22}%`,
          width: `${28 - i * 4}%`,
          height: `${35 + i * 12}%`,
          bgcolor: i === 2 ? colors.primary : i === 1 ? '#3B82F6' : '#60A5FA',
          borderRadius: '6px 6px 0 0',
          opacity: 0.9 - i * 0.15,
          boxShadow: '0 8px 24px rgba(37,99,235,0.2)',
        }}
      />
    ))}
    <Box
      sx={{
        position: 'absolute',
        top: '15%',
        right: '12%',
        width: 56,
        height: 56,
        borderRadius: '50%',
        bgcolor: colors.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '1.5rem',
        boxShadow: '0 8px 20px rgba(20,184,166,0.4)',
      }}
    >
      🏢
    </Box>
    <Box
      sx={{
        position: 'absolute',
        bottom: '8%',
        left: '8%',
        right: '8%',
        py: 1,
        px: 1.5,
        borderRadius: '8px',
        bgcolor: '#fff',
        boxShadow: '0 4px 16px rgba(15,23,42,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {['Units', 'Billing', 'Portal'].map((l) => (
        <Box key={l} sx={{ fontSize: '0.65rem', fontWeight: 600, color: colors.primary, textAlign: 'center' }}>
          {l}
        </Box>
      ))}
    </Box>
  </Box>
);

export default PropertyIllustration;
