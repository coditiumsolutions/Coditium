import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  DesignServices, 
  Code, 
  ShoppingCart, 
  PhoneAndroid,
  ArrowForward,
  Group,
  Speed,
  Security,
  SupportAgent
} from '@mui/icons-material';

const SERVICES = [
  { 
    title: 'Web Design', 
    path: '/services/web-design', 
    description: 'Stunning, responsive websites with modern UI/UX design that captivate your audience and deliver exceptional user experiences.',
    icon: <DesignServices style={{ fontSize: 60, color: '#002e5b' }} />,
    features: ['Responsive Design', 'SEO Optimization', 'User Experience', 'Performance']
  },
  { 
    title: 'Software Development', 
    path: '/services/software-development', 
    description: 'Custom software solutions tailored for your business needs, from enterprise applications to innovative SaaS products.',
    icon: <Code style={{ fontSize: 60, color: '#002e5b' }} />,
    features: ['Custom Solutions', 'Scalable Architecture', 'Cloud Integration', 'Agile Development']
  },
  { 
    title: 'E-Commerce Development', 
    path: '/services/e-commerce-development', 
    description: 'Full-featured online stores with secure payment integration and inventory management to drive sales and growth.',
    icon: <ShoppingCart style={{ fontSize: 60, color: '#002e5b' }} />,
    features: ['Payment Integration', 'Inventory Management', 'Secure Transactions', 'Analytics']
  },
  { 
    title: 'Mobile App Development', 
    path: '/services/mobile-app-development', 
    description: 'Native and cross-platform mobile applications for iOS and Android that engage users and grow your business.',
    icon: <PhoneAndroid style={{ fontSize: 60, color: '#002e5b' }} />,
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'App Store Ready']
  }
];

const ServicesMainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      paddingTop: '4rem',
      paddingBottom: '4rem'
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem'
        }}>
          <Typography variant="h2" style={{ 
            fontWeight: '800', 
            marginBottom: '1rem', 
            color: '#002e5b',
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #002e5b 0%, #4fc3f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2
          }}>
            Our Professional Services
          </Typography>
          <Typography variant="h5" style={{ 
            color: '#64748b', 
            maxWidth: '800px', 
            margin: '0 auto', 
            lineHeight: 1.6,
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            We deliver tailored solutions across web, software, e-commerce, and mobile applications. 
            Transform your ideas into reality with our expert services.
          </Typography>
          
          {/* Stats Section */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '4rem',
            marginTop: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h3" style={{ 
                fontWeight: '800', 
                color: '#002e5b',
                fontSize: '2.5rem'
              }}>
                100+
              </Typography>
              <Typography variant="body1" style={{ color: '#64748b', fontWeight: '500' }}>
                Projects Completed
              </Typography>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h3" style={{ 
                fontWeight: '800', 
                color: '#002e5b',
                fontSize: '2.5rem'
              }}>
                50+
              </Typography>
              <Typography variant="body1" style={{ color: '#64748b', fontWeight: '500' }}>
                Happy Clients
              </Typography>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h3" style={{ 
                fontWeight: '800', 
                color: '#002e5b',
                fontSize: '2.5rem'
              }}>
                5+
              </Typography>
              <Typography variant="body1" style={{ color: '#64748b', fontWeight: '500' }}>
                Years Experience
              </Typography>
            </div>
          </div>
        </div>

        {/* Services Grid - Always 4 in one row */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {SERVICES.map((service, index) => (
            <Link
              key={service.path}
              to={service.path}
              style={{
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0, 46, 91, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                minHeight: '400px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 46, 91, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 46, 91, 0.08)';
              }}
            >
              {/* Hover Effect Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '0%',
                height: '4px',
                backgroundColor: '#4fc3f7',
                transition: 'width 0.4s ease',
                zIndex: 2
              }} onMouseOver={(e) => {
                e.currentTarget.style.width = '100%';
              }} onMouseOut={(e) => {
                e.currentTarget.style.width = '0%';
              }} />
              
              <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Icon Container */}
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90px',
                  height: '90px',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(0, 46, 91, 0.05)',
                  marginBottom: '1.5rem',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  e.currentTarget.style.backgroundColor = 'rgba(79, 195, 247, 0.15)';
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 46, 91, 0.05)';
                }}>
                  {React.cloneElement(service.icon, { 
                    style: { fontSize: '60px' } 
                  })}
                </div>
                
                {/* Service Title */}
                <Typography variant="h5" style={{ 
                  fontWeight: '700', 
                  marginBottom: '0.5rem', 
                  color: '#002e5b',
                  fontSize: '1.5rem',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </Typography>
                
                {/* Description */}
                <Typography variant="body1" style={{ 
                  color: '#64748b', 
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  flexGrow: 1
                }}>
                  {service.description}
                </Typography>
                
                {/* Features Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(79, 195, 247, 0.1)',
                      color: '#002e5b',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  color: '#002e5b',
                  fontWeight: '600',
                  fontSize: '0.9375rem',
                  transition: 'all 0.3s ease',
                  marginTop: 'auto'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.color = '#4fc3f7';
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.color = '#002e5b';
                }}>
                  Learn More
                  <ArrowForward style={{ 
                    fontSize: '18px', 
                    marginLeft: '0.25rem',
                    transition: 'transform 0.3s ease'
                  }} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section - Always 4 in one row */}
        <div style={{ 
          marginBottom: '5rem',
          padding: '3rem',
          borderRadius: '20px',
          backgroundColor: '#002e5b',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            background: 'radial-gradient(circle at top right, rgba(79, 195, 247, 0.2) 0%, transparent 70%)',
            zIndex: 0
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" style={{ 
              fontWeight: '800', 
              marginBottom: '3rem',
              fontSize: '2.25rem',
              textAlign: 'center'
            }}>
              Why Partner With Us?
            </Typography>
            
            {/* Always 4 in one row */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '1rem'
                }}>
                  <Group style={{ fontSize: '30px', color: '#4fc3f7' }} />
                </div>
                <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Expert Team
                </Typography>
                <Typography variant="body2" style={{ opacity: 0.9 }}>
                  Skilled professionals with years of industry experience
                </Typography>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '1rem'
                }}>
                  <Speed style={{ fontSize: '30px', color: '#4fc3f7' }} />
                </div>
                <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Fast Delivery
                </Typography>
                <Typography variant="body2" style={{ opacity: 0.9 }}>
                  Agile methodology for timely project completion
                </Typography>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '1rem'
                }}>
                  <Security style={{ fontSize: '30px', color: '#4fc3f7' }} />
                </div>
                <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Quality Assurance
                </Typography>
                <Typography variant="body2" style={{ opacity: 0.9 }}>
                  Rigorous testing for flawless performance
                </Typography>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '1rem'
                }}>
                  <SupportAgent style={{ fontSize: '30px', color: '#4fc3f7' }} />
                </div>
                <Typography variant="h6" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  24/7 Support
                </Typography>
                <Typography variant="body2" style={{ opacity: 0.9 }}>
                  Round-the-clock customer support
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          textAlign: 'center'
        }}>
          <Typography variant="h3" style={{ 
            fontWeight: '800', 
            marginBottom: '1rem',
            color: '#002e5b',
            fontSize: '2.25rem'
          }}>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="h6" style={{ 
            color: '#64748b', 
            maxWidth: '600px', 
            margin: '0 auto', 
            marginBottom: '2rem',
            lineHeight: 1.6,
            fontSize: '1.25rem'
          }}>
            Let's discuss how we can bring your vision to life with our expert services
          </Typography>
        </div>
      </Container>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1200px) {
          .services-grid,
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 600px) {
          .services-grid,
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
          
          .stats-container {
            flex-direction: column;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesMainPage;