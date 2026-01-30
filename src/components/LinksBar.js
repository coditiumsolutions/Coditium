import React, { useState, useRef } from 'react';
import { Paper, Box, Button, Menu, MenuItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { KeyboardArrowDown } from '@mui/icons-material';

// Minimal delay so pointer can move from button to dropdown (menu renders in portal). Use 0 for instant close.
const MENU_CLOSE_DELAY_MS = 20;

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
  { label: 'AI', path: '/about' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Portfolio', path: '/portfolio' }
];

const LinksBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));
  const [ourWorkAnchor, setOurWorkAnchor] = useState(null);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [productsAnchor, setProductsAnchor] = useState(null);
  const ourWorkCloseTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const productsCloseTimeoutRef = useRef(null);
  const isOurWorkOpen = Boolean(ourWorkAnchor);
  const isServicesOpen = Boolean(servicesAnchor);
  const isProductsOpen = Boolean(productsAnchor);
  const isHomeActive = location.pathname === '/';
  const isOurWorkActive = location.pathname === '/about' || location.pathname === '/our-team' || location.pathname === '/portfolio';
  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isProductsActive = location.pathname === '/products' || location.pathname.startsWith('/products/');
  const isContactActive = location.pathname === '/contact';

  const tabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'contact', label: 'Contact Us', path: '/contact' }
  ];

  const handleOurWorkOpen = (event) => {
    clearOurWorkCloseTimeout();
    setServicesAnchor(null);
    setProductsAnchor(null);
    setOurWorkAnchor(event.currentTarget);
  };

  const handleOurWorkClose = () => {
    ourWorkCloseTimeoutRef.current = setTimeout(() => {
      setOurWorkAnchor(null);
      ourWorkCloseTimeoutRef.current = null;
    }, MENU_CLOSE_DELAY_MS);
  };

  const handleOurWorkMenuEnter = () => {
    clearOurWorkCloseTimeout();
  };

  const handleOurWorkMenuLeave = () => {
    handleOurWorkClose();
  };

  const clearOurWorkCloseTimeout = () => {
    if (ourWorkCloseTimeoutRef.current) {
      clearTimeout(ourWorkCloseTimeoutRef.current);
      ourWorkCloseTimeoutRef.current = null;
    }
  };

  const handleOurWorkSublinkClick = (path) => {
    clearOurWorkCloseTimeout();
    setOurWorkAnchor(null);
    navigate(path);
    setActiveTab('our-work');
  };

  const handleServicesOpen = (event) => {
    clearCloseTimeout();
    setOurWorkAnchor(null);
    setProductsAnchor(null);
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesAnchor(null);
      closeTimeoutRef.current = null;
    }, MENU_CLOSE_DELAY_MS);
  };

  const handleServicesMenuEnter = () => {
    clearCloseTimeout();
  };

  const handleServicesMenuLeave = () => {
    handleServicesClose();
  };

  const handleProductsOpen = (event) => {
    clearProductsCloseTimeout();
    setOurWorkAnchor(null);
    setServicesAnchor(null);
    setProductsAnchor(event.currentTarget);
  };

  const handleProductsClose = () => {
    productsCloseTimeoutRef.current = setTimeout(() => {
      setProductsAnchor(null);
      productsCloseTimeoutRef.current = null;
    }, MENU_CLOSE_DELAY_MS);
  };

  const handleProductsMenuEnter = () => {
    clearProductsCloseTimeout();
  };

  const handleProductsMenuLeave = () => {
    handleProductsClose();
  };

  const clearProductsCloseTimeout = () => {
    if (productsCloseTimeoutRef.current) {
      clearTimeout(productsCloseTimeoutRef.current);
      productsCloseTimeoutRef.current = null;
    }
  };

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleServicesMainClick = () => {
    clearCloseTimeout();
    setServicesAnchor(null);
    navigate('/services');
    setActiveTab('services');
  };

  const handleSublinkClick = (path) => {
    clearCloseTimeout();
    setServicesAnchor(null);
    navigate(path);
    setActiveTab('services');
  };

  const handleProductsMainClick = () => {
    clearProductsCloseTimeout();
    setProductsAnchor(null);
    navigate('/products');
    setActiveTab('products');
  };

  const handleProductSublinkClick = (path) => {
    clearProductsCloseTimeout();
    setProductsAnchor(null);
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
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.8)',
    borderRadius: 0,
    px: 3,
    py: 1,
    position: 'relative',
    fontSize: '0.9rem',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'color 0.3s ease, font-weight 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '3px',
      backgroundColor: 'white',
      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'center',
      transition: 'transform 0.3s ease-in-out'
    }
  });

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        borderRadius: 0,
        backgroundColor: '#002e5b',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        py: 1,
        pl: 0
      }}>
        {/* Links in order: Home, Products, Services, Our Work, Contact Us */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            onMouseEnter={handleProductsOpen}
            onMouseLeave={handleProductsClose}
            sx={{ display: 'inline-flex' }}
          >
            <Button
              id="products-button"
              aria-controls={isProductsOpen ? 'products-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isProductsOpen ? 'true' : undefined}
              component={Link}
              to="/products"
              sx={buttonSx(isProductsActive)}
              endIcon={<KeyboardArrowDown sx={{ fontSize: '1.2rem' }} />}
            >
              Products
            </Button>
            <Menu
              id="products-menu"
              anchorEl={productsAnchor}
              open={isProductsOpen}
              onClose={() => setProductsAnchor(null)}
              transitionDuration={0}
              slotProps={{ transition: { timeout: 0 } }}
              MenuListProps={{
                'aria-labelledby': 'products-button',
                onMouseEnter: handleProductsMenuEnter,
                onMouseLeave: handleProductsMenuLeave
              }}
              disableScrollLock
              PaperProps={{
                sx: {
                  mt: 0,
                  minWidth: 280,
                  backgroundColor: '#002e5b',
                  color: 'white',
                  '& .MuiMenuItem-root': {
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                  }
                }
              }}
            >
              <MenuItem onClick={handleProductsMainClick} sx={{ color: 'inherit' }}>
                Products Overview
              </MenuItem>
              {productSublinks.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleProductSublinkClick(item.path)}
                  sx={{ color: 'inherit' }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Services dropdown */}
          <Box
            onMouseEnter={handleServicesOpen}
            onMouseLeave={handleServicesClose}
            sx={{ display: 'inline-flex' }}
          >
            <Button
              id="services-button"
              aria-controls={isServicesOpen ? 'services-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isServicesOpen ? 'true' : undefined}
              component={Link}
              to="/services"
              sx={buttonSx(isServicesActive)}
              endIcon={<KeyboardArrowDown sx={{ fontSize: '1.2rem' }} />}
            >
              Services
            </Button>
            <Menu
              id="services-menu"
              anchorEl={servicesAnchor}
              open={isServicesOpen}
              onClose={() => setServicesAnchor(null)}
              transitionDuration={0}
              slotProps={{ transition: { timeout: 0 } }}
              MenuListProps={{
                'aria-labelledby': 'services-button',
                onMouseEnter: handleServicesMenuEnter,
                onMouseLeave: handleServicesMenuLeave
              }}
              disableScrollLock
              PaperProps={{
                sx: {
                  mt: 0,
                  minWidth: 220,
                  backgroundColor: '#002e5b',
                  color: 'white',
                  '& .MuiMenuItem-root': {
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                  }
                }
              }}
            >
              <MenuItem onClick={handleServicesMainClick} sx={{ color: 'inherit' }}>
                Services Overview
              </MenuItem>
              {serviceSublinks.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleSublinkClick(item.path)}
                  sx={{ color: 'inherit' }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Our Work dropdown */}
          <Box
            onMouseEnter={handleOurWorkOpen}
            onMouseLeave={handleOurWorkClose}
            sx={{ display: 'inline-flex' }}
          >
            <Button
              id="our-work-button"
              aria-controls={isOurWorkOpen ? 'our-work-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isOurWorkOpen ? 'true' : undefined}
              component={Link}
              to="/about"
              sx={buttonSx(isOurWorkActive)}
              endIcon={<KeyboardArrowDown sx={{ fontSize: '1.2rem' }} />}
            >
              Our Work
            </Button>
            <Menu
              id="our-work-menu"
              anchorEl={ourWorkAnchor}
              open={isOurWorkOpen}
              onClose={() => setOurWorkAnchor(null)}
              transitionDuration={0}
              slotProps={{ transition: { timeout: 0 } }}
              MenuListProps={{
                'aria-labelledby': 'our-work-button',
                onMouseEnter: handleOurWorkMenuEnter,
                onMouseLeave: handleOurWorkMenuLeave
              }}
              disableScrollLock
              PaperProps={{
                sx: {
                  mt: 0,
                  minWidth: 180,
                  backgroundColor: '#002e5b',
                  color: 'white',
                  '& .MuiMenuItem-root': {
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                  }
                }
              }}
            >
              {ourWorkSublinks.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleOurWorkSublinkClick(item.path)}
                  sx={{ color: 'inherit' }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button
            component={Link}
            to="/contact"
            onClick={() => setActiveTab('contact')}
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