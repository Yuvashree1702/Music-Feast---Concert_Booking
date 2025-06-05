import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ManageConcerts.css'


const Update = () => {

    const navigate=useNavigate();
    const { concertId } = useParams();


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

    useEffect(()=>{
        async function Data() {
            let response=await axios.get(`http://localhost:8080/getConcerts/${concertId}`)
            setConcertData(response.data);
        }
        Data();
    },[concertId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let response=await axios.put(`http://localhost:8080/updateCon/${concertId}`, concertData);
          console.log(response.data)
          alert(response.data);
          navigate('/view-concerts');}
          catch(error){
            alert(error.response.data)
          }
        }
    
        const goback=()=>{
          navigate('/view-concerts');
        }


  return (
    <>
<div className="manage-concerts">

    <h2 className='head'>Update Concert</h2>
    <form className="concert-form" onSubmit={handleSubmit}>
        <input type="text" name="concertName" placeholder="Concert Name" value={concertData.concertName} onChange={handleChange} required />
        <input type="text" name="artistName" placeholder="Artist Name" value={concertData.artistName} onChange={handleChange} required />
        <input type="text" name="venue" placeholder="Venue" value={concertData.venue} onChange={handleChange} required/>
        <input type="date" name="concertDate" value={concertData.concertDate} onChange={handleChange} required/>
        <input type="number" name="ticketPrice" placeholder="Ticket Price" value={concertData.ticketPrice} onChange={handleChange} required/>
        <input type="number" name="totalSeats" placeholder="Total Seats" value={concertData.totalSeats} onChange={handleChange} required />
        {/* <input type="number" name="bookedSeats" placeholder="Booked Seats" value={concertData.bookedSeats} onChange={handleChange} required /> */}
        <select name="status" value={concertData.status} onChange={handleChange} required className='status'>
          <option value="active">Active</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <div className='b'>
        <button type="submit">Submit</button>
        <button type='button' onClick={goback}>Back</button>
        
        </div>
    
        </form>
        </div>
      
    </>
  )
}

export default Update
