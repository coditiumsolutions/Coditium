import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close, KeyboardArrowDown, Logout, AccountCircle } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TopInfoBar from './TopInfoBar';
import { colors, shadows, radius, gradients } from '../theme/designTokens';

const MENU_CLOSE_DELAY_MS = 20;

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', dropdown: 'products' },
  { label: 'Services', path: '/services', dropdown: 'services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const productSublinks = [
  { label: 'Property Solutions', path: '/#property-solutions', hash: true },
  { label: 'School Solutions', path: '/#school-solutions', hash: true },
];

const serviceSublinks = [
  { label: 'Services Overview', path: '/services' },
  { label: 'Web Design', path: '/services/web-design' },
  { label: 'Software Development', path: '/services/software-development' },
  { label: 'E-Commerce Development', path: '/services/e-commerce-development' },
  { label: 'Mobile App Development', path: '/services/mobile-app-development' },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const [adminAnchor, setAdminAnchor] = useState(null);
  const closeTimeoutRef = React.useRef(null);

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) setAdminUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.startsWith('/#')) {
      const hash = path.slice(1);
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleNavClick = (path) => {
    setMobileOpen(false);
    const hashIndex = path.indexOf('#');
    if (hashIndex !== -1) {
      const hash = path.slice(hashIndex);
      if (location.pathname === '/') {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', path);
      } else {
        navigate(path);
      }
    }
  };

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownAnchor(null);
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, MENU_CLOSE_DELAY_MS);
  };

  const openMenu = (event, dropdownId) => {
    clearCloseTimeout();
    setDropdownAnchor(event.currentTarget);
    setOpenDropdown(dropdownId);
  };

  const closeMenu = () => {
    setDropdownAnchor(null);
    setOpenDropdown(null);
  };

  const getSublinks = (dropdownId) => (dropdownId === 'products' ? productSublinks : serviceSublinks);

  const isPropertyNav = location.hash === '#property-solutions';
  const isSchoolNav = location.hash === '#school-solutions';
  const isProductsActive = isPropertyNav || isSchoolNav;

  const navButtonSx = (active, highlight) => ({
    color: active ? colors.primary : colors.dark,
    fontWeight: active || highlight ? 700 : 500,
    fontSize: '0.875rem',
    px: 1.5,
    py: 0.85,
    minWidth: 'auto',
    borderRadius: radius.button,
    textTransform: 'none',
    position: 'relative',
    transition: 'all 0.25s ease',
    ...(highlight && {
      background: `linear-gradient(135deg, ${colors.primary}12, ${colors.secondary}12)`,
    }),
    '&::before': active
      ? {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: radius.button,
          padding: '1px',
          background: gradients.primary,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0.5,
        }
      : {},
    '&:hover': {
      color: colors.primary,
      bgcolor: `${colors.primary}10`,
      transform: 'translateY(-1px)',
    },
  });

  const renderDropdownMenu = (dropdownId) => (
    <Menu
      anchorEl={dropdownAnchor}
      open={openDropdown === dropdownId}
      onClose={closeMenu}
      transitionDuration={0}
      MenuListProps={{
        onMouseEnter: clearCloseTimeout,
        onMouseLeave: scheduleClose,
      }}
      PaperProps={{
        sx: {
          mt: 0.5,
          minWidth: 260,
          borderRadius: radius.card,
          border: `1px solid ${colors.border}`,
          boxShadow: shadows.cardHover,
        },
      }}
    >
      {getSublinks(dropdownId).map((item) =>
        item.hash ? (
          <MenuItem
            key={item.path}
            onClick={() => {
              handleNavClick(item.path);
              closeMenu();
            }}
            sx={{ fontSize: '0.9rem', py: 1.25 }}
          >
            {item.label}
          </MenuItem>
        ) : (
          <MenuItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={closeMenu}
            sx={{ fontSize: '0.9rem', py: 1.25 }}
          >
            {item.label}
          </MenuItem>
        )
      )}
    </Menu>
  );

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      <TopInfoBar />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: scrolled ? gradients.navGlass : '#FFFFFF',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: `1px solid ${colors.border}`,
          boxShadow: scrolled ? shadows.header : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 80 }, gap: 2, py: 0.5 }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexShrink: 0,
                textDecoration: 'none',
                minWidth: 0,
              }}
            >
              <Box
                component="img"
                src="/logo02.png"
                alt="Coditium"
                sx={{ height: { xs: 40, md: 48 }, width: 'auto', objectFit: 'contain' }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                gap: 0.25,
              }}
            >
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isServices = link.dropdown === 'services';
                  const dropdownActive = isServices ? isActive('/services') : isProductsActive;
                  return (
                    <Box
                      key={link.label}
                      onMouseEnter={(e) => openMenu(e, link.dropdown)}
                      onMouseLeave={scheduleClose}
                      sx={{ display: 'inline-flex' }}
                    >
                      <Button
                        component={isServices ? Link : 'button'}
                        to={isServices ? '/services' : undefined}
                        endIcon={<KeyboardArrowDown sx={{ fontSize: '1.1rem !important' }} />}
                        sx={navButtonSx(dropdownActive)}
                      >
                        {link.label}
                      </Button>
                      {renderDropdownMenu(link.dropdown)}
                    </Box>
                  );
                }
                return (
                  <Button key={link.label} component={Link} to={link.path} sx={navButtonSx(isActive(link.path))}>
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
              {adminUser && (
                <>
                  <IconButton onClick={(e) => setAdminAnchor(e.currentTarget)} sx={{ color: colors.dark }}>
                    <Avatar sx={{ width: 34, height: 34, bgcolor: colors.primary, fontSize: '0.875rem' }}>
                      {adminUser.username.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                  <Menu anchorEl={adminAnchor} open={Boolean(adminAnchor)} onClose={() => setAdminAnchor(null)}>
                    <MenuItem onClick={() => { navigate('/admin/dashboard'); setAdminAnchor(null); }}>
                      <AccountCircle sx={{ mr: 1 }} /> Dashboard
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        localStorage.removeItem('adminUser');
                        setAdminUser(null);
                        setAdminAnchor(null);
                        navigate('/');
                      }}
                    >
                      <Logout sx={{ mr: 1 }} /> Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  background: gradients.primary,
                  fontWeight: 700,
                  borderRadius: radius.button,
                  px: 2.5,
                  textTransform: 'none',
                  boxShadow: '0 4px 16px rgba(37,99,235,0.35)',
                  '&:hover': { filter: 'brightness(1.06)' },
                }}
              >
                Get a Quote
              </Button>
              <IconButton
                sx={{ display: { lg: 'none' }, color: colors.dark }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { width: 300, p: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <Close />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <React.Fragment key={link.label}>
                  <ListItemButton disabled sx={{ opacity: 1 }}>
                    <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }} />
                  </ListItemButton>
                  {getSublinks(link.dropdown).map((item) => (
                    <ListItemButton
                      key={item.path}
                      component={item.hash ? 'button' : Link}
                      to={item.hash ? undefined : item.path}
                      sx={{ pl: 4 }}
                      onClick={() => {
                        if (item.hash) handleNavClick(item.path);
                        else setMobileOpen(false);
                      }}
                    >
                      <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.9rem' }} />
                    </ListItemButton>
                  ))}
                </React.Fragment>
              );
            }
            return (
              <ListItemButton
                key={link.label}
                component={Link}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                selected={isActive(link.path)}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            );
          })}
          <ListItemButton component={Link} to="/contact" sx={{ mt: 2 }}>
            <Button fullWidth variant="contained" sx={{ background: gradients.primary, textTransform: 'none', fontWeight: 700 }}>
              Get a Quote
            </Button>
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
