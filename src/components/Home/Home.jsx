import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='container1'>
      <img src="./images//hero.png" alt="Hero" />
      <div className='overlay'>
        <h1 className='heading'>Explore the world with Us</h1>
        <p className='para'>Discover amazing places at exclusive deals</p>
        <button className="center-button">Get Started</button>

      </div>
    </div>
  );
}

export default Home;
