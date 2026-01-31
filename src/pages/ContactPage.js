// import React from 'react';
// import { Container, Typography, Grid, TextField, Button, Box, Paper } from '@mui/material';

// const ContactPage = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 8, minHeight: '60vh' }}>
//       <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, color: '#002e5b' }}>
//         Contact Us
//       </Typography>
      
//       <Grid container spacing={6}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
//             Get in touch with us to discuss your project requirements. We're here to help you bring your ideas to life.
//           </Typography>
          
//           <Box sx={{ mb: 4 }}>
//             <Typography variant="h6" sx={{ mb: 1, color: '#002e5b' }}>
//               Contact Information
//             </Typography>
//             <Typography>Email: info@Coditium.com</Typography>
//             <Typography>Phone: +92 (333) 519-1392</Typography>
//             <Typography>Address: Bahria Town, Karachi</Typography>
//           </Box>
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <Paper elevation={2} sx={{ p: 4 }}>
//             <Typography variant="h5" sx={{ mb: 3, color: '#002e5b' }}>
//               Send us a Message
//             </Typography>
//             <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//               <TextField label="Your Name" variant="outlined" fullWidth />
//               <TextField label="Your Email" variant="outlined" fullWidth />
//               <TextField label="Subject" variant="outlined" fullWidth />
//               <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
//               <Button 
//                 variant="contained" 
//                 size="large" 
//                 sx={{ 
//                   backgroundColor: '#002e5b',
//                   '&:hover': { backgroundColor: '#00498a' }
//                 }}
//               >
//                 Send Message
//               </Button>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { 
  Send,
  Email,
  Phone,
  LocationOn,
  Person,
  Subject,
  Message,
  AccessTime,
  CheckCircle
} from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      paddingTop: '4rem',
      paddingBottom: '4rem'
    }}>
      <Container maxWidth="lg">
        {/* Modern Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(79, 195, 247, 0.1)',
            marginBottom: '1.5rem'
          }}>
            <Message style={{ fontSize: '40px', color: '#4fc3f7' }} />
          </div>
          
          <Typography variant="h2" style={{
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#002e5b',
            fontSize: '3rem',
            background: 'linear-gradient(135deg, #002e5b 0%, #4fc3f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Let's Connect
          </Typography>
          
          <Typography variant="h6" style={{
            color: '#64748b',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontSize: '1.1rem'
          }}>
            Have a project in mind? Reach out and let's create something amazing together
          </Typography>
        </div>

        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Contact Information Side */}
          <div>
            {/* Info Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 8px 32px rgba(0, 46, 91, 0.08)',
              height: '100%'
            }}>
              <Typography variant="h4" style={{
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#002e5b',
                fontSize: '1.75rem'
              }}>
                Get in Touch
              </Typography>

              {/* Contact Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(79, 195, 247, 0.1)',
                    flexShrink: 0
                  }}>
                    <Email style={{ fontSize: '24px', color: '#4fc3f7' }} />
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#002e5b' }}>
                      Email
                    </Typography>
                    <Typography variant="body1" style={{ color: '#64748b' }}>
                      info@Coditium.com
                    </Typography>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(79, 195, 247, 0.1)',
                    flexShrink: 0
                  }}>
                    <Phone style={{ fontSize: '24px', color: '#4fc3f7' }} />
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#002e5b' }}>
                      Phone
                    </Typography>
                    <Typography variant="body1" style={{ color: '#64748b' }}>
                      +92 (333) 519-1392
                    </Typography>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(79, 195, 247, 0.1)',
                    flexShrink: 0
                  }}>
                    <LocationOn style={{ fontSize: '24px', color: '#4fc3f7' }} />
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#002e5b' }}>
                      Address
                    </Typography>
                    <Typography variant="body1" style={{ color: '#64748b' }}>
                      Bahria Town, Karachi, Pakistan
                    </Typography>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(79, 195, 247, 0.1)',
                    flexShrink: 0
                  }}>
                    <AccessTime style={{ fontSize: '24px', color: '#4fc3f7' }} />
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#002e5b' }}>
                      Business Hours
                    </Typography>
                    <Typography variant="body1" style={{ color: '#64748b' }}>
                      Mon-Fri: 9AM-6PM
                    </Typography>
                    <Typography variant="body1" style={{ color: '#64748b' }}>
                      Sat: 10AM-4PM
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
                <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '1rem', color: '#002e5b' }}>
                  Why Choose Us?
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    '24/7 Customer Support',
                    'Quick Response Time',
                    'Expert Consultation',
                    'Project Follow-up'
                  ].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle style={{ fontSize: '18px', color: '#4fc3f7' }} />
                      <Typography variant="body2" style={{ color: '#64748b' }}>
                        {item}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 8px 32px rgba(0, 46, 91, 0.08)'
            }}>
              <Typography variant="h4" style={{
                fontWeight: '700',
                marginBottom: '0.5rem',
                color: '#002e5b',
                fontSize: '1.75rem'
              }}>
                Send a Message
              </Typography>
              <Typography variant="body1" style={{ color: '#64748b', marginBottom: '2rem' }}>
                Fill out the form below and we'll respond within 24 hours
              </Typography>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <Typography variant="subtitle2" style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#002e5b' }}>
                      Your Name *
                    </Typography>
                    <div style={{ position: 'relative' }}>
                      <Person style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#94a3b8',
                        zIndex: 1
                      }} />
                      <input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 40px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          backgroundColor: '#f8fafc'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#4fc3f7';
                          e.target.style.boxShadow = '0 0 0 3px rgba(79, 195, 247, 0.1)';
                          e.target.style.backgroundColor = 'white';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                          e.target.style.boxShadow = 'none';
                          e.target.style.backgroundColor = '#f8fafc';
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <Typography variant="subtitle2" style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#002e5b' }}>
                      Your Email *
                    </Typography>
                    <div style={{ position: 'relative' }}>
                      <Email style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#94a3b8',
                        zIndex: 1
                      }} />
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 40px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          backgroundColor: '#f8fafc'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#4fc3f7';
                          e.target.style.boxShadow = '0 0 0 3px rgba(79, 195, 247, 0.1)';
                          e.target.style.backgroundColor = 'white';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                          e.target.style.boxShadow = 'none';
                          e.target.style.backgroundColor = '#f8fafc';
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Typography variant="subtitle2" style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#002e5b' }}>
                    Subject *
                  </Typography>
                  <div style={{ position: 'relative' }}>
                    <Subject style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#94a3b8',
                      zIndex: 1
                    }} />
                    <input
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 40px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#f8fafc'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4fc3f7';
                        e.target.style.boxShadow = '0 0 0 3px rgba(79, 195, 247, 0.1)';
                        e.target.style.backgroundColor = 'white';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                        e.target.style.backgroundColor = '#f8fafc';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Typography variant="subtitle2" style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#002e5b' }}>
                    Message *
                  </Typography>
                  <div style={{ position: 'relative' }}>
                    <Message style={{
                      position: 'absolute',
                      left: '12px',
                      top: '16px',
                      color: '#94a3b8',
                      zIndex: 1
                    }} />
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 40px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#f8fafc',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4fc3f7';
                        e.target.style.boxShadow = '0 0 0 3px rgba(79, 195, 247, 0.1)';
                        e.target.style.backgroundColor = 'white';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                        e.target.style.backgroundColor = '#f8fafc';
                      }}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  style={{
                    backgroundColor: '#002e5b',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '1rem',
                    padding: '14px 32px',
                    borderRadius: '10px',
                    textTransform: 'none',
                    marginTop: '1rem',
                    transition: 'all 0.3s ease',
                    alignSelf: 'flex-start'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#004080';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 46, 91, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#002e5b';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Contact Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 46, 91, 0.05)'
              }}>
                <Typography variant="h5" style={{ fontWeight: '700', color: '#002e5b' }}>
                  &lt; 24h
                </Typography>
                <Typography variant="body2" style={{ color: '#64748b' }}>
                  Response Time
                </Typography>
              </div>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 46, 91, 0.05)'
              }}>
                <Typography variant="h5" style={{ fontWeight: '700', color: '#002e5b' }}>
                  100%
                </Typography>
                <Typography variant="body2" style={{ color: '#64748b' }}>
                  Satisfaction
                </Typography>
              </div>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 46, 91, 0.05)'
              }}>
                <Typography variant="h5" style={{ fontWeight: '700', color: '#002e5b' }}>
                  50+
                </Typography>
                <Typography variant="body2" style={{ color: '#64748b' }}>
                  Happy Clients
                </Typography>
              </div>
            </div>
          </div>
        </div>

       
      </Container>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .main-grid {
            grid-template-columns: 1fr !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          
          .header-title {
            font-size: 2rem !important;
          }
        }
        
        input:focus, textarea:focus {
          outline: none;
        }
        
        ::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;