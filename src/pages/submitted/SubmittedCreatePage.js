import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import api from 'api/axios';

import SubmittedCreateForm from 'components/submitted/SubmittedCreateForm';


function SubmittedCreatePage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');


  const [formData, setFormData] = useState({
      title: '',
      studentId: null,
    });


  const handleCreate = (submittedThesisData) => {
    api.post('/api/theses/submit', submittedThesisData)
      .then(() => {
        navigate('/theses/submitted');
      })
      .catch((err) => {
        setError('Failed to create Thesis');
      });
  };

  return (
    <SubmittedCreateForm
        formData={formData}
        error={error}
        onChange={setFormData}
        onSubmit={handleCreate}
    />

  );
}

export default SubmittedCreatePage;
