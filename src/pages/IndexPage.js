import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//Components
import HeaderNavbar from    '../components/HeaderNavbar';
import UserInfo     from    '../components/index/UserInfo';
import HeroSection  from    '../components/index/HeroSection';
import IndexNavbar  from    '../components/index/IndexNavbar';
import Footer       from    '../components/index/Footer';

//Pages for Routing
import StudentPage  from    './StudentPage';
//Add more later

import api from '../api/axios';


function IndexPage({ claims, onLogout }) {

    return (
        <div>
          <HeaderNavbar />
          <UserInfo claims={claims} onLogout={onLogout} />
          <HeroSection/>
          <IndexNavbar />

          <Routes>
            <Route path="index" element={<IndexPage />} />

            <Route path="students" element={<StudentPage />} />
            //More here later...
          </Routes>

          <Footer />
        </div>
    );
}

export default IndexPage;