import React from 'react';
import { Box, Container, Typography, Button, Grid, Chip } from '@mui/material';
import { CheckCircle, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import PropertyIllustration from './PropertyIllustration';
import SchoolIllustration from './SchoolIllustration';
import { featuredSolutions } from '../../data/homeContent';
import { colors, gradients, radius, shadows } from '../../theme/designTokens';

const HomeFeaturedSolutions = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      id="industry-solutions"
      className="section-padding"
      sx={{
        bgcolor: '#fff',
        background: `linear-gradient(180deg, #fff 0%, ${colors.background} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <AnimateSection>
          <SectionHeading
            eyebrow="Our Core Expertise"
            title="Industry Solutions We Specialize In"
            subtitle="Coditium Solutions is Pakistan's trusted partner for property and education technology—with 25+ years building enterprise-grade systems."
          />
        </AnimateSection>

        <Grid container spacing={4}>
          {featuredSolutions.map((solution, index) => {
            const isProperty = solution.id === 'property';
            const cardGradient = isProperty ? gradients.property : gradients.school;

            return (
              <Grid key={solution.id} size={{ xs: 12, lg: 6 }}>
                <AnimateSection className={`animate-in-view stagger-${index + 1}`}>
                  <Box
                    id={isProperty ? 'property-solutions' : 'school-solutions'}
                    sx={{
                      height: '100%',
                      borderRadius: radius.card,
                      overflow: 'hidden',
                      border: `1px solid ${colors.border}`,
                      boxShadow: shadows.featured,
                      bgcolor: colors.card,
                      transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: shadows.cardHover,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        background: cardGradient,
                        px: 3,
                        py: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: 2,
                      }}
                    >
                      <Chip
                        label={solution.badge}
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.95)',
                          color: isProperty ? colors.primary : colors.accent,
                          fontWeight: 700,
                          fontSize: '0.75rem',
                        }}
                      />
                      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {isProperty ? <PropertyIllustration /> : <SchoolIllustration />}
                      </Box>
                    </Box>

                    <Box sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography
                        component="h3"
                        sx={{
                          fontSize: { xs: '1.35rem', md: '1.5rem' },
                          fontWeight: 800,
                          color: colors.dark,
                          mb: 2.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {solution.title}
                      </Typography>

                      <Grid container spacing={1} sx={{ mb: 3 }}>
                        {solution.features.map((feature) => (
                          <Grid key={feature} size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                              <CheckCircle sx={{ fontSize: 18, color: isProperty ? colors.primary : colors.secondary, mt: 0.25 }} />
                              <Typography sx={{ fontSize: '0.9rem', color: colors.textMuted, lineHeight: 1.5 }}>
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={() => navigate(solution.demoPath)}
                          sx={{
                            background: cardGradient,
                            fontWeight: 700,
                            textTransform: 'none',
                            borderRadius: radius.button,
                            px: 2.5,
                            '&:hover': { filter: 'brightness(1.08)' },
                          }}
                        >
                          Request Demo
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => navigate(solution.path)}
                          sx={{
                            borderColor: isProperty ? colors.primary : colors.secondary,
                            color: isProperty ? colors.primary : colors.secondary,
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: radius.button,
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </AnimateSection>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeFeaturedSolutions;
