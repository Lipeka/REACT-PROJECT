import React, { useState } from 'react';
import LoginComponent from './components login/LoginComponent';
import RegistrationComponent from './components login/components regpage/RegistrationComponent';
const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const handleLogin = (credentials) => {
    console.log('Logging in with:', credentials);
  };
  const handleRegister = (registrationData) => {
    console.log('Registering with:', registrationData);
  };
  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoginPage ? (
        <LoginComponent onLogin={handleLogin} />
      ) : (
        <RegistrationComponent onRegister={handleRegister} />
      )}
      <p>{isLoginPage ? "Don't have an account?" : 'Already have an account?'}</p>
      <button onClick={togglePage}>{isLoginPage ? 'Register' : 'Login'}</button>
    </div>
  );
};
export default App;
