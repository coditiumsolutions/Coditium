import React, { useState, useRef } from 'react';
import { Paper, Box, Button, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const serviceSublinks = [
  { label: 'Web Design', path: '/services/web-design' },
  { label: 'Software Development', path: '/services/software-development' },
  { label: 'E-Commerce Development', path: '/services/e-commerce-development' },
  { label: 'Mobile App Development', path: '/services/mobile-app-development' }
];

const productSublinks = [
  { label: 'Enterprise Resource Planning (ERP)', path: '/products/erp' },
  { label: 'School Management System (SMS)', path: '/products/sms' },
  { label: 'Real Estate Management System (REMS)', path: '/products/rems' },
  { label: 'Billing Management System', path: '/products/billing-management' },
  { label: 'Human Resource Management System (HRMS)', path: '/products/hrms' }
];

const ourWorkSublinks = [
  { label: 'AI Solutions', path: '/about' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Portfolio', path: '/portfolio' }
];

const LinksBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));
  
  // State for dropdown menus
  const [ourWorkAnchor, setOurWorkAnchor] = useState(null);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [productsAnchor, setProductsAnchor] = useState(null);
  
  // Timeout refs
  const closeTimeoutRef = useRef(null);
  
  const isOurWorkOpen = Boolean(ourWorkAnchor);
  const isServicesOpen = Boolean(servicesAnchor);
  const isProductsOpen = Boolean(productsAnchor);
  
  const isHomeActive = location.pathname === '/';
  const isOurWorkActive = location.pathname === '/about' || location.pathname === '/our-team' || location.pathname === '/portfolio';
  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isProductsActive = location.pathname === '/products' || location.pathname.startsWith('/products/');
  const isContactActive = location.pathname === '/contact';

  // Clear timeout function
  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setOurWorkAnchor(null);
    setServicesAnchor(null);
    setProductsAnchor(null);
    clearCloseTimeout();
  };

  // Close all dropdowns except the specified one
  const closeOtherDropdowns = (except = null) => {
    if (except !== 'our-work') setOurWorkAnchor(null);
    if (except !== 'services') setServicesAnchor(null);
    if (except !== 'products') setProductsAnchor(null);
    clearCloseTimeout();
  };

  // Our Work handlers
  const handleOurWorkEnter = () => {
    clearCloseTimeout();
    closeOtherDropdowns('our-work');
    setOurWorkAnchor(true);
  };

  const handleOurWorkLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOurWorkAnchor(null);
    }, 200);
  };

  // Services handlers
  const handleServicesEnter = () => {
    clearCloseTimeout();
    closeOtherDropdowns('services');
    setServicesAnchor(true);
  };

  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesAnchor(null);
    }, 200);
  };

  // Products handlers
  const handleProductsEnter = () => {
    clearCloseTimeout();
    closeOtherDropdowns('products');
    setProductsAnchor(true);
  };

  const handleProductsLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setProductsAnchor(null);
    }, 200);
  };

  // Click handlers
  const handleOurWorkSublinkClick = (path) => {
    closeAllDropdowns();
    navigate(path);
    setActiveTab('our-work');
  };

  const handleServicesMainClick = () => {
    closeAllDropdowns();
    navigate('/services');
    setActiveTab('services');
  };

  const handleSublinkClick = (path) => {
    closeAllDropdowns();
    navigate(path);
    setActiveTab('services');
  };

  const handleProductsMainClick = () => {
    closeAllDropdowns();
    navigate('/products');
    setActiveTab('products');
  };

  const handleProductSublinkClick = (path) => {
    closeAllDropdowns();
    navigate(path);
    setActiveTab('products');
  };

  // Update activeTab when location changes
  React.useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setActiveTab('home');
    } else if (currentPath === '/about' || currentPath === '/our-team' || currentPath === '/portfolio') {
      setActiveTab('our-work');
    } else if (currentPath.startsWith('/services')) {
      setActiveTab('services');
    } else if (currentPath.startsWith('/products')) {
      setActiveTab('products');
    } else {
      setActiveTab(currentPath.slice(1).split('/')[0] || 'home');
    }
  }, [location.pathname]);

  const buttonSx = (isActive) => ({
    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
    borderRadius: '0px',
    px: 2.5,
    py: 1,
    position: 'relative',
    fontSize: '0.95rem',
    fontWeight: isActive ? 600 : 500,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textTransform: 'none',
    letterSpacing: '0.2px',
    minHeight: '40px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#ffffff',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
      width: '60%',
      height: '2px',
      // backgroundColor: '#4fc3f7',
      backgroundColor: 'white',
      transformOrigin: 'center',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  });

  return (
    <Paper 
      elevation={0}
      sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1100,
        borderRadius: 0,
        backgroundColor: 'linear-gradient(135deg, #002e5b 0%, #004080 100%)',
        backgroundImage: 'linear-gradient(135deg, #002e5b 0%, #004080 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        py: 0.8,
        px: { xs: 1, md: 3 },
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '56px'
      }}>
        {/* Links in order: Home, Products, Services, Our Work, Contact Us */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 0.5,
          width: '100%',
          justifyContent: 'flex-start',
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}>
          <Button
            component={Link}
            to="/"
            onClick={() => setActiveTab('home')}
            sx={buttonSx(isHomeActive)}
          >
            Home
          </Button>
          
          {/* Products dropdown */}
          <Box
            sx={{ 
              display: 'inline-flex', 
              position: 'relative',
            }}
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
          >
            <Button
              id="products-button"
              aria-controls={isProductsOpen ? 'products-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isProductsOpen ? 'true' : undefined}
              component={Link}
              to="/products"
              sx={buttonSx(isProductsActive)}
              endIcon={isProductsOpen ? 
                <KeyboardArrowUp sx={{ fontSize: '1.1rem', transition: 'transform 0.3s' }} /> : 
                <KeyboardArrowDown sx={{ fontSize: '1.1rem', transition: 'transform 0.3s' }} />
              }
            >
              Products
            </Button>
            
            <Paper
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                mt: 0.5,
                minWidth: 280,
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                boxShadow: '0 8px 30px rgba(0, 46, 91, 0.15)',
                opacity: isProductsOpen ? 1 : 0,
                visibility: isProductsOpen ? 'visible' : 'hidden',
                transform: isProductsOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                zIndex: 1200,
                border: '1px solid rgba(0, 46, 91, 0.08)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -6,
                  left: 20,
                  width: 12,
                  height: 12,
                  backgroundColor: '#ffffff',
                  transform: 'rotate(45deg)',
                  borderTop: '1px solid rgba(0, 46, 91, 0.08)',
                  borderLeft: '1px solid rgba(0, 46, 91, 0.08)',
                }
              }}
            >
              <Box sx={{ p: 1.5 }}>
                <Box
                  onClick={handleProductsMainClick}
                  sx={{
                    p: 1.5,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    mb: 1,
                    color: '#002e5b',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: '#f1f5f9',
                    }
                  }}
                >
                  <Typography variant="body2" fontWeight="600">
                    Products Overview
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {productSublinks.map((item) => (
                    <Box
                      key={item.path}
                      onClick={() => handleProductSublinkClick(item.path)}
                      sx={{
                        p: 1.5,
                        borderRadius: '4px',
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: '#f8fafc',
                        }
                      }}
                    >
                      <Typography variant="body2" fontWeight="500" color="#002e5b">
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Box>
          
          {/* Services dropdown */}
          <Box
            sx={{ 
              display: 'inline-flex', 
              position: 'relative',
            }}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Button
              id="services-button"
              aria-controls={isServicesOpen ? 'services-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isServicesOpen ? 'true' : undefined}
              component={Link}
              to="/services"
              sx={buttonSx(isServicesActive)}
              endIcon={isServicesOpen ? 
                <KeyboardArrowUp sx={{ fontSize: '1.1rem', transition: 'transform 0.3s' }} /> : 
                <KeyboardArrowDown sx={{ fontSize: '1.1rem', transition: 'transform 0.3s' }} />
              }
            >
              Services
            </Button>
            
            <Paper
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                mt: 0.5,
                minWidth: 240,
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                boxShadow: '0 8px 30px rgba(0, 46, 91, 0.15)',
                opacity: isServicesOpen ? 1 : 0,
                visibility: isServicesOpen ? 'visible' : 'hidden',
                transform: isServicesOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                zIndex: 1200,
                border: '1px solid rgba(0, 46, 91, 0.08)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -6,
                  left: 20,
                  width: 12,
                  height: 12,
                  backgroundColor: '#ffffff',
                  transform: 'rotate(45deg)',
                  borderTop: '1px solid rgba(0, 46, 91, 0.08)',
                  borderLeft: '1px solid rgba(0, 46, 91, 0.08)',
                }
              }}
            >
              <Box sx={{ p: 1.5 }}>
                <Box
                  onClick={handleServicesMainClick}
                  sx={{
                    p: 1.5,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    mb: 1,
                    color: '#002e5b',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: '#f1f5f9',
                    }
                  }}
                >
                  <Typography variant="body2" fontWeight="600">
                    Services Overview
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {serviceSublinks.map((item) => (
                    <Box
                      key={item.path}
                      onClick={() => handleSublinkClick(item.path)}
                      sx={{
                        p: 1.5,
                        borderRadius: '4px',
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: '#f8fafc',
                        }
                      }}
                    >
                      <Typography variant="body2" fontWeight="500" color="#002e5b">
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Box>
          
          {/* Our Work dropdown */}
          <Box
            sx={{ 
              display: 'inline-flex', 
              position: 'relative',
            }}
            onMouseEnter={handleOurWorkEnter}
            onMouseLeave={handleOurWorkLeave}
          >
            <Button
              id="our-work-button"
              aria-controls={isOurWorkOpen ? 'our-work-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isOurWorkOpen ? 'true' : undefined}
              component={Link}
              to="/about"
              sx={buttonSx(isOurWorkActive)}
              endIcon={isOurWorkOpen ? 
                <KeyboardArrowUp sx={{ fontSize: '1.1rem', transition: 'transform 0.3s' }} /> : 
                <KeyboardArrowDown sx={{ fontSize: '1.1rem', transition: 'transform 0.3s' }} />
              }
            >
              Our Work
            </Button>
            
            <Paper
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                mt: 0.5,
                minWidth: 200,
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                boxShadow: '0 8px 30px rgba(0, 46, 91, 0.15)',
                opacity: isOurWorkOpen ? 1 : 0,
                visibility: isOurWorkOpen ? 'visible' : 'hidden',
                transform: isOurWorkOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                zIndex: 1200,
                border: '1px solid rgba(0, 46, 91, 0.08)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -6,
                  left: 20,
                  width: 12,
                  height: 12,
                  backgroundColor: '#ffffff',
                  transform: 'rotate(45deg)',
                  borderTop: '1px solid rgba(0, 46, 91, 0.08)',
                  borderLeft: '1px solid rgba(0, 46, 91, 0.08)',
                }
              }}
            >
              <Box sx={{ p: 1.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {ourWorkSublinks.map((item) => (
                    <Box
                      key={item.path}
                      onClick={() => handleOurWorkSublinkClick(item.path)}
                      sx={{
                        p: 1.5,
                        borderRadius: '4px',
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: '#f8fafc',
                        }
                      }}
                    >
                      <Typography variant="body2" fontWeight="500" color="#002e5b">
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Box>
          
          {/* Contact Us button - moved next to Our Work */}
          <Button
            component={Link}
            to="/contact"
            onClick={() => {
              closeAllDropdowns();
              setActiveTab('contact');
            }}
            sx={buttonSx(isContactActive)}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default LinksBar;