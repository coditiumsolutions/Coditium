import React, { useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const SERVICES = [
  { title: 'Web Design', path: '/services/web-design', description: 'Stunning, responsive websites with modern UI/UX.' },
  { title: 'Software Development', path: '/services/software-development', description: 'Custom software solutions for your business.' },
  { title: 'E-Commerce Development', path: '/services/e-commerce-development', description: 'Full-featured online stores that drive sales.' },
  { title: 'Mobile App Development', path: '/services/mobile-app-development', description: 'Native and cross-platform mobile applications.' }
];

const ServicesMainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          Our Services
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto', lineHeight: 1.6 }}>
          We deliver tailored solutions across web, software, e-commerce, and mobile.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {SERVICES.map((service) => (
          <Grid item xs={12} sm={6} key={service.path}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': { boxShadow: 6 }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <Button
                  component={Link}
                  to={service.path}
                  endIcon={<ArrowForward />}
                  sx={{
                    color: '#002e5b',
                    '&:hover': { backgroundColor: 'rgba(0, 46, 91, 0.08)' }
                  }}
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesMainPage;
