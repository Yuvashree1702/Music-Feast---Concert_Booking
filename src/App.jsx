import React from 'react'
import Nav from './Components/Nav'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './Components/Register'
import ManageConcerts from './Components/ManageConcerts'
import CreateConcert from './Components/CreateConcert'
import ViewConcerts from './Components/ViewConcerts'
import Update from './Components/Update'
import ViewBookings from './Components/ViewBookings'
import UpdateBooking from './Components/UpdateBooking'
import AdminHome from './Components/AdminHome'
import Home from './Components/UserHome'
import BookForm from './Components/BookForm'
import About from './Components/About'
import Enter from './Components/Enter'
import Footer from './Components/Footer'






const App = () => {
  return (
    <>
     <Nav/>
    
    
    <Routes>
      
      
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/manage-concerts' element={<ManageConcerts/>}/>
      <Route path='/add-concerts' element={<CreateConcert/>}/>
      <Route path='/con' element={<Home/>}/>
      <Route path='/view-concerts' element={<ViewConcerts/>}/>
      <Route path='/update/:concertId' element={<Update/>}/>
      <Route path='/view-bookings' element={<ViewBookings/>}/>
      <Route path='/update-booking/:bookingId' element={<UpdateBooking/>}/>
      <Route path='/bookform' element={<BookForm/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Enter/>}/>

      
    </Routes>
<Footer/>

    </>
  )
}

export default App
