import { useState } from 'react';
import { Link } from 'react-router-dom';


function DefendedCreateForm ({ formData, error, onChange, onSubmit }) {

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
            <h3 className="mb-0">Defend Thesis</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="grade" className="form-label">Grade</label>

                <select
                  id="grade"
                  name="grade"
                  onChange={handleCreateChange}
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
                <Link to="/theses/approved" className="btn btn-secondary">Cancel</Link>
                <button type="submit" className="btn btn-success">Create</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefendedCreateForm;