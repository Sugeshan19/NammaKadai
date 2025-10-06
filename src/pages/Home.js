import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Footer from '../components/footerooter'; 
import homeImage from '../assets/home.png';

export default function Home() {
  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          textShadow: '0 0 5px black, 0 0 10px pink, 0 0 20px #fff, 0 0 40px blue',
        }}
      >
        <h1>Welcome to Namma Kadai 🛍️</h1>
        <p>Find the best deals on your favorite products!</p>
        <Link to="/shop">
          <button className="home-button">Start Shopping</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
