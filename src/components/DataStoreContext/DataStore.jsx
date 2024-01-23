import React, { createContext, useState } from 'react'
import LogUp from '../Signup/LogUp';

export const Data = createContext();
export default function DataStore({ children }) {
    const [logupData, setlogupData] = useState({
        First: '',
        Last:'',
        Email:'',
        Password:'',
        Mobile:'',
        DOB:'',
        Gender:''
    })
    


    return (
        <Data.Provider value={{ handelSignUpData, setlogupData }}>
            {children}
        </Data.Provider>
    )
}

