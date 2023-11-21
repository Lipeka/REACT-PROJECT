import React, { useState } from 'react';
import LoginComponent from './components login/LoginComponent';
import RegistrationComponent from './components login/components regpage/RegistrationComponent';
const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);//initial state in login page
  const handleLogin = (credentials) => {
    console.log('Logging in with:', credentials);//to handle the login input
  };
  const handleRegister = (registrationData) => {
    console.log('Registering with:', registrationData);//to handle registration input
  };
  const togglePage = () => {
    setIsLoginPage(!isLoginPage);//page toggles from log to reg page
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoginPage ? (
        <LoginComponent onLogin={handleLogin} />//if in login page will handle log input
      ) : (
        <RegistrationComponent onRegister={handleRegister} />//if in reg page will handle reg input
      )}
      <p>{isLoginPage ? "Don't have an account?" : 'Already have an account?'}</p>
      <button onClick={togglePage}>{isLoginPage ? 'Register' : 'Login'}</button>
//button to toggle between log and reg page 
    </div>
  );
};
export default App;
