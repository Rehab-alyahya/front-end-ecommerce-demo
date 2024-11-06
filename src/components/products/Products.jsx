// src/components/Products.js

import { Typography, Grid, Grid2 } from '@mui/material';
import React, { useContext } from 'react';

import Product from './Product';
import { ProductContext } from '../../context/ProductContext';
import Loader from '../Loader';

const Products = () => {
  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <Loader message="Loading products, please wait..." />;
  }

  if (error) {
    return (
      <Loader message="Failed to load products. Please try again." size={70} />
    );
  }

  return (
    <div>
      <Grid2 container spacing={1}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} key={product.productId}>
            <Product product={product} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Products;
