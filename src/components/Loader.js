// src/components/Loader.js
import React from 'react';
import './Loader.css';
import logo from "./movate1.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Company Logo" className="loader-logo" />
    </div>
  );
};

export default Loader;
