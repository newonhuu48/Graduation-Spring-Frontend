import React from 'react';
import 'components/Table.css';

import useClaims from 'hooks/useClaims'

import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';


const SubmittedTable = ({ submittedTheses, handleApprove, sortField, sortDir, onSort }) => {
  return (
    <table className="table" data-cy="submitted-table">
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


          <RoleGuard allowedRoles={['ROLE_TEACHER']} >
            <th className="bg-light">
              Actions
            </th>
          </RoleGuard>
        </tr>
      </thead>

      <tbody>

        {submittedTheses.map(submitted => (
          <tr data-cy="submitted-row" key={submitted.id}>
            <td data-cy="submitted-id">{submitted.id}</td>
            <td data-cy="submitted-title">{submitted.title}</td>
            <td data-cy="submitted-student-number">{submitted.studentNumber}</td>
            <td data-cy="submitted-student-id">{submitted.studentId}</td>

            <RoleGuard allowedRoles={['ROLE_TEACHER']} >
              <td>
                <Link
                  to={`/theses/submitted/${submitted.id}/edit`}
                  data-cy="edit-button"
                  className="btn btn-primary btn-sm shadow-sm mx-1"
                >
                  Edit
                </Link>

                <button
                  data-cy="approve-button"
                  className="btn btn-success btn-sm shadow-sm mx-1"
                  onClick={() => handleApprove(submitted.id)}
                >
                  Approve
                  </button>

                {/* Change later */}

              </td>
            </RoleGuard>
            {/* other cells */}
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default SubmittedTable;