import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        Your Company {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
