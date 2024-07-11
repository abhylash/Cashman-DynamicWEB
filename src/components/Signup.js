import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import '../styles/Signup.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    const newUser = {
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      password,
    };
  
    try {
      const response = await axios.post('http://localhost:5004/signup', newUser);
      console.log(response.data);
      alert('User registered successfully');
  
      setUsername('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setDateOfBirth('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (error) {
      console.error('Error registering user:', error);
      console.log('Error response:', error.response);
      if (error.response && error.response.data === 'Email already exists') {
        setError('Email already exists');
      } else if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('Failed to register user');
      }
    }
  };
  

  return (
    <div className="wapper">
      <div className="form-wapper sign-up">
        <form onSubmit={handleSignUp}>
          <h2 style={{ color: 'white' }}>Signup</h2>
          <div className="input-group">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <label>First Name</label>
          </div>
          <div className="input-group">
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <label>Last Name</label>
          </div>
          <div className="input-group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <label>Phone Number</label>
          </div>
          <div className="input-group">
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>Password</label>
          </div>
          <div className="input-group">
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <label>Confirm Password</label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Sign Up</button>
          <div className="signIn-link">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="signInBtn-link">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
