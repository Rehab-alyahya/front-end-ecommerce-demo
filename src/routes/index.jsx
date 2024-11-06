import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../layout/Layout';
import About from '../pages/About';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../components/cart/Cart';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/products/:id',
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
