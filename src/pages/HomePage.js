import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import HomeSolutionSlider from '../components/home/HomeSolutionSlider';
import HomeApplicationGrid from '../components/home/HomeApplicationGrid';
import HomeHero from '../components/home/HomeHero';
import HomeTrust from '../components/home/HomeTrust';
import HomePropertyShowcase from '../components/home/HomePropertyShowcase';
import HomeSchoolShowcase from '../components/home/HomeSchoolShowcase';
import HomeWhyChoose from '../components/home/HomeWhyChoose';
import HomeTechnologies from '../components/home/HomeTechnologies';
import HomeProcess from '../components/home/HomeProcess';
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
      <HomeSolutionSlider />
      <HomeApplicationGrid />
      <HomeHero />
      <HomeTrust />
      <HomePropertyShowcase />
      <HomeSchoolShowcase />
      <HomeWhyChoose />
      <HomeTechnologies />
      <HomeProcess />
      <HomePortfolio />
      <Box sx={{ py: 4, bgcolor: '#fff' }}>
        <LogoMarquee />
      </Box>
      <HomeCTA />
    </Box>
  );
};

export default HomePage;
