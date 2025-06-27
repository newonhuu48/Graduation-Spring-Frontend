import React from 'react';


const ApprovedSearchForm = ({ filters, onChange, onSearch }) => {

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
            name="title"
            className="form-control"
            placeholder="Title"
            value={filters.title}
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

export default ApprovedSearchForm;