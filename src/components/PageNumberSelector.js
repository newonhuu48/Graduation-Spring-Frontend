import React from 'react';


const PageNumberSelector = ({ pageNumber, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (pageNumber > 0) {
      onPageChange(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber + 1 < totalPages) {
      onPageChange(pageNumber + 1);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mt-3">


      <nav>
        <ul className="pagination mb-0">
          <li className={`page-item ${pageNumber === 0 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePrevious} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <span className="text-muted mx-2">
           Page {pageNumber + 1} of {totalPages}
          </span>

          <li className={`page-item ${pageNumber + 1 >= totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handleNext} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default PageNumberSelector;
