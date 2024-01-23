import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import {auth} from './firebase'
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"

const AuthCon = createContext({});
export const useAuth= ()=>{
    return useContext(AuthCon);
}
export default function AuthContext({children}) {


    
    const [current ,setcurrent]= useState({});
    
    const auth =getAuth();
    const signup = ( email, password)=>{
        return  createUserWithEmailAndPassword(auth, email, password);
    };
    const login=(email,password) =>{
        return signInWithEmailAndPassword (auth,email,password);
    }

    const authData ={
        signup,
        login,
        setcurrent,
        current
    }
  return (
    <>
    <AuthCon.Provider value={authData}>
        {children}
    </AuthCon.Provider>
    </>
  )
}
