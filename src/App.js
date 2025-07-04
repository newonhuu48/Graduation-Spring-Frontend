import React, { useState, useEffect } from 'react';
import LoginForm from 'components/LoginForm';


//General Pages
import IndexPage from 'pages/IndexPage';
import LoginPage from 'pages/LoginPage';

//Student Pages
import StudentPage from 'pages/students/StudentPage';
import StudentEditPage from 'pages/students/StudentEditPage';
import StudentDeletePage from 'pages/students/StudentDeletePage'
import StudentCreatePage from 'pages/students/StudentCreatePage'

//Teacher Pages
import TeacherPage from 'pages/teachers/TeacherPage';
import TeacherEditPage from 'pages/teachers/TeacherEditPage';
import TeacherDeletePage from 'pages/teachers/TeacherDeletePage'
import TeacherCreatePage from 'pages/teachers/TeacherCreatePage'

//Submitted Thesis Pages
import SubmittedPage from 'pages/submitted/SubmittedPage';
import SubmittedCreatePage from 'pages/submitted/SubmittedCreatePage';
import SubmittedEditPage from 'pages/submitted/SubmittedEditPage';

//Approved Thesis Pages
import ApprovedPage from 'pages/approved/ApprovedPage';
import DefendedCreatePage from 'pages/approved/DefendedCreatePage'; //Accessible from Approved View

//Defended Thesis Page
import DefendedPage from 'pages/defended/DefendedPage';
import DefendedEditPage from 'pages/defended/DefendedEditPage';
import DefendedDeletePage from 'pages/defended/DefendedDeletePage';


//Student View
//Thesis
import StudentThesisPage from 'pages/thesis/StudentThesisPage';
import StudentSubmitThesisPage from 'pages/thesis/StudentSubmitThesisPage';



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


  if (!claims || (Date.now() > claims) ) {
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

        {/* Approved Theses*/}
        <Route path="/theses/approved" element={<ApprovedPage />} />
        <Route path="/theses/approved/:id/defend" element={< DefendedCreatePage />} />

        {/* Defended Theses*/}
        <Route path="/theses/defended" element={<DefendedPage />} />
        <Route path="/theses/defended/:id/edit" element={<DefendedEditPage />} />
        <Route path="/theses/defended/:id/delete" element={< DefendedDeletePage />} />


        {/* Student View */}
        {/* Thesis Info and Upload */}
        <Route path="/theses/student/my-thesis" element={<StudentThesisPage />} />
        <Route path="/theses/student/submit" element={<StudentSubmitThesisPage />} />


     {/* Add other pages here */}
     <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

}

export default App;