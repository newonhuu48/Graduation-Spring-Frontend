import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from 'api/axios';

import TeacherCreateForm from 'components/teachers/TeacherCreateForm';


function TeacherCreatePage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});  // to hold field-specific errors


  const [formData, setFormData] = useState({
      id: null,
      firstName: '',
      lastName: '',
      teacherNumber: '',
    });


  const handleCreate = (teacherData) => {
      api.post('/api/teachers', teacherData)
        .then(() => {
          setFieldErrors({});
          navigate('/teachers');
        })
        //Attach field-specific error messages if any
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.errors) {
            setFieldErrors(err.response.data.errors);
            setError('');
          } else {
            setError('Failed to create teacher');
          }
        });
    };

  return (
    <TeacherCreateForm
        formData={formData}
        error={error}
        fieldErrors={fieldErrors}
        onChange={setFormData}
        onSubmit={handleCreate}
    />

  );
}

export default TeacherCreatePage;
