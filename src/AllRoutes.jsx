import React from 'react';
import {Routes , Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

const AllRoutes = () => {
  return (
    <Routes>
     <Route  path ='/' element={<Home/>}/>
     <Route  path ='/signin' element={<Signin/>}/>
     <Route  path ='/signup' element={<Signup/>}/>
     <Route  path ='/registrationpage' element={<RegistrationPage/>}/>

    </Routes>
  )
}

export default AllRoutes