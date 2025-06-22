import React from 'react';


const StudentSearchForm = ({ filters, onChange, onSearch }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };


  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row g-2 align-items-end">


        <div className="col">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            value={filters.firstName}
            onChange={handleInputChange}
          />
        </div>


        <div className="col">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            value={filters.lastName}
            onChange={handleInputChange}
          />
        </div>


        <div className="col">
          <input
            type="text"
            name="studentNumber"
            className="form-control"
            placeholder="Student Number"
            value={filters.studentNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>

      </div>
    </form>
  );
};

export default StudentSearchForm;