// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');
  };

  return (
    <div className="rapper">
      <div className="form-rapper sign-in">
        <form onSubmit={handleLogin}>
        <h2 style={{ color: 'white' }}>Login</h2>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit">Login</button>
          <div className="signUp-link">
           

            <p>
            Don't have an account? {' '}
              <Link to="/SignUp" className="signInBtn-link">
                Sign In
              </Link>
            </p>




          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


