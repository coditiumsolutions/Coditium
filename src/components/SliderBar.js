import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  IconButton, 
  Typography, 
  Fade, 
  Grid, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PlayArrow,
  Pause,
  Close,
  Launch,
  Info
} from '@mui/icons-material';

const SliderBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const featuresRef = useRef(null);
  
  const slides = [
    {
      id: 1,
      title: "Property Management System",
      subtitle: "Everything You Need in One Platform",
      description: "Streamline your entire property business operations with a comprehensive platform designed for reliability, efficiency, and seamless user experience.",
      image: {
        src: "/sliderpms.jpg",
        alt: "Property Management System",
      },
      fullDescription: "Professional web development services offering custom solutions, responsive designs, and modern user experiences for businesses of all sizes. Streamline your entire property business operations with a comprehensive platform designed for reliability, efficiency, and seamless user experience.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Responsive Design"],
      features: ["Custom Solutions", "Responsive Design", "Modern UX", "SEO Optimized"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Point of Sale System",
      subtitle: "Everything You Need in One Platform",
      description: "Streamline your entire property business operations with a comprehensive platform designed for reliability, efficiency, and seamless user experience.",
      image: {
        src: "/pos.png",
        alt: "Point of Sale System",
      },
      fullDescription: "A comprehensive Point of Sale system with inventory management, sales tracking, and detailed reporting for retail businesses. Perfect for retail stores, restaurants, and small businesses looking to streamline their operations.",
      category: "POS System",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      features: ["Inventory Management", "Sales Tracking", "Reporting", "Payment Integration"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Education Management System",
      subtitle: "Complete platform for student registration, admissions, fees, vouchers, results, and academic records",
      description: "Streamline your educational institution operations with a reliable, scalable platform designed for schools and colleges.",
      image: {
        src: "/school.png",
        alt: "Education Management System",
      },
      fullDescription: "A comprehensive educational platform for managing student registration, admissions, fees, academic records and results. Ideal for schools, colleges, and educational institutions looking to digitize their operations.",
      category: "Education System",
      technologies: ["Vue.js", "Firebase", "Google Maps API", "Real-time Updates"],
      features: ["Student Management", "Fee Collection", "Academic Records", "Result Processing"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/slider02.jpg",
        alt: "AI Analytics Dashboard",
      },
      fullDescription: "An intelligent analytics dashboard powered by AI, providing real-time insights, predictive analytics, and data visualization for informed decision-making. Transform your data into actionable intelligence with enterprise-grade AI analytics.",
      category: "Analytics Platform",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      features: ["Real-time Insights", "Predictive Analytics", "Data Visualization", "AI-powered"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "HRM (Payroll, Attendance, Leaves, etc.)",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/hrms.png",
        alt: "HR Management System",
      },
      fullDescription: "A comprehensive Human Resource Management system handling payroll, attendance, leaves, and employee management. Perfect for businesses looking to automate their HR processes and improve efficiency.",
      category: "HR Management",
      technologies: ["Angular", "Python", "SQLite", "Twilio API"],
      features: ["Payroll Management", "Attendance Tracking", "Leave Management", "Employee Records"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Mobile App Development",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/mobileapp.png",
        alt: "Mobile App Development",
      },
      fullDescription: "Custom mobile application development for iOS and Android platforms with native and cross-platform solutions. We build high-performance mobile apps that deliver exceptional user experiences.",
      category: "Mobile Development",
      technologies: ["React Native", "Flutter", "Firebase", "REST APIs"],
      features: ["Cross-platform", "Native Performance", "Push Notifications", "Offline Support"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "E-Commerce & Market Place",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/ecommerce.png",
        alt: "E-Commerce Platform",
      },
      fullDescription: "A full-featured e-commerce platform with marketplace capabilities, payment integration, and inventory management. Build your online store with our comprehensive e-commerce solutions.",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Product Management", "Shopping Cart", "Payment Gateway", "Order Tracking"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Agentic AI",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/artifical.png",
        alt: "Agentic AI Platform",
      },
      fullDescription: "Advanced AI agents for automating business processes, customer service, and decision-making workflows. Leverage the power of AI to transform your business operations.",
      category: "AI Solutions",
      technologies: ["Python", "TensorFlow", "OpenAI API", "LangChain"],
      features: ["Automated Workflows", "Natural Language Processing", "Decision Support", "API Integration"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    }
  ];

  // Create slide pairs: [0,1], [2,3], [4,5], [6,7]
  const slidePairs = [];
  for (let i = 0; i < slides.length; i += 2) {
    if (i + 1 < slides.length) {
      slidePairs.push([slides[i], slides[i + 1]]);
    } else {
      slidePairs.push([slides[i], null]);
    }
  }

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidePairs.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [autoPlay, slidePairs.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidePairs.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidePairs.length) % slidePairs.length);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLiveDemoClick = (project) => {
    // Agar liveUrl valid hai (empty nahi hai aur "#" nahi hai)
    if (project.liveUrl && project.liveUrl.trim() !== "" && project.liveUrl !== "#") {
      // New tab mein kholo
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
    // Agar liveUrl nahi hai to kuch nahi kare (button disabled rahega)
  };

  return (
    <Box sx={{ position: 'relative', height: '500px', overflow: 'hidden', mt: -2 }}>
      {slidePairs.map((pair, pairIndex) => {
        const [leftSlide, rightSlide] = pair;
        return (
          <Fade 
            key={pairIndex}
            in={currentSlide === pairIndex}
            timeout={1000}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: leftSlide?.background || 'white',
                display: 'flex',
                alignItems: 'center',
                color: '#002e5b'
              }}
            >
              <Grid container sx={{ height: '100%', alignItems: 'center', width: '100%' }}>
                {/* Left Side - First Item */}
                {leftSlide && (
                  <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                    <Box sx={{ 
                      padding: { xs: 4, md: 8 },
                      textAlign: { xs: 'center', md: 'left' },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 3 
                      }}>
                        <Typography 
                          variant="h5" 
                          component="h2" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: '#002e5b',
                            fontSize: { xs: '1.3rem', md: '1.6rem' },
                            flex: 1
                          }}
                        >
                          {leftSlide.title}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(leftSlide);
                          }}
                          sx={{
                            ml: 2,
                            backgroundColor: '#002e5b',
                            color: 'white',
                            padding: '6px 20px',
                            fontSize: '0.875rem',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            minWidth: '120px',
                            border: '2px solid #002e5b',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: 'white',
                              color: '#002e5b',
                              borderColor: '#002e5b',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(0, 46, 91, 0.3)'
                            }
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                      
                      <Box
                        sx={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: { xs: '200px', md: '300px' },
                          borderRadius: '12px',
                          overflow: 'hidden',
                          backgroundColor: 'rgba(0, 46, 91, 0.05)',
                          border: '2px solid rgba(0, 46, 91, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img 
                          src={leftSlide.image.src} 
                          alt={leftSlide.image.alt}
                          style={{ 
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <Box 
                          sx={{ 
                            display: 'none',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#002e5b',
                            textAlign: 'center',
                            width: '100%',
                            padding: 2
                          }}
                        >
                          <Typography variant="body2">
                            {leftSlide.image.alt}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                )}
                
                {/* Right Side - Second Item */}
                {rightSlide && (
                  <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                    <Box sx={{ 
                      padding: { xs: 4, md: 8 },
                      textAlign: { xs: 'center', md: 'left' },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 3 
                      }}>
                        <Typography 
                          variant="h5" 
                          component="h2" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: '#002e5b',
                            fontSize: { xs: '1.3rem', md: '1.6rem' },
                            flex: 1
                          }}
                        >
                          {rightSlide.title}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(rightSlide);
                          }}
                          sx={{
                            ml: 2,
                            backgroundColor: '#002e5b',
                            color: 'white',
                            padding: '6px 20px',
                            fontSize: '0.875rem',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            minWidth: '120px',
                            border: '2px solid #002e5b',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: 'white',
                              color: '#002e5b',
                              borderColor: '#002e5b',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(0, 46, 91, 0.3)'
                            }
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                      
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          maxHeight: { xs: '200px', md: '300px' },
                          backgroundColor: 'rgba(0, 46, 91, 0.05)',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          border: '2px solid rgba(0, 46, 91, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img 
                          src={rightSlide.image.src} 
                          alt={rightSlide.image.alt}
                          style={{ 
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <Box 
                          sx={{ 
                            display: 'none',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#002e5b',
                            textAlign: 'center',
                            width: '100%',
                            padding: 2
                          }}
                        >
                          <Typography variant="body2">
                            {rightSlide.image.alt}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Fade>
        );
      })}
      
      {/* Slide controls */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#002e5b',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          },
          zIndex: 20
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#002e5b',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          },
          zIndex: 20
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
      
      <IconButton
        onClick={() => setAutoPlay(!autoPlay)}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: '#002e5b',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          },
          zIndex: 20
        }}
      >
        {autoPlay ? <Pause /> : <PlayArrow />}
      </IconButton>
      
      {/* Slide indicators */}
      <Box sx={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1,
        zIndex: 20
      }}>
        {slidePairs.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentSlide ? '#002e5b' : 'rgba(0, 46, 91, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#002e5b'
              }
            }}
          />
        ))}
      </Box>

      {/* Project Details Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="md" 
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ m: 0, p: 3, pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <Close />
                </IconButton>
              </Box>
              <Chip 
                label={selectedProject.category} 
                sx={{ 
                  mt: 1,
                  backgroundColor: '#002e5b', 
                  color: 'white' 
                }} 
              />
            </DialogTitle>
            
            <DialogContent sx={{ p: 3 }}>
              <Box
                sx={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(0, 46, 91, 0.05)',
                  border: '2px solid rgba(0, 46, 91, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                <img 
                  src={selectedProject.image.src} 
                  alt={selectedProject.image.alt}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <Box 
                  sx={{ 
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#002e5b',
                    textAlign: 'center',
                    width: '100%',
                    padding: 2
                  }}
                >
                  <Typography variant="body2">
                    {selectedProject.image.alt}
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                {selectedProject.fullDescription}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="h6" 
                    sx={{ mb: 2, color: '#002e5b' }}
                    ref={featuresRef}
                    id="features-section"
                  >
                    Key Features
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.features.map((feature, index) => (
                      <Chip 
                        key={index}
                        label={feature} 
                        sx={{ 
                          backgroundColor: '#f0f7ff',
                          color: '#002e5b'
                        }} 
                      />
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#002e5b' }}>
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech, index) => (
                      <Chip 
                        key={index}
                        label={tech} 
                        variant="outlined"
                        sx={{ borderColor: '#002e5b', color: '#002e5b' }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            
            <DialogActions sx={{ p: 3, pt: 1 }}>
              <Button 
                startIcon={<Launch />}
                variant="contained"
                disabled={!selectedProject.liveUrl || selectedProject.liveUrl.trim() === "" || selectedProject.liveUrl === "#"}
                sx={{ 
                  backgroundColor: selectedProject.liveUrl && selectedProject.liveUrl.trim() !== "" && selectedProject.liveUrl !== "#" ? '#002e5b' : 'rgba(0, 46, 91, 0.3)',
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: selectedProject.liveUrl && selectedProject.liveUrl.trim() !== "" && selectedProject.liveUrl !== "#" ? '#00498a' : 'rgba(0, 46, 91, 0.3)' 
                  },
                  '&.Mui-disabled': {
                    backgroundColor: 'rgba(0, 46, 91, 0.1)',
                    color: 'rgba(0, 46, 91, 0.5)'
                  }
                }}
                onClick={() => handleLiveDemoClick(selectedProject)}
              >
                Live Demo
              </Button>
              <Button 
                startIcon={<Info />}
                variant="outlined"
                sx={{ 
                  borderColor: '#002e5b',
                  color: '#002e5b',
                  '&:hover': {
                    backgroundColor: '#002e5b',
                    color: 'white'
                  }
                }}
                onClick={scrollToFeatures}
              >
                Key Features
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default SliderBar;