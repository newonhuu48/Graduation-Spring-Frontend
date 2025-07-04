import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from 'api/axios';

import StudentSubmitThesisForm from 'components/thesis/StudentSubmitThesisForm';


function StudentSubmitThesisPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
  });

  const handleSubmit = async (data) => {
    try {
      await api.post('/api/theses/student/submit', data);
      navigate('/theses/student/my-thesis');
    } catch (err) {
      console.error(err);
      setError('Submission failed. Try again.');
    }
  };

  return (

      <StudentSubmitThesisForm
        formData={formData}
        error={error}
        onChange={setFormData}
        onSubmit={handleSubmit}
      />

  );
}

export default StudentSubmitThesisPage;