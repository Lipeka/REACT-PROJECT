import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './RegistrationComponent.css';

const RegistrationComponent = ({ onRegister, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (name && email && password && confirmPassword === password) {
      
      onRegister({ name, email, password });
    } else {
     
      console.error('Invalid registration data');
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  const backgroundImageStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundcolor:'black'
  };


  return (
    <div style={backgroundImageStyle}>
      <img src="https://logodix.com/logo/1663041.jpg" alt="Logo" style={{ width: '180px', height: '150px', marginBottom: '20px' }} />
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '8px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',backgroundImage:'url("https://wallpaperaccess.com/full/1704068.jpg")'}}>
    <h1 style={{ fontSize: '1.5rem', marginBottom: '30px' ,color:'black',fontFamily:'cursive'}}>REGISTRATION</h1>
      
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ width: '80%', marginBottom: '15px' ,}}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ width: '80%', marginBottom: '15px' ,}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ width: '80%', marginBottom: '15px' ,}}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ width: '80%', marginBottom: '15px' ,}}
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Submit
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
    </div>
  );
};

export default RegistrationComponent;
