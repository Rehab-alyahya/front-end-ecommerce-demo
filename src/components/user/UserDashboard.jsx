import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import UserSidebar from './UserSidebar';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <Box display="flex">
      <UserSidebar />
      <Container>
        <Typography variant="h4" gutterBottom>
          User Dashboard
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default UserDashboard;
