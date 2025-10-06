import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './sports.module.css';
export default function Sports({ addToCart }) {
  const sportsProducts = products.filter(p => p.category === 'sports');

  return (
    <>
    <div className={styles.container}>
      <div className={styles.productsSection}>
        <h1 className={styles.title}>Sports</h1>
        <div className={styles.productsGrid}>
          {sportsProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
