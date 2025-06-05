import React, { useEffect, useState } from 'react'
import './View Bookings.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewBookings = () => {

const navigate=useNavigate();

const[bookings,setBookings]=useState([]);

useEffect(()=>{

    async function getBookings() {
        let response =await axios.get("http://localhost:8080/bookings");
        setBookings(response.data)
    }
   getBookings();
},[])

const goBack=()=>{
    navigate('/adminhome');
}

function goUpdateBook(bookingid){
    navigate(`/update-booking/${bookingid}`);
}

  return (
    <>
      <div className='view-bookings'>
      <button className='button' onClick={goBack}>BACK</button>
        <h2>User's Concert-Bookings</h2>
        <table className='booking-table'>
            <thead>
                <tr>
                <th>BOOKING ID</th>
                <th>CUSTOMER NAME</th>
                <th>PHONE NUMBER</th>
                <th>CONCERT ID</th>
                <th>TICKETS</th>
                <th>TOTAL PRICE</th>
                <th>BOOKING STATUS</th>
                <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((b,i)=>
                <tr key={i}>
                     <td>{b.bookingid}</td>
                     <td>{b.customerName}</td>
                     <td>{b.phoneNumber}</td>
                     <td>{b.concertId}</td>
                     <td>{b.numberOfTickets}</td>
                     <td>{b.totalPrice}</td>
                     <td>{b.bookingStatus}</td>
                     <td><button onClick={()=>{goUpdateBook(b.bookingid)}} className='up'>UPDATE</button></td>
                </tr>
                )}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default ViewBookings
