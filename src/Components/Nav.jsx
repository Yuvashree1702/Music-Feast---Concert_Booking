import React from 'react'
import violin from '../assets/violin.jpg'
import './Nav.css'


const Nav = () => {
  return (
    <>


 <div className='align1'>
<div className='align2'>
    <img src={violin} alt='logo' className='logo'/>

    <div>
    <h1>Music Feast</h1>
    <h3>"Feel the Beat, Move Your Feet"</h3>
    </div>
</div>

    <ul className='list'>
        <a href='/home'><li>Home</li></a>
        <a href='/about'><li>About Us</li></a>
        <a href='/con'><li>Concerts</li></a>
        <a href="/login"><li>Admin</li></a>
    </ul>
</div>
    </>
  )
}

export default Nav
