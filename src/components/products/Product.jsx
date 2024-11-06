import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={product.productId}>
      <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
        {/* Product Image */}
        <CardMedia
          component="img"
          height="180"
          image={product.image || 'https://via.placeholder.com/150'}
          alt={product.name}
        />

        <CardContent>
          {/* Product Name */}
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            color="primary"
            fontWeight="bold"
          >
            {product.name}
          </Typography>

          {/* Product Description */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {product.description?.length > 60
              ? `${product.description.slice(0, 60)}...`
              : product.description}
          </Typography>

          {/* Product Price */}
          <Typography
            variant="subtitle1"
            color="text.primary"
            fontWeight="medium"
          >
            Price: ${product.price.toFixed(2)}
          </Typography>

          {/* Product Quantity */}
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
            Quantity: {product.quantity}
          </Typography>

          {/* Show Details Button */}
          <Button
            component={Link}
            to={`/products/${product.productId}`}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Show Details
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Product;
