import React from 'react';
import 'components/Table.css';

import useClaims from 'hooks/useClaims'

import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';


const TeacherTable = ({ teachers, sortField, sortDir, onSort }) => {

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
            <button onClick={() => onSort('teacherNumber')} className="btn cursor-pointer p-0">
              Teacher Number {sortField === 'teacherNumber' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
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

        {teachers.map(teacher => (
          <tr key={teacher.id}>
            <td>{teacher.id}</td>
            <td>{teacher.firstName}</td>
            <td>{teacher.lastName}</td>
            <td>{teacher.teacherNumber}</td>


            <RoleGuard allowedRoles={['ROLE_TEACHER']} >
              <td>
                  <Link
                    to={`/teachers/edit/${teacher.id}`}
                    className="btn btn-primary btn-sm shadow-sm mx-1"
                  >
                    Edit
                  </Link>


                  <Link
                    to={`/teachers/delete/${teacher.id}`}
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

export default TeacherTable;
