import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';

const LogoMarquee = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Keyframe animations
  const marqueeLeft = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  `;

  const marqueeRight = keyframes`
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  `;

  // Logo data for each row
  // Use 'image' property for image path, or 'icon' for emoji fallback
  // Example: { name: 'Apple', image: '/logos/apple.png' } or { name: 'Apple', icon: '🍎' }
  const row1Logos = [
    { name: 'Apple', image: '/logos/apple.png', icon: '🍎' },
    { name: 'Google', image: '/logos/google.png', icon: '🔍' },
    { name: 'Microsoft', image: '/logos/microsoft.png', icon: '💻' },
    { name: 'Amazon', image: '/logos/amazon.png', icon: '📦' },
    { name: 'Tesla', image: '/logos/tesla.png', icon: '⚡' },
    { name: 'Netflix', image: '/logos/netflix.png', icon: '🎬' },
    { name: 'Adobe', image: '/logos/adobe.png', icon: '🎨' },
    { name: 'Samsung', image: '/logos/samsung.png', icon: '📱' },
    { name: 'Intel', image: '/logos/intel.png', icon: '💾' },
    { name: 'IBM', image: '/logos/ibm.png', icon: '🔵' }
  ];

  const row2Logos = [
    { name: 'Nike', image: '/logos/nike.png', icon: '✓' },
    { name: 'Coca-Cola', image: '/logos/cocacola.png', icon: '🥤' },
    { name: 'Spotify', image: '/logos/spotify.png', icon: '🎵' },
    { name: 'Uber', image: '/logos/uber.png', icon: '🚗' },
    { name: 'Airbnb', image: '/logos/airbnb.png', icon: '🏠' },
    { name: 'Slack', image: '/logos/slack.png', icon: '💬' },
    { name: 'Zoom', image: '/logos/zoom.png', icon: '📹' },
    { name: 'PayPal', image: '/logos/paypal.png', icon: '💳' },
    { name: 'Shopify', image: '/logos/shopify.png', icon: '🛒' },
    { name: 'FedEx', image: '/logos/fedex.png', icon: '📮' }
  ];

  const row3Logos = [
    { name: 'Disney', image: '/logos/disney.png', icon: '🏰' },
    { name: 'Starbucks', image: '/logos/starbucks.png', icon: '☕' },
    { name: 'BMW', image: '/logos/bmw.png', icon: '🚙' },
    { name: 'Sony', image: '/logos/sony.png', icon: '📺' },
    { name: 'LG', image: '/logos/lg.png', icon: '📺' },
    { name: 'Panasonic', image: '/logos/panasonic.png', icon: '🔋' },
    { name: 'Dell', image: '/logos/dell.png', icon: '💻' },
    { name: 'HP', image: '/logos/hp.png', icon: '🖨️' },
    { name: 'Oracle', image: '/logos/oracle.png', icon: '🗄️' },
    { name: 'Cisco', image: '/logos/cisco.png', icon: '🌐' }
  ];

  // Duplicate logos for seamless infinite loop
  const duplicateLogos = (logos) => [...logos, ...logos];

  const MarqueeRow = ({ logos, direction, speed }) => {
    const duplicatedLogos = duplicateLogos(logos);
    const animation = direction === 'left' ? marqueeLeft : marqueeRight;
    
    return (
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          py: { xs: 0.5, sm: 0.75, md: 1 },
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            width: '100px',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none'
          },
          '&::before': {
            left: 0,
            background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 4, sm: 6, md: 8 },
            width: 'fit-content',
            animation: `${animation} ${speed}s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: { xs: '120px', sm: '150px', md: '180px' },
                height: { xs: '60px', sm: '70px', md: '80px' },
                px: 3,
                bgcolor: 'rgba(1, 112, 185, 0.05)',
                border: '1px solid #000000',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                opacity: 0.9,
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.1)',
                  bgcolor: 'rgba(1, 112, 185, 0.1)',
                  borderColor: '#0170b9',
                  boxShadow: '0 4px 12px rgba(1, 112, 185, 0.2)'
                }
              }}
            >
              <Box
                sx={{
                  mb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '60%',
                  overflow: 'hidden'
                }}
              >
                {logo.image ? (
                  <Box
                    component="img"
                    src={logo.image}
                    alt={logo.name}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.target.style.display = 'none';
                      const iconBox = e.target.parentElement;
                      if (iconBox && logo.icon) {
                        const fallback = document.createElement('div');
                        fallback.style.fontSize = '2.5rem';
                        fallback.textContent = logo.icon;
                        iconBox.appendChild(fallback);
                      }
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                    }}
                  >
                    {logo.icon}
                  </Box>
                )}
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
                  fontWeight: 600,
                  color: '#002e5b',
                  textAlign: 'center',
                  opacity: 0.8
                }}
              >
                {logo.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
        py: { xs: 2, sm: 3, md: 3 },
        mt: { xs: 6, sm: 8, md: 10 },
        borderTop: '1px solid rgba(1, 112, 185, 0.1)',
        borderBottom: '1px solid rgba(1, 112, 185, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 2, sm: 2.5, md: 3 },
            color: '#002e5b',
            fontWeight: 700,
            fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          Trusted By
        </Typography>

        {/* Row 1: Right to Left */}
        <MarqueeRow 
          logos={row1Logos} 
          direction="left" 
          speed={isMobile ? 30 : isTablet ? 40 : 50}
        />

        {/* Row 2: Left to Right */}
        <MarqueeRow 
          logos={row2Logos} 
          direction="right" 
          speed={isMobile ? 35 : isTablet ? 45 : 55}
        />

        {/* Row 3: Right to Left */}
        <MarqueeRow 
          logos={row3Logos} 
          direction="left" 
          speed={isMobile ? 32 : isTablet ? 42 : 52}
        />
      </Container>
    </Box>
  );
};

export default LogoMarquee;
