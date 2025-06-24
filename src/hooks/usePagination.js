import { useState } from 'react';

function usePagination(initialPage = 0, initialSize = 10) {

  const [pageNumber, setPageNumber] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialSize);
  const [totalPages, setTotalPages] = useState(1);

  const resetPagination = () => setPageNumber(initialPage);

  return {
    pageNumber,
    setPageNumber,
    pageSize,
    setPageSize,
    totalPages,
    setTotalPages,
    resetPagination,
  };
}

export default usePagination;