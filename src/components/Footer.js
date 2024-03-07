import React from 'react'
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>S<span className='primary'>K</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/contact'>Contact Us</a>
                        <a href='/contact'>Help Center</a>
                        <a href='/contact'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='activenetwork@usako.net'><FaEnvelope className='icon'/></a>
                        <a href='+18028700314 '><FaPhoneAlt className='icon'/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
