import React from 'react';

import { Link } from 'react-router-dom';


function StudentEditForm ({ student, formData, error, onSubmit, onChange }) {

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // handle submission logic outside
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
          <div className="card-header bg-info text-white">
            <h3 className="mb-0">Edit Student</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={formData.id} />

              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleEditChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleEditChange}
                />
              </div>

              <div className="d-flex justify-content-between">
                <Link to="/students" className="btn btn-secondary mt-3 ms-2">Cancel</Link>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentEditForm;