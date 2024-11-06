import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Product from './Product';
import useProduct from '../../hooks/useProduct';

const Products = () => {
  const { products, isLoading, error } = useProduct(); // Use the custom hook

  if (isLoading) {
    return <Typography variant="h2">Loading Products...</Typography>;
  }
  if (error) {
    return <Typography variant="h2">{error}</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.productId}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
