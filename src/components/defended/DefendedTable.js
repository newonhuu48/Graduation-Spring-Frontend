import React from 'react';
import 'components/Table.css';

import useClaims from 'hooks/useClaims'

import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';



const DefendedTable = ({ defendedTheses, handleApprove, sortField, sortDir, onSort }) => {

  const GradeDisplayMap = {
    "GRADE_2_00": 2.00,
    "GRADE_3_00": 3.00,
    "GRADE_3_50": 3.50,
    "GRADE_4_00": 4.00,
    "GRADE_4_50": 4.50,
    "GRADE_5_00": 5.00,
    "GRADE_5_50": 5.50,
    "GRADE_6_00": 6.00,
  };

  return (
    <table className="table" data-cy="defended-table">
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
            <button onClick={() => onSort('grade')} className="btn cursor-pointer p-0">
              Grade {sortField === 'grade' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
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

        {defendedTheses.map(defended => (
          <tr data-cy="defended-row" key={defended.id}>
            <td data-cy="defended-id">{defended.id}</td>
            <td data-cy="defended-title">{defended.title}</td>
            <td data-cy="defended-student-number">{defended.studentNumber}</td>
            <td data-cy="defended-student-id">{defended.studentId}</td>
            <td data-cy="defended-grade">{GradeDisplayMap[defended.grade].toFixed(2)}</td> {/* Display Grades correctly from Look-up Table */}


            <RoleGuard allowedRoles={['ROLE_TEACHER']} >
              <td>
                  <Link
                    to={`/theses/defended/${defended.id}/edit`}
                    data-cy="edit-button"
                    className="btn btn-primary btn-sm shadow-sm mx-1"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/theses/defended/${defended.id}/delete`}
                    data-cy="delete-button"
                    className="btn btn-danger btn-sm shadow-sm mx-1"
                  >
                    Delete
                  </Link>
              </td>
            </RoleGuard>


          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default DefendedTable;