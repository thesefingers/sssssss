import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate('/')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className='cap-container'>
        <div className='h1con'>
          <h1>Sign Up!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            name='email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            name='password'
            type="password"
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
        <p>Already have an account? <Link to='/'>Login</Link></p>
      </div>
    </div>
  );
};

export default CreateAccount;
