import React from 'react';
import pic1 from './pic1.png';
import './HomePage.css';

const HomePage = () => {
  return (
    <section>
       
      <div className="home-container">
        <h1 className="home-header h1">Welcome to Our Pet Care Management System</h1>
        <img src={pic1} alt="Slide 1" className="image-slide" />

        <div className="cards-container">
        
         
        </div>
      </div>
    </section>
  );
};

export default HomePage;
