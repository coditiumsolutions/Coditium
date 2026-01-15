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

          <Box
            sx={{
              maxWidth: '1200px',
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              gap: 2,
              width: '100%'
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
              <Box
                key={index}
                component="article"
                role="article"
                aria-label={`${module.title}: ${module.description}`}
                tabIndex={0}
                sx={{
                  bgcolor: '#0170b9',
                  borderRadius: 3,
                  p: 2,
                  aspectRatio: '2.5 / 1',
                  width: '100%',
                  minHeight: '90px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: '#002e5b',
                    transform: 'translateY(-6px) scale(1.02)',
                    boxShadow: '0 16px 32px rgba(0, 46, 91, 0.4)'
                  },
                  '&:focus': {
                    outline: '2px solid #0170b9',
                    outlineOffset: '2px'
                  },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
                      opacity: 0,
                      transform: 'translate(-50%, -50%) rotate(45deg)',
                      zIndex: 1,
                      transition: 'opacity 0.25s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-50%',
                      right: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'linear-gradient(315deg, rgba(1, 112, 185, 0.3) 0%, rgba(1, 112, 185, 0.1) 50%, transparent 100%)',
                      opacity: 0,
                      transform: 'translate(50%, 50%) rotate(45deg)',
                      zIndex: 1,
                      transition: 'opacity 0.25s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    },
                    '&:hover::before': {
                      opacity: 1,
                      transform: 'translate(0%, 0%) rotate(45deg)'
                    },
                    '&:hover::after': {
                      opacity: 1,
                      transform: 'translate(0%, 0%) rotate(45deg)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    {/* Icon on the left */}
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        minWidth: 40,
                        borderRadius: '50%',
                        bgcolor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${module.iconColor}`,
                        flexShrink: 0
                      }}
                    >
                      <Box sx={{ color: module.iconColor, fontSize: '1.2rem' }}>
                        {module.icon}
                      </Box>
                    </Box>
                    
                    {/* Content on the right */}
                    <Box sx={{ 
                      flex: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'flex-start',
                      minWidth: 0,
                      width: 0,
                      overflow: 'hidden',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}>
                      <Typography
                        component="h3"
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          mb: 0.75,
                          fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          lineHeight: 1.2,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {module.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: { xs: '0.7rem', sm: '0.75rem' },
                          lineHeight: 1.3,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {module.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
            ))}
          </Box>
        </Box>

        {/* Extended Content – from Word document */}
        <Box sx={{ mb: 6, px: { xs: 2, sm: 3, md: 3 } }}>
          {/* Intro */}
          <Box
            sx={{
              mb: 4,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: 'white',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#002e5b',
                mb: 2
              }}
            >
              Secure, Cloud-Based Property Management
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              Our Property Management System is a secure, cloud-based solution designed to help landlords and property managers
              efficiently manage rental properties, tenants, payments, and maintenance from one centralized platform.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Whether you manage residential, commercial, or student housing, our property management software simplifies daily
              operations and improves financial visibility.
            </Typography>
          </Box>

          {/* Key Benefits */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: '#002e5b',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(0, 46, 91, 0.25)'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                  }}
                >
                  <Dashboard />
                  Key Benefits
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                  Our online property management system is built to reduce manual work, improve organization, and support business growth.
                </Typography>

                <Stack spacing={1.5}>
                  {[
                    'Centralized rental property management',
                    'Real-time tenant and lease tracking',
                    'Accurate rent and payment monitoring',
                    'Streamlined maintenance management',
                    'Scalable solution for growing portfolios'
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          bgcolor: 'rgba(148, 210, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: 0.4,
                          flexShrink: 0
                        }}
                      >
                        <Verified sx={{ fontSize: 14, color: '#38bdf8' }} />
                      </Box>
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* CTA text only (buttons removed as requested) */}
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: 'white',
                  border: '1px solid #e2e8f0',
                  height: '100%',
                  width: '100%',
                  boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#002e5b',
                    mb: 1.5,
                    textAlign: { xs: 'left', md: 'left' }
                  }}
                >
                  Looking for Reliable Property Management Software?
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  Discover how our Property Management System can help you manage properties more efficiently and grow your
                  business. All-in-one property management software built for efficiency, transparency, and growth.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Value Proposition */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 6px 20px rgba(148, 163, 184, 0.25)',
                  width: '100%'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#002e5b',
                    mb: 2
                  }}
                >
                  Value Proposition
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: '#0f172a',
                    mb: 1.5
                  }}
                >
                  Designed for Modern Property Management
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  Managing properties shouldn't be complicated. Our Property Management System brings together property data,
                  tenants, payments, and maintenance into one streamlined platform, helping you save time, minimize errors, and
                  make informed decisions.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Our Mission */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: '#0f172a',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.6)',
                  width: '100%'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8, opacity: 0.9 }}>
                  To make property management simple, transparent, and stress-free using smart digital solutions.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Features Grid from Word content */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#002e5b',
                mb: 3,
                textAlign: 'center'
              }}
            >
              Features of Our Property Management Software
            </Typography>

            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
              {/* Centralized Property & Unit Management */}
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
                    maxWidth: 460,
                    width: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#e0f2fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Home sx={{ color: '#0284c7' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a' }}>
                      Centralized Property & Unit Management
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {[
                      'Manage multiple properties and units',
                      'Track availability and occupancy',
                      'Update property details easily'
                    ].map((item, index) => (
                      <Typography key={index} variant="body2" sx={{ lineHeight: 1.6 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Stack>
                </Card>
              </Grid>

              {/* Tenant Management */}
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
                    maxWidth: 460,
                    width: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#ecfdf3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Groups sx={{ color: '#16a34a' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a' }}>
                      Tenant Management
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {[
                      'Store tenant information securely',
                      'Assign tenants to units',
                      'Track lease start and end dates'
                    ].map((item, index) => (
                      <Typography key={index} variant="body2" sx={{ lineHeight: 1.6 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Stack>
                </Card>
              </Grid>

              {/* Maintenance Requests */}
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
                    maxWidth: 460,
                    width: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#fff7ed',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Build sx={{ color: '#f97316' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a' }}>
                      Maintenance Requests
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {[
                      'Tenants can submit maintenance issues',
                      'Track request status',
                      'Assign tasks to maintenance staff'
                    ].map((item, index) => (
                      <Typography key={index} variant="body2" sx={{ lineHeight: 1.6 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Stack>
                </Card>
              </Grid>

              {/* Rent & Payment Tracking */}
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
                    maxWidth: 460,
                    width: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#eff6ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Receipt sx={{ color: '#4f46e5' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a' }}>
                      Rent & Payment Tracking
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {[
                      'Monitor rent payments',
                      'View paid and unpaid balances',
                      'Generate payment reports'
                    ].map((item, index) => (
                      <Typography key={index} variant="body2" sx={{ lineHeight: 1.6 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Stack>
                </Card>
              </Grid>

              {/* Reports & Dashboard */}
              <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
                    width: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#ecfeff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Dashboard sx={{ color: '#0891b2' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a' }}>
                      Reports & Dashboard
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {[
                      'Occupancy reports',
                      'Payment summaries',
                      'Maintenance history'
                    ].map((item, index) => (
                      <Typography key={index} variant="body2" sx={{ lineHeight: 1.6 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Why Choose Our System */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 6px 20px rgba(148, 163, 184, 0.25)',
                  width: '100%'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#002e5b',
                    mb: 2
                  }}
                >
                  Why Choose Our System
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    'Saves time and reduces manual work',
                    'Improves tenant communication',
                    'Enhances operational transparency',
                    'Scales with your property portfolio',
                    'Keeps all records in one place',
                    'Easy to use for beginners',
                    'Secure data management and compliant data handling'
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          bgcolor: '#e0f2fe',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: 0.4,
                          flexShrink: 0
                        }}
                      >
                        <Verified sx={{ fontSize: 12, color: '#0f766e' }} />
                      </Box>
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

          </Grid>

          {/* Who Can Use This System */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: '#002e5b',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(0, 46, 91, 0.4)',
                  width: '100%'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                  }}
                >
                  <Groups />
                  Who Can Use This System?
                </Typography>
                <Grid container spacing={1.5}>
                  {[
                    'Landlords',
                    'Property managers',
                    'Real estate agencies',
                    'Student housing & hostels',
                    'Small to medium property owners'
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          px: 1.5,
                          py: 1,
                          borderRadius: 2,
                          bgcolor: 'rgba(15, 23, 42, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.2
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: '#38bdf8'
                          }}
                        />
                        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* All-in-One Solution */}
          <Box
            sx={{
              mb: 5,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: '#f8fafc',
              border: '1px dashed #cbd5f5'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#002e5b',
                mb: 1.5
              }}
            >
              All-in-One Property Management Solution
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              This property management software replaces spreadsheets and manual processes with a reliable digital platform
              that keeps your data organized, secure, and accessible at all times.
            </Typography>
          </Box>

          {/* Contact Us */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: 'white',
              border: '1px solid #e2e8f0',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#002e5b',
                mb: 2
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 2 }}>
              For inquiries, demonstrations, or partnership opportunities, don&apos;t hesitate to get in touch with us. Have
              questions or want to learn more? We&apos;re here to help.
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: '#e0f2fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Email sx={{ color: '#0284c7' }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Email
                    </Typography>
                    <Typography variant="body2">info@property-system.com</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: '#ecfdf3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Phone sx={{ color: '#16a34a' }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Phone
                    </Typography>
                    <Typography variant="body2">+123 456 7890</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: '#fef3c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <LocationOn sx={{ color: '#f59e0b' }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Address
                    </Typography>
                    <Typography variant="body2">Your City, Your Country</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyManagementDetails;