import React from 'react';
import './SubmittedTable.css';

import { Link } from 'react-router-dom';


const SubmittedTable = ({ submittedTheses, handleApprove, sortField, sortDir, onSort }) => {
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

        {submittedTheses.map(submitted => (
          <tr key={submitted.id}>
            <td>{submitted.id}</td>
            <td>{submitted.title}</td>
            <td>{submitted.studentNumber}</td>
            <td>{submitted.studentId}</td>

            <td>
              <Link
                to={`/theses/submitted/${submitted.id}/edit`}
                className="btn btn-primary btn-sm shadow-sm mx-1"
              >
                Edit
              </Link>

              <button
                className="btn btn-success btn-sm shadow-sm mx-1"
                onClick={() => handleApprove(submitted.id)}
              >
                Approve
              </button>

              {/* Change later */}

            </td>
            {/* other cells */}
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default SubmittedTable;