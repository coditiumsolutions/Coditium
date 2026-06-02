import React from 'react';
import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material';
import {
  Apartment,
  School,
  Code,
  Language,
  PhoneIphone,
  CorporateFare,
  Cloud,
  Groups,
  ArrowForward,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { services } from '../../data/homeContent';
import { colors, gradients } from '../../theme/designTokens';

const serviceIcons = [Apartment, School, Code, Language, PhoneIphone, CorporateFare, Cloud, Groups];

const HomeServices = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" id="services" className="section-padding" sx={{ bgcolor: colors.background }}>
      <Container maxWidth="lg">
        <AnimateSection>
          <SectionHeading
            eyebrow="Additional Capabilities"
            title="Our Software Development Services"
            subtitle="Beyond property and education, we deliver enterprise web, mobile, and cloud solutions across Pakistan."
          />
        </AnimateSection>
        <Grid container spacing={3}>
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            const isFeatured = service.featured;
            return (
              <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <AnimateSection className={`animate-in-view stagger-${(index % 4) + 1}`}>
                  <Box
                    className="premium-card"
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: isFeatured ? `2px solid ${colors.primary}40` : undefined,
                      background: isFeatured
                        ? `linear-gradient(180deg, ${colors.primary}08 0%, #fff 100%)`
                        : '#fff',
                    }}
                  >
                    {isFeatured && (
                      <Chip
                        label="Specialty"
                        size="small"
                        sx={{
                          alignSelf: 'flex-start',
                          mb: 1.5,
                          fontWeight: 700,
                          fontSize: '0.7rem',
                          background: gradients.primary,
                          color: '#fff',
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        background: isFeatured ? gradients.primary : `${colors.primary}10`,
                        color: isFeatured ? '#fff' : colors.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography component="h3" sx={{ fontWeight: 700, fontSize: '1.0625rem', mb: 1.5, color: colors.dark }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: colors.textMuted, flexGrow: 1, mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Button
                      endIcon={<ArrowForward sx={{ fontSize: '1rem !important' }} />}
                      onClick={() => navigate(service.path)}
                      sx={{
                        alignSelf: 'flex-start',
                        p: 0,
                        minWidth: 0,
                        color: colors.primary,
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': { bgcolor: 'transparent', color: colors.primaryDark },
                      }}
                    >
                      Learn More
                    </Button>
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

export default HomeServices;
