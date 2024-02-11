// name: kush patel
// student number: 8930000
// section: 4
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GoogleProductList from './GoogleProductList';
import YourCart from './YourCart';
import YourProfile from './YourProfile';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ shippingAddress: '' });

  const addToCart = (productId) => {
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const productToAdd = products.find(product => product.id === productId);
      if (productToAdd) {
        setCart([...cart, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const finalizePurchase = () => {
    setCart([]);
    alert('Purchase finalized!');
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const products = [
    { id: 1, name: 'Google Pixel 8', image: 'pixel8image.jpg', price: 699 },
    { id: 2, name: 'Google Pixel 8 Pro', image: 'Pixel8proimage.jpg', price: 549 },
    { id: 3, name: 'Google Pixel watch 2', image: 'pixelwatch2.jpg', price: 359 },
    { id: 4, name: 'Google Pixel Buds Pro', image: 'googlebuds.jpg', price: 259 },
    { id: 5, name: 'Google Chromebook', image: 'chromebook.jpg', price: 1599 },
    { id: 6, name: 'Google Charger', image: 'googlecharger.jpg', price: 35 }

  ];

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div> <h1>Google Shop</h1>
          </div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex gap-4">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/YourCart" className='nav-link'>Your Cart</Link>
            <Link to="/YourProfile" className='nav-link'>Profile</Link>
          </nav>

        </header>
        <Routes>
          <Route path="/" element={<GoogleProductList addToCart={addToCart} products={products} />} />
          <Route path="/Yourcart" element={<YourCart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} finalizePurchase={finalizePurchase} />} />
          <Route path="/YourProfile" element={<YourProfile user={user} updateUser={updateUser} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;