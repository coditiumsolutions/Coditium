// import React, { useEffect } from 'react';
// import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { ArrowForward } from '@mui/icons-material';

// const PRODUCTS = [
//   { title: 'Enterprise Resource Planning (ERP)', path: '/products/erp', description: 'Integrated business management solutions.' },
//   { title: 'School Management System (SMS)', path: '/products/sms', description: 'Complete school administration and learning management.' },
//   { title: 'Real Estate Management System (REMS)', path: '/products/rems', description: 'Property and real estate management platform.' },
//   { title: 'Billing Management System', path: '/products/billing-management', description: 'Invoicing, payments, and billing automation.' },
//   { title: 'Human Resource Management System (HRMS)', path: '/products/hrms', description: 'HR, payroll, and workforce management.' }
// ];

// const ProductsMainPage = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   return (
//     <Container maxWidth="lg" sx={{ py: 8, minHeight: '100vh' }}>
//       <Box sx={{ textAlign: 'center', mb: 8 }}>
//         <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
//           Our Products
//         </Typography>
//         <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto', lineHeight: 1.6 }}>
//           Enterprise software solutions for your business needs.
//         </Typography>
//       </Box>
//       <Grid container spacing={4}>
//         {PRODUCTS.map((product) => (
//           <Grid item xs={12} sm={6} key={product.path}>
//             <Card
//               sx={{
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 transition: 'all 0.3s ease',
//                 '&:hover': { boxShadow: 6 }
//               }}
//             >
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
//                   {product.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                   {product.description}
//                 </Typography>
//                 <Button
//                   component={Link}
//                   to={product.path}
//                   endIcon={<ArrowForward />}
//                   sx={{
//                     color: '#002e5b',
//                     '&:hover': { backgroundColor: 'rgba(0, 46, 91, 0.08)' }
//                   }}
//                 >
//                   Learn more
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default ProductsMainPage;


import React, { useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Button,
  Chip,
  Stack,
  alpha,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  ArrowForward, 
  Business, 
  School, 
  HomeWork, 
  Receipt, 
  People,
  TrendingUp,
  Security,
  Cloud,
  AccessTime
} from '@mui/icons-material';

const PRODUCTS = [
  { 
    title: 'Enterprise Resource Planning (ERP)', 
    path: '/products/erp', 
    description: 'Comprehensive business management suite integrating finance, supply chain, operations, and HR.',
    icon: <Business sx={{ fontSize: 40 }} />,
    color: '#1976d2',
    features: ['Finance', 'Supply Chain', 'Operations', 'HR'],
    stats: '40% Efficiency Boost'
  },
  { 
    title: 'School Management System (SMS)', 
    path: '/products/sms', 
    description: 'End-to-end educational platform for administration, learning, and parent-teacher collaboration.',
    icon: <School sx={{ fontSize: 40 }} />,
    color: '#d32f2f',
    features: ['Admissions', 'Learning', 'Attendance', 'Communication'],
    stats: '60% Time Saved'
  },
  { 
    title: 'Real Estate Management System (REMS)', 
    path: '/products/rems', 
    description: 'Complete property management solution with listings, tenant management, and financial tracking.',
    icon: <HomeWork sx={{ fontSize: 40 }} />,
    color: '#388e3c',
    features: ['Listings', 'Tenants', 'Maintenance', 'Finance'],
    stats: '70% Faster'
  },
  { 
    title: 'Billing Management System', 
    path: '/products/billing-management', 
    description: 'Automated invoicing, payment processing, and financial reporting for businesses of all sizes.',
    icon: <Receipt sx={{ fontSize: 40 }} />,
    color: '#f57c00',
    features: ['Invoicing', 'Payments', 'Reporting', 'Automation'],
    stats: '90% Accuracy'
  },
  { 
    title: 'Human Resource Management System (HRMS)', 
    path: '/products/hrms', 
    description: 'Streamlined HR processes from recruitment to retirement with compliance and analytics.',
    icon: <People sx={{ fontSize: 40 }} />,
    color: '#7b1fa2',
    features: ['Recruitment', 'Payroll', 'Performance', 'Compliance'],
    stats: '50% Cost Reduced'
  }
];

const ProductsMainPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ 
      py: { xs: 4, md: 8 }, 
      minHeight: '100vh',
      px: { xs: 2, sm: 3, md: 4 }
    }}>
      {/* Hero Section */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: { xs: 6, md: 10 },
        px: { xs: 1, sm: 2 }
      }}>
        <Chip 
          label="Enterprise Solutions" 
          color="primary" 
          sx={{ 
            mb: 3, 
            px: 2, 
            py: 1,
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }} 
        />
        <Typography variant="h2" component="h1" sx={{ 
          fontWeight: 'bold', 
          mb: 2, 
          color: '#002e5b',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          lineHeight: 1.2
        }}>
          Transform Your Business with 
          <Box component="span" sx={{ color: 'primary.main', ml: 1 }}>
            Smart Software
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ 
          maxWidth: 800, 
          mx: 'auto', 
          lineHeight: 1.6,
          fontSize: { xs: '1rem', md: '1.25rem' },
          mb: 4
        }}>
          Discover our suite of enterprise-grade solutions designed to streamline operations, 
          boost productivity, and drive growth across every industry.
        </Typography>
        
        {/* Stats Bar */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3} 
          justifyContent="center" 
          sx={{ mb: 6 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              500+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Clients Worldwide
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              99.9%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Uptime Guarantee
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              24/7
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Support Available
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={4} justifyContent="center">
        {PRODUCTS.map((product) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            lg={4} 
            key={product.path}
            sx={{ 
              display: 'flex',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                boxShadow: 3,
                transition: 'all 0.3s ease',
                border: `1px solid ${alpha(product.color, 0.1)}`,
                '&:hover': { 
                  boxShadow: `0 20px 40px ${alpha(product.color, 0.15)}`,
                  borderColor: alpha(product.color, 0.3)
                },
                width: '100%'
              }}
            >
              {/* Header with Icon */}
              <Box sx={{
                background: `linear-gradient(135deg, ${alpha(product.color, 0.1)} 0%, ${alpha(product.color, 0.05)} 100%)`,
                p: 4,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Box sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: alpha(product.color, 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: product.color
                }}>
                  {product.icon}
                </Box>
              </Box>

              <CardContent sx={{ 
                flexGrow: 1, 
                p: 4,
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Title */}
                <Typography variant="h5" sx={{ 
                  fontWeight: 'bold', 
                  mb: 2, 
                  color: '#002e5b',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  minHeight: { xs: 'auto', md: '4rem' }
                }}>
                  {product.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary" sx={{ 
                  mb: 3,
                  flexGrow: 1,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: 1.6
                }}>
                  {product.description}
                </Typography>

                {/* Features Chips */}
                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                  {product.features.map((feature, index) => (
                    <Chip
                      key={index}
                      label={feature}
                      size="small"
                      sx={{
                        bgcolor: alpha(product.color, 0.1),
                        color: product.color,
                        fontWeight: 'medium',
                        fontSize: '0.75rem'
                      }}
                    />
                  ))}
                </Stack>

                {/* Stats */}
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: alpha('#00c853', 0.1),
                  border: `1px solid ${alpha('#00c853', 0.2)}`
                }}>
                  <TrendingUp sx={{ color: '#00c853', mr: 1 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#00c853' }}>
                    {product.stats}
                  </Typography>
                </Box>

                {/* Action Button */}
                <Button
                  component={Link}
                  to={product.path}
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    bgcolor: product.color,
                    color: 'white',
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    '&:hover': { 
                      bgcolor: product.color,
                      boxShadow: `0 8px 16px ${alpha(product.color, 0.3)}`
                    },
                    width: '100%'
                  }}
                >
                  Explore Solution
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ 
        mt: { xs: 8, md: 12 },
        p: { xs: 4, md: 8 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        boxShadow: 4
      }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          fontSize: { xs: '1.75rem', md: '2.5rem' }
        }}>
          Ready to Transform Your Business?
        </Typography>
        <Typography variant="h6" sx={{ 
          mb: 4, 
          opacity: 0.9,
          fontSize: { xs: '1rem', md: '1.25rem' }
        }}>
          Schedule a demo with our experts to find the perfect solution for your needs.
        </Typography>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2} 
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#667eea',
              px: 6,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            Request Free Demo
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 6,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Contact Sales
          </Button>
        </Stack>
      </Box>

      {/* Footer Note */}
      <Box sx={{ 
        mt: 6, 
        textAlign: 'center',
        px: { xs: 2, md: 0 }
      }}>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2} 
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Security sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2">Enterprise-Grade Security</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Cloud sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2">Cloud & On-Premise Options</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2">24/7 Technical Support</Typography>
          </Box>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          All solutions come with comprehensive training, documentation, and ongoing support.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductsMainPage;
