import React from 'react';
import { Box, Pagination } from '@mui/material';

import useProduct from '../hooks/useProduct';

const PaginationComp = () => {
  const { pageNumber, setPageNumber, totalPages } = useProduct();

  const handlePageChange = (value) => {
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
