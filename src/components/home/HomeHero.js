import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { whyCompaniesChoose } from '../../data/homeContent';
import { colors } from '../../theme/designTokens';

const ACCENT = colors.secondary;

const HomeHero = () => (
  <Box
    component="section"
    id="home"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      bgcolor: '#0B1220',
      py: { xs: 5, md: 7 },
    }}
  >
    {/* Background geometry */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `radial-gradient(ellipse at 85% 50%, ${colors.primary}22 0%, transparent 55%),
          radial-gradient(ellipse at 70% 80%, ${ACCENT}18 0%, transparent 45%)`,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: { xs: '10%', md: '5%' },
        right: { xs: '-30%', md: '-8%' },
        width: { xs: '70%', md: '45%' },
        height: { xs: '50%', md: '90%' },
        background: `linear-gradient(135deg, ${colors.primary}28 0%, ${ACCENT}15 50%, transparent 100%)`,
        clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
        opacity: 0.9,
        pointerEvents: 'none',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: { xs: '5%', md: '15%' },
        width: { xs: 180, md: 280 },
        height: { xs: 180, md: 280 },
        background: `linear-gradient(160deg, ${ACCENT}20, transparent)`,
        clipPath: 'polygon(50% 0%, 100% 30%, 100% 100%, 0% 70%)',
        pointerEvents: 'none',
      }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Typography
        component="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '1.35rem', sm: '1.75rem', md: '2.25rem' },
          lineHeight: 1.2,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: '#fff',
          mb: { xs: 4, md: 5 },
          maxWidth: 900,
        }}
      >
        Why Many Companies{' '}
        <Box component="span" sx={{ color: ACCENT }}>
          Choose
        </Box>{' '}
        Coditium?
      </Typography>

      <Grid container spacing={{ xs: 4, md: 3 }}>
        {whyCompaniesChoose.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                borderLeft: `3px solid ${ACCENT}`,
                pl: { xs: 2.5, md: 3 },
                pr: { md: 2 },
                height: '100%',
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.05rem', md: '1.125rem' },
                  color: '#fff',
                  mb: 1.5,
                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.9375rem' },
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.78)',
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default HomeHero;
