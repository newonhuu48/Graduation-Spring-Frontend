import React, { useEffect, useState } from 'react';
import api from 'api/axios';


import HeaderNavbar from 'components/HeaderNavbar';

import StudentThesisInfo from 'components/thesis/StudentThesisInfo';



function StudentThesisPage() {
  const [thesis, setThesis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/theses/student/my-thesis')
      .then(res => setThesis(res.data))
      .catch(err => {
        if (err.response?.status === 404) {
          setThesis(null); // thesis not found
        } else {
          console.error('Failed to load thesis:', err);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <HeaderNavbar />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">My Thesis</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <StudentThesisInfo thesis={thesis} />
        )}
      </div>
    </div>
  );
}

export default StudentThesisPage;