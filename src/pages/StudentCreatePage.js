import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axios';

import StudentCreateForm from '../components/students/StudentCreateForm';


function StudentCreatePage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});  // to hold field-specific errors


  const [formData, setFormData] = useState({
      id: null,
      firstName: '',
      lastName: '',
      studentNumber: '',
    });


  const handleCreate = (studentData) => {
      api.post('/api/students', studentData)
        .then(() => {
          setFieldErrors({});
          navigate('/students');
        })
        //Attach field-specific error messages if any
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.errors) {
            setFieldErrors(err.response.data.errors);
            setError('');
          } else {
            setError('Failed to create student');
          }
        });
    };

  return (
    <StudentCreateForm
        formData={formData}
        error={error}
        fieldErrors={fieldErrors}
        onChange={setFormData}
        onSubmit={handleCreate}
    />

  );
}

export default StudentCreatePage;
