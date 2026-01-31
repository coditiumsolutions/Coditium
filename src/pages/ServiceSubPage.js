import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  DesignServices, 
  Code, 
  ShoppingCart, 
  PhoneAndroid,
  CheckCircle,
  TrendingUp,
  Security,
  Speed,
  ArrowForward
} from '@mui/icons-material';

const SERVICE_CONFIG = {
  'web-design': {
    title: 'Web Design',
    icon: <DesignServices sx={{ fontSize: 60, color: '#002e5b' }} />,
    description: 'We create stunning, responsive websites that capture your brand and deliver exceptional user experiences.',
    features: [
      'Custom UI/UX Design',
      'Mobile-First Responsive Layouts',
      'SEO-Optimized Structure',
      'Fast Loading Performance',
      'Cross-Browser Compatibility',
      'Accessibility Compliance'
    ],
    process: [
      { step: '1', title: 'Discovery & Planning', desc: 'Understand your goals and target audience' },
      { step: '2', title: 'Wireframing', desc: 'Create layout structure and user flow' },
      { step: '3', title: 'UI Design', desc: 'Visual design with brand identity' },
      { step: '4', title: 'Development', desc: 'Code implementation with modern technologies' },
      { step: '5', title: 'Testing', desc: 'Quality assurance across all devices' },
      { step: '6', title: 'Launch & Support', desc: 'Deployment and ongoing maintenance' }
    ],
    technologies: ['React', 'Next.js', 'Material-UI', 'Figma', 'Adobe XD', 'Webflow']
  },
  'software-development': {
    title: 'Software Development',
    icon: <Code sx={{ fontSize: 60, color: '#002e5b' }} />,
    description: 'Custom software solutions built for your business needs. From enterprise applications to SaaS products.',
    features: [
      'Scalable Architecture',
      'Cloud Integration',
      'API Development',
      'Database Design',
      'Agile Methodology',
      'Continuous Deployment'
    ],
    process: [
      { step: '1', title: 'Requirement Analysis', desc: 'Gather and analyze business requirements' },
      { step: '2', title: 'System Design', desc: 'Architect scalable solution architecture' },
      { step: '3', title: 'Development', desc: 'Agile development with regular updates' },
      { step: '4', title: 'Quality Assurance', desc: 'Comprehensive testing and bug fixing' },
      { step: '5', title: 'Deployment', desc: 'Smooth deployment to production' },
      { step: '6', title: 'Maintenance', desc: 'Ongoing support and updates' }
    ],
    technologies: ['Node.js', 'Python', 'Java', '.NET', 'Docker', 'AWS']
  },
  'e-commerce-development': {
    title: 'E-Commerce Development',
    icon: <ShoppingCart sx={{ fontSize: 60, color: '#002e5b' }} />,
    description: 'Full-featured online stores that drive sales with secure payment integration and inventory management.',
    features: [
      'Shopping Cart System',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking',
      'Customer Dashboard',
      'Analytics & Reporting'
    ],
    process: [
      { step: '1', title: 'Store Planning', desc: 'Define products, categories, and user flow' },
      { step: '2', title: 'Design & Layout', desc: 'Create engaging shopping experience' },
      { step: '3', title: 'Development', desc: 'Build store with all e-commerce features' },
      { step: '4', title: 'Payment Integration', desc: 'Secure payment gateway setup' },
      { step: '5', title: 'Testing', desc: 'Test all transactions and user flows' },
      { step: '6', title: 'Launch & Marketing', desc: 'Go live with marketing strategy' }
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'React']
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    icon: <PhoneAndroid sx={{ fontSize: 60, color: '#002e5b' }} />,
    description: 'Native and cross-platform mobile applications for iOS and Android that engage your audience.',
    features: [
      'iOS & Android Development',
      'Cross-Platform Apps',
      'Push Notifications',
      'In-App Purchases',
      'Offline Functionality',
      'App Store Optimization'
    ],
    process: [
      { step: '1', title: 'Concept & Strategy', desc: 'Define app purpose and target audience' },
      { step: '2', title: 'Wireframing', desc: 'Design app flow and user interface' },
      { step: '3', title: 'Prototyping', desc: 'Create interactive prototype' },
      { step: '4', title: 'Development', desc: 'Code native or cross-platform app' },
      { step: '5', title: 'Testing', desc: 'Test on multiple devices and OS versions' },
      { step: '6', title: 'App Store Deployment', desc: 'Publish to Apple Store & Google Play' }
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Xcode']
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
    <Box sx={{ 
      bgcolor: '#f8fafc',
      minHeight: '100vh',
      pt: { xs: 4, sm: 6, md: 8 },
      pb: 6
    }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 5, md: 6 },
          animation: 'fadeIn 0.8s ease-out'
        }}>
          <Box sx={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: 80, sm: 100, md: 120 },
            height: { xs: 80, sm: 100, md: 120 },
            borderRadius: '50%',
            bgcolor: 'rgba(0, 46, 91, 0.08)',
            mb: 3
          }}>
            {React.cloneElement(config.icon, { 
              sx: { fontSize: { xs: 40, sm: 50, md: 60 } } 
            })}
          </Box>
          
          <Typography variant="h2" sx={{ 
            fontWeight: '800', 
            mb: 2, 
            color: '#002e5b',
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem', lg: '3.5rem' },
            px: 2,
            background: 'linear-gradient(135deg, #002e5b 0%, #4fc3f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {config.title}
          </Typography>
          
          <Typography variant="h5" sx={{ 
            color: '#64748b', 
            maxWidth: { xs: '100%', md: 720 }, 
            mx: 'auto', 
            lineHeight: 1.6,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            mb: 4,
            px: 2
          }}>
            {config.description}
          </Typography>
        </Box>

        {/* Key Features - Responsive Grid */}
        <Box sx={{ mb: { xs: 5, sm: 6, md: 8 } }}>
          <Typography variant="h4" sx={{ 
            fontWeight: '700', 
            textAlign: 'center', 
            mb: { xs: 3, sm: 4 },
            color: '#002e5b',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
          }}>
            Key Features
          </Typography>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} justifyContent="center">
            {config.features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: { xs: 2, sm: 3 },
                  height: '100%',
                  transition: 'all 0.3s ease',
                  bgcolor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 46, 91, 0.1)',
                    '& .feature-icon': {
                      transform: 'scale(1.1)',
                      bgcolor: 'rgba(79, 195, 247, 0.2)'
                    }
                  }
                }}>
                  <Box sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: 50, sm: 60 },
                    height: { xs: 50, sm: 60 },
                    borderRadius: '12px',
                    bgcolor: 'rgba(79, 195, 247, 0.1)',
                    mb: 2,
                    transition: 'all 0.3s ease'
                  }} className="feature-icon">
                    <CheckCircle sx={{ 
                      fontSize: { xs: 24, sm: 30 }, 
                      color: '#4fc3f7' 
                    }} />
                  </Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: '600', 
                    color: '#002e5b', 
                    mb: 1,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                  }}>
                    {feature}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Development Process - Circular Layout */}
        <Box sx={{ mb: { xs: 5, sm: 6, md: 8 } }}>
          <Typography variant="h4" sx={{ 
            fontWeight: '700', 
            textAlign: 'center', 
            mb: { xs: 4, sm: 5, md: 6 },
            color: '#002e5b',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
          }}>
            Our Process
          </Typography>
          
          {/* Desktop View - Circular Layout */}
          <Box sx={{ 
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            height: 500,
            width: '100%',
            maxWidth: 800,
            mx: 'auto'
          }}>
            {/* Main Circle Container */}
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              height: 400,
              borderRadius: '50%',
              border: '2px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Center Circle */}
              <Box sx={{
                position: 'absolute',
                width: 120,
                height: 120,
                borderRadius: '50%',
                bgcolor: '#002e5b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.25rem',
                boxShadow: '0 8px 24px rgba(0, 46, 91, 0.3)',
                zIndex: 2
              }}>
                Process
              </Box>
              
              {/* Process Steps in Circle */}
              {config.process.map((step, index) => {
                const angle = (index * 60) * (Math.PI / 180); // 60 degrees between steps
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <React.Fragment key={index}>
                    {/* Step Circle */}
                    <Box sx={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      border: '3px solid #4fc3f7',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(79, 195, 247, 0.2)',
                      zIndex: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translate(-50%, -50%) scale(1.05)',
                        boxShadow: '0 12px 32px rgba(79, 195, 247, 0.3)',
                        bgcolor: '#f8fafc'
                      }
                    }}>
                      <Typography variant="h4" sx={{ 
                        fontWeight: '800', 
                        color: '#002e5b',
                        fontSize: '1.75rem',
                        lineHeight: 1
                      }}>
                        {step.step}
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        color: '#4fc3f7',
                        fontWeight: '600',
                        fontSize: '0.75rem',
                        mt: 0.5
                      }}>
                        Step
                      </Typography>
                    </Box>
                    
                    {/* Step Title Box */}
                    <Box sx={{
                      position: 'absolute',
                      left: `calc(50% + ${x * 1.3}px)`,
                      top: `calc(50% + ${y * 1.3}px)`,
                      transform: 'translate(-50%, -50%)',
                      width: 140,
                      bgcolor: 'white',
                      borderRadius: '8px',
                      p: 2,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      zIndex: 3,
                      textAlign: 'center',
                      border: '1px solid #e2e8f0'
                    }}>
                      <Typography variant="body1" sx={{ 
                        fontWeight: '600', 
                        color: '#002e5b',
                        fontSize: '1rem',
                        mb: 0.5
                      }}>
                        {step.title}
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        color: '#64748b',
                        fontSize: '0.8rem'
                      }}>
                        {step.desc}
                      </Typography>
                    </Box>
                    
                    {/* Simple Arrow from Center */}
                    <Box sx={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: radius,
                      height: 2,
                      bgcolor: '#4fc3f7',
                      transformOrigin: 'left center',
                      transform: `translate(0, -50%) rotate(${angle * (180/Math.PI)}deg)`,
                      zIndex: 1,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: -6,
                        top: -4,
                        width: 0,
                        height: 0,
                        borderTop: '5px solid transparent',
                        borderBottom: '5px solid transparent',
                        borderLeft: '8px solid #4fc3f7'
                      }
                    }} />
                  </React.Fragment>
                );
              })}
            </Box>
          </Box>
          
          {/* Mobile/Tablet View - Linear Steps */}
          <Box sx={{ 
            display: { xs: 'block', md: 'none' } 
          }}>
            <Grid container spacing={2}>
              {config.process.map((step, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      position: 'relative'
                    }}>
                      <Box sx={{ 
                        minWidth: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: '#4fc3f7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        mr: 3
                      }}>
                        {step.step}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ 
                          fontWeight: '600', 
                          color: '#002e5b', 
                          mb: 1
                        }}>
                          {step.title}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#64748b'
                        }}>
                          {step.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  {/* Arrow between steps */}
                  {index < config.process.length - 1 && (
                    <Grid item xs={12} sx={{ 
                      display: 'flex', 
                      justifyContent: 'center',
                      my: -1.5,
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <ArrowForward sx={{ 
                        fontSize: 30, 
                        color: '#4fc3f7',
                        opacity: 0.6,
                        transform: 'rotate(90deg)'
                      }} />
                    </Grid>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Technologies Stack */}
        <Box sx={{ mb: { xs: 5, sm: 6, md: 8 } }}>
          <Typography variant="h4" sx={{ 
            fontWeight: '700', 
            textAlign: 'center', 
            mb: { xs: 3, sm: 4 },
            color: '#002e5b',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
          }}>
            Technologies We Use
          </Typography>
          
          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 1, sm: 1.5, md: 2 },
            justifyContent: 'center',
            maxWidth: '100%'
          }}>
            {config.technologies.map((tech, index) => (
              <Box key={index} sx={{ 
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                borderRadius: '20px',
                bgcolor: 'white',
                border: '2px solid #e2e8f0',
                color: '#002e5b',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                flexShrink: 0,
                '&:hover': {
                  borderColor: '#4fc3f7',
                  bgcolor: 'rgba(79, 195, 247, 0.05)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(79, 195, 247, 0.2)'
                }
              }}>
                {tech}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Benefits Section - All 3 in one row */}
        <Box sx={{ 
          textAlign: 'center',
          p: { xs: 3, sm: 4, md: 6 },
          borderRadius: { xs: '12px', md: '16px' },
          bgcolor: '#002e5b',
          color: 'white',
          mb: { xs: 5, sm: 6 }
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: '700', 
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
          }}>
            Why Choose Us?
          </Typography>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                textAlign: 'center', 
                p: { xs: 1.5, sm: 2 },
                height: '100%'
              }}>
                <TrendingUp sx={{ 
                  fontSize: { xs: 36, sm: 42, md: 48 }, 
                  color: '#4fc3f7', 
                  mb: 2 
                }} />
                <Typography variant="h6" sx={{ 
                  fontWeight: '600', 
                  mb: 1,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>
                  Proven Results
                </Typography>
                <Typography variant="body2" sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                  maxWidth: 280,
                  mx: 'auto'
                }}>
                  Track record of successful projects and satisfied clients
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                textAlign: 'center', 
                p: { xs: 1.5, sm: 2 },
                height: '100%'
              }}>
                <Security sx={{ 
                  fontSize: { xs: 36, sm: 42, md: 48 }, 
                  color: '#4fc3f7', 
                  mb: 2 
                }} />
                <Typography variant="h6" sx={{ 
                  fontWeight: '600', 
                  mb: 1,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>
                  Secure & Reliable
                </Typography>
                <Typography variant="body2" sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                  maxWidth: 280,
                  mx: 'auto'
                }}>
                  Enterprise-grade security and 99.9% uptime guarantee
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                textAlign: 'center', 
                p: { xs: 1.5, sm: 2 },
                height: '100%'
              }}>
                <Speed sx={{ 
                  fontSize: { xs: 36, sm: 42, md: 48 }, 
                  color: '#4fc3f7', 
                  mb: 2 
                }} />
                <Typography variant="h6" sx={{ 
                  fontWeight: '600', 
                  mb: 1,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}>
                  Fast Delivery
                </Typography>
                <Typography variant="body2" sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                  maxWidth: 280,
                  mx: 'auto'
                }}>
                  Agile methodology for faster time-to-market
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Final Section */}
        <Box sx={{ textAlign: 'center', px: 2 }}>
          <Typography variant="h4" sx={{ 
            fontWeight: '700', 
            mb: 3,
            color: '#002e5b',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
          }}>
            Let's Create Something Amazing
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#64748b', 
            maxWidth: 600, 
            mx: 'auto', 
            mb: 4,
            lineHeight: 1.6,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
          }}>
            Transform your vision into reality with our expert {config.title} services
          </Typography>
        </Box>
      </Container>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default ServiceSubPage;