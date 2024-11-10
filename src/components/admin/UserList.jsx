import React, { useEffect } from 'react';
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useUser } from '../../hooks/useUser';
import SearchInput from '../SearchInput';
import PaginationComp from '../PaginationComp';

const UsersList = () => {
  const {
    users,
    fetchUsers,
    removeUser,
    modifyUser,
    isLoading,
    error,
    pageNumber,
    pageSize,
    totalPages,
    setSearchValue,
    setPageNumber,
    setSortOrder,
  } = useUser();

  useEffect(() => {
    fetchUsers(pageNumber, pageSize);
  }, []);

  const handleDelete = async (id) => {
    try {
      await removeUser(id);
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  const handleUpdate = (id) => {
    // Add update logic here, e.g., open a modal with user details
    console.log('Update user:', id);
  };

  return (
    <Container>
      {/* Search and Sort Row */}
      <Box sx={{ mb: 4 }}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <SearchInput />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* You can add a sort component if needed */}
          </Grid>
        </Grid>
      </Box>

      {/* Users Table */}
      <TableContainer component={Paper}>
        {isLoading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleUpdate(user.userId)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(user.userId)}
                      sx={{ ml: 1 }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      {/* Pagination */}
      <PaginationComp />
    </Container>
  );
};

export default UsersList;
