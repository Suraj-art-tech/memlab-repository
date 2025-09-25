import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login Page</h1>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

export default Login;
