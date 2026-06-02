import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../theme/designTokens';

const HeroIllustration = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      maxWidth: 520,
      mx: 'auto',
      aspectRatio: '1 / 1',
    }}
    aria-hidden
  >
    <Box
      sx={{
        position: 'absolute',
        inset: '8%',
        borderRadius: '14px',
        background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.accent}20 100%)`,
        border: `1px solid ${colors.border}`,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '12%',
        left: '10%',
        right: '10%',
        height: '12%',
        borderRadius: '8px',
        bgcolor: colors.card,
        boxShadow: '0 8px 32px rgba(15,23,42,0.08)',
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        px: 2,
      }}
    >
      {[colors.primary, colors.accent, colors.success, '#94A3B8'].map((c) => (
        <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
      ))}
      <Box sx={{ flex: 1, height: 6, borderRadius: 3, bgcolor: colors.border, ml: 1 }} />
    </Box>
    <Box
      sx={{
        position: 'absolute',
        top: '28%',
        left: '8%',
        width: '55%',
        bottom: '18%',
        borderRadius: '14px',
        bgcolor: colors.dark,
        p: 2.5,
        fontFamily: 'monospace',
        fontSize: '0.65rem',
        color: colors.accent,
        lineHeight: 1.8,
        overflow: 'hidden',
      }}
    >
      <Box component="span" sx={{ color: '#94A3B8' }}>{'// ASP.NET Core + React'}</Box>
      <br />
      <Box component="span" sx={{ color: '#818CF8' }}>export</Box> {' '}
      <Box component="span" sx={{ color: '#F472B6' }}>const</Box> App = () {'=>'} {'{'}
      <br />
      &nbsp;&nbsp;return {'<Enterprise />'};
      <br />
      {'}'}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
        }}
      >
        {['API', 'UI', 'DB', 'Cloud'].map((label) => (
          <Box
            key={label}
            sx={{
              py: 0.75,
              textAlign: 'center',
              borderRadius: '6px',
              bgcolor: 'rgba(37,99,235,0.25)',
              color: '#E2E8F0',
              fontSize: '0.6rem',
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
    </Box>
    <Box
      sx={{
        position: 'absolute',
        top: '32%',
        right: '4%',
        width: '38%',
        p: 2,
        borderRadius: '14px',
        bgcolor: colors.card,
        boxShadow: '0 12px 40px rgba(37,99,235,0.15)',
        border: `1px solid ${colors.border}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <Box sx={{ width: 32, height: 32, borderRadius: '8px', bgcolor: `${colors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: 14, height: 14, borderRadius: 2, bgcolor: colors.primary }} />
        </Box>
        <Box>
          <Box sx={{ width: 60, height: 6, bgcolor: colors.border, borderRadius: 1, mb: 0.5 }} />
          <Box sx={{ width: 40, height: 4, bgcolor: colors.border, borderRadius: 1 }} />
        </Box>
      </Box>
      {[85, 62, 78].map((w) => (
        <Box key={w} sx={{ height: 4, width: `${w}%`, bgcolor: colors.border, borderRadius: 1, mb: 0.75 }} />
      ))}
    </Box>
    <Box
      sx={{
        position: 'absolute',
        bottom: '8%',
        right: '12%',
        px: 2,
        py: 1,
        borderRadius: '10px',
        bgcolor: colors.success,
        color: '#fff',
        fontSize: '0.75rem',
        fontWeight: 600,
        boxShadow: '0 8px 24px rgba(16,185,129,0.35)',
      }}
    >
      Deployed
    </Box>
  </Box>
);

export default HeroIllustration;
