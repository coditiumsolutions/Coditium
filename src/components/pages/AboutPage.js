import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const AboutPage = () => {
  const aiOfferings = [
    {
      title: "AI Assistant",
      description: "Task automation and intelligent decision support to streamline business operations and enhance productivity.",
      image: "/AI/card01.png"
    },
    {
      title: "Chatbot Development",
      description: "Custom AI chatbots for customer engagement, instant support, and automated user interactions across platforms.",
      image: "/AI/card02.png"
    },
    {
      title: "Voice Chatbot",
      description: "Voice-enabled AI assistants with speech recognition and synthesis for natural, hands-free interactions.",
      image: "/AI/card03.png"
    },
    {
      title: "AI Automation",
      description: "Intelligent workflow automation solutions that optimize processes and reduce manual effort for enterprise efficiency.",
      image: "/AI/card04.png"
    },
    {
      title: "DocuSource",
      description: "AI-powered content generation and writing assistance tools designed for authors and content creators. Intelligent document processing, summarization, and research assistance for professionals and researchers.",
      image: "/AI/card05.png"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '80vh' }}>
      {/* Page Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
          AI Services & Solutions
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Harnessing the power of artificial intelligence to deliver innovative, enterprise-ready solutions that transform how businesses operate and interact with their customers.
        </Typography>
      </Box>

      {/* AI Offerings Table - 2 Columns, Multiple Rows */}
      <Table sx={{ '& .MuiTableCell-root': { border: 'none', padding: 2 } }}>
        <TableBody>
          {aiOfferings.map((item, index) => (
            <TableRow key={index}>
              {/* First Column - Title and Description */}
              <TableCell width="50%">
                <Paper 
                  elevation={2}
                  sx={{ 
                    p: 4,
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#002e5b' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Paper>
              </TableCell>

              {/* Second Column - Image */}
              <TableCell width="50%">
                <Paper 
                  elevation={2}
                  sx={{ 
                    borderRadius: 2,
                    overflow: 'hidden',
                    p: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '180px',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </Paper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AboutPage;