import React, { useEffect, useState } from 'react'
import './ViewConcerts.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ViewConcerts = () => {
 const[concerts,setConcerts]=useState([]);

 const navigate=useNavigate();

 function goUpdate(concertId){
    navigate (`/update/${concertId}`)
 }
 
 useEffect(()=>{

    async function getConcerts() {
        let response=await axios.get("http://localhost:8080/concerts")
        console.log*(response.data)
        setConcerts(response.data);
    }
    getConcerts();

 },[])


async function goDelete(concertId) {
    let response=await axios.delete(`http://localhost:8080/deleteCon/${concertId}`)
    alert(response.data);
    let response1=await axios.get("http://localhost:8080/concerts")
    setConcerts(response1.data);
}

const goBack=()=>{
  navigate('/manage-concerts')
}

    
  return (
    <>
    
    <div className='view-concerts'>
      <h2>🦋 All Concerts</h2>
      <button className='button' onClick={goBack}>BACK</button>
<div className='cards'>

      {
        concerts.map((c,i)=>
            <ul key={i}>
                <li><strong>Concert Id : </strong>{c.concertId}</li>
                <li><strong>🎶Consert : </strong>{c.concertName}</li>
                <li><strong>🎤Artist : </strong>{c.artistName}</li>
                <li><strong>🏛️Venue : </strong>{c.venue}</li>
                <li><strong>📅Date : </strong>{c.concertDate}</li>
                <li><strong>💰Price : </strong>{c.ticketPrice}</li>
                <li><strong>Total Seats : </strong>{c.totalSeats}</li>
                <li><strong>Booked Seats : </strong>{c.bookedSeats}</li>
                <li><strong>🪑 Available Seats : </strong>{c.totalSeats - c.bookedSeats}</li>
                <li><strong>Status : </strong>{c.status}</li>
                <a href=""><button onClick={()=>{goUpdate(c.concertId)}}>UPDATE</button></a>
                <a href=""><button onClick={()=>{goDelete(c.concertId)}} >DELETE</button></a>
            </ul>
      )}

</div>
      

</div>


      
    </>
  )
}

// onClick={()=>{goUpdate(c.concert_id)}}

export default ViewConcerts
