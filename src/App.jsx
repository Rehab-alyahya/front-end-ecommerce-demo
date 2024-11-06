import React from 'react';

import Routes from './routes';
import { ProductProvider } from './context/ProductProvider';

const App = () => {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  );
};

export default App;
