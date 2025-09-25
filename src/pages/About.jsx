import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>About Page</h1>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    </div>
  );
}

export default About;
