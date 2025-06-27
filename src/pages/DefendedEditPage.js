import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import api from '../api/axios';


import DefendedEditForm from '../components/defended/DefendedEditForm';


function DefendedEditPage () {
  const { id } = useParams();
  const navigate = useNavigate();

  //The defended thesis being edited
  const [defendedThesis, setDefendedThesis] = useState(null);

  //Data in form
  const [formData, setFormData] = useState({
    id: null,
    grade: "",
  });

  //Errors
  const [error, setError] = useState('');


  // Fetch data
  useEffect(() => {
    api.get(`/api/theses/defended/${id}`)
      .then(response => {
        setDefendedThesis(response.data);
        setFormData({
          id: response.data.id,
          grade: response.data.grade,
          // add any other fields you want to edit
        });
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);


  const handleSubmit = (updatedDefendedThesis) => {

    api.put(`/api/theses/defended/${updatedDefendedThesis.id}`, updatedDefendedThesis)
      .then(() => {
        navigate('/theses/defended');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <DefendedEditForm
        defendedThesis={defendedThesis}
        formData={formData}
        error={error}
        onSubmit={handleSubmit}
        onChange={setFormData}
    />
  );
}

export default DefendedEditPage;

