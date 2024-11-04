import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { Container, Typography } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [isLoading] = useState(false);
  const [error] = useState(null);

  const fetchProduct = async (id) => {
    try {
      const response = await getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (isLoading) {
    return <Typography variant="h2">Loading Products...</Typography>;
  }
  if (error) {
    return <Typography variant="h2">{error}</Typography>;
  }

  const { name, description } = product;

  return (
    <>
      {product && (
        <Container>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {description}
          </Typography>
        </Container>
      )}
    </>
  );
};

export default ProductDetails;
