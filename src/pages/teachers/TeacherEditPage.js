import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import api from 'api/axios';


import TeacherEditForm from 'components/teachers/TeacherEditForm';


function TeacherEditPage () {
  const { id } = useParams();
  const navigate = useNavigate();

  //The teacher being edited
  const [teacher, setTeacher] = useState(null);

  //Data in form
  const [formData, setFormData] = useState({
    id: null,
    firstName: '',
    lastName: '',
  });

  //Errors
  const [error, setError] = useState('');


  // Fetch data
  useEffect(() => {
    api.get(`/api/teachers/${id}/edit`)
      .then(response => {
        setTeacher(response.data);
        setFormData({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          // add any other fields you want to edit
        });
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);


  const handleSubmit = (updatedTeacher) => {

    api.put(`/api/teachers/${updatedTeacher.id}`, updatedTeacher)
      .then(() => {
        navigate('/teachers');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <TeacherEditForm
        teacher={teacher}
        formData={formData}
        error={error}
        onSubmit={handleSubmit}
        onChange={setFormData}
    />
  );
}

export default TeacherEditPage;