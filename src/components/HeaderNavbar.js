import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link className="navbar-brand text-light mr-2" to="/">
        Home Menu
      </Link>

      <Link className="navbar-brand text-light mx-2" to="/students">
        Students
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
