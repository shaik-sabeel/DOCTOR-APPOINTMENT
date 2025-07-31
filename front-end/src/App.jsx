import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar />
    <Routes>

      <Route path = '/' element={<Home/>}/>
      <Route path = '/about' element={< About />}/>
      {/* <Route path = '/appointment' element={< Appointment />}/> */}
      <Route path = '/appointment/:docId' element={< Appointment />}/>
      <Route path = '/contact' element={< Contact />}/>
      <Route path = '/doctors' element={< Doctors />}/>
      <Route path = '/doctors/:speciality' element={< Doctors />}/>
      <Route path = '/Login' element={< Login />}/>
      <Route path = '/my-appointment' element={< MyAppointment />}/>
      <Route path = '/my-profile' element={< MyProfile />}/>

    </Routes>
    </div>
  )
}

export default App
