import React from 'react';
import 'components/Table.css';

import useClaims from 'hooks/useClaims'

import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';


const StudentTable = ({ students, sortField, sortDir, onSort }) => {

  const claims = useClaims();
  const userRoles = claims?.roles || [];


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
            <button onClick={() => onSort('firstName')} className="btn cursor-pointer p-0">
              First Name {sortField === 'firstName' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('lastName')} className="btn cursor-pointer p-0">
              Last Name {sortField === 'lastName' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('studentNumber')} className="btn cursor-pointer p-0">
              Student Number {sortField === 'studentNumber' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
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

        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.studentNumber}</td>

            <RoleGuard allowedRoles={['ROLE_TEACHER']} >
              <td>
                <Link
                  to={`/students/edit/${student.id}`}
                  className="btn btn-primary btn-sm shadow-sm mx-1"
                >
                  Edit
                </Link>


                <Link
                  to={`/students/delete/${student.id}`}
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

export default StudentTable;
