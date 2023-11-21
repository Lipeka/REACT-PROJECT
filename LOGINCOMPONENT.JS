import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginComponent.css';

const LoginComponent = ({ onLogin, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');//components such as email,password,login,cancel introduced

  const handleLogin = () => {
    if (email && password) {
      onLogin({ email, password });
    } else {
      console.error('Invalid login credentials');//handles the login input checks condition and shows error if any
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }//to use cancel button
    
  };
  const backgroundImageStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundcolor:'black'
  };//styling logo

  return (
    <div style={backgroundImageStyle}>
      <img src="https://logodix.com/logo/1663041.jpg" alt="Logo" style={{ width: '180px', height: '150px', marginBottom: '20px' }} />
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '8px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',backgroundImage:'url("https://i.pinimg.com/originals/ab/1a/72/ab1a72b33ba99744da40f2932f78fa39.jpg")'}}>
    <h1 style={{ fontSize: '1.5rem', marginBottom: '30px' ,color:'black',fontFamily:'cursive'}}>LOGIN</h1>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ width: '80%', marginBottom: '15px' ,color:'white'}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ width: '80%', marginBottom: '15px' ,color:'white'}}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Submit
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
    </div>
  );
};
//we created textboxes for input and buttons for operations we have styled them and added a logo in this function
export default LoginComponent;
