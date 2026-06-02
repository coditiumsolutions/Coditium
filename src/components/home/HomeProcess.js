import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { processSteps } from '../../data/homeContent';
import { colors } from '../../theme/designTokens';

const HomeProcess = () => (
  <Box component="section" id="process" className="section-padding" sx={{ bgcolor: colors.background }}>
    <Container maxWidth="lg">
      <AnimateSection>
        <SectionHeading
          eyebrow="How We Work"
          title="Our Development Process"
          subtitle="A proven, transparent methodology from discovery through long-term support."
        />
      </AnimateSection>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
          position: 'relative',
        }}
      >
        {processSteps.map((step, index) => (
          <AnimateSection key={step.step} className={`animate-in-view stagger-${(index % 3) + 1}`}>
            <Box
              className="premium-card"
              sx={{
                p: 3,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 16,
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  color: `${colors.primary}08`,
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {String(step.step).padStart(2, '0')}
              </Typography>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: colors.primary,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  mb: 2,
                }}
              >
                {step.step}
              </Box>
              <Typography component="h3" sx={{ fontWeight: 700, fontSize: '1.0625rem', mb: 1, color: colors.dark }}>
                {step.title}
              </Typography>
              <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: colors.textMuted }}>
                {step.description}
              </Typography>
            </Box>
          </AnimateSection>
        ))}
      </Box>
    </Container>
  </Box>
);

export default HomeProcess;
