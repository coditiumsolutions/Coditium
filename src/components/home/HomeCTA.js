import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { CalendarMonth, PlayCircleOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AnimateSection from './AnimateSection';
import { colors, gradients, radius } from '../../theme/designTokens';

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <AnimateSection>
          <Box
            sx={{
              borderRadius: '14px',
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              background: gradients.cta,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -80,
                right: -80,
                width: 240,
                height: 240,
                borderRadius: '50%',
                bgcolor: 'rgba(20,184,166,0.2)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -60,
                left: -40,
                width: 200,
                height: 200,
                borderRadius: '50%',
                bgcolor: 'rgba(6,182,212,0.15)',
              }}
            />
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: '1.75rem', md: '2.35rem' },
                fontWeight: 800,
                color: '#fff',
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Ready to Transform Your Property or School Operations?
            </Typography>
            <Typography
              sx={{
                position: 'relative',
                color: 'rgba(255,255,255,0.88)',
                fontSize: '1.0625rem',
                mb: 4,
                maxWidth: 620,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Join housing societies, builders, schools, and colleges across Pakistan who trust Coditium
              Solutions for enterprise-grade software.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', position: 'relative' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayCircleOutline />}
                onClick={() => navigate('/contact')}
                sx={{
                  bgcolor: '#fff',
                  color: colors.primary,
                  fontWeight: 700,
                  borderRadius: radius.button,
                  px: 3,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#F0F9FF' },
                }}
              >
                Request Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<CalendarMonth />}
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: 'rgba(255,255,255,0.55)',
                  borderWidth: 2,
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: radius.button,
                  px: 3,
                  textTransform: 'none',
                  '&:hover': { borderWidth: 2, borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                Schedule Consultation
              </Button>
            </Box>
          </Box>
        </AnimateSection>
      </Container>
    </Box>
  );
};

export default HomeCTA;
