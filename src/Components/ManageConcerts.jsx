
import './ManageConcerts.css'

import { useNavigate } from 'react-router-dom'
import cover1 from '../assets/cover1.jpg'
import cover2 from '../assets/cover2.jpg'
import cover3 from '../assets/cover3.jpg'

const ManageConcerts = () => {

  const navigate=useNavigate();
    const handleViewConcerts = () => {
      navigate('/view-concerts');
    };
  
    const handleCreateForm = () => {
      navigate('/add-concerts');
    };

    const handleback = () => {
      navigate('/adminhome');
    };


  return (
    <>
    <div className='first'>
       <div className="action">
       <h1>🎶 Manage Concerts</h1>
       <p>Select an action below:</p>
       <div>
       <button className="admin-btn two" onClick={handleViewConcerts}>🎙️ View Concerts</button>
      
      <button className="admin-btn two" onClick={handleCreateForm}>📋 Create Concerts</button>

      <button className="admin-btn two" onClick={handleback}> Back</button>
    
        </div>
      </div>
      <div className='pic1'>
      <img src={cover1} alt='cover1' className='cover1'/>
      <img src={cover2} alt='cover2' className='cover2'/>
      <img src={cover3} alt='cover3' className='cover3'/>
      </div>

      

    </div>
    </>
  )
}

export default ManageConcerts
