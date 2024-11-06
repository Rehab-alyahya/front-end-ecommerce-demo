import React from 'react';

import Routes from './routes';
import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartProvider';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
