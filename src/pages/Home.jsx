import { Card, CardContent, Container, Grid2, Typography } from '@mui/material';
import React from 'react';
import Product from '../components/products/Product';
import Products from '../components/products/Products';
import SearchInput from '../components/SearchInput';
import PaginationComp from '../components/PaginationComp';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <SearchInput />
      <Products />
      <PaginationComp />
    </Container>
  );
};

export default Home;
