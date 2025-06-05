
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './BookForm.css'

const BookForm = () => {

const navigate=useNavigate();

const location = useLocation();
const concert = location.state?.concert;

const [bookForm,setBookForm]=useState({
    customerName:'',
    phoneNumber:'',
    numberOfTickets:''
})

const handleChange=(e)=>{
    setBookForm({...bookForm,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
    e.preventDefault();
    try{

        const bookingDetails = {
            customerName: bookForm.customerName,
            phoneNumber: bookForm.phoneNumber,
            numberOfTickets: bookForm.numberOfTickets,
            concertId: concert.concertId 
          };

          console.log(bookingDetails)

          let response = await axios.post('http://localhost:8080/book', bookingDetails);
          let message = response.data;
          
          if (message === "Booking successful") {
            alert("Booking successful!");
            navigate('/Con');
          }
        
    }catch(error){
        if (error.response) {
      alert(error.response.data);
    } else {
      alert("Something went wrong!");
    }
    }
}


const goBack=()=>{
    navigate('/Con')
}

  return (
    <>
      <div className='book'>
      <h1 className='form'>Book Your Concert</h1>
      <p className='subtitle'>Get Ready for Amazing 6Pm Evening with MUSIC FEAST🎶....</p>
      </div>
<div>
    <form className='bookform' onSubmit={handleSubmit}>
    
      <input 
      type="text" 
      placeholder="Your Name" 
      name="customerName"
      onChange={handleChange}
      required
    />
    <input 
      type="tel" 
      placeholder="Phone Number"
      name="phoneNumber" 
      onChange={handleChange}
      required
    />
    <input 
      type="number" 
      placeholder="Number of Tickets" 
      name="numberOfTickets"
      onChange={handleChange}
      required
    />
 <div className='bgroup'>   
    <button type='submit'>Submit Booking</button>
    <button onClick={goBack}>Cancel</button>
</div>
    </form>
  </div>

    </>
  )
}

export default BookForm
