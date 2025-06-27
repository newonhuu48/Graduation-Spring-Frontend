import React from 'react';

import { Link } from 'react-router-dom';


function DefendedEditForm ({ defended, formData, error, onSubmit, onChange }) {

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
            <h3 className="mb-0">Edit Defended Thesis</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={formData.id} />

              <div className="mb-3">
                <label htmlFor="grade" className="form-label">Grade</label>

                <select
                  id="grade"
                  name="grade"
                  onChange={handleEditChange}
                  className="form-control"
                >
                  <option disabled selected hidden>Please select</option>
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

              <div className="d-flex justify-content-between">
                <Link to="/theses/defended" className="btn btn-secondary mt-3 ms-2">Cancel</Link>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefendedEditForm;