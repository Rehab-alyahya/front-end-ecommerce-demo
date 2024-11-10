import React from 'react';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const PortectedRoute = () => {
  // api call
  // context/localstorage/redux-store ->user login or not?
  const isSignedIn = true;
  return isSignedIn ? <Outlet /> : <SignIn />;
};
export default PortectedRoute;
