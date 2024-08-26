import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Home() {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <div className='overflow-y-auto w-4/5'>
            <Outlet/>
        </div>
      
    </div>
  )
}

export default Home
