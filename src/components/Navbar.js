import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Namma Kadai</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/shop">Home</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/clothes">Clothes</Link></li>
        <li><Link to="/mobiles">Mobiles</Link></li>
        <li><Link to="/checkout" className={styles.cart}>🛒 Cart</Link></li>
      </ul>
    </nav>
  );
}
