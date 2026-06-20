import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, LinearProgress } from '@mui/material';
import {
  History,
  Groups,
  Psychology,
  AutoAwesome,
  Verified,
  Handshake,
} from '@mui/icons-material';
import { colors, gradients, radius, shadows } from '../theme/designTokens';

const experienceStats = [
  {
    icon: History,
    title: '20 Years and Beyond',
    description: 'Our consistent innovation has positioned us on the forefront.',
  },
  {
    icon: Groups,
    title: '10+ Team Members',
    description: 'Our diverse team provides a wide range of capabilities.',
  },
  {
    icon: Verified,
    title: 'Trusted in Pakistan',
    description:
      'Delivering property management, school management, and enterprise software across the region.',
  },
];

const skillMetrics = [
  { label: 'Innovation', value: 92 },
  { label: 'Extensive Experience', value: 96 },
  { label: 'Commitment', value: 98 },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box component="main" sx={{ bgcolor: colors.background }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          background: gradients.hero,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.75rem' },
              color: colors.dark,
              letterSpacing: '-0.02em',
              mb: 2,
              lineHeight: 1.15,
            }}
          >
            Software Solutions &amp; App Development
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.35rem' },
              color: colors.textMuted,
              maxWidth: 720,
              lineHeight: 1.7,
            }}
          >
            Dedicated to providing smart software technology to leading companies worldwide.
          </Typography>
        </Container>
      </Box>

      {/* Leading AI — prominent */}
      <Box
        sx={{
          py: { xs: 4, md: 5 },
          background: `linear-gradient(135deg, ${colors.dark} 0%, #1E3A5F 50%, ${colors.primaryDark} 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 80% 20%, ${colors.secondary}30 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: radius.card,
                background: gradients.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <AutoAwesome sx={{ fontSize: 36, color: '#fff' }} />
            </Box>
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  mb: 1,
                }}
              >
                Leading AI Solution Providers
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.75,
                  maxWidth: 800,
                }}
              >
                We harness artificial intelligence for chatbots, automation, intelligent assistants, and
                enterprise-ready AI that transforms how businesses operate and engage with customers.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Global experience */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: colors.dark,
              textAlign: 'center',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Over 20 Years of Global Experience
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: colors.textMuted,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              maxWidth: 820,
              mx: 'auto',
              mb: { xs: 5, md: 6 },
            }}
          >
            For over 20 years, we&apos;ve been delivering top-notch application development and software
            outsourcing services to clients worldwide.
          </Typography>

          <Grid container spacing={3}>
            {experienceStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Grid key={stat.title} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: radius.card,
                      border: `1px solid ${colors.border}`,
                      boxShadow: shadows.card,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: shadows.cardHover,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        mx: 'auto',
                        mb: 2,
                        borderRadius: '12px',
                        background: gradients.primarySoft,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon sx={{ fontSize: 28, color: colors.primary }} />
                    </Box>
                    <Typography
                      component="h3"
                      sx={{ fontWeight: 700, fontSize: '1.125rem', color: colors.dark, mb: 1.5 }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography sx={{ color: colors.textMuted, lineHeight: 1.7, fontSize: '0.9375rem' }}>
                      {stat.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Skills & expertise */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: colors.background,
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  color: colors.dark,
                  mb: 3,
                  letterSpacing: '-0.02em',
                }}
              >
                Our Skills &amp; Expertise
              </Typography>
              <Typography
                sx={{
                  color: colors.textMuted,
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                }}
              >
                We take great pride in our innovative ideas and decades of experience. However, what really
                makes us unique is our commitment to addressing the requirements of every client. This
                commitment drives us to collaborate closely with each client, ensuring the delivery of
                customized solutions that meet their needs precisely. We believe that strong partnerships
                with our clients is the secret to success, and we aim to exceed expectations in everything
                we do.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  bgcolor: '#fff',
                  borderRadius: radius.card,
                  border: `1px solid ${colors.border}`,
                  boxShadow: shadows.card,
                }}
              >
                {skillMetrics.map((skill) => (
                  <Box key={skill.label} sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: colors.dark, fontSize: '0.9375rem' }}>
                        {skill.label}
                      </Typography>
                      <Typography sx={{ fontWeight: 700, color: colors.primary, fontSize: '0.9375rem' }}>
                        {skill.value}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.value}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: `${colors.primary}15`,
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: gradients.primary,
                        },
                      }}
                    />
                  </Box>
                ))}
                <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Psychology sx={{ color: colors.secondary, fontSize: 22 }} />
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.dark }}>
                      AI &amp; Automation
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Handshake sx={{ color: colors.primary, fontSize: 22 }} />
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.dark }}>
                      Client Partnership
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
