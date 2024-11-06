import { Container, Typography, Box, Grid2 } from '@mui/material';
import React from 'react';

import Products from '../components/products/Products';
import SearchInput from '../components/SearchInput';
import PaginationComp from '../components/PaginationComp';
import SortProduct from '../components/SortProduct';

const Home = () => {
  return (
    <Container>
      {/* <Typography variant="h4" gutterBottom align="center">
        Products
      </Typography> */}

      {/* Search and Sort Row */}
      <Box sx={{ mb: 4 }}>
        <Grid2
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid2 item xs={12} md={6}>
            <SearchInput />
          </Grid2>
          <Grid2 item xs={12} md={3}>
            <SortProduct />
          </Grid2>
        </Grid2>
      </Box>

      {/* Products List */}
      <Products />

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <PaginationComp />
      </Box>
    </Container>
  );
};

export default Home;
