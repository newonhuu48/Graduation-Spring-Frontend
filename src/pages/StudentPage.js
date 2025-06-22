import React, { useState, useEffect } from 'react';
import api from '../api/axios';

//General Components
import HeaderNavbar from '../components/HeaderNavbar';
import PageSizeSelector from '../components/PageSizeSelector';
import PageNumberSelector from '../components/PageNumberSelector';

//Page-Specific Components
import StudentSearchForm from '../components/students/StudentSearchForm';
import StudentTable from '../components/students/StudentTable';



const StudentPage = () => {

  //Filtering Hook
  const [filters, setFilters] = useState({
    firstName: '',
    lastName: '',
    studentNumber: ''
  });

  // Pagination Hooks
  const [pageNumber, setPageNumber] = useState(0);  // Usually pages start at 0 or 1, depends on backend
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1); // to show pagination controls

  //Sorting Hooks
  const [sortField, setSortField] = useState('id');
  const [sortDir, setSortDir] = useState('asc');


  //Data Hook
  const [students, setStudents] = useState([]);



  const fetchStudents = () => {
    const params = {
      pageNumber,
      pageSize,
      sortField,
      sortDir,
      ...filters,
    };

    api.get('/api/students', { params })
      .then(res => {
        setStudents(res.data.content); // assuming Spring pagination response with content array
        setTotalPages(res.data.totalPages);
      })
      .catch(err => console.error("Error fetching students", err));
  };

  //Refetch when Page or PageSize changes
  useEffect(() => {
    fetchStudents();
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
    fetchStudents();
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



  return (
    <div className="container">

      <HeaderNavbar />
      <h2>Student List</h2>


      <StudentSearchForm
        filters={filters}
        onChange={setFilters}
        onSearch={handleSearch}
      />


      <PageSizeSelector
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />


      <StudentTable
        students={students}
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

export default StudentPage;