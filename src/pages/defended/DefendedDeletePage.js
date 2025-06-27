import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from 'api/axios';

import DefendedDeleteForm from 'components/defended/DefendedDeleteForm';


function DefendedDeletePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  //Defended and Error hooks
  const [defended, setDefended] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    api.get(`/api/theses/defended/${id}`)
      .then(response => setDefended(response.data))
      .catch(() => setError('Failed to load defended data'));
  }, [id]);


  const handleDelete = () => {
    api.delete(`/api/theses/${id}`)
      .then(() => navigate('/theses/defended'))

      .catch(() => setError('Failed to delete defended'));
  };


  //Wait for defended to load to avoid reading Null fields
  if (!defended) {
    return <div>Loading...</div>;
  }


  return (
    <DefendedDeleteForm
        defended={defended}
        error={error}
        onDelete={handleDelete}
    />
  );
}

export default DefendedDeletePage;
