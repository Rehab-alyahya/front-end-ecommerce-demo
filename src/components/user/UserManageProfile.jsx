import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Avatar,
  Grid,
  Button,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getUserById, updateUser } from '../../services/UserService';

const UserManageProfile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user')); // Assuming userId is stored in localStorage
        if (user && user.userId) {
          const userData = await getUserById(user.userId);
          setUser(userData.data);
        }
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      if (user) {
        const updatedData = { name: user.name, address: user.address }; // Only updating name and address
        await updateUser(user.userId, updatedData);
        setUser(updatedData);
        setIsEditing(false);
      }
    } catch (err) {
      setError('Failed to update user profile');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  if (isLoading) {
    return (
      <Container>
        <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt={user?.name}
            src="/static/images/avatar/1.jpg" // Replace with user.imageUrl if available
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          {isEditing ? (
            <>
              <TextField
                label="Name"
                name="name"
                value={user?.name || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Address"
                name="address"
                value={user?.address || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleSaveClick}
              >
                Save
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h4" gutterBottom>
                {user?.name}
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Email:</strong> {user?.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Phone:</strong> {user?.phone || 'N/A'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Address:</strong> {user?.address || 'N/A'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Role:</strong> {user?.isAdmin ? 'Admin' : 'User'}
                  </Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleEditClick}
              >
                Edit Profile
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default UserManageProfile;
