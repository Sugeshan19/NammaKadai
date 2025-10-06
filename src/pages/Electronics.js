import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './Electronics.module.css';


export default function Electronics({ addToCart }) {
  const electronicsProducts = products.filter(product =>
    product.category === 'electronics'
  );

  return (
    <>
        <div className={styles.container}>
          <h1 className={styles.heading}>Electronics</h1>
          <div className={styles.grid}>
            {electronicsProducts.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))
            }
          </div>
        </div>
      
    </>
  );
}
