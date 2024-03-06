import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await loginUser(email, password);
      // If login successful, redirect to homepage
      navigate('/wallet');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='cap-container'>
      <div className='h1con'>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='Password'
          name='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' type='submit'>Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>Don't have an account? <Link to='/createaccount'>Sign Up</Link></p>
    </div>
  );
};

export default Login;
