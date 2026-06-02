import React from 'react';
import { Box, Container, Grid, Typography, Button, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from '@mui/icons-material';
import { colors } from '../theme/designTokens';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Custom Software Development', path: '/services/software-development' },
    { label: 'Web Application Development', path: '/services/web-design' },
    { label: 'Mobile App Development', path: '/services/mobile-app-development' },
    { label: 'Enterprise Solutions', path: '/products' },
    { label: 'Dedicated Development Teams', path: '/contact' },
  ];

  const techLinks = [
    { label: 'ASP.NET Core Development', path: '/#technologies' },
    { label: 'ReactJS Development', path: '/#technologies' },
    { label: 'React Native Development', path: '/#technologies' },
    { label: 'Cloud Solutions (Azure & AWS)', path: '/#technologies' },
  ];

  const social = [
    { icon: <Facebook fontSize="small" />, label: 'Facebook', href: '#' },
    { icon: <Twitter fontSize="small" />, label: 'Twitter', href: '#' },
    { icon: <LinkedIn fontSize="small" />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram fontSize="small" />, label: 'Instagram', href: '#' },
  ];

  const linkSx = {
    display: 'block',
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    py: 0.5,
    transition: 'color 0.2s ease',
    '&:hover': { color: colors.accent },
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.dark,
        color: '#fff',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box component="img" src="/logo02.png" alt="Coditium Solutions" sx={{ height: 48, mb: 2, filter: 'brightness(0) invert(1)' }} />
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', mb: 2 }}>
              Coditium Solutions is a custom software development company with 25+ years of experience
              delivering enterprise web, mobile, and cloud solutions worldwide.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {social.map((item) => (
                <IconButton
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    '&:hover': { bgcolor: 'rgba(37,99,235,0.3)', borderColor: colors.primary },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '1rem' }}>Services</Typography>
            {serviceLinks.map((link) => (
              <Box key={link.label} component={Link} to={link.path} sx={linkSx}>
                {link.label}
              </Box>
            ))}
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '1rem' }}>Technologies</Typography>
            {techLinks.map((link) => (
              <Box key={link.label} component={Link} to={link.path} sx={linkSx}>
                {link.label}
              </Box>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '1rem' }}>Contact</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
              <Phone sx={{ fontSize: 20, color: colors.accent, mt: 0.25 }} />
              <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>+92 (333) 519-1392</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
              <Email sx={{ fontSize: 20, color: colors.accent, mt: 0.25 }} />
              <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>info@coditium.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 3 }}>
              <LocationOn sx={{ fontSize: 20, color: colors.accent, mt: 0.25 }} />
              <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Bahria Town, Karachi</Typography>
            </Box>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: colors.primary,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '10px',
                '&:hover': { bgcolor: colors.primaryDark },
              }}
            >
              Get a Quote
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.12)' }} />

        <Typography align="center" sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
          © {currentYear} Coditium Solutions. All rights reserved. · Custom Software Development · ASP.NET Core · ReactJS
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
