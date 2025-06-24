import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../api/axios';

import TeacherDeleteForm from '../components/teachers/TeacherDeleteForm';


function TeacherDeletePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  //Teacher and Error hooks
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    api.get(`/api/teachers/${id}`)
      .then(response => setTeacher(response.data))
      .catch(() => setError('Failed to load teacher data'));
  }, [id]);


  const handleDelete = () => {
    api.delete(`/api/teachers/${id}`)
      .then(() => navigate('/teachers'))

      .catch(() => setError('Failed to delete teacher'));
  };


  //Wait for teacher to load to avoid reading Null fields
  if (!teacher) {
    return <div>Loading...</div>;
  }


  return (
    <TeacherDeleteForm
        teacher={teacher}
        error={error}
        onDelete={handleDelete}
    />
  );
}

export default TeacherDeletePage;
