import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import HomeHeroBanner from '../components/home/HomeHeroBanner';
import HomeSolutionSlider from '../components/home/HomeSolutionSlider';
import HomeApplicationGrid from '../components/home/HomeApplicationGrid';
import HomeTrust from '../components/home/HomeTrust';
import HomePropertyShowcase from '../components/home/HomePropertyShowcase';
import HomeSchoolShowcase from '../components/home/HomeSchoolShowcase';
import HomeWhyChoose from '../components/home/HomeWhyChoose';
import HomePortfolio from '../components/home/HomePortfolio';
import HomeCTA from '../components/home/HomeCTA';
import LogoMarquee from '../components/LogoMarquee';
import { colors } from '../theme/designTokens';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [location.hash, location.pathname]);

  return (
    <Box component="main" sx={{ bgcolor: colors.background }}>
      <HomeHeroBanner />
      <HomeSolutionSlider />
      <HomeApplicationGrid />
      <HomeTrust />
      <HomePropertyShowcase />
      <HomeSchoolShowcase />
      <HomeWhyChoose />
      <HomePortfolio />
      <Box sx={{ py: 4, bgcolor: '#fff' }}>
        <LogoMarquee />
      </Box>
      <HomeCTA />
    </Box>
  );
};

export default HomePage;
