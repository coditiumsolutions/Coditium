import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import TopBar from './components/TopBar';
import LinksBar from './components/LinksBar';
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

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/login/';
  const isAdminDashboard = location.pathname === '/admin/dashboard';

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
      <style>
        {`@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`}
      </style>
      
      <div id="back-to-top-anchor" />
      
      {!isLoginPage && !isAdminDashboard && (
        <>
          <TopBar />
          <LinksBar />
        </>
      )}
      
      <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
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
          <Fab color="primary" size="medium" aria-label="scroll back to top"
            sx={{ backgroundColor: '#002e5b', '&:hover': { backgroundColor: '#00498a' } }}>
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      )}
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <AppContent />
    </Router>
  );
};

export default App;