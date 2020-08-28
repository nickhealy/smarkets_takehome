import React from 'react'; 
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

const ReturnBtn = () => {
  return (
    <div className='return-btn-container'>
      <Link className='return-btn' id='return-btn' to={'/'}><FaArrowLeft/></Link>
      <span>GO BACK TO EVENTS</span>
    </div>
  )
}

export default ReturnBtn; 