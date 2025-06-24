import React from "react";

import { Link } from 'react-router-dom';

function TeacherDeleteForm({ teacher, error, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(teacher.id);
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="container mt-5">
        <h2>Are you sure you want to delete this teacher?</h2>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Teacher Details</h5>
            <p className="card-text"><strong>ID:</strong> {teacher.id}</p>
            <p className="card-text"><strong>First Name:</strong> {teacher.firstName}</p>
            <p className="card-text"><strong>Last Name:</strong> {teacher.lastName}</p>
            <p className="card-text"><strong>Teacher Number:</strong> {teacher.teacherNumber}</p>
          </div>
        </div>

        <form onSubmit={handleDelete}>
          <button type="submit" className="btn btn-danger mt-3">Delete</button>
          <Link to="/teachers" className="btn btn-secondary mt-3 ms-2">Cancel</Link>
        </form>
      </div>
    </>
  );
}

export default TeacherDeleteForm;
