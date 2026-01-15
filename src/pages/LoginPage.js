import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  Alert,
  CircularProgress
} from '@mui/material';
import { Lock, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        navigate('/admin/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Connection error. Please check if server is running.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #002e5b 0%, #0170b9 100%)',
        py: { xs: 2, sm: 3 },
        px: { xs: 2, sm: 3 },
        overflow: 'auto',
        zIndex: 9999
      }}
    >
      <Container 
        maxWidth="sm" 
        sx={{ 
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '450px'
          }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 } }}>
            <Lock sx={{ fontSize: { xs: 50, sm: 60 }, color: '#002e5b', mb: { xs: 1.5, sm: 2 } }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b', mb: 1, fontSize: { xs: '1.75rem', sm: '2rem' } }}>
              Admin Login
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
              Enter your credentials to access the admin panel
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: { xs: 2, sm: 3 } }}>
              {error}
            </Alert>
          )}

          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            autoComplete="off"
            noValidate
            sx={{ '& input': { WebkitTextFillColor: 'inherit !important' } }}
          >
            <input type="text" autoComplete="off" style={{ display: 'none' }} />
            <input type="password" autoComplete="off" style={{ display: 'none' }} />
            
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{ mb: { xs: 2, sm: 3 } }}
              size="medium"
              autoComplete="off"
              name="admin-login-username"
              id="admin-login-username-field"
              inputProps={{
                autoComplete: 'off',
                'data-form-type': 'other'
              }}
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: '#002e5b' }} />,
                autoComplete: 'off'
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: { xs: 2, sm: 3 } }}
              size="medium"
              autoComplete="off"
              name="admin-login-password"
              id="admin-login-password-field"
              inputProps={{
                autoComplete: 'off',
                'data-form-type': 'other',
                'data-lpignore': 'true'
              }}
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1, color: '#002e5b' }} />,
                autoComplete: 'off'
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                backgroundColor: '#002e5b',
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                '&:hover': {
                  backgroundColor: '#0170b9'
                }
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;


