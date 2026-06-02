import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ConstructionIcon from '@mui/icons-material/Construction';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { propertyShowcase } from '../../data/homeContent';
import { colors, gradients, radius } from '../../theme/designTokens';

const iconMap = {
  apartment: ApartmentIcon,
  construction: ConstructionIcon,
  storefront: StorefrontIcon,
  home_work: HomeWorkIcon,
  receipt: ReceiptLongIcon,
  people: PeopleIcon,
  payments: PaymentsIcon,
  phone_android: PhoneAndroidIcon,
};

const HomePropertyShowcase = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      id="property-solutions"
      className="section-padding"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: gradients.primarySoft,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: -80,
          top: '20%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimateSection>
              <SectionHeading
                align="left"
                eyebrow="Property Technology"
                title="Property Management Software Solutions"
                subtitle="Purpose-built for housing societies, builders, developers, and property managers across Pakistan."
              />
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => navigate('/property-management-details')}
                sx={{
                  mt: 2,
                  background: gradients.property,
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: radius.button,
                  px: 3,
                  py: 1.25,
                }}
              >
                Explore Property Solutions
              </Button>
            </AnimateSection>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                gap: 2,
              }}
            >
              {propertyShowcase.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <AnimateSection key={item.title} className={`animate-in-view stagger-${(index % 4) + 1}`}>
                    <Box
                      className="premium-card"
                      sx={{
                        p: 2.5,
                        height: '100%',
                        textAlign: 'center',
                        borderTop: `3px solid ${colors.primary}`,
                        bgcolor: '#fff',
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          mx: 'auto',
                          mb: 1.5,
                          borderRadius: '12px',
                          background: gradients.property,
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon sx={{ fontSize: 24 }} />
                      </Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: colors.dark, lineHeight: 1.35 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </AnimateSection>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePropertyShowcase;
