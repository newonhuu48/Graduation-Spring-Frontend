import React from "react";

import { Link } from 'react-router-dom';

function DefendedDeleteForm({ defended, error, onDelete }) {

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(defended.id);
  };


  const GradeDisplayMap = {
    "GRADE_2_00": 2.00,
    "GRADE_3_00": 3.00,
    "GRADE_3_50": 3.50,
    "GRADE_4_00": 4.00,
    "GRADE_4_50": 4.50,
    "GRADE_5_00": 5.00,
    "GRADE_5_50": 5.50,
    "GRADE_6_00": 6.00,
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="container mt-5">
        <h2>Are you sure you want to delete this Defended Thesis?</h2>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Defended Thesis Details</h5>
            <p className="card-text"><strong>ID:</strong> {defended.id}</p>
            <p className="card-text"><strong>Grade:</strong> {GradeDisplayMap[defended.grade].toFixed(2)}</p>
          </div>
        </div>

        <form onSubmit={handleDelete}>
          <button type="submit" className="btn btn-danger mt-3">Delete</button>
          <Link to="/defendeds" className="btn btn-secondary mt-3 ms-2">Cancel</Link>
        </form>
      </div>
    </>
  );
}

export default DefendedDeleteForm;
