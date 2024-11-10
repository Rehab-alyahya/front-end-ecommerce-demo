import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CartIcon from '../components/cart/CartIcon';

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Anisul Express
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign up
        </Button>
        <Button color="inherit" component={Link} to="/signin">
          Sign in
        </Button>
        {isLoggedIn && (
          <Button color="inherit" component={Link} to="/dashboard/user">
            User Dashboard
          </Button>
        )}
        <Button color="inherit" component={Link} to="/dashboard/admin">
          Admin Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          <CartIcon />
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
