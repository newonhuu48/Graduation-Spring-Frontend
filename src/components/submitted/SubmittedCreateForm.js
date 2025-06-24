import { useState } from 'react';
import { Link } from 'react-router-dom';


function SubmittedCreateForm ({ formData, error, onChange, onSubmit }) {

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Create New Thesis</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="title"
                  value={formData.title}
                  onChange={handleCreateChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="studentId" className="form-label">Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  className="form-control"
                  id="studentId"
                  value={formData.studentId}
                  onChange={handleCreateChange}
                />
              </div>

              <div className="d-flex justify-content-between">
                <Link to="/theses/submitted" className="btn btn-secondary">Cancel</Link>
                <button type="submit" className="btn btn-success">Create</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmittedCreateForm;