import React from 'react'
import './Successful.css'
import { FaCheckCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Successful = () => {
  return (
    <div className='msg-container'>
        <h1 className='h1con'>
            Successful Transaction!!!
        </h1>
        <FaCheckCircle className='iconCheck'/>
        <div>
            <h2 className='msg-two'>
                Your purchase has been successfully initiated.
            </h2>
        </div>
        <div>
            <h3>
                Please feel free to buy more. 
            </h3>
        </div>
        <div className='goBack'>
            <p>
                Back to <Link to="/wallet">Wallet</Link>
            </p>
        </div>

    </div>
  )
}

export default Successful