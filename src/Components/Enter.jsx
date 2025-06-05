import React from 'react'
import './Enter.css'
import con1 from '../assets/con1.jpg'
import con2 from '../assets/con2.jpg'
import con3 from '../assets/con3.jpg'

const Enter = () => {
  return (
    <>
    <div className='concert-back'>
        <h1>Welcome to MUSIC FEAST🦋🎼</h1>
        <p>"why not just live in the moment, especially if it has a Good beat?"--- Goldie Hawn</p>
        <h3>BOOK A CONCERT</h3>
    <div className='concert-pic'>
        <img src='https://apicms.thestar.com.my/uploads/images/2024/12/03/3049511.jpg'/>
        <img src='https://timesofindia.indiatimes.com/photo/msid-76281233/76281233.jpg?resizemode=4'/>
    </div>
    </div>
      
      <div>
      <h2>Why Music Feast?</h2>
         <ul>
           <li>🎤 No login required – Easy booking</li>
           <li>🎶 Concerts for every mood</li>
           <li>📱 User-Friendly</li>
           <li>🎫 Instant booking confirmation</li>
         </ul>

      </div>

      <h2>Moments from Past Events 📸</h2>
       <div className="gallery">
         <img src={con1} />
         <img src={con2} />
         <img src={con3} />
       </div>

    </>
  )
}

export default Enter
