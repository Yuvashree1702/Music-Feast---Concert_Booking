import React, { useEffect, useState } from 'react'
import './UserHome.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [concerts,setConcerts]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{

    async function getConcerts() {
      let response = await axios.get("http://localhost:8080/user/concerts");
        console.log(response.data)
        setConcerts(response.data);
    }
    getConcerts();

 },[])

 const handleBookNow = (concert) => {
  navigate('/bookForm', { state: { concert } });
};

const goBack=()=>{
  navigate('/Home')
}


  return (
    <>
     <div className='ba'>
     <button className='button' onClick={goBack}>BACK</button>
     </div>
     
     <div>
     
     <h1 className='t'>Concerts Available🎶💃</h1>
     
     <div className='l'>
     {
        concerts.map((c,i)=>
            <div key={i}>
                <p><strong>{c.concertName}</strong></p>
                <p><strong>🎤Artist : </strong>{c.artistName}</p>
                <p><strong>🏛️VENUE :</strong> {c.venue}</p>
                <p><strong>📅DATE :</strong> {c.concertDate}</p>
                <p><strong>🕝Time :</strong> 6 Pm</p>
                <p><strong>💰Price :</strong> ₹{c.ticketPrice}</p>
                <button onClick={() => handleBookNow(c)}>Book Now</button>
            </div>
      )}

      
     </div>
     </div>
     

      
    </>
  )
}

export default Home
