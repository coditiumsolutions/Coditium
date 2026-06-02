import React from 'react';
import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { portfolioProjects } from '../../data/homeContent';
import { colors, gradients } from '../../theme/designTokens';

const HomePortfolio = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" id="portfolio" className="section-padding" sx={{ bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <AnimateSection>
          <SectionHeading
            eyebrow="Case Studies"
            title="Featured Solutions"
            subtitle="Property management and school systems delivered for organizations across Pakistan."
          />
        </AnimateSection>
        <Grid container spacing={3}>
          {portfolioProjects.map((project, index) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <AnimateSection className={`animate-in-view stagger-${(index % 4) + 1}`}>
                <Box
                  className="premium-card"
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 0,
                    ...(project.featured && {
                      border: `2px solid ${colors.primary}35`,
                      boxShadow: '0 12px 40px rgba(37,99,235,0.12)',
                    }),
                  }}
                >
                  {project.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        zIndex: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        background: gradients.primary,
                        color: '#fff',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    >
                      Flagship
                    </Box>
                  )}
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = '/portfolio/card01.png';
                    }}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderBottom: `1px solid ${colors.border}`,
                    }}
                  />
                  <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h3" sx={{ fontWeight: 700, fontSize: '1.125rem', mb: 1.5, color: colors.dark }}>
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                      {project.stack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            height: 24,
                            bgcolor: `${colors.primary}10`,
                            color: colors.primary,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                    <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: colors.textMuted, flexGrow: 1, mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Button
                      endIcon={<ArrowForward />}
                      onClick={() => navigate(project.path)}
                      sx={{
                        alignSelf: 'flex-start',
                        p: 0,
                        minWidth: 0,
                        color: colors.primary,
                        fontWeight: 600,
                        textTransform: 'none',
                      }}
                    >
                      View Case Study
                    </Button>
                  </Box>
                </Box>
              </AnimateSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePortfolio;
