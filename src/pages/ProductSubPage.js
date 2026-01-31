// import React, { useEffect } from 'react';
// import { Container, Typography, Box } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';

// const PRODUCT_CONFIG = {
//   'erp': {
//     title: 'Enterprise Resource Planning (ERP)',
//     description: 'Integrated ERP solutions to streamline finance, supply chain, manufacturing, and HR. We deliver scalable, modular systems that unify your business operations and drive efficiency.'
//   },
//   'sms': {
//     title: 'School Management System (SMS)',
//     description: 'Complete school administration platform covering admissions, attendance, grades, timetables, and parent communication. Simplify daily operations and improve learning outcomes.'
//   },
//   'rems': {
//     title: 'Real Estate Management System (REMS)',
//     description: 'End-to-end real estate and property management: listings, tenant management, leases, maintenance, and reporting. Built for agencies, landlords, and property managers.'
//   },
//   'billing-management': {
//     title: 'Billing Management System',
//     description: 'Automate invoicing, payments, and billing cycles. Support multiple payment methods, recurring billing, and detailed financial reporting for your business.'
//   },
//   'hrms': {
//     title: 'Human Resource Management System (HRMS)',
//     description: 'HR and workforce management: recruitment, onboarding, payroll, leave, performance, and compliance. One platform for your entire employee lifecycle.'
//   }
// };

// const ProductSubPage = () => {
//   const { productSlug } = useParams();
//   const navigate = useNavigate();
//   const config = productSlug ? PRODUCT_CONFIG[productSlug] : null;

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [productSlug]);

//   useEffect(() => {
//     if (productSlug && !config) {
//       navigate('/products', { replace: true });
//     }
//   }, [productSlug, config, navigate]);

//   if (!config) return null;

//   return (
//     <Container maxWidth="lg" sx={{ py: 8, minHeight: '100vh' }}>
//       <Box sx={{ textAlign: 'center', mb: 6 }}>
//         <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
//           {config.title}
//         </Typography>
//         <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 720, mx: 'auto', lineHeight: 1.8 }}>
//           {config.description}
//         </Typography>
//       </Box>
//       <Box sx={{ textAlign: 'center' }}>
//         <Typography variant="body1" color="text.secondary">
//           More content for this product can be added here.
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default ProductSubPage;

import React, { useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Business,
  School,
  HomeWork,
  Receipt,
  People,
  CheckCircle,
  TrendingUp,
  Security,
  Cloud,
  MobileFriendly,
  Analytics,
  IntegrationInstructions
} from '@mui/icons-material';

