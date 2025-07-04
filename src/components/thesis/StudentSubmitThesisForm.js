import { useState } from 'react';


function StudentSubmitThesisForm ({ formData, error, onChange, onSubmit }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Thesis Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Thesis</button>
      </form>

    </div>
  );
}

export default StudentSubmitThesisForm;