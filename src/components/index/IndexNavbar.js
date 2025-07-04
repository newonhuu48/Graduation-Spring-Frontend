import React from 'react';

import useClaims from 'hooks/useClaims'
import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';

function IndexNavbar() {

  const claims = useClaims();
  const userRoles = claims?.roles || [];


  return (
    <div className="container">
      <div className="row g-3">

        {/* Teacher can view Students*/}
        <RoleGuard allowedRoles={['ROLE_TEACHER']} >
          <div className="col-md-6">
            <Link to="students" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
              Students List
            </Link>
          </div>
        </RoleGuard>

        {/* Teacher can view Teachers*/}
        <RoleGuard allowedRoles={['ROLE_TEACHER']} >
          <div className="col-md-6">
            <Link to="teachers" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
              Teachers List
            </Link>
          </div>
        </RoleGuard>


        {/* Student can view their own Thesis*/}
        <RoleGuard allowedRoles={['ROLE_STUDENT']} >
          <div className="col-md-6">
            <Link to="/theses/student/my-thesis" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
              Graduation Thesis
            </Link>
          </div>
        </RoleGuard>

        {/* Teacher can view Submitted Theses*/}
        <RoleGuard allowedRoles={['ROLE_TEACHER']} >
          <div className="col-md-6">
            <Link to="/theses/submitted" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
              Theses List
            </Link>
          </div>
        </RoleGuard>

        {/* Teacher and Student can view Approved Theses*/}
        <div className="col-md-6">
          <Link to="/theses/approved" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
            Approved Theses List
          </Link>
        </div>

        {/* Teacher can view Defended Theses*/}
        <RoleGuard allowedRoles={['ROLE_TEACHER']} >
          <div className="col-md-6">
            <Link to="/theses/defended" className="btn btn-primary w-100 h-100 py-3 shadow-sm d-flex justify-content-center align-items-center">
              Defended Theses List
            </Link>
          </div>
        </RoleGuard>

      </div>
    </div>
  );
}

export default IndexNavbar;
