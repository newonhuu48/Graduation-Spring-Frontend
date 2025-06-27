import React, { useState, useEffect } from 'react';
import api from 'api/axios';
import { Link } from 'react-router-dom';

//General Components
import HeaderNavbar from 'components/HeaderNavbar';
import PageSizeSelector from 'components/PageSizeSelector';
import PageNumberSelector from 'components/PageNumberSelector';

//Pagination Hook
import usePagination from 'hooks/usePagination'

//Page-Specific Components
import ApprovedSearchForm from 'components/approved/ApprovedSearchForm';
import ApprovedTable from 'components/approved/ApprovedTable';



const ApprovedPage = () => {

  //Filtering Hook
  const [filters, setFilters] = useState({
    title: '',
    studentNumber: '',
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
  const [approvedTheses, setApprovedTheses] = useState([]);



  const fetchApprovedTheses = () => {
    const params = {
      pageNumber,
      pageSize,
      sortField,
      sortDir,
      ...filters,
    };

    api.get('/api/theses/approved', { params })
      .then(res => {
        setApprovedTheses(res.data.content); // assuming Spring pagination response with content array
        setTotalPages(res.data.totalPages);
      })
      .catch(err => console.error("Error fetching Approved Theses", err));
  };

  //Refetch when Page or PageSize changes
  useEffect(() => {
    fetchApprovedTheses();
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
    fetchApprovedTheses();
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
      await api.put(`/api/theses/approved/${id}/approve`);
      alert('Thesis approved successfully!');
      fetchApprovedTheses(); // refresh the list after approval
    } catch (error) {
      console.error('Error approving thesis:', error);
      alert('Failed to approve thesis. Please try again.');
    }
  };



  return (
    <div className="container">

      <HeaderNavbar />
      <h2>Approved Theses List</h2>

      <ApprovedSearchForm
        filters={filters}
        onChange={setFilters}
        onSearch={handleSearch}
      />


      <PageSizeSelector
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />


      <ApprovedTable
        approvedTheses={approvedTheses}
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

export default ApprovedPage;