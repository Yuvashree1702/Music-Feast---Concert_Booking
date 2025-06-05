import React from 'react'
import './AdminHome.css'
import ManageConcerts from './ManageConcerts'
import con1 from '../assets/con1.jpg'
import con2 from '../assets/con2.jpg'
import con3 from '../assets/con3.jpg'

const AdminHome = () => {
  return (
    <>
  
<div className='home'>
  

  <div className='welcome'>
    <h1>🎉 Welcome Admin!</h1>
    <p> Manage concerts and bookings... Good Work🎤</p>
  </div>

  <div className="actions">
        <a href="/manage-concerts">
          <button className="admin1-btn">🎼 Manage Concerts</button>
        </a>
        <a href="/view-bookings">
          <button className="admin1-btn">📋 View Bookings</button>
        </a>
        <a href="/Home">
          <button className="admin1-btn logout">🚪 Logout</button>
        </a>
      </div>

      <div className="gallery">
               <img src={con1} />
               <img src={con2} />
               <img src={con3} />
             </div>
      </div>
<div className='main-content'>
<ManageConcerts/>
</div>
      
    </>
  )
}

export default AdminHome
