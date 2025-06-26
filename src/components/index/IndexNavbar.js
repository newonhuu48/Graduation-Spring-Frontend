import React from 'react';
import { Link } from 'react-router-dom';

function IndexNavbar() {
  return (
    <div className="container">
      <div className="row g-3">


        <div className="col-md-6">
          <Link to="students" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
            Students List
          </Link>
        </div>


        <div className="col-md-6">
          <Link to="teachers" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
            Teachers List
          </Link>
        </div>


        <div className="col-md-6">
          <Link to="/theses/submitted" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
            Theses List
          </Link>
        </div>

        <div className="col-md-6">
          <Link to="/theses/approved" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
            Approved Theses List
          </Link>
        </div>


        <div className="col-md-6">
          <Link to="/theses/defended" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
            Defended Theses List
          </Link>
        </div>


      </div>
    </div>
  );
}

export default IndexNavbar;
