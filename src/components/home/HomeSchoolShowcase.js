import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { schoolShowcase } from '../../data/homeContent';
import { colors, gradients, radius } from '../../theme/designTokens';

const iconMap = {
  how_to_reg: HowToRegIcon,
  fact_check: FactCheckIcon,
  quiz: QuizIcon,
  account_balance_wallet: AccountBalanceWalletIcon,
  family_restroom: FamilyRestroomIcon,
  school: SchoolIcon,
  directions_bus: DirectionsBusIcon,
  phone_android: PhoneAndroidIcon,
};

const HomeSchoolShowcase = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      id="school-solutions"
      className="section-padding"
      sx={{
        bgcolor: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: -60,
          bottom: '10%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.secondary}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={4} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                gap: 2,
              }}
            >
              {schoolShowcase.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <AnimateSection key={item.title} className={`animate-in-view stagger-${(index % 4) + 1}`}>
                    <Box
                      className="premium-card"
                      sx={{
                        p: 2.5,
                        height: '100%',
                        textAlign: 'center',
                        borderTop: `3px solid ${colors.secondary}`,
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
                          background: gradients.school,
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
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimateSection>
              <SectionHeading
                align="left"
                eyebrow="Education Technology"
                title="School Management Software Solutions"
                subtitle="Trusted by schools, colleges, and educational institutions for admissions, fees, exams, and parent engagement."
              />
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => navigate('/products/sms')}
                sx={{
                  mt: 2,
                  background: gradients.school,
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: radius.button,
                  px: 3,
                  py: 1.25,
                }}
              >
                Explore School Solutions
              </Button>
            </AnimateSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeSchoolShowcase;
