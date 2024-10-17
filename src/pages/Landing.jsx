import React, { useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const nav = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      nav('/contact')
    }, 5000)
  }, [])

  return (
    <>
      <div className='an1'>
        <div className="text-container">
          <span className="main-text">CRUD</span>
          <div className="sub-text">
            <span>CREATE</span>
            <span>READ</span>
            <span>UPDATE</span>
            <span>DELETE</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing

