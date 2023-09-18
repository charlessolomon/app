import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import StatCollection from '../components/dashboard/StatCollection'
import './css/Dashboard.css'

function Dashboard() {
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {

    console.log("==================");
    console.log("Current User", user);
    console.log("==================");
    
  }, [user])
  

  return (
    <div className='Dashboard'>
      <StatCollection/>
    </div>
  )
}

export default Dashboard