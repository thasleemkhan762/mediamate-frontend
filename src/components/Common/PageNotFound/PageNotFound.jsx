import React from 'react'
import "./p.css"
import { useNavigate } from 'react-router-dom'


function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='body-div'>
      404 Page Not Found
      <button onClick={() => navigate('/user/login')} className='btn btn-outline-primary'>Login</button>
    </div>
  )
}

export default PageNotFound
