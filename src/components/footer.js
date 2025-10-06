import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className='para'>
      <p>&copy; {new Date().getFullYear()} Namma Kadai. All rights reserved.</p>
      </div>
      <div className="social-icons">
        Instagram
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram className="insta-icon" />
        </a>
        <br />
        <br />
        Facebook
        <a 
          href="https://www.facebook.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <FaFacebook className="fb-icon" />
          </a>
          <br />
          <br />
          Whatsapp
          <a
          href="https://www.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaWhatsapp className='whatsapp-icon' />
          </a>
          <br />
          <br />
          Youtube
          <a 
          href='https://www.youtube.com/'
          target='_blank'
          rel='noopener noreferrer'
          >
            <FaYoutube className='youtube-icon' />
          </a>
        
      </div>
      <div className="footer-text">
        <p>Developed by SUGESHAN S </p>
      </div>
    </footer>
  );
};

export default Footer;
