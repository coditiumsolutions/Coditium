import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../theme/designTokens';

const SchoolIllustration = () => (
  <Box sx={{ position: 'relative', width: '100%', maxWidth: 280, mx: 'auto', aspectRatio: '4/3' }} aria-hidden>
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        borderRadius: '14px',
        background: `linear-gradient(145deg, ${colors.secondary}20, ${colors.accent}18)`,
        border: `1px solid ${colors.border}`,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '18%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70%',
        height: '45%',
        bgcolor: colors.secondary,
        borderRadius: '8px 8px 0 0',
        boxShadow: '0 12px 32px rgba(6,182,212,0.25)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '18%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: 0,
        borderLeft: '50% solid transparent',
        borderRight: '50% solid transparent',
        borderBottom: `28px solid ${colors.accent}`,
        marginLeft: '-35%',
        width: '70%',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '75%',
        height: 12,
        bgcolor: colors.accent,
        borderRadius: 2,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '18%',
        right: '14%',
        width: 48,
        height: 48,
        borderRadius: '50%',
        bgcolor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        boxShadow: '0 8px 20px rgba(6,182,212,0.3)',
      }}
    >
      🎓
    </Box>
    <Box
      sx={{
        position: 'absolute',
        bottom: '6%',
        left: '10%',
        right: '10%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0.5,
      }}
    >
      {['Fees', 'Exams', 'Parents', 'Apps'].map((l) => (
        <Box
          key={l}
          sx={{
            py: 0.5,
            fontSize: '0.6rem',
            fontWeight: 700,
            textAlign: 'center',
            bgcolor: '#fff',
            borderRadius: 1,
            color: colors.secondary,
          }}
        >
          {l}
        </Box>
      ))}
    </Box>
  </Box>
);

export default SchoolIllustration;
