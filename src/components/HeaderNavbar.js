import React from 'react';

import useClaims from 'hooks/useClaims'
import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';


const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link to="/" className="navbar-brand text-light mr-2">
        Home Menu
      </Link>


      <RoleGuard allowedRoles={['ROLE_TEACHER']} >
        <Link to="/students" className="navbar-brand text-light mx-2">
          Students
        </Link>
      </RoleGuard>

      <RoleGuard allowedRoles={['ROLE_TEACHER']} >
        <Link to="/teachers" className="navbar-brand text-light mx-2">
          Teachers
        </Link>
      </RoleGuard>

      <Link to="/theses/submitted" className="navbar-brand text-light mx-2">
        Submitted Theses
      </Link>

      <Link to="/theses/approved" className="navbar-brand text-light mx-2">
        Approved Theses
      </Link>

      <RoleGuard allowedRoles={['ROLE_TEACHER']} >
        <Link to="/theses/defended" className="navbar-brand text-light mx-2">
          Defended Theses
        </Link>
      </RoleGuard>


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
