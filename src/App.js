import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box, Fab, ThemeProvider, createTheme } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServicesMainPage from './pages/ServicesMainPage';
import ServiceSubPage from './pages/ServiceSubPage';
import ProductsMainPage from './pages/ProductsMainPage';
import ProductSubPage from './pages/ProductSubPage';
import CoditiumServicesPage from './pages/CoditiumServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PropertyManagementDetails from './ProjectDetails/PropertyManagementDetails.js';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import { colors } from './theme/designTokens';

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
  },
  palette: {
    primary: { main: colors.primary, dark: colors.primaryDark },
    background: { default: colors.background },
  },
  shape: { borderRadius: 14 },
});

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/login/';
  const isAdminDashboard = location.pathname === '/admin/dashboard';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, bgcolor: colors.background }}>
        <div id="back-to-top-anchor" />

        {!isLoginPage && !isAdminDashboard && <Header />}

        <Box component="main" sx={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property-management-details" element={<PropertyManagementDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-team" element={<ServicesPage />} />
            <Route path="/services" element={<ServicesMainPage />} />
            <Route path="/services/:serviceSlug" element={<ServiceSubPage />} />
            <Route path="/products" element={<ProductsMainPage />} />
            <Route path="/products/:productSlug" element={<ProductSubPage />} />
            <Route path="/coditium-services" element={<CoditiumServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/" element={<LoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Box>

        {!isLoginPage && !isAdminDashboard && <Footer />}

        {!isLoginPage && <Chatbot />}

        {!isLoginPage && (
          <ScrollTop>
            <Fab
              color="primary"
              size="medium"
              aria-label="scroll back to top"
              sx={{
                bgcolor: colors.primary,
                '&:hover': { bgcolor: colors.primaryDark },
              }}
            >
              <KeyboardArrowUp />
            </Fab>
          </ScrollTop>
        )}
      </Box>
    </ThemeProvider>
  );
};

const App = () => (
  <Router>
    <ScrollToTopOnRouteChange />
    <AppContent />
  </Router>
);

export default App;
