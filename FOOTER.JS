import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Uber Eats. All rights reserved.<br></br>
          Copyright info<br></br>
          Connect with us in social media<br></br>
          About us<br></br>
          Privacy Policy<br></br>
          FAQ<br></br>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
