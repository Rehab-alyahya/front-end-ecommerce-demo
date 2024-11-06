import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import useProduct from '../hooks/useProduct';

const SortProduct = () => {
  const { sortOrder, setSortOrder } = useProduct();

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={sortOrder}
          label="Sort By"
          onChange={handleSortChange}
        >
          <MenuItem value="name_asc">Name (A-Z)</MenuItem>
          <MenuItem value="name_desc">Name (Z-A)</MenuItem>
          <MenuItem value="price_asc">Price (Low to High)</MenuItem>
          <MenuItem value="price_desc">Price (High to Low)</MenuItem>
          <MenuItem value="date_asc">Date (Oldest First)</MenuItem>
          <MenuItem value="date_desc">Date (Newest First)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortProduct;
