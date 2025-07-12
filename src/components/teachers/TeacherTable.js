import React from 'react';
import 'components/Table.css';

import useClaims from 'hooks/useClaims'

import { RoleGuard } from 'components/RoleGuard';

import { Link } from 'react-router-dom';


const TeacherTable = ({ teachers, sortField, sortDir, onSort }) => {

  const claims = useClaims();
  const userRoles = claims?.roles || [];


  return (
    <table className="table" data-cy="teacher-table">
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
          <tr data-cy="teacher-row" key={teacher.id}>
            <td data-cy="teacher-id">{teacher.id}</td>
            <td data-cy="teacher-first-name">{teacher.firstName}</td>
            <td data-cy="teacher-last-name">{teacher.lastName}</td>
            <td data-cy="teacher-number">{teacher.teacherNumber}</td>


            <RoleGuard allowedRoles={['ROLE_TEACHER']} >
              <td>
                  <Link
                    to={`/teachers/edit/${teacher.id}`}
                    data-cy="edit-button"
                    className="btn btn-primary btn-sm shadow-sm mx-1"
                  >
                    Edit
                  </Link>


                  <Link
                    to={`/teachers/delete/${teacher.id}`}
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

export default TeacherTable;
