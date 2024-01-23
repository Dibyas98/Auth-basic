import React from "react";
import "./screen.css";
import Login from "../Login/Login";
import LogUp from "../Signup/LogUp";
import AuthContext, { useAuth } from "../Auth/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../Dashboard/Dashboard";

export default function Screen() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <Layout></Layout>,
      children:[
       
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:"/signup",
      element:<LogUp></LogUp>
    }
  ])
  const authCtx = useAuth();
  return (
    <AuthContext>
      <div className="screen">
        {/* <Login></Login>
        <LogUp></LogUp> */}
        <RouterProvider router={route}></RouterProvider>
      </div>
    </AuthContext>
  );
}
