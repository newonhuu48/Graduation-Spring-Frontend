import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

//General Components
import HeaderNavbar from '../components/HeaderNavbar';
import PageSizeSelector from '../components/PageSizeSelector';
import PageNumberSelector from '../components/PageNumberSelector';
import usePagination from '../hooks/usePagination'

//Page-Specific Components
import SubmittedSearchForm from '../components/submitted/SubmittedSearchForm';
import SubmittedTable from '../components/submitted/SubmittedTable';



const SubmittedPage = () => {

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
  const [submittedTheses, setSubmittedTheses] = useState([]);



  const fetchSubmittedTheses = () => {
    const params = {
      pageNumber,
      pageSize,
      sortField,
      sortDir,
      ...filters,
    };

    api.get('/api/theses/submitted', { params })
      .then(res => {
        setSubmittedTheses(res.data.content); // assuming Spring pagination response with content array
        setTotalPages(res.data.totalPages);
      })
      .catch(err => console.error("Error fetching Submitted Theses", err));
  };

  //Refetch when Page or PageSize changes
  useEffect(() => {
    fetchSubmittedTheses();
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
    fetchSubmittedTheses();
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
      await api.put(`/api/theses/submitted/${id}/approve`);
      alert('Thesis approved successfully!');
      fetchSubmittedTheses(); // refresh the list after approval
    } catch (error) {
      console.error('Error approving thesis:', error);
      alert('Failed to approve thesis. Please try again.');
    }
  };



  return (
    <div className="container">

      <HeaderNavbar />
      <h2>Submitted Theses List</h2>

      {/* Add New Submitted Button*/}
      <Link to="/theses/submit" className="btn btn-primary mb-3">
        Add New Thesis
      </Link>

      <SubmittedSearchForm
        filters={filters}
        onChange={setFilters}
        onSearch={handleSearch}
      />


      <PageSizeSelector
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />


      <SubmittedTable
        submittedTheses={submittedTheses}
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

export default SubmittedPage;