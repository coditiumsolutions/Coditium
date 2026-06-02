import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { testimonials } from '../../data/homeContent';
const SLIDE_MS = 7000;
const HEADING_COLOR = '#1E3A5F';
const DOT_ACTIVE = '#7CB342';

const HomeTrust = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, SLIDE_MS);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[active];
  const attribution = [current.role, current.company].filter(Boolean).join(', ');

  return (
    <Box
      component="section"
      id="client-testimonials"
      sx={{
        position: 'relative',
        minHeight: { xs: 480, md: 560 },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 5, md: 6 },
        backgroundImage: 'url(/slider04.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(15, 45, 95, 0.92) 0%, rgba(20, 55, 110, 0.88) 100%)',
          pointerEvents: 'none',
        }}
      />

      <IconButton
        onClick={prev}
        aria-label="Previous testimonial"
        sx={{
          position: 'absolute',
          left: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          color: '#fff',
          fontSize: { xs: 40, md: 56 },
          '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
        }}
      >
        <ChevronLeft sx={{ fontSize: 'inherit' }} />
      </IconButton>
      <IconButton
        onClick={next}
        aria-label="Next testimonial"
        sx={{
          position: 'absolute',
          right: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          color: '#fff',
          fontSize: { xs: 40, md: 56 },
          '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
        }}
      >
        <ChevronRight sx={{ fontSize: 'inherit' }} />
      </IconButton>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            bgcolor: '#fff',
            px: { xs: 3, sm: 5, md: 6 },
            py: { xs: 4, md: 5 },
            textAlign: 'center',
            boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
            position: 'relative',
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              fontWeight: 700,
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: HEADING_COLOR,
              mb: { xs: 3, md: 4 },
            }}
          >
            What Our Clients Are Saying
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1, md: 2 },
              mb: 3,
              minHeight: { xs: 140, md: 120 },
            }}
          >
            <Typography
              aria-hidden
              sx={{
                fontFamily: 'Georgia, serif',
                fontSize: { xs: '3rem', md: '4.5rem' },
                lineHeight: 0.8,
                color: 'rgba(30, 58, 95, 0.15)',
                userSelect: 'none',
                flexShrink: 0,
              }}
            >
              &ldquo;
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                lineHeight: 1.85,
                color: '#4A5568',
                maxWidth: 520,
                flex: 1,
              }}
            >
              {current.quote}
            </Typography>
            <Typography
              aria-hidden
              sx={{
                fontFamily: 'Georgia, serif',
                fontSize: { xs: '3rem', md: '4.5rem' },
                lineHeight: 0.8,
                color: 'rgba(30, 58, 95, 0.15)',
                userSelect: 'none',
                flexShrink: 0,
                alignSelf: 'flex-end',
              }}
            >
              &rdquo;
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: '0.8rem', md: '0.875rem' },
              color: HEADING_COLOR,
              letterSpacing: '0.02em',
            }}
          >
            {attribution}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1.25,
              mt: { xs: 3, md: 4 },
            }}
          >
            {testimonials.map((_, i) => (
              <Box
                key={i}
                component="button"
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  p: 0,
                  cursor: 'pointer',
                  border: `2px solid ${i === active ? DOT_ACTIVE : '#CBD5E1'}`,
                  bgcolor: i === active ? DOT_ACTIVE : 'transparent',
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeTrust;
