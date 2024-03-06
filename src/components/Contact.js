import React from 'react'
import './Contact.css'
import Navbar from './Navbar'
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'


const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className='content'>
        <h2 className='headtext'>Contact Us</h2>
        <p className='bodytext'>We're more than happy to hear from you. Please feel free to reach us, and we'll be delighted to assist!</p>
      </div>
      <div className="contact-info">
        <a href="tel:+18028700314">
          <FaPhoneAlt className="icon" /> +18028700314 
        </a>
      </div>
      <div>  
        <a href="/">
          <FaEnvelope className="icon" /> Email: activenetwork@usako.net
        </a>
      </div>
    </div>
  )
}

export default Contact