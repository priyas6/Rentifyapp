import React from 'react';
import './HomePage.css'; // Assuming you have a CSS file named HomePage.css for styling
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="home-page-container">
      <h1 className="home-page-heading">Rentify - A Rental Application</h1>
      <div className="button-container">
        <button className="login-button" onClick={()=>navigate("/login")}>Login</button>
        <button className="register-button"onClick={()=>navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Home;
