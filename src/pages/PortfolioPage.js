import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Close, 
  Launch, 
  Code,
  CalendarToday,
  Email,
  Phone,
  Business,
  Description,
  Person,
  Delete
} from '@mui/icons-material';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDemoDialog, setOpenDemoDialog] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      id: 1,
      title: "Property Management System",
      description: "Professional web development services offering custom solutions, responsive designs, and modern user experiences for businesses of all sizes.",
      image: "/portfolio/card01.png",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Responsive Design"],
      features: ["Custom Solutions", "Responsive Design", "Modern UX", "SEO Optimized"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Point of Sale System",
      description: "A comprehensive salon management system featuring online booking, service management, and customer reviews. Perfect for modern salons and beauty centers looking to digitize their operations.",
      image: "/portfolio/card02.png",
      category: "Management System",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      features: ["Online Booking", "Service Management", "Customer Reviews", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Voice Chatbot",
      description: "A dynamic restaurant menu and review platform that helps restaurants showcase their offerings and collect customer feedback. Features digital menus, ratings, and customer engagement tools.",
      image: "/portfolio/card03.png",
      category: "Restaurant Platform",
      technologies: ["Vue.js", "Firebase", "Google Maps API", "Real-time Updates"],
      features: ["Digital Menus", "Rating System", "Customer Feedback", "Analytics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI Powered Analytics Dashboard",
      description: "A powerful Point of Sale system with inventory management, sales tracking, and detailed reporting. Perfect for retail stores, restaurants, and small businesses.",
      image: "/portfolio/card04.png",
      category: "POS System",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "WebSocket"],
      features: ["Inventory Management", "Sales Tracking", "Reporting", "Multi-store Support"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Medical Appointment System",
      description: "A comprehensive medical appointment scheduling system with patient management, appointment tracking, and automated reminders. Ideal for clinics and healthcare providers.",
      image: "/portfolio/card07.png",
      category: "Healthcare System",
      technologies: ["Angular", "Python", "SQLite", "Twilio API"],
      features: ["Appointment Scheduling", "Patient Management", "Automated Reminders", "Medical Records"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Education Management System",
      description: "An intelligent analytics dashboard powered by AI, providing real-time insights, predictive analytics, and data visualization for informed decision-making.",
      image: "/portfolio/card06.png",
      category: "Analytics Platform",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      features: ["Real-time Insights", "Predictive Analytics", "Data Visualization", "AI-powered"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const handleOpenDemoDialog = () => {
    setOpenDemoDialog(true);
  };

  const handleCloseDemoDialog = () => {
    setOpenDemoDialog(false);
    setDemoForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      requirements: ''
    });
  };

  const handleDemoFormChange = (e) => {
    setDemoForm({
      ...demoForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitDemo = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(demoForm),
      });

      const data = await response.json();

      if (data.success) {
        handleCloseDemoDialog();
        setDemoForm({ name: '', email: '', phone: '', company: '', requirements: '' });
        alert('Demo request submitted successfully! We will contact you soon. Check your email for confirmation.');
      } else {
        alert('Failed to submit demo request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      alert('Connection error. Please check if server is running.');
    }
  };

  const handleOpenDetailsPage = () => {
    if (selectedProject && selectedProject.id === 1) {
      window.open('/property-management-details', '_blank');
      handleCloseDialog();
    }
  };

  const textFieldStyle = {
    width: '100%',
    '& .MuiFormControl-root': {
      width: '100%'
    },
    '& .MuiOutlinedInput-root': {
      width: '100%',
      borderRadius: '8px',
      backgroundColor: '#f8fafc'
    }
  };

  const renderProjectDialogContent = () => {
    if (!selectedProject) return null;

    // Special detailed layout for Property Management System (same as SliderBar)
    if (selectedProject.id === 1) {
      return (
        <>
          <DialogTitle sx={{ m: 0, p: 3, pb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                {selectedProject.title}
              </Typography>
              <IconButton onClick={handleCloseDialog}>
                <Close />
              </IconButton>
            </Box>
            <Typography variant="h6" sx={{ color: '#002e5b', mt: 1, fontWeight: 500 }}>
              Secure, Cloud-Based Solution for Modern Property Owners
            </Typography>
            <Chip
              label="Property Management"
              sx={{
                mt: 1,
                backgroundColor: '#002e5b',
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          </DialogTitle>

          <DialogContent
            dividers
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              maxHeight: '80vh',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            {/* Left: Image */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 3,
                boxSizing: 'border-box',
                minHeight: { xs: '250px', md: 'auto' }
              }}
            >
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 46, 91, 0.1)',
                  backgroundColor: 'white'
                }}
                onError={(e) => {
                  e.target.src = '/portfolio/card01.png';
                }}
              />
            </Box>

            {/* Right: Scrollable Text */}
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                padding: 3,
                boxSizing: 'border-box',
                maxHeight: '80vh',
                color: '#002e5b'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: '1.8rem',
                }}
              >
                Property Management Software for Modern Property Owners
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                Our Property Management System is a secure, cloud-based solution designed to help landlords and property managers efficiently manage rental properties, tenants, payments, and maintenance from one centralized platform.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Whether you manage residential, commercial, or student housing, our property management software simplifies daily operations and improves financial visibility.
              </Typography>
            </Box>
          </DialogContent>

          {/* Same action buttons as SliderBar */}
          <DialogActions sx={{ p: 3, pt: 2 }}>
            <Button
              variant="contained"
              onClick={handleOpenDemoDialog}
              sx={{
                backgroundColor: '#002e5b',
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1,
                '&:hover': {
                  backgroundColor: '#00498a'
                }
              }}
            >
              Request a Demo
            </Button>
            <Button
              variant="outlined"
              onClick={handleOpenDetailsPage}
              sx={{
                borderColor: '#002e5b',
                color: '#002e5b',
                fontWeight: 'bold',
                px: 4,
                py: 1,
                '&:hover': {
                  backgroundColor: '#002e5b',
                  color: 'white'
                }
              }}
            >
              Details
            </Button>
          </DialogActions>
        </>
      );
    }

    // Default dialog content for other projects (existing behavior)
    return (
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
          <CardMedia
            component="img"
            height="250"
            image={selectedProject.image}
            alt={selectedProject.title}
            sx={{ 
              objectFit: 'cover',
              borderRadius: 1,
              mb: 3
            }}
          />
          
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
            {selectedProject.description}
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2, color: '#002e5b' }}>
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
            sx={{ 
              backgroundColor: '#002e5b',
              '&:hover': { backgroundColor: '#00498a' }
            }}
          >
            Live Demo
          </Button>
          <Button 
            startIcon={<Code />}
            variant="outlined"
            sx={{ 
              borderColor: '#002e5b',
              color: '#002e5b'
            }}
          >
            Source Code
          </Button>
        </DialogActions>
      </>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          Coditium Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Explore our latest projects and innovative solutions across various industries. 
        </Typography>
      </Box>

      {/* PROPER GRID LAYOUT - 3 columns */}
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)' 
          },
          gap: 4,
          // Remove default Material-UI grid spacing
          width: '100%',
          margin: 0
        }}
      >
        {projects.map((project) => (
          <Box 
            key={project.id}
            sx={{ 
              width: '100%',
              // Ensure proper grid item behavior
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ 
                  objectFit: 'cover',
                  borderBottom: '2px solid',
                  borderColor: 'divider'
                }}
                onError={(e) => {
                  e.target.src = '/portfolio/card01.png';
                }}
              />
              
              {/* Project Content */}
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip 
                  label={project.category} 
                  size="small" 
                  sx={{ 
                    mb: 2, 
                    backgroundColor: '#002e5b', 
                    color: 'white',
                    fontSize: '0.75rem'
                  }} 
                />
                
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#002e5b',
                    minHeight: '64px'
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.6,
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {project.description}
                </Typography>
                
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    mt: 'auto',
                    borderColor: '#002e5b',
                    color: '#002e5b',
                    '&:hover': {
                      backgroundColor: '#002e5b',
                      color: 'white'
                    }
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Grid>

      {/* Project Details Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth={selectedProject && selectedProject.id === 1 ? 'lg' : 'md'} 
        fullWidth
        fullScreen={isMobile}
      >
        {renderProjectDialogContent()}
      </Dialog>

      {/* Demo Request Dialog (same as SliderBar) */}
      <Dialog
        open={openDemoDialog}
        onClose={handleCloseDemoDialog}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
        sx={{
          '& .MuiDialog-container': {
            alignItems: { xs: 'flex-end', sm: 'center' },
            justifyContent: { xs: 'flex-end', sm: 'center' }
          }
        }}
        PaperProps={{
          sx: {
            maxWidth: { xs: '100%', sm: '600px' },
            width: { xs: '100%', sm: '600px' },
            maxHeight: { xs: '100vh', sm: '90vh', md: '85vh' },
            height: { xs: '100vh', sm: 'fit-content', md: 'fit-content' },
            borderRadius: { xs: '12px 12px 0 0', sm: '12px' },
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            margin: { xs: 0, sm: 'auto' },
            position: { xs: 'fixed', sm: 'relative' }
          }
        }}
      >
        <DialogTitle sx={{ 
          m: 0, 
          p: { xs: 1.5, sm: 2, md: 3 },
          backgroundColor: '#002e5b', 
          color: 'white',
          flexShrink: 0,
          pb: { xs: 1, sm: 1.5 }
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 0 }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarToday sx={{ mr: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
              <Typography variant="h5" sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}>
                Request a Demo
              </Typography>
            </Box>
            <IconButton 
              onClick={handleCloseDemoDialog} 
              sx={{ 
                color: 'white',
                alignSelf: { xs: 'flex-end', sm: 'center' },
                mt: { xs: -6, sm: 0 }
              }}
            >
              <Close fontSize={isSmallScreen ? "small" : "medium"} />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ 
            mt: { xs: 0.5, sm: 1 },
            opacity: 0.9,
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem' }
          }}>
            Fill the form below and we'll schedule a personalized demo
          </Typography>
        </DialogTitle>

        <form onSubmit={handleSubmitDemo}>
          <DialogContent sx={{ 
            p: { xs: 1.5, sm: 2, md: 3 },
            overflowY: 'auto',
            overflowX: 'hidden',
            flex: '1 1 auto',
            minHeight: 0,
            maxHeight: { 
              xs: 'calc(100vh - 200px)',
              sm: 'calc(90vh - 180px)',
              md: 'calc(85vh - 200px)'
            },
            '& .MuiTextField-root': {
              width: '100%',
              mb: { xs: 1.5, sm: 2 }
            }
          }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '100%',
                p: { xs: 0.5, sm: 1 }
              }}
            >
              {/* FULL NAME */}
              <Grid item xs={12}>
                <Box sx={{ mb: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <TextField
                    fullWidth
                    required
                    name="name"
                    label="Full Name"
                    value={demoForm.name}
                    onChange={handleDemoFormChange}
                    InputProps={{
                      startAdornment: (
                        <Person sx={{ mr: 1.5, color: '#002e5b' }} />
                      )
                    }}
                    sx={textFieldStyle}
                  />
                </Box>
              </Grid>

              {/* EMAIL */}
              <Grid item xs={12}>
                <Box sx={{ mb: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    name="email"
                    label="Email Address"
                    value={demoForm.email}
                    onChange={handleDemoFormChange}
                    InputProps={{
                      startAdornment: (
                        <Email sx={{ mr: 1.5, color: '#002e5b' }} />
                      )
                    }}
                    sx={textFieldStyle}
                  />
                </Box>
              </Grid>

              {/* PHONE */}
              <Grid item xs={12}>
                <Box sx={{ mb: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <TextField
                    fullWidth
                    required
                    name="phone"
                    label="Phone Number"
                    value={demoForm.phone}
                    onChange={handleDemoFormChange}
                    InputProps={{
                      startAdornment: (
                        <Phone sx={{ mr: 1.5, color: '#002e5b' }} />
                      )
                    }}
                    sx={textFieldStyle}
                  />
                </Box>
              </Grid>

              {/* COMPANY */}
              <Grid item xs={12}>
                <Box sx={{ mb: { xs: 1.5, sm: 2, md: 2.5 } }}>
                  <TextField
                    fullWidth
                    name="company"
                    label="Company Name"
                    value={demoForm.company}
                    onChange={handleDemoFormChange}
                    InputProps={{
                      startAdornment: (
                        <Business sx={{ mr: 1.5, color: '#002e5b' }} />
                      )
                    }}
                    sx={textFieldStyle}
                  />
                </Box>
              </Grid>

              {/* REQUIREMENTS */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="requirements"
                  label="Specific Requirements / Questions"
                  value={demoForm.requirements}
                  onChange={handleDemoFormChange}
                  InputProps={{
                    startAdornment: (
                      <Description sx={{ mr: 1.5, color: '#002e5b' }} />
                    )
                  }}
                  placeholder="Tell us about your property portfolio, specific challenges, or any features you're particularly interested in..."
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      width: '100%',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      alignItems: 'flex-start'
                    },
                    '& textarea': {
                      width: '100%'
                    }
                  }}
                />
              </Grid>
            </Box>
          </DialogContent>

          <DialogActions sx={{ 
            p: { xs: 1.5, sm: 2, md: 3 },
            pt: { xs: 1, sm: 1.5, md: 2 },
            pb: { xs: 1.5, sm: 2 },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 2 },
            flexShrink: 0,
            borderTop: { xs: '1px solid rgba(0, 0, 0, 0.1)', sm: 'none' }
          }}>
            <Button
              onClick={handleCloseDemoDialog}
              sx={{
                color: '#002e5b',
                fontWeight: 'bold',
                border: '1px solid #002e5b',
                width: { xs: '100%', sm: 'auto' },
                py: { xs: 0.75, sm: 0.875 },
                px: { xs: 3, sm: 4 },
                borderRadius: '6px',
                '&:hover': {
                  backgroundColor: 'rgba(0, 46, 91, 0.05)'
                }
              }}
              size={isSmallScreen ? "medium" : "medium"}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#002e5b',
                color: 'white',
                fontWeight: 'bold',
                width: { xs: '100%', sm: 'auto' },
                py: { xs: 0.75, sm: 0.875 },
                px: { xs: 3, sm: 4 },
                borderRadius: '6px',
                '&:hover': {
                  backgroundColor: '#00498a',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 46, 91, 0.3)'
                }
              }}
              size={isSmallScreen ? "medium" : "medium"}
            >
              Submit Request
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default PortfolioPage;