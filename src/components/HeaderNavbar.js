import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link to="/" className="navbar-brand text-light mr-2">
        Home Menu
      </Link>

      <Link to="/students" className="navbar-brand text-light mx-2">
        Students
      </Link>

      <Link to="/teachers" className="navbar-brand text-light mx-2">
        Teachers
      </Link>

      <Link to="/theses/submitted" className="navbar-brand text-light mx-2">
        Submitted Theses
      </Link>


      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Optional nav links here */}
        {/* <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/students">Students</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
