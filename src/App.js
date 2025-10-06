import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import products from './data/products';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; 
import Home from './pages/Home'; 
import styles from './App.module.css';
import Electronics from './pages/Electronics'; 
import Mobiles from './pages/Mobiles';
import Sports from './pages/Sports';
import Clothes from './pages/Clothes';
import Navbar from './components/Navbar';


export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  return (
    <Router>
      <>
      <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
  
          <Route path="/electronics" element={<Electronics cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/mobiles" element={<Mobiles cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/sports" element={<Sports addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/clothes" element={<Clothes addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />} />
  
          <Route path="/shop" element={
            <div className={styles.container}>
              <div className={styles.productsSection}>
                <h1 className={styles.title}>Namma Kadai</h1>
                <div className={styles.productsGrid}>
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                  ))}
                </div>
              </div>
              <Cart cart={cart} removeFromCart={removeFromCart} />
              
            </div>
            
          } />
  
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
        <ToastContainer />

      </>
    </Router>
  );
  
}
