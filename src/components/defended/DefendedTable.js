import React from 'react';
import './DefendedTable.css';

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
            <button onClick={() => onSort('grade')} className="btn cursor-pointer p-0">
              Grade {sortField === 'grade' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </button>
          </th>


          <th className="bg-light">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>

        {defendedTheses.map(defended => (
          <tr key={defended.id}>
            <td>{defended.id}</td>
            <td>{defended.title}</td>
            <td>{defended.studentNumber}</td>
            <td>{defended.studentId}</td>
            <td>{GradeDisplayMap[defended.grade].toFixed(2)}</td> {/* Display Grades correctly from Look-up Table */}

            <td>
              <Link
                to={`/theses/defended/${defended.id}/edit`}
                className="btn btn-primary btn-sm shadow-sm mx-1"
              >
                Edit
              </Link>

              <Link
                to={`/theses/defended/${defended.id}/delete`}
                className="btn btn-danger btn-sm shadow-sm mx-1"
              >
                Delete
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

export default DefendedTable;