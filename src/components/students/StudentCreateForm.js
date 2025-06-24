import { useState } from 'react';
import { Link } from 'react-router-dom';


function StudentCreateForm ({ formData, fieldErrors, error, onChange, onSubmit }) {

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
            <h3 className="mb-0">Create New Student</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${fieldErrors?.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleCreateChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${fieldErrors?.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleCreateChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="studentNumber" className="form-label">Student Number</label>
                <input
                  type="text"
                  name="studentNumber"
                  className={`form-control ${fieldErrors?.studentNumber ? 'is-invalid' : ''}`}
                  id="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleCreateChange}
                />
              </div>

              <div className="d-flex justify-content-between">
                <Link to="/students" className="btn btn-secondary">Cancel</Link>
                <button type="submit" className="btn btn-success">Create</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCreateForm;