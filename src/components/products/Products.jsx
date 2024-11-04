import { Grid2, Typography } from '@mui/material';
import React, { useContext } from 'react';

import Product from './Product';
import { ProductContext } from '../../context/ProductContext';

const Products = () => {
  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <Typography variant="h2">Loading Products...</Typography>;
  }
  if (error) {
    return <Typography variant="h2">{error}</Typography>;
  }

  return (
    <div>
      <Grid2 container spacing={3}>
        {products.map((product) => (
          <Product product={product} key={product.productId} />
        ))}
      </Grid2>
    </div>
  );
};

export default Products;