const PRODUCT_CONFIG = {
  'erp': {
    title: 'Enterprise Resource Planning (ERP)',
    description: 'Integrated ERP solutions to streamline finance, supply chain, manufacturing, and HR. We deliver scalable, modular systems that unify your business operations and drive efficiency.',
    icon: <Business sx={{ fontSize: 60, color: '#1976d2' }} />,
    features: [
      'Real-time financial dashboard & reporting',
      'Supply chain optimization tools',
      'Inventory management automation',
      'Multi-department workflow integration',
      'Customizable analytics & KPIs',
      'Cloud-based & on-premise deployment'
    ],
    benefits: [
      'Increase operational efficiency by 40%',
      'Reduce inventory costs by 25%',
      'Improve decision-making with real-time data',
      'Scale seamlessly with business growth'
    ],
    imageColor: 'linear-gradient(135deg, #1976d2 0%, #004ba0 100%)',
    technologies: ['Node.js', 'React', 'MySQL', 'Docker', 'AWS/Azure'],
    ctaText: 'Transform Your Business Operations'
  },
  'sms': {
    title: 'School Management System (SMS)',
    description: 'Complete school administration platform covering admissions, attendance, grades, timetables, and parent communication. Simplify daily operations and improve learning outcomes.',
    icon: <School sx={{ fontSize: 60, color: '#d32f2f' }} />,
    features: [
      'Student admission & enrollment automation',
      'Digital attendance with biometric integration',
      'Gradebook & report card generation',
      'Parent-teacher communication portal',
      'Timetable & scheduling management',
      'Library & resource tracking'
    ],
    benefits: [
      'Reduce administrative workload by 60%',
      'Increase parent engagement by 45%',
      'Improve student performance tracking',
      'Paperless school environment'
    ],
    imageColor: 'linear-gradient(135deg, #d32f2f 0%, #9a0007 100%)',
    technologies: ['PHP', 'Laravel', 'MySQL', 'React Native', 'WebSockets'],
    ctaText: 'Modernize Your Educational Institution'
  },
  'rems': {
    title: 'Real Estate Management System (REMS)',
    description: 'End-to-end real estate and property management: listings, tenant management, leases, maintenance, and reporting. Built for agencies, landlords, and property managers.',
    icon: <HomeWork sx={{ fontSize: 60, color: '#388e3c' }} />,
    features: [
      'Property listing with 360° virtual tours',
      'Tenant screening & lease management',
      'Automated rent collection & reminders',
      'Maintenance request tracking system',
      'Financial reporting & analytics',
      'Document storage & e-signature'
    ],
    benefits: [
      'Increase property occupancy rates',
      'Reduce late payments by 70%',
      'Streamline maintenance response time',
      'Centralize all property data'
    ],
    imageColor: 'linear-gradient(135deg, #388e3c 0%, #1b5e20 100%)',
    technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Google Maps API'],
    ctaText: 'Optimize Your Property Portfolio'
  },
  'billing-management': {
    title: 'Billing Management System',
    description: 'Automate invoicing, payments, and billing cycles. Support multiple payment methods, recurring billing, and detailed financial reporting for your business.',
    icon: <Receipt sx={{ fontSize: 60, color: '#f57c00' }} />,
    features: [
      'Automated invoice generation & delivery',
      'Multi-currency & multi-payment support',
      'Recurring billing & subscription management',
      'Real-time payment tracking & reconciliation',
      'Tax calculation & compliance automation',
      'Client portal for billing history'
    ],
    benefits: [
      'Reduce billing errors by 90%',
      'Improve cash flow predictability',
      'Save 15+ hours monthly on manual billing',
      'Enhanced client satisfaction'
    ],
    imageColor: 'linear-gradient(135deg, #f57c00 0%, #bb4d00 100%)',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Stripe API', 'React'],
    ctaText: 'Automate Your Financial Operations'
  },
  'hrms': {
    title: 'Human Resource Management System (HRMS)',
    description: 'HR and workforce management: recruitment, onboarding, payroll, leave, performance, and compliance. One platform for your entire employee lifecycle.',
    icon: <People sx={{ fontSize: 60, color: '#7b1fa2' }} />,
    features: [
      'Applicant tracking & recruitment automation',
      'Employee onboarding & offboarding workflows',
      'Payroll processing with tax compliance',
      'Leave & attendance management',
      'Performance review & goal tracking',
      'Learning & development portal'
    ],
    benefits: [
      'Reduce hiring time by 50%',
      'Improve employee retention',
      'Ensure 100% payroll accuracy',
      'Centralize HR documentation'
    ],
    imageColor: 'linear-gradient(135deg, #7b1fa2 0%, #4a0072 100%)',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'Redis'],
    ctaText: 'Empower Your Workforce'
  }
};

const FeatureItem = ({ icon, text }) => (
  <ListItem sx={{ px: 0 }}>
    <ListItemIcon sx={{ minWidth: 40 }}>
      <CheckCircle color="primary" />
    </ListItemIcon>
    <ListItemText primary={text} primaryTypographyProps={{ variant: 'body1' }} />
  </ListItem>
);

