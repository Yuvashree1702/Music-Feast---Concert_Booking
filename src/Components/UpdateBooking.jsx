import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UpdateBooking.css'

const UpdateBooking = () => {

const { bookingId } = useParams();
const navigate=useNavigate();

const[booking,setBooking]=useState({
    customerName: '',
    phoneNumber: '',
    numberOfTickets: '',
    totalPrice: '',
    concertId: '',
    bookingStatus: ''
})

useEffect(()=>{
     
    async function Bookings() {
        let response=await axios.get(`http://localhost:8080/getBookings/${bookingId}`)
        setBooking(response.data)
    }
    Bookings();
   },[bookingId])

   const handleChange=(e)=>{
        setBooking({...booking,bookingStatus: e.target.value})
   }

   const handleSubmit = async (e) => {
    e.preventDefault();
    let response=await axios.put(`http://localhost:8080/upbooking/${bookingId}?status=${booking.bookingStatus}`);
    console.log(response.data)
    alert('Booking status updated!');
    navigate('/view-bookings');
  };



  return (
    <>
     <div className="update-booking">
      <h2>Update Booking Status</h2>
      <form onSubmit={handleSubmit}>
        <p><strong>Customer:</strong> {booking.customerName}</p>
        <p><strong>Concert ID:</strong> {booking.concertId}</p>
        <p><strong>Tickets:</strong> {booking.numberOfTickets}</p>
        <p><strong>Total:</strong> ₹{booking.totalPrice}</p>
        <select value={booking.bookingStatus} onChange={handleChange}>
          <option value="PENDING">PENDING</option>
          <option value="CONFIRMED">CONFIRMED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
        <br /><br />
        <button type="submit">Update</button>
        <button type="button" onClick={() => navigate('/view-bookings')}>Back</button>
      </form>
    </div> 
    </>
  )
}

export default UpdateBooking
