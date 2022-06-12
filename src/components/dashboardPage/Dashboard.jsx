import React from 'react'
import AsideBar from '../navigation/AsideBar'
import './dashboard.css'
export const Dashboard = () => {
  return (

    <div className='container'>
      <div className='aside'>
        <AsideBar/>
      </div>
      <div className='content'>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}
