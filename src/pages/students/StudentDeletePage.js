import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from 'api/axios';

import StudentDeleteForm from 'components/students/StudentDeleteForm';


function StudentDeletePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  //Student and Error hooks
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    api.get(`/api/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(() => setError('Failed to load student data'));
  }, [id]);


  const handleDelete = () => {
    api.delete(`/api/students/${id}`)
      .then(() => navigate('/students'))

      .catch(() => setError('Failed to delete student'));
  };


  //Wait for student to load to avoid reading Null fields
  if (!student) {
    return <div>Loading...</div>;
  }


  return (
    <StudentDeleteForm
        student={student}
        error={error}
        onDelete={handleDelete}
    />
  );
}

export default StudentDeletePage;
