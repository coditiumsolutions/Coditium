import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { technologyGroups } from '../../data/homeContent';
import { colors } from '../../theme/designTokens';

const HomeTechnologies = () => (
  <Box component="section" id="technologies" className="section-padding" sx={{ bgcolor: '#fff' }}>
    <Container maxWidth="lg">
      <AnimateSection>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies We Use"
          subtitle="Proven frameworks and cloud platforms selected for enterprise performance, security, and maintainability."
        />
      </AnimateSection>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: 3,
        }}
      >
        {technologyGroups.map((group, index) => (
          <Box key={group.category}>
            <AnimateSection className={`animate-in-view stagger-${(index % 5) + 1}`}>
              <Box
                className="premium-card"
                sx={{
                  p: 3,
                  height: '100%',
                  borderTop: `3px solid ${colors.primary}`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: colors.primary,
                    mb: 2,
                  }}
                >
                  {group.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.items.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        fontWeight: 500,
                        bgcolor: colors.background,
                        border: `1px solid ${colors.border}`,
                        '& .MuiChip-label': { px: 1.5 },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </AnimateSection>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default HomeTechnologies;
