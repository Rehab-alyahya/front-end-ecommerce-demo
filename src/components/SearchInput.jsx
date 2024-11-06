import React from 'react';
import { TextField } from '@mui/material';

import useProduct from '../hooks/useProduct';

const SearchInput = () => {
  const { setSearchValue } = useProduct();
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <TextField
      label="Search Products"
      variant="outlined"
      fullWidth
      //  value={searchValue}
      onChange={handleSearchChange}
      margin="normal"
    />
  );
};

export default SearchInput;
