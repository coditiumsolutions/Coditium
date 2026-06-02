import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { technologyLogoGrid } from '../../data/homeContent';
import AnimateSection from './AnimateSection';
import { colors } from '../../theme/designTokens';

const GRID_BORDER = colors.dark;

const HomeApplicationGrid = () => (
  <Box
    component="section"
    id="application-modules"
    sx={{
      py: { xs: 5, md: 7 },
      bgcolor: '#fff',
    }}
  >
    <Container maxWidth="lg">
      <AnimateSection sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.5rem', md: '2rem' },
            color: colors.dark,
            letterSpacing: '-0.02em',
            mb: 1,
          }}
        >
          Technologies We Work With
        </Typography>
        <Typography
          sx={{
            color: colors.textMuted,
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            maxWidth: 640,
            mx: 'auto',
          }}
        >
          Modern frameworks, platforms, and tools we use to build reliable software solutions.
        </Typography>
      </AnimateSection>

      <AnimateSection>
        <Box
          sx={{
            border: `1px solid ${GRID_BORDER}`,
            background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 10%)',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              borderTop: `1px solid ${GRID_BORDER}`,
              borderLeft: `1px solid ${GRID_BORDER}`,
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(6, 1fr)',
              },
            }}
          >
            {technologyLogoGrid.map((item) => (
              <Box
                key={item.name}
                title={item.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: { xs: 1.5, md: 2 },
                  py: { xs: 3, md: 4 },
                  minHeight: { xs: 120, sm: 140, md: 160 },
                  bgcolor: '#fff',
                  borderRight: `1px solid ${GRID_BORDER}`,
                  borderBottom: `1px solid ${GRID_BORDER}`,
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    bgcolor: '#F8FAFC',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  sx={{
                    width: 'auto',
                    height: { xs: 64, sm: 72, md: 80 },
                    maxWidth: { xs: '95%', md: '90%' },
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </AnimateSection>
    </Container>
  </Box>
);

export default HomeApplicationGrid;
