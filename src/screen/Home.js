import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleRegisterClick = () => {
    history.push('/register');
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <button onClick={handleRegisterClick}>Go to Register</button>
    </div>
  );
};

export default Home;
