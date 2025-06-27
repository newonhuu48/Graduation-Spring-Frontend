import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import api from 'api/axios';


import StudentEditForm from 'components/students/StudentEditForm';


function StudentEditPage () {
  const { id } = useParams();
  const navigate = useNavigate();

  //The student being edited
  const [student, setStudent] = useState(null);

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
    api.get(`/api/students/${id}/edit`)
      .then(response => {
        setStudent(response.data);
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


  const handleSubmit = (updatedStudent) => {

    api.put(`/api/students/${updatedStudent.id}`, updatedStudent)
      .then(() => {
        navigate('/students');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <StudentEditForm
        student={student}
        formData={formData}
        error={error}
        onSubmit={handleSubmit}
        onChange={setFormData}
    />
  );
}

export default StudentEditPage;