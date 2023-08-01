import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
import './SignUp.css'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {

    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    try {
    
      const response = await fetch('http://localhost:5000/api/signup1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = { username, password };
        localStorage.setItem('user', user);
        setErrorMessage('');
        navigate('/Home'); 
      } else {
        setErrorMessage('Failed to register user. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = localStorage.getItem('user1');
    if (existingUser) {
      setErrorMessage('User already exists. Please login instead.');
    } else {
      handleSignUp();
    }
  };

  return (
    <>
     <div className="mega">
        <Navbar1/>
     <div className='login'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='h2' align='center'>SIGN UP</h2>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <label className='label'>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className='label'>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <center>
          <button type='submit'>SignUp</button>
        </center>
      </form>
    </div>
     </div>
    </>
  );
};

export default SignUp;
