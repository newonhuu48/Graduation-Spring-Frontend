import React from 'react';
import 'components/Table.css';

import useClaims from 'hooks/useClaims'

import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';


const ApprovedTable = ({ approvedTheses, handleApprove, sortField, sortDir, onSort }) => {
  return (
    <table className="table" data-cy="approved-table">
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

        {approvedTheses.map(approved => (
          <tr data-cy="approved-row" key={approved.id}>
            <td data-cy="approved-id">{approved.id}</td>
            <td data-cy="approved-title">{approved.title}</td>
            <td data-cy="approved-student-number">{approved.studentNumber}</td>
            <td data-cy="approved-student-id">{approved.studentId}</td>


            <RoleGuard allowedRoles={['ROLE_TEACHER']} >
              <td>
                  <Link
                    to={`/theses/approved/${approved.id}/defend`}
                     data-cy="defend-button"
                    className="btn btn-primary btn-sm shadow-sm mx-1"
                  >
                    Defend
                  </Link>

              </td>
            </RoleGuard>

          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default ApprovedTable;