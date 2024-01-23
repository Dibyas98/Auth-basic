import React, { useRef, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext';
import { Bars } from 'react-loader-spinner'

export default function Login() {
  const [loader,setloader] = useState(false);
  const ctx = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef(),passRef = useRef();
  const handelLogin = async(e)=>{
    setloader(true)
    e.preventDefault();
    try{
      const res=await ctx.login(emailRef.current.value,passRef.current.value);
      ctx.setcurrent(res)
      setloader(false)
      navigate("/dashboard")
    }
    catch(err){
      alert(err.message)
      setloader(false)
    }
  }
  return (
    <div className='login'>
        <form action="" className='login-form' onSubmit={handelLogin}>
            <input ref={emailRef} type="text" placeholder='Email/Username' required  className='input'/>
            <input ref={passRef} type="password" placeholder='password' required className='input'/>
            {loader?<div style={{display:'flex',justifyContent:'center'}}><Bars height='20' /></div>:<input type="submit" value={'login'} className='submit' />}
            
            <Link to='/signup'>Create account</Link>
        </form>
      
    </div>
  )
}