const BenefitChip = ({ text }) => (
  <Chip 
    label={text} 
    sx={{ 
      m: 0.5, 
      bgcolor: 'primary.light', 
      color: 'white',
      fontWeight: 'bold'
    }} 
  />
);

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
      {/* Hero Section */}
      <Box sx={{ 
        borderRadius: 4, 
        p: 6, 
        mb: 6, 
        background: config.imageColor,
        color: 'white',
        textAlign: 'center',
        boxShadow: 6
      }}>
        <Box sx={{ mb: 3 }}>
          {config.icon}
        </Box>
        <Typography variant="h2" component="h1" sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          fontSize: { xs: '2.5rem', md: '3.5rem' }
        }}>
          {config.title}
        </Typography>
        <Typography variant="h5" sx={{ 
          maxWidth: 800, 
          mx: 'auto', 
          lineHeight: 1.6,
          opacity: 0.9,
          mb: 4
        }}>
          {config.description}
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ 
            bgcolor: 'white', 
            color: 'primary.main',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            '&:hover': {
              bgcolor: 'grey.100'
            }
          }}
        >
          {config.ctaText}
        </Button>
      </Box>

      <Grid item xs={12} md={6} sx={{ mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
          <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', fontWeight: 'bold' }}>
            <IntegrationInstructions sx={{ mr: 1, verticalAlign: 'middle' }} />
            Key Features
          </Typography>
          <List>
            {config.features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </List>
        </Paper>
      </Grid>

      {/* Benefits Section */}
      <Grid item xs={12} md={6} sx={{ mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
          <Typography variant="h4" sx={{ mb: 3, color: 'success.main', fontWeight: 'bold' }}>
            <TrendingUp sx={{ mr: 1, verticalAlign: 'middle' }} />
            Business Benefits
          </Typography>
          <Box sx={{ mb: 3 }}>
            {config.benefits.map((benefit, index) => (
              <BenefitChip key={index} text={benefit} />
            ))}
          </Box>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            <Security sx={{ mr: 1, verticalAlign: 'middle' }} />
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {config.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                variant="outlined"
                color="primary"
                sx={{ fontWeight: 'medium' }}
              />
            ))}
          </Box>
        </Paper>
      </Grid>
      {/* Additional Info Cards with Bottom Spacing */}
      <Grid item xs={12} md={4} sx={{ mb: 4 }}>
        <Card sx={{
          height: '100%',
          borderRadius: 3,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CardContent sx={{
            textAlign: 'center',
            p: 5,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Cloud sx={{
              fontSize: 50,
              color: 'primary.main',
              mb: 2,
              mx: 'auto'
            }} />
            <Typography variant="h6" sx={{
              fontWeight: 'bold',
              mb: 1,
              minHeight: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Cloud & On-Premise
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Flexible deployment options to match your infrastructure needs and security requirements.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} sx={{ mb: 4 }}>
        <Card sx={{
          height: '100%',
          borderRadius: 3,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CardContent sx={{
            textAlign: 'center',
            p: 4,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <MobileFriendly sx={{
              fontSize: 50,
              color: 'primary.main',
              mb: 2,
              mx: 'auto'
            }} />
            <Typography variant="h6" sx={{
              fontWeight: 'bold',
              mb: 1,
              minHeight: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Mobile Responsive
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Fully responsive design that works seamlessly on desktop, tablet, and mobile devices.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} sx={{ mb: 4 }}>
        <Card sx={{
          height: '100%',
          borderRadius: 3,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CardContent sx={{
            textAlign: 'center',
            p: 4,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Analytics sx={{
              fontSize: 50,
              color: 'primary.main',
              mb: 2,
              mx: 'auto'
            }} />
            <Typography variant="h6" sx={{
              fontWeight: 'bold',
              mb: 1,
              minHeight: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Advanced Analytics
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Comprehensive reporting and analytics dashboard for data-driven decision making.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Call to Action */}
      <Box sx={{ 
        textAlign: 'center', 
        mt: 8, 
        p: 6, 
        borderRadius: 3,
        bgcolor: 'background.paper',
        boxShadow: 3
      }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          Ready to Transform Your Operations?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          Schedule a personalized demo to see how {config.title} can revolutionize your business.
        </Typography>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Button variant="contained" size="large" sx={{ px: 6, py: 1.5, fontWeight: 'bold' }}>
            Request Demo
          </Button>
          <Button variant="outlined" size="large" sx={{ px: 6, py: 1.5, fontWeight: 'bold' }}>
            Download Brochure
          </Button>
        </Box> */}
      </Box>
    </Container>
  );
};

export default ProductSubPage;
