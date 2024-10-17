import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactList from './components/Update'
import './bootstrap.min.css';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/contact" element={<ContactList />} />
      </Routes>
    </>
  )
}

export default App
