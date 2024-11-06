import { Box, Pagination } from '@mui/material';
import React, { useContext } from 'react';

import { ProductContext } from '../context/ProductContext';

const PaginationComp = () => {
  const { pageNumber, setPageNumber, pageSize, totalPages } =
    useContext(ProductContext);

  console.log(pageNumber);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

export default PaginationComp;
