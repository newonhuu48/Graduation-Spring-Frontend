import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

//General Components
import HeaderNavbar from '../components/HeaderNavbar';
import PageSizeSelector from '../components/PageSizeSelector';
import PageNumberSelector from '../components/PageNumberSelector';

//Pagination Hook
import usePagination from '../hooks/usePagination'

//Page-Specific Components
import DefendedSearchForm from '../components/defended/DefendedSearchForm';
import DefendedTable from '../components/defended/DefendedTable';



const DefendedPage = () => {

  //Filtering Hook
  const [filters, setFilters] = useState({
    title: '',
    studentNumber: '',
    grade: null,
  });

  // Pagination Hooks
  const {
      pageNumber,
      setPageNumber,
      pageSize,
      setPageSize,
      totalPages,
      setTotalPages,
      resetPagination,
    } = usePagination();

  //Sorting Hooks
  const [sortField, setSortField] = useState('id');
  const [sortDir, setSortDir] = useState('asc');


  //Data Hook
  const [defendedTheses, setDefendedTheses] = useState([]);



  const fetchDefendedTheses = () => {
    const params = {
      pageNumber,
      pageSize,
      sortField,
      sortDir,
      ...filters,
    };

    api.get('/api/theses/defended', { params })
      .then(res => {
        setDefendedTheses(res.data.content); // assuming Spring pagination response with content array
        setTotalPages(res.data.totalPages);
      })
      .catch(err => console.error("Error fetching Defended Theses", err));
  };

  //Refetch when Page or PageSize changes
  useEffect(() => {
    fetchDefendedTheses();
  }, [pageNumber, pageSize, sortField, sortDir]);



  //Page Size Handler
  const handlePageSizeChange = newPageSize => {
    setPageSize(newPageSize);
    setPageNumber(0); // Reset to first page when page size changes
  };

  const handlePageNumberChange = newPageNumber => {
    setPageNumber(newPageNumber);
  }

  //Filtering Handler
  const handleSearch = () => {
    setPageNumber(0); // reset to first page on new search
    fetchDefendedTheses();
  };

  //Sorting Handler
  const handleSort = (field) => {
    if (field === sortField) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };


  const handleApprove = async (id) => {
    try {
      await api.put(`/api/theses/defended/${id}/approve`);
      alert('Thesis defended successfully!');
      fetchDefendedTheses(); // refresh the list after approval
    } catch (error) {
      console.error('Error approving thesis:', error);
      alert('Failed to approve thesis. Please try again.');
    }
  };



  return (
    <div className="container">

      <HeaderNavbar />
      <h2>Defended Theses List</h2>

      <DefendedSearchForm
        filters={filters}
        onChange={setFilters}
        onSearch={handleSearch}
      />


      <PageSizeSelector
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />


      <DefendedTable
        defendedTheses={defendedTheses}
        handleApprove={handleApprove}
        sortField={sortField}
        sortDir={sortDir}
        onSort={handleSort}
      />


      <PageNumberSelector
        pageNumber={pageNumber}
        totalPages={totalPages}
        onPageChange={setPageNumber}
      />

    </div>
  );
};

export default DefendedPage;