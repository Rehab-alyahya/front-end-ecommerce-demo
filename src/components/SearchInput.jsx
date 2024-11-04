import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchInput = () => {
  const { setSearchValue } = useContext(ProductContext);
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
