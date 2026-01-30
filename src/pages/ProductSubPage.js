import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const PRODUCT_CONFIG = {
  'erp': {
    title: 'Enterprise Resource Planning (ERP)',
    description: 'Integrated ERP solutions to streamline finance, supply chain, manufacturing, and HR. We deliver scalable, modular systems that unify your business operations and drive efficiency.'
  },
  'sms': {
    title: 'School Management System (SMS)',
    description: 'Complete school administration platform covering admissions, attendance, grades, timetables, and parent communication. Simplify daily operations and improve learning outcomes.'
  },
  'rems': {
    title: 'Real Estate Management System (REMS)',
    description: 'End-to-end real estate and property management: listings, tenant management, leases, maintenance, and reporting. Built for agencies, landlords, and property managers.'
  },
  'billing-management': {
    title: 'Billing Management System',
    description: 'Automate invoicing, payments, and billing cycles. Support multiple payment methods, recurring billing, and detailed financial reporting for your business.'
  },
  'hrms': {
    title: 'Human Resource Management System (HRMS)',
    description: 'HR and workforce management: recruitment, onboarding, payroll, leave, performance, and compliance. One platform for your entire employee lifecycle.'
  }
};

const ProductSubPage = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const config = productSlug ? PRODUCT_CONFIG[productSlug] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productSlug]);

  useEffect(() => {
    if (productSlug && !config) {
      navigate('/products', { replace: true });
    }
  }, [productSlug, config, navigate]);

  if (!config) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          {config.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 720, mx: 'auto', lineHeight: 1.8 }}>
          {config.description}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          More content for this product can be added here.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductSubPage;
