import React from 'react';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const AdminRoute = () => {
  // Check localStorage for login status and admin status
  const isSignedIn = localStorage.getItem('loginStatus') === 'true';
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.isAdmin || false;

  return isSignedIn && isAdmin ? <Outlet /> : <SignIn />;
};

export default AdminRoute;
