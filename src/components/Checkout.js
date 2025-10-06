import React from 'react';
import styles from './Checkout.module.css';

export default function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className={styles.checkoutContainer}>
        <h1 className={styles.heading}>Checkout Page</h1>
        <ul className={styles.itemsList}>
          {cart.map((item, i) => (
            <li key={i} className={styles.item}>
              <span>{item.name}</span>
              <span>Rs{item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className={styles.total}>Total: Rs{total}</div>
        <button className={styles.placeOrderBtn}>Place Order</button>
    </div>
  );
}
