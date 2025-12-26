import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button 
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#f5f5f5', 
        color: '#333',
        py: 3,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Contact Us Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: '20px' }} />
              <Typography variant="body2">+92 (333) 519-1392</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: '20px' }} />
              <Typography variant="body2">info@coditium.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1, fontSize: '20px' }} />
              <Typography variant="body2">Bahria Town, Karachi</Typography>
            </Box>
          </Grid>

          {/* Follow Us Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((network) => (
                <Button
                  key={network}
                  variant="outlined"
                  size="small"
                  sx={{
                    color: '#333',
                    borderColor: '#ccc',
                    '&:hover': {
                      borderColor: '#002e5b',
                      backgroundColor: 'rgba(0, 46, 91, 0.05)',
                      color: '#002e5b'
                    }
                  }}
                >
                  {network}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Coditium. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
