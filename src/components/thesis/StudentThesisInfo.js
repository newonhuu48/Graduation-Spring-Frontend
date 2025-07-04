import React from 'react';
import { Link } from 'react-router-dom';

function StudentThesisInfo({ thesis }) {

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

  //If no thesis is uploaded yet
  if (!thesis) {
    return (
      <div>
        <p className="mb-4">You haven’t submitted a thesis yet.</p>
          <Link
            to="/theses/student/submit"
            className="btn btn-primary"
          >
            Upload Thesis
          </Link>
      </div>
    );
  }

  //If Thesis exists load it on screen
  return (
    <div className="bg-white shadow rounded p-4">
      <p><strong>ID:</strong> {thesis.id}</p>
      <p><strong>Title:</strong> {thesis.title}</p>
      <p><strong>Status:</strong> {thesis.status}</p>
      {thesis.grade !== null && (
        <p><strong>Grade:</strong> {GradeDisplayMap[thesis.grade].toFixed(2)}</p>
      )}
    </div>
  );
}

export default StudentThesisInfo;