import React from 'react';

import Routes from './routes';
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';
import { UserProvider } from './context/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default App;
