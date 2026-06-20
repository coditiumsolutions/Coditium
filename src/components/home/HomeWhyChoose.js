import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import MemoryIcon from '@mui/icons-material/Memory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { whyChoose } from '../../data/homeContent';
import { colors, gradients } from '../../theme/designTokens';

const iconMap = {
  verified: VerifiedIcon,
  real_estate: ApartmentIcon,
  school: SchoolIcon,
  groups: GroupsIcon,
  memory: MemoryIcon,
  support: SupportAgentIcon,
};

const HomeWhyChoose = () => (
  <Box
    component="section"
    id="why-coditium"
    className="section-padding"
    sx={{
      bgcolor: colors.dark,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse at 20% 80%, ${colors.secondary}25 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, ${colors.primary}30 0%, transparent 50%)`,
        pointerEvents: 'none',
      }}
    />
    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <AnimateSection>
        <SectionHeading
          light
          eyebrow="Why Coditium"
          title="Why Businesses Choose Coditium Solutions"
        />
      </AnimateSection>
      <Grid container spacing={3}>
        {whyChoose.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <AnimateSection className={`animate-in-view stagger-${(index % 3) + 1}`}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      borderColor: 'rgba(6,182,212,0.45)',
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 40px rgba(6,182,212,0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '12px',
                      background: gradients.primary,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography component="h3" sx={{ fontWeight: 700, color: '#fff', mb: 1, fontSize: '1.0625rem' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.7)' }}>
                    {item.description}
                  </Typography>
                </Box>
              </AnimateSection>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HomeWhyChoose;
