import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import api from '../api/axios';


import SubmittedEditForm from '../components/submitted/SubmittedEditForm';


function SubmittedEditPage () {
  const { id } = useParams();
  const navigate = useNavigate();

  //The submitted thesis being edited
  const [submittedThesis, setSubmittedThesis] = useState(null);

  //Data in form
  const [formData, setFormData] = useState({
    id: null,
    title: '',
  });

  //Errors
  const [error, setError] = useState('');


  // Fetch data
  useEffect(() => {
    api.get(`/api/theses/submitted/${id}`)
      .then(response => {
        setSubmittedThesis(response.data);
        setFormData({
          id: response.data.id,
          title: response.data.title,
          // add any other fields you want to edit
        });
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);


  const handleSubmit = (updatedSubmittedThesis) => {

    console.log('Payload sending to backend:', updatedSubmittedThesis);

    api.put(`/api/theses/submitted/${updatedSubmittedThesis.id}`, updatedSubmittedThesis)
      .then(() => {
        navigate('/theses/submitted');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <SubmittedEditForm
        submittedThesis={submittedThesis}
        formData={formData}
        error={error}
        onSubmit={handleSubmit}
        onChange={setFormData}
    />
  );
}

export default SubmittedEditPage;

