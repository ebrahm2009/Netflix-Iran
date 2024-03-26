import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar'
import Signup from './Pages/Signup'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App