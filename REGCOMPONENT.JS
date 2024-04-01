import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios

const RegistrationComponent = ({ onRegister, onCancel }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleRegister = async () => {
    if (!username || !email || !name) {
      setError('Please fill in all fields.');
    }  else {
      setError('');
      try {
        const response = await axios.post('http://localhost:8080/user', {
          username,
          email,
          name
        });
        console.log(response.data); 
        navigate('/');
      } catch (error) {
        console.error('Error signing up:', error);
        setError('An error occurred while signing up. Please try again later.');
      }
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (isEmailValid) {
        onRegister({ email, name, username });
        navigate('/home');
      } else {
        alert('Invalid email format');
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
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'url("https://i.pinimg.com/originals/ab/1a/72/ab1a72b33ba99744da40f2932f78fa39.jpg")',
    backgroundSize: 'cover', 
  };

  const logoStyle = {
    width: '150px',
    height: '150px',
    paddingLeft: '115px',  
  };

  return (
    <div style={containerStyle}>
       <img src="https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png" alt="Logo" style={logoStyle} />
      <div style={{ maxWidth: '100%', padding: '10px', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '1.5rem', color: 'black', fontFamily: 'cursive' }}>REGISTRATION FORM</h1>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ width: '80%', marginBottom: '15px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ width: '80%', marginBottom: '15px' }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ width: '80%', marginBottom: '15px' }}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button><br></br>
      </div>
    </div>
  );
};

export default RegistrationComponent;
