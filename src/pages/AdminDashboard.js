import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Alert,
  Chip,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
  Stack,
  Divider,
  CircularProgress,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Logout, 
  Add, 
  Edit, 
  Delete, 
  Email, 
  Phone, 
  Business,
  Person,
  Description,
  Dashboard,
  People,
  RequestQuote,
  CheckCircle,
  Pending,
  Cancel,
  Refresh,
  Menu,
  MenuOpen
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [demoRequests, setDemoRequests] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openUserDialog, setOpenUserDialog] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({ username: '', password: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeSection, setActiveSection] = useState('demo-requests'); // 'demo-requests' or 'users'
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const adminUser = localStorage.getItem('adminUser');
    if (!adminUser) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [demoRes, usersRes] = await Promise.all([
        fetch('http://localhost:5000/api/admin/demo-requests'),
        fetch('http://localhost:5000/api/admin/users')
      ]);

      const demoData = await demoRes.json();
      const usersData = await usersRes.json();

      if (demoData.success) setDemoRequests(demoData.data);
      if (usersData.success) setAdminUsers(usersData.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data. Please check if server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    navigate('/'); // Redirect to home page
  };

  const handleOpenUserDialog = (user = null) => {
    if (user) {
      setEditingUser(user);
      setUserForm({ username: user.username, password: '', email: user.email || '' });
    } else {
      setEditingUser(null);
      setUserForm({ username: '', password: '', email: '' });
    }
    setOpenUserDialog(true);
    setError('');
    setSuccess('');
  };

  const handleCloseUserDialog = () => {
    setOpenUserDialog(false);
    setEditingUser(null);
    setUserForm({ username: '', password: '', email: '' });
    setError('');
    setSuccess('');
  };

  const handleSaveUser = async () => {
    if (!userForm.username || (!editingUser && !userForm.password)) {
      setError('Please fill all required fields');
      return;
    }

    if (!editingUser && userForm.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const url = editingUser 
        ? `http://localhost:5000/api/admin/users/${editingUser.id}`
        : 'http://localhost:5000/api/admin/users';
      
      const method = editingUser ? 'PUT' : 'POST';
      const body = editingUser 
        ? { password: userForm.password }
        : { username: userForm.username, password: userForm.password, email: userForm.email };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(editingUser ? 'Password updated successfully!' : 'User created successfully!');
        setTimeout(() => {
          handleCloseUserDialog();
          fetchData();
        }, 1000);
      } else {
        setError(data.error || 'Failed to save user');
      }
    } catch (err) {
      setError('Failed to save user. Please try again.');
      console.error('Error saving user:', err);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      if (data.success) {
        setSuccess('User deleted successfully!');
        fetchData();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to delete user');
      }
    } catch (err) {
      setError('Failed to delete user');
      console.error('Error deleting user:', err);
    }
  };

  const handleStatusChange = async (requestId, newStatus) => {
    try {
      setError('');
      const response = await fetch(`http://localhost:5000/api/admin/demo-requests/${requestId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned invalid response. Please check backend server.');
      }

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update status');
      }

      if (data.success) {
        setSuccess('Status updated successfully!');
        // Update local state immediately for better UX
        setDemoRequests(prevRequests => 
          prevRequests.map(req => 
            req.id === requestId ? { ...req, status: newStatus } : req
          )
        );
        setTimeout(() => {
          setSuccess('');
          fetchData(); // Refresh data from server
        }, 1500);
      } else {
        setError(data.error || 'Failed to update status');
      }
    } catch (err) {
      setError(err.message || 'Failed to update status. Please try again.');
      console.error('Error updating status:', err);
      // Revert the status change in UI if update failed
      fetchData();
    }
  };

  const handleDeleteRequest = async (requestId) => {
    if (!window.confirm('Are you sure you want to delete this demo request? This action cannot be undone.')) return;

    try {
      setError('');
      const response = await fetch(`http://localhost:5000/api/admin/demo-requests/${requestId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned invalid response. Please check backend server.');
      }

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete demo request');
      }

      if (data.success) {
        setSuccess('Demo request deleted successfully!');
        // Remove from local state immediately
        setDemoRequests(prevRequests => prevRequests.filter(req => req.id !== requestId));
        setTimeout(() => {
          setSuccess('');
          fetchData(); // Refresh data from server
        }, 1500);
      } else {
        setError(data.error || 'Failed to delete demo request');
      }
    } catch (err) {
      setError(err.message || 'Failed to delete demo request. Please try again.');
      console.error('Error deleting demo request:', err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'completed':
      case 'approved':
        return 'success';
      case 'pending':
        return 'warning';
      case 'rejected':
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch(status?.toLowerCase()) {
      case 'completed':
      case 'approved':
        return <CheckCircle fontSize="small" />;
      case 'pending':
        return <Pending fontSize="small" />;
      case 'rejected':
      case 'cancelled':
        return <Cancel fontSize="small" />;
      default:
        return <Pending fontSize="small" />;
    }
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        bgcolor: '#f5f7fa'
      }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} sx={{ color: '#002e5b', mb: 2 }} />
          <Typography variant="h6" color="text.secondary">Loading Dashboard...</Typography>
        </Box>
      </Box>
    );
  }

  const pendingRequests = demoRequests.filter(r => !r.status || r.status.toLowerCase() === 'pending').length;
  const completedRequests = demoRequests.filter(r => r.status?.toLowerCase() === 'completed' || r.status?.toLowerCase() === 'approved').length;

  // Sidebar base width; collapsible for more main-content space
  const drawerWidth = 220;
  const collapsedDrawerWidth = 64;
  const effectiveDrawerWidth = sidebarOpen ? drawerWidth : collapsedDrawerWidth;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      text: 'Demo Requests',
      icon: <RequestQuote />,
      section: 'demo-requests'
    },
    {
      text: 'Users',
      icon: <People />,
      section: 'users'
    }
  ];

  const drawer = (
    <Box sx={{ height: '100%', bgcolor: '#002e5b', display: 'flex', flexDirection: 'column' }}>
      <Box 
        sx={{ 
          px: sidebarOpen ? 3 : 2, 
          py: 2.5, 
          borderBottom: '1px solid rgba(255,255,255,0.1)', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: sidebarOpen ? 'space-between' : 'center',
          columnGap: 1
        }}
      >
        {sidebarOpen && (
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            Admin Panel
          </Typography>
        )}
        {!isMobile && (
          <IconButton
            size="small"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            sx={{ 
              color: 'white',
              ml: sidebarOpen ? 1 : 0,
              transition: 'transform 0.3s ease'
            }}
          >
            {sidebarOpen ? <MenuOpen /> : <Menu />}
          </IconButton>
        )}
      </Box>
      <List sx={{ pt: 2, flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.section} disablePadding>
            <ListItemButton
              onClick={() => {
                setActiveSection(item.section);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 2,
                px: sidebarOpen ? 2 : 1.5,
                justifyContent: sidebarOpen ? 'flex-start' : 'center',
                bgcolor: activeSection === item.section ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: sidebarOpen ? 40 : 'auto' }}>
                {item.icon}
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ noWrap: true }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Button
          fullWidth={sidebarOpen}
          variant="outlined"
          startIcon={<Logout />}
          onClick={handleLogout}
          sx={{ 
            borderColor: 'rgba(255,255,255,0.5)', 
            color: 'white',
            justifyContent: 'center',
            minWidth: 0,
            px: sidebarOpen ? 2 : 1,
            '& .MuiButton-startIcon': {
              mr: sidebarOpen ? 1 : 0
            },
            '&:hover': {
              borderColor: 'white',
              bgcolor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          {sidebarOpen && 'Logout'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f7fa' }}>
      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: effectiveDrawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: effectiveDrawerWidth, 
              position: 'relative', 
              height: '100vh',
              transition: 'width 0.3s ease'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${effectiveDrawerWidth}px)` },
          minHeight: '100vh',
          transition: 'width 0.3s ease'
        }}
      >
        {/* Header */}
        <Box sx={{ 
          bgcolor: 'white', 
          borderRadius: 2,
          p: 3,
          mb: 3,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b', mb: 0.5 }}>
              {activeSection === 'demo-requests' ? 'Demo Requests' : 'Admin Users'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {activeSection === 'demo-requests' 
                ? 'Manage and track all demo requests' 
                : 'Manage admin user accounts'}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={fetchData}
              sx={{ 
                borderColor: '#002e5b', 
                color: '#002e5b',
                '&:hover': {
                  borderColor: '#0170b9',
                  bgcolor: 'rgba(1, 112, 185, 0.05)'
                }
              }}
            >
              Refresh
            </Button>
            <IconButton
              onClick={() => {
                if (isMobile) {
                  handleDrawerToggle();
                } else {
                  setSidebarOpen(!sidebarOpen);
                }
              }}
              sx={{ color: '#002e5b' }}
            >
              {isMobile
                ? <Dashboard />
                : (sidebarOpen ? <MenuOpen /> : <Menu />)}
            </IconButton>
          </Stack>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess('')}>
            {success}
          </Alert>
        )}

        {/* Stats Cards - Only show for demo requests */}
        {activeSection === 'demo-requests' && (
          <Grid container spacing={3} sx={{ mb: 4, display: 'flex', flexWrap: 'wrap' }}>
          <Grid item xs={12} sm={6} md={3} sx={{ flex: '1 1 0', minWidth: { xs: '100%', sm: '200px', md: 'auto' }, maxWidth: { md: 'none' } }}>
            <Card sx={{ 
              bgcolor: 'white',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Total Requests
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
                      {demoRequests.length}
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    bgcolor: '#002e5b', 
                    borderRadius: '50%', 
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <RequestQuote sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ flex: '1 1 0', minWidth: { xs: '100%', sm: '200px', md: 'auto' }, maxWidth: { md: 'none' } }}>
            <Card sx={{ 
              bgcolor: 'white',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Pending
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                      {pendingRequests}
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    bgcolor: '#ff9800', 
                    borderRadius: '50%', 
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Pending sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ flex: '1 1 0', minWidth: { xs: '100%', sm: '200px', md: 'auto' }, maxWidth: { md: 'none' } }}>
            <Card sx={{ 
              bgcolor: 'white',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Completed
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                      {completedRequests}
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    bgcolor: '#4caf50', 
                    borderRadius: '50%', 
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircle sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ flex: '1 1 0', minWidth: { xs: '100%', sm: '200px', md: 'auto' }, maxWidth: { md: 'none' } }}>
            <Card sx={{ 
              bgcolor: 'white',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      Admin Users
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0170b9' }}>
                      {adminUsers.length}
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    bgcolor: '#0170b9', 
                    borderRadius: '50%', 
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <People sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        )}

        {/* Demo Requests Section */}
        {activeSection === 'demo-requests' && (
          <Paper sx={{ 
          mb: 4, 
          borderRadius: 3,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}>
          <Box sx={{ 
            p: 3, 
            bgcolor: '#002e5b',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
              <RequestQuote /> Demo Requests
            </Typography>
            <Chip 
              label={`${demoRequests.length} Total`} 
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
          </Box>
          <TableContainer>
            <Table
              size="small"
              sx={{
                tableLayout: 'fixed',
                width: '100%'
              }}
            >
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f7fa' }}>
                  <TableCell sx={{ width: '11%' }}><strong>Name</strong></TableCell>
                  <TableCell sx={{ width: '18%' }}><strong>Email</strong></TableCell>
                  <TableCell sx={{ width: '9%' }}><strong>Phone</strong></TableCell>
                  <TableCell sx={{ width: '11%' }}><strong>Company</strong></TableCell>
                  <TableCell sx={{ width: '18%' }}><strong>Requirements</strong></TableCell>
                  <TableCell sx={{ width: '15%' }}><strong>Status</strong></TableCell>
                  <TableCell sx={{ width: '11%' }}><strong>Date</strong></TableCell>
                  <TableCell align="right" sx={{ width: '7%' }}><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoRequests.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                      <Typography color="textSecondary">No demo requests yet</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  demoRequests.map((request) => (
                    <TableRow 
                      key={request.id} 
                      hover
                      sx={{ 
                        '&:hover': { 
                          bgcolor: '#f5f7fa' 
                        } 
                      }}
                    >
                      <TableCell sx={{ 
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        py: 1.5
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap' }}>
                          <Person fontSize="small" sx={{ color: '#002e5b', mt: 0.5, flexShrink: 0 }} />
                          <Typography 
                            fontWeight={500}
                            sx={{ 
                              wordBreak: 'break-word',
                              lineHeight: 1.4
                            }}
                          >
                            {request.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ 
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        py: 1.5
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap' }}>
                          <Email fontSize="small" sx={{ color: '#0170b9', mt: 0.5, flexShrink: 0 }} />
                          <Typography 
                            sx={{ 
                              wordBreak: 'break-word',
                              lineHeight: 1.4
                            }}
                          >
                            {request.email}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ 
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        py: 1.5
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap' }}>
                          <Phone fontSize="small" sx={{ color: '#4caf50', mt: 0.5, flexShrink: 0 }} />
                          <Typography 
                            color={request.phone ? 'text.primary' : 'text.secondary'}
                            sx={{ 
                              wordBreak: 'break-word',
                              lineHeight: 1.4
                            }}
                          >
                            {request.phone || 'N/A'}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ 
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        py: 1.5
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexWrap: 'wrap' }}>
                          <Business fontSize="small" sx={{ color: '#ff9800', mt: 0.5, flexShrink: 0 }} />
                          <Typography 
                            color={request.company ? 'text.primary' : 'text.secondary'}
                            sx={{ 
                              wordBreak: 'break-word',
                              lineHeight: 1.4
                            }}
                          >
                            {request.company || 'N/A'}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ 
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        py: 1.5
                      }}>
                        <Tooltip title={request.requirements || 'N/A'}>
                          <Typography 
                            sx={{ 
                              wordBreak: 'break-word',
                              lineHeight: 1.4,
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {request.requirements || 'N/A'}
                          </Typography>
                        </Tooltip>
                      </TableCell>
                      <TableCell sx={{ 
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        py: 1.5,
                        minWidth: 140
                      }}>
                        <FormControl size="small" sx={{ minWidth: 120, maxWidth: '100%', width: '100%' }}>
                          <Select
                            value={request.status || 'Pending'}
                            onChange={(e) => handleStatusChange(request.id, e.target.value)}
                            sx={{
                              height: 32,
                              width: '100%',
                              fontSize: '0.875rem',
                              '& .MuiSelect-select': {
                                py: 0.5,
                                display: 'flex',
                                alignItems: 'center'
                              }
                            }}
                          >
                            <MenuItem value="Pending">
                              <Chip
                                icon={<Pending />}
                                label="Pending"
                                color="warning"
                                size="small"
                                sx={{ fontWeight: 500, fontSize: '0.75rem' }}
                              />
                            </MenuItem>
                            <MenuItem value="Completed">
                              <Chip
                                icon={<CheckCircle />}
                                label="Completed"
                                color="success"
                                size="small"
                                sx={{ fontWeight: 500, fontSize: '0.75rem' }}
                              />
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell sx={{ 
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        py: 1.5
                      }}>
                        <Typography 
                          variant="body2" 
                          color="textSecondary"
                          sx={{ 
                            wordBreak: 'break-word',
                            lineHeight: 1.4
                          }}
                        >
                          {formatDate(request.created_at)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Delete Request">
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteRequest(request.id)}
                            sx={{ 
                              color: '#f44336',
                              '&:hover': {
                                bgcolor: 'rgba(244, 67, 54, 0.1)'
                              }
                            }}
                          >
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        )}

        {/* Admin Users Management Section */}
        {activeSection === 'users' && (
          <Paper sx={{ 
          borderRadius: 3,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}>
          <Box sx={{ 
            p: 3, 
            bgcolor: '#002e5b',
            color: 'white',
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
              <People /> Admin Users Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => handleOpenUserDialog()}
              sx={{ 
                bgcolor: 'white',
                color: '#002e5b',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                },
                transition: 'all 0.2s'
              }}
            >
              Add User
            </Button>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f7fa' }}>
                  <TableCell><strong>Username</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Created At</strong></TableCell>
                  <TableCell align="right"><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                      <Typography color="textSecondary">No admin users found</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  adminUsers.map((user) => (
                    <TableRow 
                      key={user.id} 
                      hover
                      sx={{ 
                        '&:hover': { 
                          bgcolor: '#f5f7fa' 
                        } 
                      }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ width: 32, height: 32, bgcolor: '#002e5b', fontSize: '0.875rem' }}>
                            {user.username.charAt(0).toUpperCase()}
                          </Avatar>
                          <Typography fontWeight={500}>{user.username}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{user.email || <Typography color="textSecondary">N/A</Typography>}</TableCell>
                      <TableCell>
                        <Typography variant="body2" color="textSecondary">
                          {formatDate(user.created_at)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Change Password">
                          <IconButton
                            size="small"
                            onClick={() => handleOpenUserDialog(user)}
                            sx={{ 
                              color: '#0170b9',
                              '&:hover': {
                                bgcolor: 'rgba(1, 112, 185, 0.1)'
                              }
                            }}
                          >
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete User">
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteUser(user.id)}
                            sx={{ 
                              color: '#f44336',
                              ml: 1,
                              '&:hover': {
                                bgcolor: 'rgba(244, 67, 54, 0.1)'
                              }
                            }}
                          >
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        )}

        {/* User Dialog */}
        <Dialog 
          open={openUserDialog} 
          onClose={handleCloseUserDialog} 
          maxWidth="sm" 
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
            }
          }}
        >
          <DialogTitle sx={{ 
            bgcolor: '#002e5b',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>
            {editingUser ? 'Update User Password' : 'Add New Admin User'}
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            <TextField
              fullWidth
              label="Username"
              value={userForm.username}
              onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
              required
              disabled={!!editingUser}
              sx={{ mb: 2 }}
              helperText={editingUser ? 'Username cannot be changed' : ''}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={userForm.email}
              onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
              disabled={!!editingUser}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={editingUser ? 'New Password' : 'Password'}
              type="password"
              value={userForm.password}
              onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
              required
              sx={{ mb: 2 }}
              helperText={editingUser ? 'Enter new password to update' : 'Minimum 6 characters'}
            />
          </DialogContent>
          <DialogActions sx={{ p: 2, pt: 1 }}>
            <Button onClick={handleCloseUserDialog} sx={{ color: '#666' }}>
              Cancel
            </Button>
            <Button 
              onClick={handleSaveUser} 
              variant="contained" 
              sx={{ 
                bgcolor: '#002e5b',
                '&:hover': {
                  bgcolor: '#0170b9'
                }
              }}
            >
              {editingUser ? 'Update Password' : 'Create User'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
