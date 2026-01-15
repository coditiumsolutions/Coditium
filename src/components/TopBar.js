import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Login, Logout, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) {
      setAdminUser(JSON.parse(user));
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/admin/login');
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDashboardClick = () => {
    navigate('/admin/dashboard');
    handleMenuClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    setAdminUser(null);
    handleMenuClose();
    navigate('/');
  };

  const projectNames = [
    "Data Scraping & Web Automation",
    "Voice Assistant Development",
    "Voice Chatbot",
    "AI Powered Analytics Dashboard",
    "Data Analytics & Dashboards"
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        minHeight: '40px', // Reduced height
        py: 0.5 // Reduced padding
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        minHeight: '40px !important', // Force reduced height
        width: '100%'
      }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center'
        }}>
          <img 
            src="/logo02.png"
            alt="Company Logo" 
            style={{ 
              width: '200px',
              height: '60px',
              objectFit: 'contain'
            }}
          />
        </Box>
        
        {/* Scrolling Project Names */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            overflow: 'hidden',
            ml: 4,
            position: 'relative',
            width: '100%',
            height: '40px',
            mr: { xs: 1, sm: 2 }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: 'scroll 25s linear infinite',
              whiteSpace: 'nowrap',
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0)'
                },
                '100%': {
                  transform: 'translateX(-50%)'
                }
              }
            }}
          >
            {[...projectNames, ...projectNames].map((name, index) => (
              <Typography
                key={index}
                variant="body2"
                component="span"
                sx={{
                  color: '#002e5b',
                  fontWeight: 500,
                  mr: 4,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  display: 'inline-block'
                }}
              >
                {name} •
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Login Button / Admin Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          {adminUser ? (
            <>
              <IconButton
                onClick={handleMenuClick}
                sx={{
                  color: '#002e5b',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 46, 91, 0.1)'
                  }
                }}
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#002e5b', fontSize: '0.875rem' }}>
                  {adminUser.username.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleDashboardClick}>
                  <AccountCircle sx={{ mr: 1 }} /> Dashboard
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1 }} /> Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant="outlined"
              startIcon={<Login />}
              onClick={handleLoginClick}
              sx={{
                borderColor: '#002e5b',
                color: '#002e5b',
                textTransform: 'none',
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 0.75 },
                '&:hover': {
                  borderColor: '#0170b9',
                  backgroundColor: 'rgba(0, 46, 91, 0.05)'
                }
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;