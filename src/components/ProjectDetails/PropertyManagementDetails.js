import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Stack,
  Container,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Cloud,
  Security,
  TrendingUp,
  Groups,
  Receipt,
  Build,
  Dashboard,
  Storage,
  Verified,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
  People,
  AccountBalance,
  Home,
  CalendarToday,
  SwapHoriz,
  MergeType,
  Discount,
  Assignment
} from '@mui/icons-material';

const PropertyManagementDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      bgcolor: 'background.default',
      minHeight: '100vh',
      pt: { xs: 1, md: 2 },
      pb: 4 
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 3, md: 4 },
          px: { xs: 2, md: 0 },
          pt: { xs: 2, md: 2 }
        }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              background: 'linear-gradient(135deg, #002e5b 0%, #0066cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              lineHeight: 1.2
            }}
          >
            Reliable PMS for Real Estate Excellence
          </Typography>
        </Box>

        {/* Core Modules Section */}
        <Box sx={{ mb: 6, px: { xs: 2, sm: 3, md: 3 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: '#002e5b',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Core Modules
          </Typography>

          <Grid 
            container 
            spacing={3}
            sx={{
              maxWidth: '1200px',
              mx: 'auto'
            }}
          >
            {[
              {
                title: 'Customers Management',
                description: 'Streamline Customer Data and Operations',
                icon: <People />,
                iconColor: '#10b981'
              },
              {
                title: 'Payment Management',
                description: 'Efficiently Track Payments and Transactions',
                icon: <Receipt />,
                iconColor: '#0066cc'
              },
              {
                title: 'Property Management',
                description: 'Complete Property Portfolio Oversight',
                icon: <Home />,
                iconColor: '#ff6b35'
              },
              {
                title: 'Schedule Management',
                description: 'Simplify Scheduling and Appointments',
                icon: <CalendarToday />,
                iconColor: '#9c27b0'
              },
              {
                title: 'Transfer Management',
                description: 'Smooth Property Transfers with Complete Formalities',
                icon: <SwapHoriz />,
                iconColor: '#757575'
              },
              {
                title: 'Merge Plots Management',
                description: 'Elevate Plot Merging Process with Advanced Tools',
                icon: <MergeType />,
                iconColor: '#10b981'
              },
              {
                title: 'Waiver Amount Management',
                description: 'Quick & Easy Waiver Processing',
                icon: <Discount />,
                iconColor: '#f44336'
              },
              {
                title: 'Allotment Process Management',
                description: 'Simplify & Track Allotment Processes',
                icon: <Assignment />,
                iconColor: '#757575'
              }
            ].map((module, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={index}
                sx={{
                  display: 'flex'
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#002e5b',
                    borderRadius: 3,
                    p: 3,
                    width: '100%',
                    height: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0, 46, 91, 0.3)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `3px solid ${module.iconColor}`,
                      flexShrink: 0
                    }}
                  >
                    <Box sx={{ color: module.iconColor, fontSize: '2rem' }}>
                      {module.icon}
                    </Box>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: '1rem',
                        lineHeight: 1.3
                      }}
                    >
                      {module.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.85rem',
                        lineHeight: 1.4
                      }}
                    >
                      {module.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why Choose Us & Target Audience */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: { xs: 3, md: 4 },
              bgcolor: 'white',
              borderRadius: 3,
              border: '1px solid #e2e8f0',
              height: '100%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#002e5b',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Verified sx={{ color: '#10b981' }} />
                Why Choose Our Property Management System
              </Typography>
              
              <Stack spacing={2}>
                {[
                  "Centralized data management eliminates data silos and ensures single source of truth",
                  "Automation of complex property workflows reduces processing time by up to 80%",
                  "Reduced manual errors through automated calculations and validation processes",
                  "Complete transparency and compliance with detailed audit trails and reporting",
                  "Suitable for small, medium, and large real estate businesses with scalable architecture",
                  "Enterprise-grade security protects sensitive property and customer information",
                  "Streamlined operations enable faster decision-making and improved customer service"
                ].map((reason, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ 
                      width: 20, 
                      height: 20, 
                      borderRadius: '50%',
                      bgcolor: '#e6f7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mt: 0.5
                    }}>
                      <Verified sx={{ fontSize: 14, color: '#002e5b' }} />
                    </Box>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>{reason}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: { xs: 3, md: 4 },
              bgcolor: '#002e5b',
              color: 'white',
              borderRadius: 3,
              height: '100%',
              boxShadow: '0 8px 32px rgba(0, 46, 91, 0.2)'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Groups />
                Who Can Use This System?
              </Typography>
              
              <Grid container spacing={2}>
                {[
                  "Real Estate Companies",
                  "Property Developers",
                  "Property Dealers",
                  "Small Real Estate Businesses",
                  "Medium Real Estate Businesses",
                  "Large Real Estate Enterprises",
                  "Housing Societies",
                  "Property Investment Firms"
                ].map((user, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      p: 1.5,
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateX(4px)'
                      }
                    }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        bgcolor: '#4dabf7', 
                        borderRadius: '50%' 
                      }} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        {user}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyManagementDetails;