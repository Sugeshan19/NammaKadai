import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Footer from '../components/footer'; 

export default function Home() {
  return (
    <>
     
      <div className="home-container">
        <h1>Welcome to Namma Kadai 🛍️</h1>
        <p>Find the best deals on your favorite products!</p>
        <Link to="/shop">
          <button className="home-button">Start Shopping</button>
        </Link>
      </div>
      <div>
          <Footer /> 
        </div>

    </>
  );
}
