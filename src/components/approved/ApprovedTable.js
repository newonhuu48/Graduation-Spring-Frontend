import React from 'react';
import './ApprovedTable.css';

import { Link } from 'react-router-dom';


const ApprovedTable = ({ approvedTheses, handleApprove, sortField, sortDir, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr className="">

          <th className="bg-light">
            <button onClick={() => onSort('id')} className="btn cursor-pointer p-0">
              ID {sortField === 'id' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('title')} className="btn cursor-pointer p-0">
              Title {sortField === 'title' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('studentNumber')} className="btn cursor-pointer p-0">
              Student Number {sortField === 'studentNumber' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('studentId')} className="btn cursor-pointer p-0">
              Student ID {sortField === 'studentId' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>


          <th className="bg-light">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>

        {approvedTheses.map(approved => (
          <tr key={approved.id}>
            <td>{approved.id}</td>
            <td>{approved.title}</td>
            <td>{approved.studentNumber}</td>
            <td>{approved.studentId}</td>

            <td>
              <Link
                to={`/theses/approved/${approved.id}/defend`}
                className="btn btn-primary btn-sm shadow-sm mx-1"
              >
                Defend
              </Link>


              {/* Change later */}

            </td>
            {/* other cells */}
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default ApprovedTable;