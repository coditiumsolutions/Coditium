import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Voice Assistant Development",
      description: "Custom AI voice assistants with Speech-to-Text & Text-to-Speech capabilities. We provide call center & IVR automation solutions with multilingual support for global businesses.",
      image: "/services/thumbnail.jpg",
      buttonText: "Explore Voice Solutions"
    },
    {
      id: 2,
      title: "Data Scraping & Web Automation",
      description: "Professional web data extraction services with real-time & scheduled scraping capabilities. We handle data cleaning, storage, and anti-bot & CAPTCHA challenges efficiently.",
      image: "/services/thumbnail.jpg",
      buttonText: "Learn More"
    },
    {
      id: 3,
      title: "AI Chatbot Development",
      description: "Intelligent website & WhatsApp chatbots powered by GPT technology. We create customer support automation systems and knowledge base bots for enhanced user engagement.",
      image: "/services/thumbnail.jpg",
      buttonText: "Discover Chatbots"
    },
    {
      id: 4,
      title: "Custom Web Application Development",
      description: "Enterprise & SaaS solutions including CRM, ERP, HRM, and Payroll systems. We build POS & Management systems with secure & scalable architecture for your business needs.",
      image: "/services/thumbnail.jpg",
      buttonText: "View Solutions"
    },
    {
      id: 5,
      title: "API & Backend Development",
      description: "Robust REST & GraphQL APIs with comprehensive authentication & authorization. We provide third-party API integration and payment gateway integration services.",
      image: "/services/thumbnail.jpg",
      buttonText: "Explore APIs"
    },
    {
      id: 6,
      title: "Data Analytics & Dashboards",
      description: "Business intelligence dashboards with KPI & reporting systems. We create real-time charts & analytics and custom admin panels for data-driven decision making.",
      image: "/services/thumbnail.jpg",
      buttonText: "See Dashboards"
    },
    {
      id: 7,
      title: "Process Automation",
      description: "Workflow automation solutions with background jobs & schedulers. We provide Excel / CSV automation and email & SMS automation to streamline your operations.",
      image: "/services/thumbnail.jpg",
      buttonText: "Automate Now"
    },
    {
      id: 8,
      title: "Cloud & DevOps",
      description: "Docker containerization and cloud deployment on AWS / Azure. We set up CI/CD pipelines and provide performance optimization services for scalable infrastructure.",
      image: "/services/thumbnail.jpg",
      buttonText: "Deploy Solutions"
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Page Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          Our Team
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Meet our talented team of professionals dedicated to delivering excellence.
        </Typography>
      </Box>

      {/* --- Grid Container --- */}
      <Box sx={{
        display: 'grid',
        // Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 4, // Sets consistent spacing between grid items
        width: '100%'
      }}>
        {/* --- Grid Items --- */}
        {services.map((service) => (
          <Paper
            key={service.id}
            elevation={3}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              height: '100%', // Ensures all cards have the same height in a row
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6
              }
            }}
          >
            {/* Service Image */}
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: '100%',
                height: 150,
                objectFit: 'cover',
                borderRadius: 1,
                mb: 3
              }}
            />
            
            {/* Service Title */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
              {service.title}
            </Typography>
            
            {/* Service Description */}
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, mb: 3, flexGrow: 1 }}>
              {service.description}
            </Typography>
            
            {/* Call to Action Button */}
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              fullWidth
              sx={{
                borderColor: '#002e5b',
                color: '#002e5b',
                '&:hover': {
                  backgroundColor: '#002e5b',
                  color: 'white'
                }
              }}
            >
              {service.buttonText}
            </Button>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default ServicesPage;