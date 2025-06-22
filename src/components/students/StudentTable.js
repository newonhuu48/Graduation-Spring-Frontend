import React from 'react';
import './StudentTable.css';

const StudentTable = ({ students, sortField, sortDir, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr className="">

          <th className="bg-light">
            <button onClick={() => onSort('id')} className="btn custor-pointer p-0">
              ID {sortField === 'id' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('firstName')} className="btn custor-pointer p-0">
              First Name {sortField === 'firstName' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('lastName')} className="btn custor-pointer p-0">
              Last Name {sortField === 'lastName' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            <button onClick={() => onSort('studentNumber')} className="btn custor-pointer p-0">
              Student Number {sortField === 'studentNumber' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>

          <th className="bg-light">
            Actions
          </th>
          {/* other headers */}
        </tr>
      </thead>
      <tbody>

        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.studentNumber}</td>

            <td>
              <button className="btn btn-primary btn-sm shadow-sm w-25 mx-1">Edit</button>
              <button className="btn btn-danger btn-sm shadow-sm w-25 mx-1">Delete</button>
            </td>
            {/* other cells */}
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default StudentTable;
