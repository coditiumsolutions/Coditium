import React from 'react';
import { Box, Container, Typography, Button, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { colors, radius } from '../theme/designTokens';

const TopInfoBar = () => (
  <Box
    sx={{
      background: `linear-gradient(90deg, ${colors.dark} 0%, ${colors.darkMuted} 100%)`,
      color: '#fff',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      py: { xs: 0.75, md: 1 },
      fontSize: { xs: '0.75rem', sm: '0.8125rem' },
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'space-between' },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1.5, sm: 2.5 },
          }}
        >
          <Typography component="span" sx={{ fontWeight: 500, whiteSpace: 'nowrap' }}>
            📞 +92 (333) 519-1392
          </Typography>
          <MuiLink
            href="mailto:info@coditium.com"
            sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, '&:hover': { opacity: 0.9 } }}
          >
            📧 info@coditium.com
          </MuiLink>
        </Box>
        <Button
          component={Link}
          to="/contact"
          size="small"
          sx={{
            bgcolor: '#fff',
            color: '#2563EB',
            fontWeight: 700,
            fontSize: '0.8125rem',
            px: 2,
            py: 0.5,
            borderRadius: radius.button,
            textTransform: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&:hover': { bgcolor: '#F0F9FF', transform: 'translateY(-1px)' },
            transition: 'transform 0.2s ease',
          }}
        >
          Free Consultation
        </Button>
      </Box>
    </Container>
  </Box>
);

export default TopInfoBar;
