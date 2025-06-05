import React, { useState } from 'react'
import'./Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import con2 from '../assets/con1.jpg'

const Register = () => {

    const navigate=useNavigate();

const[formData,setFormData]=useState({
        username:"",
        email:"",
        password:""
    }) 

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

const handleSubmit=async (e)=>{
     e.preventDefault();

     try{
        let response=await axios.post('http://localhost:8080/register',formData)
        alert(response.data)
        navigate('/login')
     }catch(error){
        alert(error.response.Data)
     }
}

const goBack=()=>{
    navigate('/login');
}



  return (
    <>
<button className='button' onClick={goBack}>BACK</button>

  <div className='fle'>
<img src={con2}/>
  
      <div className="register-page">
    <div className="register">
    <h2 className='a'>Music Feast🎶</h2>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            className='last1'
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className='last1'
            required
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className='last1'
            required
          />
          <h3 className='agree'><input type='checkbox' required/>I agree with terms and conditions.</h3>
        </div>
        <button className='r' type="submit">Register  </button>
        
      </form>

    </div>
    
  </div>
  </div>
    </>
  )
}

export default Register
