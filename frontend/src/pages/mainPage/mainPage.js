import React from 'react';
import { Link } from 'react-router-dom';
import { CheckAuth } from '../../store/checkAuth';

const MainPage = () => {
  CheckAuth();
  return (
    <div>
      <h3>Welcome </h3>
      <Link to="/register">
        <h2>Register</h2>
      </Link>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
    </div>
  );
};

export default MainPage;
