import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import DoctorsStaffDirectory from './Components/doctorsStaffDirectory'
import Appointments from './Components/Appointments';
import Emergency from './Components/Emergency'
import Login from './Components/Login';
import SignUp from './Components/SignUp';


const App = () => {
  return (
    <div>
      <Routes>
         <Route path = "/" element={<Login/>} />
         <Route path = "/SignUp" element={<SignUp/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Emergency" element={<Emergency/>} />
        <Route path="/DoctorsStaffDirectory" element={<DoctorsStaffDirectory/>} />
        <Route path="Appointments" element={<Appointments/>} />
      </Routes>
    <Footer/>
    </div>
  );
};

export default App;
