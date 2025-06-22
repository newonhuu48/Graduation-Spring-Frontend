import React from 'react';


const PageSizeSelector = ({ pageSize, onPageSizeChange }) => {
  const options = [10, 25, 50];

  return (
    <div className="mb-3">
      <label htmlFor="recordsPerPageDropdown" className="form-label">Records Per Page</label>
      <div className="dropdown">

        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="recordsPerPageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {pageSize}
        </button>

        <ul className="dropdown-menu" aria-labelledby="recordsPerPageDropdown">
          {options.map((size) => (
            <li key={size}>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => onPageSizeChange(size)}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageSizeSelector;
