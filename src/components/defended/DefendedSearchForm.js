import React from 'react';


const DefendedSearchForm = ({ filters, onChange, onSearch }) => {

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

        <div className="col">
          <select
            id="grade"
            name="grade"
            onChange={handleInputChange}
            className="form-control"
          >
            <option disabled selected hidden>Filter by Grade</option>
            <option value="">No Grade Filtering</option>

            <option value="GRADE_2_00">2.00</option>
            <option value="GRADE_3_00">3.00</option>
            <option value="GRADE_3_50">3.50</option>
            <option value="GRADE_4_00">4.00</option>
            <option value="GRADE_4_50">4.50</option>
            <option value="GRADE_5_00">5.00</option>
            <option value="GRADE_5_50">5.50</option>
            <option value="GRADE_6_00">6.00</option>
          </select>
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>

      </div>
    </form>
  );
};

export default DefendedSearchForm;