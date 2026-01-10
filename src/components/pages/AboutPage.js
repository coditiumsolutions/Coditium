import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Close, Launch, Code } from '@mui/icons-material';

const AboutPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const aiOfferings = [
    {
      id: 1,
      title: "AI Assistant",
      description: "Task automation and intelligent decision support to streamline business operations and enhance productivity.",
      image: "/AI/card01.png",
      category: "AI Solutions",
      technologies: ["Machine Learning", "Natural Language Processing", "Automation", "Decision Support"],
      features: ["Task Automation", "Intelligent Support", "Business Operations", "Productivity Enhancement"]
    },
    {
      id: 2,
      title: "Chatbot Development",
      description: "Custom AI chatbots for customer engagement, instant support, and automated user interactions across platforms.",
      image: "/AI/card02.png",
      category: "AI Solutions",
      technologies: ["NLP", "GPT Technology", "Multi-platform", "Real-time Processing"],
      features: ["Customer Engagement", "Instant Support", "Automated Interactions", "Multi-platform"]
    },
    {
      id: 3,
      title: "Voice Chatbot",
      description: "Voice-enabled AI assistants with speech recognition and synthesis for natural, hands-free interactions.",
      image: "/AI/card03.png",
      category: "AI Solutions",
      technologies: ["Speech Recognition", "Text-to-Speech", "Voice Processing", "Natural Interactions"],
      features: ["Voice Recognition", "Speech Synthesis", "Hands-free", "Natural Interactions"]
    },
    {
      id: 4,
      title: "AI Automation",
      description: "Intelligent workflow automation solutions that optimize processes and reduce manual effort for enterprise efficiency.",
      image: "/AI/card04.png",
      category: "AI Solutions",
      technologies: ["Workflow Automation", "Process Optimization", "Enterprise AI", "Efficiency Tools"],
      features: ["Workflow Automation", "Process Optimization", "Manual Effort Reduction", "Enterprise Efficiency"]
    },
    {
      id: 5,
      title: "DocuSource",
      description: "AI-powered content generation and writing assistance tools designed for authors and content creators. Intelligent document processing, summarization, and research assistance for professionals and researchers.",
      image: "/AI/card05.png",
      category: "AI Solutions",
      technologies: ["Content Generation", "Document Processing", "Summarization", "Research Tools"],
      features: ["Content Generation", "Document Processing", "Summarization", "Research Assistance"]
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

  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          AI Services & Solutions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Harnessing the power of artificial intelligence to deliver innovative, enterprise-ready solutions that transform how businesses operate and interact with their customers.
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
          width: '100%',
          margin: 0
        }}
      >
        {aiOfferings.map((project) => (
          <Box 
            key={project.id}
            sx={{ 
              width: '100%',
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
                  e.target.src = '/AI/ai.png';
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
        maxWidth="md" 
        fullWidth
        fullScreen={isMobile}
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
        )}
      </Dialog>
    </Container>
  );
};

export default AboutPage;