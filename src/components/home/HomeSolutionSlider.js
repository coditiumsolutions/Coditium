import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, IconButton, Chip } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { homeHeroSlides } from '../../data/homeContent';
import { colors } from '../../theme/designTokens';

const SLIDE_INTERVAL_MS = 6000;

const slideThemes = {
  property: {
    overlay: 'linear-gradient(105deg, rgba(15,23,42,0.92) 0%, rgba(37,99,235,0.75) 55%, rgba(37,99,235,0.35) 100%)',
    accent: colors.primary,
    chipBg: 'rgba(37,99,235,0.25)',
  },
  school: {
    overlay: 'linear-gradient(105deg, rgba(15,23,42,0.92) 0%, rgba(6,182,212,0.75) 55%, rgba(20,184,166,0.35) 100%)',
    accent: colors.secondary,
    chipBg: 'rgba(6,182,212,0.25)',
  },
};

const HomeSolutionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    setActiveIndex((index + homeHeroSlides.length) % homeHeroSlides.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(goNext, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const slide = homeHeroSlides[activeIndex];
  const theme = slideThemes[slide.gradient] || slideThemes.property;

  return (
    <Box
      component="section"
      aria-label="Featured solutions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 360, sm: 420, md: 480 },
        overflow: 'hidden',
        bgcolor: colors.dark,
      }}
    >
      {homeHeroSlides.map((item, index) => (
        <Box
          key={item.id}
          aria-hidden={index !== activeIndex}
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 0.7s ease',
            pointerEvents: index === activeIndex ? 'auto' : 'none',
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt=""
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: slideThemes[item.gradient]?.overlay || slideThemes.property.overlay,
            }}
          />
        </Box>
      ))}

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: { xs: 360, sm: 420, md: 480 },
          display: 'flex',
          alignItems: 'center',
          py: { xs: 5, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: 720 }}>
          <Chip
            label={slide.badge}
            sx={{
              mb: 2,
              fontWeight: 700,
              color: '#fff',
              bgcolor: theme.chipBg,
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
            }}
          />
          <Typography
            component="h1"
            sx={{
              color: '#fff',
              fontWeight: 800,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              mb: 2,
            }}
          >
            {slide.title}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.88)',
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            {slide.subtitle}
          </Typography>
        </Box>
      </Container>

      <IconButton
        onClick={goPrev}
        aria-label="Previous slide"
        sx={{
          position: 'absolute',
          left: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          color: '#fff',
          bgcolor: 'rgba(15,23,42,0.5)',
          border: '1px solid rgba(255,255,255,0.2)',
          '&:hover': { bgcolor: 'rgba(15,23,42,0.75)' },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={goNext}
        aria-label="Next slide"
        sx={{
          position: 'absolute',
          right: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          color: '#fff',
          bgcolor: 'rgba(15,23,42,0.5)',
          border: '1px solid rgba(255,255,255,0.2)',
          '&:hover': { bgcolor: 'rgba(15,23,42,0.75)' },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          gap: 1,
        }}
      >
        {homeHeroSlides.map((item, index) => (
          <Box
            key={item.id}
            component="button"
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            sx={{
              width: index === activeIndex ? 28 : 10,
              height: 10,
              borderRadius: 5,
              border: 'none',
              cursor: 'pointer',
              bgcolor: index === activeIndex ? '#fff' : 'rgba(255,255,255,0.45)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomeSolutionSlider;
