import React from 'react'
import { useAuth } from '../Auth/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export default function Layout() {
  const ctx = useAuth()
  if (Object.keys(ctx.current).length === 0) {
    return <Navigate to='/login'></Navigate>
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  )
}
