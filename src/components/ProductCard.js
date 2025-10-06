import React from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>Rs{product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className={styles.button}>
        Add to Cart
      </button>
    </div>
  );
}
