import React, { useState, useEffect } from 'react';
import {
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
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { Menu as MenuIcon, Close, KeyboardArrowDown, Logout, AccountCircle } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { colors, shadows, radius, gradients } from '../theme/designTokens';

const MENU_CLOSE_DELAY_MS = 20;

const TAB_ACTIVE_COLOR = '#9B1C31';
const TAB_BAR_BORDER = '#6B7B8F';
const TAB_BAR_BG = 'linear-gradient(180deg, #B8C5D6 0%, #A8B6C8 100%)';
const TAB_INACTIVE_BG = '#ffc100';
const TAB_ACTIVE_BG = '#ffc100';
const TAB_INACTIVE_TEXT = '#1E293B';
const TAB_ACTIVE_TEXT = '#1E293B';

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

  const tabSx = (active) => ({
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0.35,
    minHeight: 36,
    minWidth: 'unset',
    m: 0,
    px: { lg: 1.25, xl: 1.5 },
    py: 0.75,
    borderRadius: 0,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: { lg: '0.68rem', xl: '0.72rem' },
    letterSpacing: '0.05em',
    lineHeight: 1.2,
    whiteSpace: 'nowrap',
    bgcolor: active ? TAB_ACTIVE_BG : TAB_INACTIVE_BG,
    color: active ? TAB_ACTIVE_TEXT : TAB_INACTIVE_TEXT,
    borderTop: active ? `3px solid ${TAB_ACTIVE_COLOR}` : '3px solid transparent',
    borderBottom: active ? `1px solid ${TAB_ACTIVE_BG}` : 'none',
    mb: active ? '-1px' : 0,
    position: 'relative',
    zIndex: active ? 1 : 0,
    transition: 'background-color 0.2s ease, color 0.2s ease',
    '&:hover': {
      bgcolor: '#e6ad00',
      color: TAB_INACTIVE_TEXT,
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
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        boxShadow: scrolled ? shadows.header : 'none',
        transition: 'box-shadow 0.35s ease',
      }}
    >
      {/* Primary navbar — logo, contact, CTA */}
      <Box
        sx={{
          background: `linear-gradient(90deg, ${colors.dark} 0%, ${colors.darkMuted} 100%)`,
          color: '#fff',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 1.5, md: 2 },
              py: { xs: 1, md: 1.25 },
              minHeight: { xs: 48, md: 56 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 2.5,
                fontSize: '0.8125rem',
              }}
            >
              <Typography component="span" sx={{ fontWeight: 500, whiteSpace: 'nowrap' }}>
                📞 +92 (333) 519-1392
              </Typography>
              <MuiLink
                href="mailto:info@coditium.com"
                sx={{ color: '#fff', textDecoration: 'none', fontWeight: 500, '&:hover': { opacity: 0.9 } }}
              >
                📧 info@coditium.com
              </MuiLink>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {adminUser && (
                <>
                  <IconButton onClick={(e) => setAdminAnchor(e.currentTarget)} sx={{ color: '#fff' }}>
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
                  bgcolor: '#fff',
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  borderRadius: radius.button,
                  px: 2,
                  py: 0.6,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  '&:hover': { bgcolor: '#F0F9FF' },
                }}
              >
                Get a Quote
              </Button>
              <IconButton
                sx={{ display: { lg: 'none' }, color: '#fff' }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Tab navigation — full width */}
      <Box sx={{ display: { xs: 'none', lg: 'block' }, bgcolor: '#fff', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            width: '100%',
            m: 0,
            p: 0,
            borderTop: `1px solid ${TAB_BAR_BORDER}`,
            borderBottom: `1px solid ${TAB_BAR_BORDER}`,
            borderLeft: `1px solid ${TAB_BAR_BORDER}`,
            borderRight: `1px solid ${TAB_BAR_BORDER}`,
            background: TAB_BAR_BG,
          }}
        >
            {navLinks.map((link, index) => {
              const isLast = index === navLinks.length - 1;
              const cellSx = {
                flex: 1,
                display: 'flex',
                borderRight: isLast ? 'none' : `1px solid ${TAB_BAR_BORDER}`,
              };

              if (link.dropdown) {
                const isServices = link.dropdown === 'services';
                const dropdownActive = isServices ? isActive('/services') : isProductsActive;
                return (
                  <Box
                    key={link.label}
                    sx={cellSx}
                    onMouseEnter={(e) => openMenu(e, link.dropdown)}
                    onMouseLeave={scheduleClose}
                  >
                    <Button
                      component={isServices ? Link : 'button'}
                      to={isServices ? '/services' : undefined}
                      endIcon={<KeyboardArrowDown sx={{ fontSize: '0.95rem !important' }} />}
                      sx={tabSx(dropdownActive)}
                    >
                      {link.label}
                    </Button>
                    {renderDropdownMenu(link.dropdown)}
                  </Box>
                );
              }

              return (
                <Box key={link.label} sx={cellSx}>
                  <Button component={Link} to={link.path} sx={tabSx(isActive(link.path))}>
                    {link.label}
                  </Button>
                </Box>
              );
            })}
        </Box>
      </Box>

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
