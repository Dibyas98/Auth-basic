import React, { useContext, useRef,useState } from "react";
import "./logup.css";
import { useAuth } from "../Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Bars } from 'react-loader-spinner'

export default function LogUp() {
  const emailref = useRef();
  const passRef = useRef();
  const comformPassRef = useRef();
  const autctx = useAuth();
  const [loader,setloader] = useState(false);
 const navvigate = useNavigate()

  const handelDetail= async (e)=>{
    
    e.preventDefault();
    if(passRef.current.value !== comformPassRef.current.value){
      alert('Comfirm password and password is not same');
      return
    }
    setloader(true)
    try{
      const res =await autctx.signup(emailref.current.value, passRef.current.value)
      setloader(false);
      autctx.setcurrent(res)
      navvigate('/dashboard')
      
    }catch(err){
      console.log(err);
    }
    setloader(false)
    
  }
  
  return (
    <div className="logup">
      <form action="" className="logup-form" onSubmit={handelDetail}>
        {/* <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <input type="text" placeholder="First Name" className="logup-input" required onChange={(e)=>{handelDetail(e,'first')}}/>
          <input type="text" placeholder="Last Name" className="logup-input" required/>
        </div> */}
        <input ref={emailref} type="email" placeholder="email" className="logup-input" required/>
        <input ref={passRef} type="password" name="" id='pass' className="logup-input" placeholder="password" required minLength={6}/>
        <input ref={comformPassRef} type="password" name="" id="con" className="logup-input" placeholder="confirm password" minLength={6}  required/>
        {/* <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Mobile Number"
            className="logup-input"
          />
          <label htmlFor="">Date of Birth</label>
          <input type="date" placeholder="" />
        </div>
        <select name="gender" id="" className="logup-input" required>
          <option value="male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>*/}
        {loader?<div style={{display:'flex',justifyContent:'center'}}><Bars height='20' /></div>:<input type="submit" value={'Create Account'} className='submit' />}
        <Link to='/login'>Already have</Link> 
      </form>
    </div>
  );
}
