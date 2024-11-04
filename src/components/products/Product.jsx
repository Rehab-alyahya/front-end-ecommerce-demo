import { Button, Card, CardContent, Grid2, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <Grid2 item xs={12} sm={6} md={4} key={product.id}>
        <Card>
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>price: {product.price}</Typography>
            <Typography>quantity: {product.quantity}</Typography>

            <Button>
              <Link to={`/products/${product.productId}`}>Show Details</Link>
            </Button>
          </CardContent>
        </Card>
      </Grid2>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
