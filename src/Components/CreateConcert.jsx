import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateConcert = () => {

    const navigate=useNavigate();


    const [concertData,setConcertData]=useState({
        concertName: '',
        artistName: '',
        venue: '',
        concertDate: '',
        ticketPrice: '',
        totalSeats: '',
        bookedSeats: '',
        status: 'active' 
    })
    
    const handleChange=(e)=>{
        setConcertData({...concertData,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let response=await axios.post('http://localhost:8080/create', concertData);
          navigate('/view-concerts');
          alert(response.data);}
          catch(error){
            alert(error.response.data)
          }
    
    
        }
    
        const goback=()=>{
          navigate('/manage-concerts');
        }
    
    

  return (
    <>

<div className="manage-concerts">
      <h1 className='add'>🎶 Add Concerts</h1>
      <p>Upcoming concerts...</p>

      <form className="concert-form" onSubmit={handleSubmit}>
        <input type="text" name="concertName" placeholder="Concert Name" value={concertData.concertName} onChange={handleChange} required />
        <input type="text" name="artistName" placeholder="Artist Name" value={concertData.artistName} onChange={handleChange} required />
        <input type="text" name="venue" placeholder="Venue" value={concertData.venue} onChange={handleChange} required/>
        <input type="date" name="concertDate" value={concertData.concertDate} onChange={handleChange} required/>
        <input type="number" name="ticketPrice" placeholder="Ticket Price" value={concertData.ticketPrice} onChange={handleChange} required/>
        <input type="number" name="totalSeats" placeholder="Total Seats" value={concertData.totalSeats} onChange={handleChange} required />
        <div className='b'>
        <button type="submit">SUBMIT</button>
        <button onClick={goback}>BACK</button>
        </div>
      </form>

      </div>
      
    </>
  )
}

export default CreateConcert
