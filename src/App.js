import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';


//General Pages
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

//Student Pages
import StudentPage from './pages/StudentPage';
import StudentEditPage from './pages/StudentEditPage';
import StudentDeletePage from './pages/StudentDeletePage'
import StudentCreatePage from './pages/StudentCreatePage'

//Teacher Pages
import TeacherPage from './pages/TeacherPage';
import TeacherEditPage from './pages/TeacherEditPage';
import TeacherDeletePage from './pages/TeacherDeletePage'
import TeacherCreatePage from './pages/TeacherCreatePage'

//Submitted Thesis Pages
import SubmittedPage from './pages/SubmittedPage';
import SubmittedCreatePage from './pages/SubmittedCreatePage';
import SubmittedEditPage from './pages/SubmittedEditPage';


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

        {/* Students */}
        <Route path="/students" element={<StudentPage />} />
        <Route path="/students/edit/:id" element={<StudentEditPage />} />
        <Route path="/students/delete/:id" element={<StudentDeletePage />} />
        <Route path="/students/create/" element={<StudentCreatePage />} />

        {/* Teachers */}
        <Route path="/teachers" element={<TeacherPage />} />
        <Route path="/teachers/edit/:id" element={<TeacherEditPage />} />
        <Route path="/teachers/delete/:id" element={<TeacherDeletePage />} />
        <Route path="/teachers/create/" element={<TeacherCreatePage />} />

        {/* Submitted Theses */}
        <Route path="/theses/submitted" element={<SubmittedPage />} />
        <Route path="/theses/submit" element={<SubmittedCreatePage />} />
        <Route path="/theses/submitted/:id/edit" element={<SubmittedEditPage />} />


     {/* Add other pages here */}
     <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

}

export default App;