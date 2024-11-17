import React, { useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmpDashboard from './components/dashboard/EmpDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

 const [user, setUser] = useState(null)


  return (
    <>
   {  !user ?  <Login/> : ''}
    {/* <EmpDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App



