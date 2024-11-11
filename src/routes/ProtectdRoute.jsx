import React from 'react';
import { Outlet } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const ProtectedRoute = () => {
  // Check localStorage for login status
  const isSignedIn = localStorage.getItem('loginStatus') === 'true';

  return isSignedIn ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;
