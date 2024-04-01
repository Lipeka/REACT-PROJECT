import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import './LoginComponent.css'; // Assuming you have a CSS file for LoginForm
const LoginComponent = ({ onLogin, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = () => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;
    if (isEmailValid && isPasswordValid) {
      onLogin({ email, password });
      navigate('/home');
    } else {
      if (!isEmailValid) {
        alert('Invalid email');
      }
      if (!isPasswordValid) {
        alert('Password should be at least 6 characters long');
      }
    }
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '7px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'url("https://i.pinimg.com/originals/ab/1a/72/ab1a72b33ba99744da40f2932f78fa39.jpg")',
    backgroundSize: 'cover',
  };
  function logoStyle() {
    return {
      width: '150px',
      height: '150px', 
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    };
  }
  return (
    <div style={containerStyle}>
      <img src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png"alt="Logo" style={logoStyle()} />
      <div style={{ maxWidth: '100%', padding: '10px', borderRadius: '10px'}}>
        <h1 style={{ fontSize: '1.5rem', color: 'black', fontFamily: 'cursive' ,textAlign: 'center'}}>LOGIN FORM</h1>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ width: '80%', marginBottom: '15px', color: 'black' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ width: '80%', marginBottom: '15px', color: 'black' }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/><br></br>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button><br></br>
        <div className='RegComponent'>
  <Link to="/register" style={{ color: 'black', fontWeight: 'bold' }}>Don't have an account? Register</Link>
</div>

      </div>
    </div>
  );
};
export default LoginComponent;
