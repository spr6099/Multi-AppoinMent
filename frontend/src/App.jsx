import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Login from './pages/Login'

import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:speciality' element={<Services />} />
        <Route path='/login' element={<Login />} />

        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
    </div>
  )
}

export default App