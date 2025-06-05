import React, { useState } from 'react'
import './Login.css'
import back from '../assets/back.jpg'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();

    //state for inputs

    const[formData,setFormData]=useState({
        email:"",
        password:""
    })    

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

     //form submission function
const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
        await axios.post('http://localhost:8080/login',formData)
        
        navigate('/adminhome')
    }
    catch(error){
        
        alert(error.response.data)
    }
}  

const goBack=()=>{
    navigate('/Home');
}



  return (
    <>
    <button className='button' onClick={goBack}>BACK</button>
<div className='login-page'>
    
<div className='one'>
<div className='pic'>
<img src={back}/>
</div>
<div className='login'>
    <h2 className='wel'>Welcome Back 😎</h2>
    
    <form onSubmit={handleSubmit}>
    <div>
        <label>Email : </label><br/>
        <input type="email" name='email' placeholder='Enter Email' value={formData.email} onChange={handleChange} className='box' required/>
    </div>
    <div>
        <label>Password : </label><br/>
        <input type='password' name='password' placeholder='Your Password' value={formData.password}
         onChange={handleChange} className='box' required/>
    </div>

 <div className='last'>
 <a href=''><input type='checkbox' />Forget Password ?</a>
 </div>

        <button type='submit' className='log'>Login</button>
        <h3>Don't have an account? <a href='/register'>Register Now</a></h3>

    </form>
</div>
</div>

</div>
    </>
  )
}

export default Login
