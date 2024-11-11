import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../components/cart/CartIcon';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('loginStatus') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('loginStatus');
    navigate('/signin');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Anisul Express
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {!isLoggedIn && (
          <Button color="inherit" component={Link} to="/signup">
            Sign up
          </Button>
        )}
        {!isLoggedIn && (
          <Button color="inherit" component={Link} to="/signin">
            Sign in
          </Button>
        )}
        {isLoggedIn && (
          <Button color="inherit" component={Link} to="/dashboard/user">
            User Dashboard
          </Button>
        )}
        {isLoggedIn && (
          <Button color="inherit" component={Link} to="/dashboard/admin">
            Admin Dashboard
          </Button>
        )}
        <Button color="inherit" component={Link} to="/cart">
          <CartIcon />
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        {isLoggedIn && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
