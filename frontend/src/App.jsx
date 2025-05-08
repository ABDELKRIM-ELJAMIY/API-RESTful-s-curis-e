import React from 'react'
import Loging from './pages/Loging'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedPage from './pages/ProtectedPage'
function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />
    <Route path="/protected" element={<ProtectedPage />} />
      <Route path="/login" element={<Loging />} />
      <Route path="/register" element={<Register />} />
  </Routes>
  )
}

export default App
