import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './mobiles.module.css';

export default function Mobiles({ addToCart }) {
  const mobileProducts = products.filter(p => p.category === 'mobiles');

  return (
    <>
    <div className={styles.container}>
      <div className={styles.productsSection}>
        <h1 className={styles.title}>Mobiles</h1>
        <div className={styles.productsGrid}>
          {mobileProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
