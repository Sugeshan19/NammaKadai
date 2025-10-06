import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.list}>
          {cart.map((item, index) => (
            <li key={index} className={styles.item}>
              <span>{item.name}</span>
              <span>Rs{item.price.toFixed(2)}</span>
              <button className={styles.remove} onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.total}>Total: Rs{total}</div>
      {cart.length > 0 && (
        <Link to="/checkout">
          <button className={styles.checkout}>Checkout</button>
        </Link>
      )}
    </div>
  );
}
