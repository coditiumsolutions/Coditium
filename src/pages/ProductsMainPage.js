import React, { useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const PRODUCTS = [
  { title: 'Enterprise Resource Planning (ERP)', path: '/products/erp', description: 'Integrated business management solutions.' },
  { title: 'School Management System (SMS)', path: '/products/sms', description: 'Complete school administration and learning management.' },
  { title: 'Real Estate Management System (REMS)', path: '/products/rems', description: 'Property and real estate management platform.' },
  { title: 'Billing Management System', path: '/products/billing-management', description: 'Invoicing, payments, and billing automation.' },
  { title: 'Human Resource Management System (HRMS)', path: '/products/hrms', description: 'HR, payroll, and workforce management.' }
];

const ProductsMainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          Our Products
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto', lineHeight: 1.6 }}>
          Enterprise software solutions for your business needs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {PRODUCTS.map((product) => (
          <Grid item xs={12} sm={6} key={product.path}>
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
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Button
                  component={Link}
                  to={product.path}
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

export default ProductsMainPage;
