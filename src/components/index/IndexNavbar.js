import React from 'react';
import { Link } from 'react-router-dom';

function IndexNavbar() {
  return (
    <div className="container">
      <div className="row g-3">


        <div className="col-md-6">
          <Link to="students" className="btn btn-primary w-100 h-100 shadow-sm d-flex justify-content-center align-items-center">
            Students List
          </Link>
        </div>


        <div className="col-md-6">
            <div className="p-3 border rounded">
                <a href="api/teachers"> Teachers List</a>
            </div>
        </div>


        <div className="col-md-6">
            <div className="p-3 border rounded">
              <a href="/api/theses">Theses List</a>
            </div>
        </div>


        <div className="col-md-6">
            <div className="p-3 border rounded">
              <a href="/api/defenses">Defenses List</a>
            </div>
        </div>


      </div>
    </div>
  );
}

export default IndexNavbar;
