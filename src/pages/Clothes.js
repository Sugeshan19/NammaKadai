import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './clothes.module.css';

export default function Clothes({ addToCart }) {
  const clothesProducts = products.filter(p => p.category === 'clothes');

  return (
    <>
    <div className={styles.container}>
      <div className={styles.productsSection}>
        <h1 className={styles.title}>Clothes</h1>
        <div className={styles.productsGrid}>
          {clothesProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
