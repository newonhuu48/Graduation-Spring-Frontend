import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axios';

import DefendedCreateForm from '../components/defended/DefendedCreateForm';

//DefendedCreatePage belongs to Approved
//
//Because it is called in that View
function DefendedCreatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');


  const [formData, setFormData] = useState({
      grade: null,
    });


  const handleCreate = (defendedThesisData) => {
    api.put(`/api/theses/approved/${id}/defend`, defendedThesisData)
      .then(() => {
        navigate('/theses/approved');
      })
      .catch((err) => {
        setError('Failed to defend Thesis');
      });
  };

  return (
    <DefendedCreateForm
        formData={formData}
        error={error}
        onChange={setFormData}
        onSubmit={handleCreate}
    />

  );
}

export default DefendedCreatePage;
