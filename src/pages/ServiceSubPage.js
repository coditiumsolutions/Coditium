import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const SERVICE_CONFIG = {
  'web-design': {
    title: 'Web Design',
    description: 'We create stunning, responsive websites that capture your brand and deliver exceptional user experiences. Our web design services include UI/UX design, modern layouts, and mobile-first approaches.'
  },
  'software-development': {
    title: 'Software Development',
    description: 'Custom software solutions built for your business needs. From enterprise applications to SaaS products, we deliver scalable, secure, and maintainable software using modern technologies and best practices.'
  },
  'e-commerce-development': {
    title: 'E-Commerce Development',
    description: 'Full-featured online stores that drive sales. We build e-commerce platforms with secure payment integration, inventory management, and seamless shopping experiences tailored to your business.'
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We develop performant, user-friendly apps that engage your audience and grow your business in the mobile space.'
  }
};

const ServiceSubPage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const config = serviceSlug ? SERVICE_CONFIG[serviceSlug] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceSlug]);

  useEffect(() => {
    if (serviceSlug && !config) {
      navigate('/services', { replace: true });
    }
  }, [serviceSlug, config, navigate]);

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
          More content for this service can be added here.
        </Typography>
      </Box>
    </Container>
  );
};

export default ServiceSubPage;
