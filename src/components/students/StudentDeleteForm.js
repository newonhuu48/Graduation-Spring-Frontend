import React from "react";

import { Link } from 'react-router-dom';

function StudentDeleteForm({ student, error, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(student.id);
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="container mt-5">
        <h2>Are you sure you want to delete this student?</h2>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Student Details</h5>
            <p className="card-text"><strong>ID:</strong> {student.id}</p>
            <p className="card-text"><strong>First Name:</strong> {student.firstName}</p>
            <p className="card-text"><strong>Last Name:</strong> {student.lastName}</p>
            <p className="card-text"><strong>Student Number:</strong> {student.studentNumber}</p>
          </div>
        </div>

        <form onSubmit={handleDelete}>
          <button type="submit" className="btn btn-danger mt-3">Delete</button>
          <Link to="/students" className="btn btn-secondary mt-3 ms-2">Cancel</Link>
        </form>
      </div>
    </>
  );
}

export default StudentDeleteForm;
