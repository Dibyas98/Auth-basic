import React from 'react'
import './dashboard.css'
import { useAuth } from '../Auth/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate()
  const ctx =useAuth();
  const handelLogout = () =>{
    ctx.setcurrent({});
    navigate("/login")


  }
  return (
    <div className='dashboard'>
      <h1>You Log in Now</h1>
      <button className='button-7' onClick={handelLogout}>logout</button>
    </div>
  )
}
