import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';

const Login = () => {
  const [userInputUsername, setUserInputUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!userInputUsername || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/login1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userInputUsername,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token; 
        localStorage.setItem('token', token);
        setErrorMessage('');
        navigate('/Home'); 
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
   <>
   <div className="mega">
     <Navbar1/>
   <div className='login'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='h2' align='center'>LOGIN</h2>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <label className='label'>
          Username: <br />
          <input type='text' value={userInputUsername} onChange={(e) => setUserInputUsername(e.target.value)} />
        </label>

        <label className='label'>
          Password: <br />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <center>
          <button type='submit'>Login</button>
        </center>
      </form>
    </div>
   </div>
   </>
  );
};

export default Login;
