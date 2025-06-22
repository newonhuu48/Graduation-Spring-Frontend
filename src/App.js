import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';

import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  const [claims, setClaims] = useState(null);

  const onLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('claims');
    localStorage.removeItem('user'); //Duplicate of claims
    setClaims(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedClaims = localStorage.getItem('claims');

    if (token && storedClaims) {
      setClaims(JSON.parse(storedClaims));
    }
  }, []);


  const onLogin = (claims) => {
    setClaims(claims);
  };


  if (!claims) {
    //Not logged in - Force Login
    return (
      <Routes>
        <Route path="*" element={<LoginPage onLogin={onLogin} />} />
      </Routes>
    );
  }

  //Logged in - Full Routing
  return (
    <Routes>
     <Route path="/" element={<IndexPage claims={claims} onLogout={onLogout} />} />
     <Route path="/students" element={<StudentPage />} />
     {/* Add other pages here */}
     <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

}

export default App;