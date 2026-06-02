import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { FormatQuote, ChevronLeft, ChevronRight } from '@mui/icons-material';
import SectionHeading from './SectionHeading';
import AnimateSection from './AnimateSection';
import { testimonials } from '../../data/homeContent';
import { colors } from '../../theme/designTokens';

const HomeTestimonials = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[active];

  return (
    <Box component="section" className="section-padding" sx={{ bgcolor: colors.background }}>
      <Container maxWidth="md">
        <AnimateSection>
          <SectionHeading title="What Our Clients Say" />
        </AnimateSection>

        <AnimateSection>
          <Box
            className="premium-card"
            sx={{
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <FormatQuote sx={{ fontSize: 48, color: `${colors.primary}25`, mb: 2 }} />
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                color: colors.dark,
                fontStyle: 'italic',
                mb: 3,
                minHeight: { md: 100 },
              }}
            >
              &ldquo;{current.quote}&rdquo;
            </Typography>
            <Typography sx={{ fontWeight: 700, color: colors.dark }}>{current.name}</Typography>
            <Typography sx={{ fontSize: '0.875rem', color: colors.textMuted, mt: 0.5 }}>
              {current.role} · {current.company}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 3 }}>
              <IconButton onClick={prev} aria-label="Previous testimonial" sx={{ border: `1px solid ${colors.border}` }}>
                <ChevronLeft />
              </IconButton>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setActive(i)}
                    sx={{
                      width: i === active ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      bgcolor: i === active ? colors.primary : colors.border,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
              <IconButton onClick={next} aria-label="Next testimonial" sx={{ border: `1px solid ${colors.border}` }}>
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </AnimateSection>
      </Container>
    </Box>
  );
};

export default HomeTestimonials;
